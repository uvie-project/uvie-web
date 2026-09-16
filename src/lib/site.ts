export const SITE_URL = "https://uvie-project.github.io";

export const LINKS = {
  githubOrg: "https://github.com/uvie-project",
  repoMac: "https://github.com/uvie-project/uvie-mac",
  repoRs: "https://github.com/uvie-project/uvie-rs",
  releases: "https://github.com/uvie-project/uvie-mac/releases",
  issues: "https://github.com/uvie-project/uvie-mac/issues",
} as const;

export function href(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";
  return `${basePath}${path}`;
}
