import { TabProvider } from "@/context/TabContext";
import ClientLayout from "@/components/shared/ClientLayout";
import { i18nConfig } from "@/i18n/config";
import { LanguageProvider } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <TabProvider>
        <ClientLayout>{children}</ClientLayout>
      </TabProvider>
    </LanguageProvider>
  );
}
