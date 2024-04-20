import { createSvgSpritePlugin as svgSprite } from "@mcansh/vite-plugin-svg-sprite";
import type { Config } from "@mcansh/vite-plugin-svg-sprite";

/**
 * @deprecated - this package has been renamed to `@mcansh/vite-plugin-svg-sprite`
 */
export function createSvgSpritePlugin(configOptions: Config) {
  console.warn(
    "this package has been renamed to `@mcansh/vite-plugin-svg-sprite`"
  );
  return svgSprite(configOptions);
}
