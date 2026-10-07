export const SITE_URL = "https://uvie-project.github.io";

export const LINKS = {
  githubOrg: "https://github.com/uvie-project",
  repoMac: "https://github.com/uvie-project/uvie-mac",
  repoRs: "https://github.com/uvie-project/uvie-rs",
  repoWin: "https://github.com/uvie-project/uvie-win",
  releases: "https://github.com/uvie-project/uvie-mac/releases",
  releasesWin: "https://github.com/uvie-project/uvie-win/releases",
  winDownload:
    "https://github.com/uvie-project/uvie-win/releases/latest/download/uvie-for-windows-x86_64.zip",
  issues: "https://github.com/uvie-project/uvie-mac/issues",
} as const;

export function href(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";
  return `${basePath}${path}`;
}
