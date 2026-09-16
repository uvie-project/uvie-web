import {
  Check,
  Download,
  Feather,
  Globe,
  Keyboard,
  Languages,
  Monitor,
  Sparkles,
  Timer,
  Wand2,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import type { Dictionary } from "@/lib/i18n";
import { LINKS } from "@/lib/site";

export function Stats({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-10 sm:px-6 md:grid-cols-4">
        {dict.stats.items.map((item) => (
          <div key={item.label} className="text-center">
            <p className="font-heading text-3xl font-extrabold tracking-tight text-primary">
              {item.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const FEATURE_ICONS: LucideIcon[] = [
  Languages,
  Sparkles,
  Wand2,
  Zap,
  Languages,
  Timer,
  Keyboard,
  Globe,
  Feather,
];

export function Features({ dict }: { dict: Dictionary }) {
  return (
    <section id="features" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {dict.features.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {dict.features.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {dict.features.subtitle}
          </p>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dict.features.items.map((item, i) => {
            const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
            return (
              <StaggerItem key={item.title}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardContent className="flex flex-col gap-3 p-6">
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}

export function Performance({ dict }: { dict: Dictionary }) {
  return (
    <section id="performance" className="border-y border-border bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {dict.performance.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {dict.performance.title}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {dict.performance.subtitle}
          </p>
          <ul className="mt-8 space-y-4">
            {dict.performance.bullets.map((b) => (
              <li key={b.title} className="flex gap-3">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-3.5" />
                </span>
                <div>
                  <p className="font-semibold">{b.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-heading text-base font-bold">
                {dict.performance.benchTitle}
              </h3>
              <table className="mt-4 w-full text-sm">
                <tbody>
                  {dict.performance.bench.map((row) => (
                    <tr key={row.scenario} className="border-b border-border last:border-0">
                      <td className="py-3 pr-3 text-muted-foreground">
                        {row.scenario}
                      </td>
                      <td className="whitespace-nowrap py-3 text-right font-mono font-semibold">
                        {row.time}
                      </td>
                      <td className="whitespace-nowrap pl-3 text-right text-xs text-muted-foreground">
                        {row.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                {dict.performance.benchFootnote}
              </p>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

export function DownloadSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="download" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {dict.download.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {dict.download.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {dict.download.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <a href={LINKS.releases} target="_blank" rel="noopener noreferrer">
                <Download className="size-4" />
                {dict.download.primary}
              </a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href={LINKS.releases} target="_blank" rel="noopener noreferrer">
                {dict.download.secondary}
              </a>
            </Button>
          </div>
        </Reveal>

        <StaggerGroup className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
          {dict.download.steps.map((step, i) => (
            <StaggerItem key={step.title}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <span className="inline-flex size-8 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 font-heading font-bold">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mx-auto mt-10 max-w-2xl">
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                <Monitor className="size-5 text-muted-foreground" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-heading font-bold">
                    {dict.download.roadmapTitle}
                  </h3>
                  <Badge variant="outline">{dict.download.roadmapLabel}</Badge>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {dict.download.roadmapDescription}
                </p>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
