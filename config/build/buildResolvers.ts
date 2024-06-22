import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions {
  const extensions = [".tsx", ".ts", ".js"];

  return { extensions: extensions };
}
