import { siteMetadata } from "@/lib/site-shell";
import { getDict } from "@/lib/i18n";
import { Hero } from "@/components/landing/hero";
import { Stats, Features, Performance, DownloadSection } from "@/components/landing/sections";
import { WindowsLaunch } from "@/components/landing/windows-launch";

const locale = "en" as const;

export function generateMetadata() {
  return siteMetadata(locale, getDict(locale));
}

export default function HomeEn() {
  const dict = getDict(locale);
  return (
    <>
      <Hero dict={dict} />
      <Stats dict={dict} />
      <WindowsLaunch dict={dict} />
      <Features dict={dict} />
      <Performance dict={dict} />
      <DownloadSection dict={dict} />
    </>
  );
}
