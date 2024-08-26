import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import builtins from "rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";

export default {
  input: "src/index.ts", // Your TypeScript entry point
  output: {
    file: "lib/esm/index.js", // Output bundled file
    format: "es", // ES module format for ESM
    sourcemap: true, // Optional: generate sourcemaps
  },
  plugins: [
    nodeResolve({
      browser: true, // Resolve modules for the browser
      preferBuiltins: false, // Prefer local modules over built-in Node.js modules
    }),
    commonjs(), // Convert CommonJS modules to ES6, so they can be included in a Rollup bundle
    typescript({
      tsconfig: "tsconfig.esm.json", // Use the specific tsconfig for Rollup
    }),
    builtins(), // Include Node.js built-ins
    globals(), // Provide polyfills for Node.js globals like `process` and `Buffer`
  ],
};
