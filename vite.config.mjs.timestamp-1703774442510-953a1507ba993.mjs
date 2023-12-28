// vite.config.mjs
import { svelte } from "file:///D:/GITFOUNDRYVTT/foundryvtt-additional-cards/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
import resolve from "file:///D:/GITFOUNDRYVTT/foundryvtt-additional-cards/node_modules/@rollup/plugin-node-resolve/dist/es/index.js";
import preprocess from "file:///D:/GITFOUNDRYVTT/foundryvtt-additional-cards/node_modules/svelte-preprocess/dist/index.js";
import {
  postcssConfig,
  terserConfig,
  typhonjsRuntime
} from "file:///D:/GITFOUNDRYVTT/foundryvtt-additional-cards/node_modules/@typhonjs-fvtt/runtime/.rollup/remote/index.js";
import { viteStaticCopy } from "file:///D:/GITFOUNDRYVTT/foundryvtt-additional-cards/node_modules/vite-plugin-static-copy/dist/index.js";
import cleanPlugin from "file:///D:/GITFOUNDRYVTT/foundryvtt-additional-cards/node_modules/vite-plugin-clean/dist/index.cjs";
import { normalizePath } from "file:///D:/GITFOUNDRYVTT/foundryvtt-additional-cards/node_modules/vite/dist/node/index.js";
import path from "path";
import { run } from "file:///D:/GITFOUNDRYVTT/foundryvtt-additional-cards/node_modules/vite-plugin-run/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\GITFOUNDRYVTT\\foundryvtt-additional-cards";
var s_MODULE_ID = "additional-cards";
var s_PACKAGE_ID = "modules/" + s_MODULE_ID;
var s_ENTRY_JAVASCRIPT = "module.js";
var s_SVELTE_HASH_ID = "ese";
var s_COMPRESS = false;
var s_SOURCEMAPS = true;
var s_TYPHONJS_MODULE_LIB = false;
var s_RESOLVE_CONFIG = {
  browser: true,
  dedupe: ["svelte"]
};
var vite_config_default = () => {
  return {
    root: "src/",
    // Source location / esbuild root.
    base: `/${s_PACKAGE_ID}/`,
    // Base module path that 30001 / served dev directory.
    publicDir: false,
    // No public resources to copy.
    cacheDir: "../.vite-cache",
    // Relative from root directory.
    resolve: { conditions: ["import", "browser"] },
    esbuild: {
      target: ["es2022", "chrome100"],
      keepNames: true
      // Note: doesn't seem to work.
    },
    css: {
      // Creates a standard configuration for PostCSS with autoprefixer & postcss-preset-env.
      postcss: postcssConfig({
        compress: s_COMPRESS,
        sourceMap: s_SOURCEMAPS
      })
    },
    // About server options:
    // - Set to `open` to boolean `false` to not open a browser window automatically. This is useful if you set up a
    // debugger instance in your IDE and launch it with the URL: 'http://localhost:30001/game'.
    //
    // - The top proxy entry redirects requests under the module path for `style.css` and following standard static
    // directories: `assets`, `lang`, and `packs` and will pull those resources from the main Foundry / 30000 server.
    // This is necessary to reference the dev resources as the root is `/src` and there is no public / static
    // resources served with this particular Vite configuration. Modify the proxy rule as necessary for your
    // static resources / project.
    server: {
      port: 29999,
      open: "/game",
      // open: false,
      proxy: {
        // Serves static files from main Foundry server.
        [`^(/${s_PACKAGE_ID}/(images|fonts|assets|lang|languages|packs|styles|templates|style.css))`]: "http://127.0.0.1:30000",
        // All other paths besides package ID path are served from main Foundry server.
        [`^(?!/${s_PACKAGE_ID}/)`]: "http://127.0.0.1:30000",
        // Enable socket.io from main Foundry server.
        "/socket.io": { target: "ws://127.0.0.1:30000", ws: true }
      }
    },
    build: {
      outDir: normalizePath(path.resolve(__vite_injected_original_dirname, `./dist/${s_MODULE_ID}`)),
      // __dirname,
      emptyOutDir: false,
      sourcemap: s_SOURCEMAPS,
      brotliSize: true,
      minify: s_COMPRESS ? "terser" : false,
      target: ["es2022", "chrome100"],
      terserOptions: s_COMPRESS ? { ...terserConfig(), ecma: 2022 } : void 0,
      lib: {
        entry: "./" + s_ENTRY_JAVASCRIPT,
        // "./module.js"
        formats: ["es"],
        fileName: "module"
      }
    },
    // Necessary when using the dev server for top-level await usage inside of TRL.
    optimizeDeps: {
      esbuildOptions: {
        target: "es2022"
      }
    },
    plugins: [
      run([
        {
          name: "run sass",
          run: ["sass", `src/styles:dist/${s_MODULE_ID}/styles`]
        }
      ]),
      viteStaticCopy({
        targets: [
          {
            src: normalizePath(path.resolve(__vite_injected_original_dirname, "./src/assets")) + "/[!.]*",
            // 1️
            dest: normalizePath(path.resolve(__vite_injected_original_dirname, `./dist/${s_MODULE_ID}/assets`))
            // 2️
          },
          {
            src: normalizePath(path.resolve(__vite_injected_original_dirname, "./src/images")) + "/[!.]*",
            // 1️
            dest: normalizePath(path.resolve(__vite_injected_original_dirname, `./dist/${s_MODULE_ID}/images`))
            // 2️
          },
          {
            src: normalizePath(path.resolve(__vite_injected_original_dirname, "./src/icons")) + "/[!.]*",
            // 1️
            dest: normalizePath(path.resolve(__vite_injected_original_dirname, `./dist/${s_MODULE_ID}/icons`))
            // 2️
          },
          {
            src: normalizePath(path.resolve(__vite_injected_original_dirname, "./src/templates")) + "/[!.]*",
            // 1️
            dest: normalizePath(path.resolve(__vite_injected_original_dirname, `./dist/${s_MODULE_ID}/templates`))
            // 2️
          },
          {
            src: normalizePath(path.resolve(__vite_injected_original_dirname, "./src/lang")) + "/[!.]*",
            dest: normalizePath(path.resolve(__vite_injected_original_dirname, `./dist/${s_MODULE_ID}/lang`))
          },
          {
            src: normalizePath(path.resolve(__vite_injected_original_dirname, "./src/languages")) + "/[!.]*",
            dest: normalizePath(path.resolve(__vite_injected_original_dirname, `./dist/${s_MODULE_ID}/languages`))
          },
          {
            src: normalizePath(path.resolve(__vite_injected_original_dirname, "./src/styles")) + "/**/*.css",
            dest: normalizePath(path.resolve(__vite_injected_original_dirname, `./dist/${s_MODULE_ID}/styles`))
          },
          {
            src: normalizePath(path.resolve(__vite_injected_original_dirname, "./src/packs")) + "/[!.]*",
            dest: normalizePath(path.resolve(__vite_injected_original_dirname, `./dist/${s_MODULE_ID}/packs`))
          },
          {
            src: normalizePath(path.resolve(__vite_injected_original_dirname, "./src/module.json")),
            dest: normalizePath(path.resolve(__vite_injected_original_dirname, `./dist/${s_MODULE_ID}/`))
          },
          {
            src: normalizePath(path.resolve(__vite_injected_original_dirname, "./src/scripts/libs")) + "/[!.]*",
            dest: normalizePath(path.resolve(__vite_injected_original_dirname, `./dist/${s_MODULE_ID}/scripts/libs`))
          }
        ]
      }),
      svelte({
        compilerOptions: {
          // Provides a custom hash adding the string defined in `s_SVELTE_HASH_ID` to scoped Svelte styles;
          // This is reasonable to do as the framework styles in TRL compiled across `n` different packages will
          // be the same. Slightly modifying the hash ensures that your package has uniquely scoped styles for all
          // TRL components and makes it easier to review styles in the browser debugger.
          cssHash: ({ hash, css }) => `svelte-${s_SVELTE_HASH_ID}-${hash(css)}`
        },
        preprocess: preprocess(),
        onwarn: (warning, handler) => {
          if (warning.message.includes(`<a> element should have an href attribute`)) {
            return;
          }
          handler(warning);
        }
      }),
      resolve(s_RESOLVE_CONFIG),
      // Necessary when bundling npm-linked packages.
      // When s_TYPHONJS_MODULE_LIB is true transpile against the Foundry module version of TRL.
      s_TYPHONJS_MODULE_LIB && typhonjsRuntime(),
      cleanPlugin()
    ]
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcR0lURk9VTkRSWVZUVFxcXFxmb3VuZHJ5dnR0LWFkZGl0aW9uYWwtY2FyZHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEdJVEZPVU5EUllWVFRcXFxcZm91bmRyeXZ0dC1hZGRpdGlvbmFsLWNhcmRzXFxcXHZpdGUuY29uZmlnLm1qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovR0lURk9VTkRSWVZUVC9mb3VuZHJ5dnR0LWFkZGl0aW9uYWwtY2FyZHMvdml0ZS5jb25maWcubWpzXCI7aW1wb3J0IHsgc3ZlbHRlIH0gZnJvbSBcIkBzdmVsdGVqcy92aXRlLXBsdWdpbi1zdmVsdGVcIjtcbmltcG9ydCByZXNvbHZlIGZyb20gXCJAcm9sbHVwL3BsdWdpbi1ub2RlLXJlc29sdmVcIjsgLy8gVGhpcyByZXNvbHZlcyBOUE0gbW9kdWxlcyBmcm9tIG5vZGVfbW9kdWxlcy5cbmltcG9ydCBwcmVwcm9jZXNzIGZyb20gXCJzdmVsdGUtcHJlcHJvY2Vzc1wiO1xuaW1wb3J0IHtcbiAgcG9zdGNzc0NvbmZpZyxcbiAgdGVyc2VyQ29uZmlnLFxuICB0eXBob25qc1J1bnRpbWVcbn0gZnJvbSAnQHR5cGhvbmpzLWZ2dHQvcnVudGltZS9yb2xsdXAnO1xuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tICd2aXRlLXBsdWdpbi1zdGF0aWMtY29weSc7XG5pbXBvcnQgY2xlYW5QbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tY2xlYW4nO1xuaW1wb3J0IHsgbm9ybWFsaXplUGF0aCB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBydW4gfSBmcm9tICd2aXRlLXBsdWdpbi1ydW4nXG5cbi8vIEFUVEVOVElPTiFcbi8vIFBsZWFzZSBtb2RpZnkgdGhlIGJlbG93IHZhcmlhYmxlczogc19QQUNLQUdFX0lEIGFuZCBzX1NWRUxURV9IQVNIX0lEIGFwcHJvcHJpYXRlbHkuXG5cbi8vIEZvciBjb252ZW5pZW5jZSwgeW91IGp1c3QgbmVlZCB0byBtb2RpZnkgdGhlIHBhY2thZ2UgSUQgYmVsb3cgYXMgaXQgaXMgdXNlZCB0byBmaWxsIGluIGRlZmF1bHQgcHJveHkgc2V0dGluZ3MgZm9yXG4vLyB0aGUgZGV2IHNlcnZlci5cbmNvbnN0IHNfTU9EVUxFX0lEID0gXCJhZGRpdGlvbmFsLWNhcmRzXCI7XG5jb25zdCBzX1BBQ0tBR0VfSUQgPSBcIm1vZHVsZXMvXCIrc19NT0RVTEVfSUQ7XG5jb25zdCBzX0VOVFJZX0pBVkFTQ1JJUFQgPSBcIm1vZHVsZS5qc1wiO1xuXG4vLyBBIHNob3J0IGFkZGl0aW9uYWwgc3RyaW5nIHRvIGFkZCB0byBTdmVsdGUgQ1NTIGhhc2ggdmFsdWVzIHRvIG1ha2UgeW91cnMgdW5pcXVlLiBUaGlzIHJlZHVjZXMgdGhlIGFtb3VudCBvZlxuLy8gZHVwbGljYXRlZCBmcmFtZXdvcmsgQ1NTIG92ZXJsYXAgYmV0d2VlbiBtYW55IFRSTCBwYWNrYWdlcyBlbmFibGVkIG9uIEZvdW5kcnkgVlRUIGF0IHRoZSBzYW1lIHRpbWUuICdlc2UnIGlzIGNob3NlblxuLy8gYnkgc2hvcnRlbmluZyAnZXNzZW50aWFsLXN2ZWx0ZS1lc20nLlxuY29uc3Qgc19TVkVMVEVfSEFTSF9JRCA9IFwiZXNlXCI7XG5cbmNvbnN0IHNfQ09NUFJFU1MgPSBmYWxzZTsgLy8gU2V0IHRvIHRydWUgdG8gY29tcHJlc3MgdGhlIG1vZHVsZSBidW5kbGUuXG5jb25zdCBzX1NPVVJDRU1BUFMgPSB0cnVlOyAvLyBHZW5lcmF0ZSBzb3VyY2VtYXBzIGZvciB0aGUgYnVuZGxlIChyZWNvbW1lbmRlZCkuXG5cbi8vIEVYUEVSSU1FTlRBTDogU2V0IHRvIHRydWUgdG8gZW5hYmxlIGxpbmtpbmcgYWdhaW5zdCB0aGUgVHlwaG9uSlMgUnVudGltZSBMaWJyYXJ5IG1vZHVsZS5cbi8vIFlvdSBtdXN0IGFkZCBhIEZvdW5kcnkgbW9kdWxlIGRlcGVuZGVuY3kgb24gdGhlIGB0eXBob25qc2AgRm91bmRyeSBwYWNrYWdlIG9yIG1hbnVhbGx5IGluc3RhbGwgaXQgaW4gRm91bmRyeSBmcm9tOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3R5cGhvbmpzLWZ2dHQtbGliL3R5cGhvbmpzL3JlbGVhc2VzL2xhdGVzdC9kb3dubG9hZC9tb2R1bGUuanNvblxuY29uc3Qgc19UWVBIT05KU19NT0RVTEVfTElCID0gZmFsc2U7XG5cbi8vIFVzZWQgaW4gYnVuZGxpbmcgcGFydGljdWxhcmx5IGR1cmluZyBkZXZlbG9wbWVudC4gSWYgeW91IG5wbS1saW5rIHBhY2thZ2VzIHRvIHlvdXIgcHJvamVjdCBhZGQgdGhlbSBoZXJlLlxuY29uc3Qgc19SRVNPTFZFX0NPTkZJRyA9IHtcbiAgYnJvd3NlcjogdHJ1ZSxcbiAgZGVkdXBlOiBbXCJzdmVsdGVcIl0sXG59O1xuXG4vLyBBVFRFTlRJT04hXG4vLyBZb3UgbXVzdCBjaGFuZ2UgYGJhc2VgIGFuZCB0aGUgYHByb3h5YCBzdHJpbmdzIHJlcGxhY2luZyBgL21vZHVsZXMvJHtzX01PRFVMRV9JRH0vYCB3aXRoIHlvdXJcbi8vIG1vZHVsZSBvciBzeXN0ZW0gSUQuXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqIEB0eXBlIHtpbXBvcnQoJ3ZpdGUnKS5Vc2VyQ29uZmlnfSAqL1xuICByZXR1cm4ge1xuICAgIHJvb3Q6IFwic3JjL1wiLCAvLyBTb3VyY2UgbG9jYXRpb24gLyBlc2J1aWxkIHJvb3QuXG4gICAgYmFzZTogYC8ke3NfUEFDS0FHRV9JRH0vYCwgLy8gQmFzZSBtb2R1bGUgcGF0aCB0aGF0IDMwMDAxIC8gc2VydmVkIGRldiBkaXJlY3RvcnkuXG4gICAgcHVibGljRGlyOiBmYWxzZSwgLy8gTm8gcHVibGljIHJlc291cmNlcyB0byBjb3B5LlxuICAgIGNhY2hlRGlyOiBcIi4uLy52aXRlLWNhY2hlXCIsIC8vIFJlbGF0aXZlIGZyb20gcm9vdCBkaXJlY3RvcnkuXG5cbiAgICByZXNvbHZlOiB7IGNvbmRpdGlvbnM6IFtcImltcG9ydFwiLCBcImJyb3dzZXJcIl0gfSxcblxuICAgIGVzYnVpbGQ6IHtcbiAgICAgIHRhcmdldDogWydlczIwMjInLCAnY2hyb21lMTAwJ10sXG4gICAgICBrZWVwTmFtZXM6IHRydWUgICAvLyBOb3RlOiBkb2Vzbid0IHNlZW0gdG8gd29yay5cbiAgICB9LFxuXG4gICAgY3NzOiB7XG4gICAgICAvLyBDcmVhdGVzIGEgc3RhbmRhcmQgY29uZmlndXJhdGlvbiBmb3IgUG9zdENTUyB3aXRoIGF1dG9wcmVmaXhlciAmIHBvc3Rjc3MtcHJlc2V0LWVudi5cbiAgICAgIHBvc3Rjc3M6IHBvc3Rjc3NDb25maWcoeyBcbiAgICAgICAgY29tcHJlc3M6IHNfQ09NUFJFU1MsIFxuICAgICAgICBzb3VyY2VNYXA6IHNfU09VUkNFTUFQU1xuICAgICAgfSksXG4gICAgfSxcblxuICAgIC8vIEFib3V0IHNlcnZlciBvcHRpb25zOlxuICAgIC8vIC0gU2V0IHRvIGBvcGVuYCB0byBib29sZWFuIGBmYWxzZWAgdG8gbm90IG9wZW4gYSBicm93c2VyIHdpbmRvdyBhdXRvbWF0aWNhbGx5LiBUaGlzIGlzIHVzZWZ1bCBpZiB5b3Ugc2V0IHVwIGFcbiAgICAvLyBkZWJ1Z2dlciBpbnN0YW5jZSBpbiB5b3VyIElERSBhbmQgbGF1bmNoIGl0IHdpdGggdGhlIFVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMDEvZ2FtZScuXG4gICAgLy9cbiAgICAvLyAtIFRoZSB0b3AgcHJveHkgZW50cnkgcmVkaXJlY3RzIHJlcXVlc3RzIHVuZGVyIHRoZSBtb2R1bGUgcGF0aCBmb3IgYHN0eWxlLmNzc2AgYW5kIGZvbGxvd2luZyBzdGFuZGFyZCBzdGF0aWNcbiAgICAvLyBkaXJlY3RvcmllczogYGFzc2V0c2AsIGBsYW5nYCwgYW5kIGBwYWNrc2AgYW5kIHdpbGwgcHVsbCB0aG9zZSByZXNvdXJjZXMgZnJvbSB0aGUgbWFpbiBGb3VuZHJ5IC8gMzAwMDAgc2VydmVyLlxuICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIHJlZmVyZW5jZSB0aGUgZGV2IHJlc291cmNlcyBhcyB0aGUgcm9vdCBpcyBgL3NyY2AgYW5kIHRoZXJlIGlzIG5vIHB1YmxpYyAvIHN0YXRpY1xuICAgIC8vIHJlc291cmNlcyBzZXJ2ZWQgd2l0aCB0aGlzIHBhcnRpY3VsYXIgVml0ZSBjb25maWd1cmF0aW9uLiBNb2RpZnkgdGhlIHByb3h5IHJ1bGUgYXMgbmVjZXNzYXJ5IGZvciB5b3VyXG4gICAgLy8gc3RhdGljIHJlc291cmNlcyAvIHByb2plY3QuXG4gICAgc2VydmVyOiB7XG4gICAgICBwb3J0OiAyOTk5OSxcbiAgICAgIG9wZW46IFwiL2dhbWVcIixcbiAgICAgIC8vIG9wZW46IGZhbHNlLFxuICAgICAgcHJveHk6IHtcbiAgICAgICAgLy8gU2VydmVzIHN0YXRpYyBmaWxlcyBmcm9tIG1haW4gRm91bmRyeSBzZXJ2ZXIuXG4gICAgICAgIFtgXigvJHtzX1BBQ0tBR0VfSUR9LyhpbWFnZXN8Zm9udHN8YXNzZXRzfGxhbmd8bGFuZ3VhZ2VzfHBhY2tzfHN0eWxlc3x0ZW1wbGF0ZXN8c3R5bGUuY3NzKSlgXTpcbiAgICAgICAgICBcImh0dHA6Ly8xMjcuMC4wLjE6MzAwMDBcIixcblxuICAgICAgICAvLyBBbGwgb3RoZXIgcGF0aHMgYmVzaWRlcyBwYWNrYWdlIElEIHBhdGggYXJlIHNlcnZlZCBmcm9tIG1haW4gRm91bmRyeSBzZXJ2ZXIuXG4gICAgICAgIFtgXig/IS8ke3NfUEFDS0FHRV9JRH0vKWBdOiBcImh0dHA6Ly8xMjcuMC4wLjE6MzAwMDBcIixcblxuICAgICAgICAvLyBFbmFibGUgc29ja2V0LmlvIGZyb20gbWFpbiBGb3VuZHJ5IHNlcnZlci5cbiAgICAgICAgXCIvc29ja2V0LmlvXCI6IHsgdGFyZ2V0OiBcIndzOi8vMTI3LjAuMC4xOjMwMDAwXCIsIHdzOiB0cnVlIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgXG4gICAgYnVpbGQ6IHtcbiAgICAgIG91dERpcjogbm9ybWFsaXplUGF0aCggcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgYC4vZGlzdC8ke3NfTU9EVUxFX0lEfWApKSwgLy8gX19kaXJuYW1lLFxuICAgICAgZW1wdHlPdXREaXI6IGZhbHNlLFxuICAgICAgc291cmNlbWFwOiBzX1NPVVJDRU1BUFMsXG4gICAgICBicm90bGlTaXplOiB0cnVlLFxuICAgICAgbWluaWZ5OiBzX0NPTVBSRVNTID8gXCJ0ZXJzZXJcIiA6IGZhbHNlLFxuICAgICAgdGFyZ2V0OiBbJ2VzMjAyMicsICdjaHJvbWUxMDAnXSxcbiAgICAgIHRlcnNlck9wdGlvbnM6IHNfQ09NUFJFU1MgPyB7IC4uLnRlcnNlckNvbmZpZygpLCBlY21hOiAyMDIyIH0gOiB2b2lkIDAsXG4gICAgICBsaWI6IHtcbiAgICAgICAgZW50cnk6IFwiLi9cIiArIHNfRU5UUllfSkFWQVNDUklQVCwgLy8gXCIuL21vZHVsZS5qc1wiXG4gICAgICAgIGZvcm1hdHM6IFtcImVzXCJdLFxuICAgICAgICBmaWxlTmFtZTogXCJtb2R1bGVcIixcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIC8vIE5lY2Vzc2FyeSB3aGVuIHVzaW5nIHRoZSBkZXYgc2VydmVyIGZvciB0b3AtbGV2ZWwgYXdhaXQgdXNhZ2UgaW5zaWRlIG9mIFRSTC5cbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgIGVzYnVpbGRPcHRpb25zOiB7XG4gICAgICAgIHRhcmdldDogJ2VzMjAyMidcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcGx1Z2luczogW1xuICAgICAgcnVuKFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdydW4gc2FzcycsXG4gICAgICAgICAgcnVuOiBbJ3Nhc3MnLCAgYHNyYy9zdHlsZXM6ZGlzdC8ke3NfTU9EVUxFX0lEfS9zdHlsZXNgXVxuICAgICAgICB9LFxuICAgICAgXSksXG4gICAgICB2aXRlU3RhdGljQ29weSh7XG4gICAgICAgIHRhcmdldHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IG5vcm1hbGl6ZVBhdGgocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2Fzc2V0cycpKSArICcvWyEuXSonLCAvLyAxXHVGRTBGXG4gICAgICAgICAgICBkZXN0OiBub3JtYWxpemVQYXRoKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIGAuL2Rpc3QvJHtzX01PRFVMRV9JRH0vYXNzZXRzYCkpLCAvLyAyXHVGRTBGXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IG5vcm1hbGl6ZVBhdGgocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2ltYWdlcycpKSArICcvWyEuXSonLCAvLyAxXHVGRTBGXG4gICAgICAgICAgICBkZXN0OiBub3JtYWxpemVQYXRoKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIGAuL2Rpc3QvJHtzX01PRFVMRV9JRH0vaW1hZ2VzYCkpLCAvLyAyXHVGRTBGXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IG5vcm1hbGl6ZVBhdGgocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2ljb25zJykpICsgJy9bIS5dKicsIC8vIDFcdUZFMEZcbiAgICAgICAgICAgIGRlc3Q6IG5vcm1hbGl6ZVBhdGgocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgYC4vZGlzdC8ke3NfTU9EVUxFX0lEfS9pY29uc2ApKSwgLy8gMlx1RkUwRlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBub3JtYWxpemVQYXRoKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy90ZW1wbGF0ZXMnKSkgKyAnL1shLl0qJywgLy8gMVx1RkUwRlxuICAgICAgICAgICAgZGVzdDogbm9ybWFsaXplUGF0aChwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBgLi9kaXN0LyR7c19NT0RVTEVfSUR9L3RlbXBsYXRlc2ApKSwgLy8gMlx1RkUwRlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBub3JtYWxpemVQYXRoKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9sYW5nJykpICsgJy9bIS5dKicsXG4gICAgICAgICAgICBkZXN0OiBub3JtYWxpemVQYXRoKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIGAuL2Rpc3QvJHtzX01PRFVMRV9JRH0vbGFuZ2ApKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogbm9ybWFsaXplUGF0aChwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvbGFuZ3VhZ2VzJykpICsgJy9bIS5dKicsXG4gICAgICAgICAgICBkZXN0OiBub3JtYWxpemVQYXRoKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIGAuL2Rpc3QvJHtzX01PRFVMRV9JRH0vbGFuZ3VhZ2VzYCkpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBub3JtYWxpemVQYXRoKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9zdHlsZXMnKSkgKyAnLyoqLyouY3NzJyxcbiAgICAgICAgICAgIGRlc3Q6IG5vcm1hbGl6ZVBhdGgocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgYC4vZGlzdC8ke3NfTU9EVUxFX0lEfS9zdHlsZXNgKSksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IG5vcm1hbGl6ZVBhdGgocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3BhY2tzJykpICsgJy9bIS5dKicsXG4gICAgICAgICAgICBkZXN0OiBub3JtYWxpemVQYXRoKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIGAuL2Rpc3QvJHtzX01PRFVMRV9JRH0vcGFja3NgKSksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IG5vcm1hbGl6ZVBhdGgocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL21vZHVsZS5qc29uJykpLFxuICAgICAgICAgICAgZGVzdDogbm9ybWFsaXplUGF0aChwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBgLi9kaXN0LyR7c19NT0RVTEVfSUR9L2ApKSxcbiAgICAgICAgICB9LFxuXHRcdCAge1xuICAgICAgICAgICAgc3JjOiBub3JtYWxpemVQYXRoKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9zY3JpcHRzL2xpYnMnKSkgKyAnL1shLl0qJyxcbiAgICAgICAgICAgIGRlc3Q6IG5vcm1hbGl6ZVBhdGgocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgYC4vZGlzdC8ke3NfTU9EVUxFX0lEfS9zY3JpcHRzL2xpYnNgKSksXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgc3ZlbHRlKHtcbiAgICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgICAvLyBQcm92aWRlcyBhIGN1c3RvbSBoYXNoIGFkZGluZyB0aGUgc3RyaW5nIGRlZmluZWQgaW4gYHNfU1ZFTFRFX0hBU0hfSURgIHRvIHNjb3BlZCBTdmVsdGUgc3R5bGVzO1xuICAgICAgICAgLy8gVGhpcyBpcyByZWFzb25hYmxlIHRvIGRvIGFzIHRoZSBmcmFtZXdvcmsgc3R5bGVzIGluIFRSTCBjb21waWxlZCBhY3Jvc3MgYG5gIGRpZmZlcmVudCBwYWNrYWdlcyB3aWxsXG4gICAgICAgICAvLyBiZSB0aGUgc2FtZS4gU2xpZ2h0bHkgbW9kaWZ5aW5nIHRoZSBoYXNoIGVuc3VyZXMgdGhhdCB5b3VyIHBhY2thZ2UgaGFzIHVuaXF1ZWx5IHNjb3BlZCBzdHlsZXMgZm9yIGFsbFxuICAgICAgICAgLy8gVFJMIGNvbXBvbmVudHMgYW5kIG1ha2VzIGl0IGVhc2llciB0byByZXZpZXcgc3R5bGVzIGluIHRoZSBicm93c2VyIGRlYnVnZ2VyLlxuICAgICAgICAgY3NzSGFzaDogKHsgaGFzaCwgY3NzIH0pID0+IGBzdmVsdGUtJHtzX1NWRUxURV9IQVNIX0lEfS0ke2hhc2goY3NzKX1gLFxuICAgICAgICB9LFxuICAgICAgICBwcmVwcm9jZXNzOiBwcmVwcm9jZXNzKCksXG4gICAgICAgIG9ud2FybjogKHdhcm5pbmcsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAvLyBTdXBwcmVzcyBgYTExeS1taXNzaW5nLWF0dHJpYnV0ZWAgZm9yIG1pc3NpbmcgaHJlZiBpbiA8YT4gbGlua3MuXG4gICAgICAgICAgLy8gRm91bmRyeSBkb2Vzbid0IGZvbGxvdyBhY2Nlc3NpYmlsaXR5IHJ1bGVzLlxuICAgICAgICAgIGlmICh3YXJuaW5nLm1lc3NhZ2UuaW5jbHVkZXMoYDxhPiBlbGVtZW50IHNob3VsZCBoYXZlIGFuIGhyZWYgYXR0cmlidXRlYCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gTGV0IFJvbGx1cCBoYW5kbGUgYWxsIG90aGVyIHdhcm5pbmdzIG5vcm1hbGx5LlxuICAgICAgICAgIGhhbmRsZXIod2FybmluZyk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcblxuICAgICAgcmVzb2x2ZShzX1JFU09MVkVfQ09ORklHKSwgLy8gTmVjZXNzYXJ5IHdoZW4gYnVuZGxpbmcgbnBtLWxpbmtlZCBwYWNrYWdlcy5cbiAgICAgIFxuICAgICAgLy8gV2hlbiBzX1RZUEhPTkpTX01PRFVMRV9MSUIgaXMgdHJ1ZSB0cmFuc3BpbGUgYWdhaW5zdCB0aGUgRm91bmRyeSBtb2R1bGUgdmVyc2lvbiBvZiBUUkwuXG4gICAgICBzX1RZUEhPTkpTX01PRFVMRV9MSUIgJiYgdHlwaG9uanNSdW50aW1lKCksXG5cbiAgICAgIGNsZWFuUGx1Z2luKClcbiAgICBdXG4gIH07XG59O1xuXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThULFNBQVMsY0FBYztBQUNyVixPQUFPLGFBQWE7QUFDcEIsT0FBTyxnQkFBZ0I7QUFDdkI7QUFBQSxFQUNFO0FBQUEsRUFDQTtBQUFB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
