import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import type { Dictionary, Locale } from "@/lib/i18n";
import { href, SITE_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700", "800"],
});

export function SiteHtml({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <html
      lang={locale}
      className={`${inter.variable} ${nunito.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem("uvie-theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`,
        }}
      />
      <body className="flex min-h-full flex-col">
        <SiteHeader
          dict={dict}
          langSwitchHref={locale === "vi" ? href("/en/") : href("/")}
          langSwitchTo={dict.langSwitchTo}
        />
        <main className="flex-1">{children}</main>
        <SiteFooter dict={dict} />
      </body>
    </html>
  );
}

export function siteMetadata(locale: Locale, dict: Dictionary): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: locale === "vi" ? href("/") : href("/en/"),
      languages: {
        vi: href("/"),
        en: href("/en/"),
        "x-default": href("/"),
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: SITE_URL,
      siteName: "UVie",
      locale: locale === "vi" ? "vi_VN" : "en_US",
      type: "website",
      images: [{ url: href("/icon.png"), width: 512, height: 512, alt: "UVie" }],
    },
    twitter: {
      card: "summary",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [href("/icon.png")],
    },
    icons: { icon: href("/icon.png") },
  };
}
