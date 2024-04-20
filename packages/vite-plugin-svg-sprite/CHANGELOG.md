# @mcansh/vite-plugin-svg-sprite

## 0.4.2

### Patch Changes

- f863ed9: remove import assertion as it breaks other tooling

  instead just hardcode the plugin name

## 0.4.1

### Patch Changes

- b67fd78: fix virtual module name

## 0.4.0

### Minor Changes

- 9507fa9: use vite's emitFile to emit consistent file to all builds

  do some post build file transforms to replace the dev sprite name with the actual hashed sprite filename

  sort icons before adding to sprite for consistent hashes

### Patch Changes

- 41f7c0c: re-add virtual module support

## 0.3.0

### Minor Changes

- 9f2e3a5: copy common svg attributes to underlying symbol
- b4955f5: add svgo to minify sprite, re-add hashing to sprite.svg file name, adds a virtual moduel `virtual:vite-svg-sprite-plugin` that returns the sprite url for preloading, etc, adds client.d.ts file for virtual module

### Patch Changes

- 4bf401b: check if output file has hash before attempting to replace

## 0.2.0

### Minor Changes

- f1736bd: feat: remove sprite-[hash], hash symbol name using hasha

## 0.1.6

### Patch Changes

- 847d7f5: hash emitted svg during build
- 26407a9: emitted file name fix

## 0.1.5

### Patch Changes

- 53d9e7e: dont add icon to sprite multiple times
- e26739e: hash emitted svg during build

## 0.1.4

### Patch Changes

- 13f3f80: remove sprite basename check used during development in another app to prevent infinitely adding the sprite when using a different configuration
- d94f845: allow plugin to work with custom assetDir
- 69c264d: update how defaults are set

  rename plugin's returned name

- c0d8736: dont mutate symbolIdPattern, otherwise all symbols will have the same id

## 0.1.3

### Patch Changes

- 4a86394: add missing fs-extra dependency

## 0.1.2

### Patch Changes

- 2fd42d8: rename exported function to `createSvgSpritePlugin`
