import { Download } from "lucide-react";
import { GithubIcon } from "@/components/github-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion";
import { TypingDemo } from "@/components/typing-demo";
import type { Dictionary } from "@/lib/i18n";
import { LINKS } from "@/lib/site";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,var(--accent),transparent)]"
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-16 sm:px-6 md:grid-cols-2 md:items-center md:pb-28 md:pt-24">
        <div>
          <Badge>{dict.hero.badge}</Badge>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            {dict.hero.title}{" "}
            <span className="text-primary">{dict.hero.titleHighlight}</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {dict.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <a href={LINKS.releases} target="_blank" rel="noopener noreferrer">
                <Download className="size-4" />
                {dict.hero.ctaDownload}
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={LINKS.repoRs} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="size-4" />
                {dict.hero.ctaGithub}
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{dict.hero.ctaNote}</p>
        </div>

        <Reveal delay={0.15} className="md:justify-self-end">
          <TypingDemo />
          <p className="mt-3 text-center text-xs text-muted-foreground md:text-left">
            {dict.hero.demoHint}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
