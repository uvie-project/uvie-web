import { siteMetadata } from "@/lib/site-shell";
import { getDict } from "@/lib/i18n";
import { Hero } from "@/components/landing/hero";
import { Stats, Features, Performance, DownloadSection } from "@/components/landing/sections";

const locale = "vi" as const;

export function generateMetadata() {
  return siteMetadata(locale, getDict(locale));
}

export default function HomeVi() {
  const dict = getDict(locale);
  return (
    <>
      <Hero dict={dict} />
      <Stats dict={dict} />
      <Features dict={dict} />
      <Performance dict={dict} />
      <DownloadSection dict={dict} />
    </>
  );
}
