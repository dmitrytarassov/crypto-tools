import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/polkadot/index.ts",
    "src/common/index.ts",
    "src/eigenlayer/index.ts",
    "src/types/polkadot/index.ts",
  ],
  format: ["cjs", "esm"], // Build for commonJS and ESmodules
  dts: true, // Generate declaration file (.d.ts)
  splitting: false,
  sourcemap: false,
  clean: true,
  tsconfig: "tsconfig.build.json",
});
