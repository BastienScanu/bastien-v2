import type { Metadata } from "next";
import i18nConfig from "../../i18nConfig";

export const metadata: Metadata = {
  title: "Bastien Scanu",
  description: "My personal website",
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string}
}>) {
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
