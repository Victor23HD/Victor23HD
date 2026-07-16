const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix absolute public paths with GitHub Pages basePath when needed. */
export function withBasePath(path: string): string {
  if (!path || path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  if (!basePath) return path;
  if (path.startsWith(basePath + "/") || path === basePath) return path;
  return path.startsWith("/") ? `${basePath}${path}` : `${basePath}/${path}`;
}
