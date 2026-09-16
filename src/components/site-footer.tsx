import { Logo } from "@/components/logo";
import type { Dictionary } from "@/lib/i18n";
import { LINKS } from "@/lib/site";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 font-heading text-lg font-extrabold tracking-tight">
              <Logo size={24} />
              <span>
                uvie<span className="text-primary">.</span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {dict.footer.tagline}
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h3 className="text-sm font-semibold">{dict.footer.projects}</h3>
              <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                <li>
                  <a className="transition-colors hover:text-foreground" href={LINKS.repoRs} target="_blank" rel="noopener noreferrer">
                    {dict.footer.engine}
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-foreground" href={LINKS.repoMac} target="_blank" rel="noopener noreferrer">
                    {dict.footer.macApp}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">{dict.footer.resources}</h3>
              <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                <li>
                  <a className="transition-colors hover:text-foreground" href={LINKS.releases} target="_blank" rel="noopener noreferrer">
                    {dict.footer.releases}
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-foreground" href={LINKS.issues} target="_blank" rel="noopener noreferrer">
                    {dict.footer.issues}
                  </a>
                </li>
                <li>
                  <a className="transition-colors hover:text-foreground" href={LINKS.githubOrg} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} UVie · {dict.footer.license}</p>
          <p>{dict.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
