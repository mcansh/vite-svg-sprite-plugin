import crypto from "node:crypto";
import fsp from "node:fs/promises";
import path from "node:path";

import svgstore from "svgstore";
import { ResolvedConfig, Plugin } from "vite";

let svgRegex = /\.svg$/;

type Config = {
  spriteOutputName?: string;
  symbolId?: string;
};

export function createSvgSpritePlugin(configOptions?: Config): Plugin {
  let config: ResolvedConfig;
  let store = svgstore();
  let icons = new Set<string>();

  let options: Required<Config> = {
    spriteOutputName: "sprite.svg",
    symbolId: "icon-[name]-[hash]",
    ...configOptions,
  };

  return {
    name: "create-svg-sprite-plugin",

    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },

    async transform(_code, id) {
      if (svgRegex.test(id)) {
        let basename = path.basename(id, ".svg");
        let content = await fsp.readFile(id, "utf-8");

        let symbolId = options.symbolId;
        if (options.symbolId.includes("[name]")) {
          symbolId = symbolId.replace("[name]", basename);
        }
        if (options.symbolId.includes("[hash]")) {
          let contentHash = await hash(id);
          symbolId = symbolId.replace("[hash]", contentHash);
        }

        // only add the icon if it hasn't been added before
        if (!icons.has(symbolId)) {
          store.add(symbolId, content);
          icons.add(symbolId);
        }

        let url = `/${config.build.assetsDir}/${options.spriteOutputName}`;
        return `export default "${url}#${symbolId}";`;
      }
    },

    async writeBundle() {
      let sprite = store.toString();
      let fullOutDir = path.join(config.build.outDir, config.build.assetsDir);
      let spritePath = path.join(fullOutDir, options.spriteOutputName);
      // check if directory exists
      if (!(await fsp.stat(fullOutDir).catch(() => false))) {
        await fsp.mkdir(fullOutDir, { recursive: true });
      }
      await fsp.writeFile(spritePath, sprite);
    },

    configureServer(server) {
      let url = `/${config.build.assetsDir}/${options.spriteOutputName}`;
      server.middlewares.use((req, res, next) => {
        if (req.url === url) {
          res.setHeader("Content-Type", "image/svg+xml");
          res.end(store.toString());
        } else {
          next();
        }
      });
    },
  };
}

function hash(content: string): string {
  return crypto
    .createHash("shake256", { outputLength: 4 })
    .update(content)
    .digest("hex");
}
