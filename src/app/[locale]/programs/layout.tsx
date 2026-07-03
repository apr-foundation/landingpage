import type { Metadata } from "next";

type Props = {
  params: Promise<{
    locale: "id" | "en";
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const isID = locale === "id";

  const title = isID ? "Program & Layanan" : "Programs & Services";

  const description = isID
    ? "Mengubah ekosistem korporasi, pemerintahan, dan pertanian melalui workshop berkualitas tinggi yang dirancang secara selektif, berorientasi praktik, dan memberikan kredensial resmi."
    : "Transforming corporate, government, and agricultural ecosystems through highly curated, hands-on workshops with recognized credentials.";

  return {
    title,

    description,

    keywords: isID
      ? [
          "APR Foundation",
          "Program",
          "Layanan",
          "Workshop",
          "Pelatihan",
          "Pengembangan Talenta",
          "Kepemimpinan",
          "Pertanian",
          "Agripreneurship",
          "CSR",
          "Indonesia",
        ]
      : [
          "APR Foundation",
          "Programs",
          "Services",
          "Workshop",
          "Training",
          "Talent Development",
          "Leadership",
          "Agriculture",
          "Agripreneurship",
          "CSR",
          "Indonesia",
        ],

    alternates: {
      canonical: `/${locale}/programs`,
      languages: {
        id: "/id/programs",
        en: "/en/programs",
      },
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: `${title} | APR Foundation`,
      description,
      url: `/${locale}/programs`,
      siteName: "APR Foundation",
      locale: isID ? "id_ID" : "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | APR Foundation`,
      description,
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
