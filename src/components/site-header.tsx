"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import type { Dictionary } from "@/lib/i18n";
import { href, LINKS } from "@/lib/site";

type HeaderProps = {
  dict: Dictionary;
  langSwitchHref: string;
  langSwitchTo: string;
};

export function SiteHeader({ dict, langSwitchHref, langSwitchTo }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: dict.nav.features, href: href("/#features") },
    { label: dict.nav.performance, href: href("/#performance") },
    { label: dict.nav.download, href: href("/#download") },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href={href("/")}
          className="flex items-center gap-2.5 font-heading text-xl font-extrabold tracking-tight"
        >
          <Logo />
          <span>
            uvie<span className="text-primary">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href={langSwitchHref}
            lang={langSwitchHref === href("/en/") ? "en" : "vi"}
            className="rounded-lg px-2.5 py-1.5 text-xs font-bold uppercase tracking-wide text-muted-foreground ring-1 ring-border transition-colors hover:bg-muted hover:text-foreground"
            aria-label={`Switch to ${langSwitchTo}`}
          >
            {langSwitchTo}
          </a>
          <ThemeToggle />
          <a
            href={LINKS.githubOrg}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:inline-flex"
          >
            {dict.nav.github}
          </a>
          <a
            href={LINKS.releases}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 active:translate-y-px"
          >
            {dict.nav.download}
          </a>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted md:hidden"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-3 md:hidden" aria-label="Mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
            >
              {item.label}
            </a>
          ))}
          <a
            href={LINKS.githubOrg}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
          >
            {dict.nav.github}
          </a>
        </nav>
      )}
    </header>
  );
}
