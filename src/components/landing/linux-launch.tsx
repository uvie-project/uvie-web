import { Check, Download, PackageCheck, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/github-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import type { Dictionary } from "@/lib/i18n";
import { LINKS } from "@/lib/site";

export function LinuxLaunch({ dict }: { dict: Dictionary }) {
  const l = dict.linuxLaunch;
  return (
    <section id="linux" className="scroll-mt-20 border-y border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Badge className="gap-1.5" variant="secondary">
            <PackageCheck className="size-3.5" />
            {l.badge}
          </Badge>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {l.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {l.subtitle}
          </p>
        </Reveal>

        <div className="mx-auto mt-12 max-w-5xl">
          <Card className="border-primary/20 shadow-xl">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                {l.pathsLabel}
              </p>
              <StaggerGroup className="mt-4 grid gap-3 sm:grid-cols-3">
                {l.paths.map((p) => (
                  <StaggerItem key={p.name} className="flex items-start gap-2.5 rounded-lg border border-border bg-background p-3">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-sm">
                      <code className="font-mono font-semibold">{p.name}</code>
                      <span className="mt-0.5 block text-muted-foreground">{p.desc}</span>
                    </span>
                  </StaggerItem>
                ))}
              </StaggerGroup>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div>
                  <h3 className="flex items-center gap-2 font-heading font-bold">
                    <Terminal className="size-4 text-muted-foreground" />
                    {l.debianTitle}
                  </h3>
                  <pre className="mt-3 overflow-x-auto rounded-lg bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:bg-zinc-900">
                    {l.debianSteps.join("\n")}
                  </pre>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 font-heading font-bold">
                    <Download className="size-4 text-muted-foreground" />
                    {l.otherTitle}
                  </h3>
                  <pre className="mt-3 overflow-x-auto rounded-lg bg-zinc-950 p-4 text-xs leading-relaxed text-zinc-100 dark:bg-zinc-900">
                    {l.otherSteps.join("\n")}
                  </pre>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button size="lg" asChild>
                  <a href={LINKS.aptRepo} target="_blank" rel="noopener noreferrer">
                    {l.cta}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={LINKS.repoLinux} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="size-4" />
                    {l.ctaSecondary}
                  </a>
                </Button>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">{l.note}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {l.footnote}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
