# @mcansh/vite-plugin-svg-sprite

this vite plugin will transform any imported svg files and combine them into an svg sprite sheet

## installation and set up

```sh
npm i -D @mcansh/vite-svg-sprite-plugin
```

this is an example using Remix, but this plugin works with any vite configuration

```ts
import { svgSprite } from "@mcansh/vite-plugin-svg-sprite";
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [remix(), tsconfigPaths(), svgSprite()],
});
```

you can configure the generated sprite file name as well as the generated symbol id pattern

```ts
import { DEFAULT_COPY_ATTRS, svgSprite } from "@mcansh/vite-plugin-svg-sprite";

svgSprite({
  spriteOutputName: "sprite.svg",
  symbolId: "icon-[name]-[hash]",
  svgstoreOptions: {
    copyAttrs: [
      ...DEFAULT_COPY_ATTRS,
      // any additional attributes you want to copy from the svg to the symbol
    ],
  },
});
```

## usage

```tsx
import spriteUrl from "virtual:@mcansh/vite-plugin-svg-sprite";
import linkIconHref from "@primer/octicons/build/svg/link-16.svg";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    { rel: "preload", as: "image", href: spriteUrl, type: "image/svg+xml" },
  ];
};

export default function Component() {
  return (
    <svg className="size-4" aria-hidden>
      <use href={linkIconHref} />
    </svg>
  );
}
```
