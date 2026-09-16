import "../globals.css";
import { SiteHtml } from "@/lib/site-shell";
import { getDict } from "@/lib/i18n";

const locale = "vi" as const;

export default function LayoutVi({ children }: { children: React.ReactNode }) {
  return (
    <SiteHtml locale={locale} dict={getDict(locale)}>
      {children}
    </SiteHtml>
  );
}
