import Image from "next/image";
import { Check, Download, PartyPopper, Sparkles, Star } from "lucide-react";
import { GithubIcon } from "@/components/github-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bob, Pop, Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import type { Dictionary } from "@/lib/i18n";
import { href, LINKS } from "@/lib/site";

export function WindowsLaunch({ dict }: { dict: Dictionary }) {
  const w = dict.windowsLaunch;
  return (
    <section id="windows" className="relative scroll-mt-20 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_60%_at_50%_40%,var(--accent),transparent)]"
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Badge className="gap-1.5">
            <PartyPopper className="size-3.5" />
            {w.badge}
          </Badge>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {w.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {w.subtitle}
          </p>
        </Reveal>

        <div className="relative mx-auto mt-12 max-w-5xl">
          {/* Floating congrat icons popping in around the card */}
          <Pop delay={0.35} className="absolute -top-5 left-6 z-10 md:-left-8 md:top-10">
            <Bob delay={0.4}>
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                <PartyPopper className="size-6" />
              </span>
            </Bob>
          </Pop>
          <Pop delay={0.5} className="absolute -top-4 right-8 z-10 md:-right-6 md:top-6">
            <Bob delay={1.1}>
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-md">
                <Sparkles className="size-5" />
              </span>
            </Bob>
          </Pop>
          <Pop delay={0.65} className="absolute -bottom-4 left-10 z-10 md:-left-6 md:bottom-14">
            <Bob delay={0.8}>
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md">
                <Star className="size-4" />
              </span>
            </Bob>
          </Pop>
          <Pop delay={0.8} className="absolute -bottom-3 right-6 z-10 hidden md:-right-4 md:block">
            <Bob delay={1.6}>
              <span className="inline-flex size-8 items-center justify-center rounded-lg bg-muted text-muted-foreground shadow">
                <Sparkles className="size-4" />
              </span>
            </Bob>
          </Pop>

          <Card className="overflow-hidden border-primary/20 shadow-xl">
            <CardContent className="grid gap-0 p-0 md:grid-cols-[1.05fr_1fr]">
              <div className="flex flex-col justify-center gap-5 p-6 sm:p-8">
                <StaggerGroup className="grid gap-3 sm:grid-cols-2">
                  {w.bullets.map((b) => (
                    <StaggerItem key={b} className="flex items-center gap-2.5">
                      <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                        <Check className="size-3.5" />
                      </span>
                      <span className="text-sm font-medium">{b}</span>
                    </StaggerItem>
                  ))}
                </StaggerGroup>

                <div className="flex flex-wrap items-center gap-3">
                  <Button size="lg" asChild>
                    <a href={LINKS.winDownload} target="_blank" rel="noopener noreferrer">
                      <Download className="size-4" />
                      {w.cta}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href={LINKS.repoWin} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="size-4" />
                      {w.ctaSecondary}
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">{w.note}</p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {w.installNote}
                </p>
              </div>

              <div className="relative border-t border-border bg-muted/50 md:border-l md:border-t-0">
                <Image
                  src={href("/images/uvie-win-settings.png")}
                  alt={w.screenshotAlt}
                  width={765}
                  height={592}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
