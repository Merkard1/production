import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  const srcPath = options.paths.src;

  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [srcPath, "node_modules"],
    mainFiles: ["index"],
    alias: {
      "@": srcPath,
    },
  };
}
