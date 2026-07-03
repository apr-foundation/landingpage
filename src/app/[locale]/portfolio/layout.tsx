import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "id" | "en" }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return {
      title: "Projects & Portfolio",
      description:
        "Explore APR Foundation's portfolio of projects, strategic partnerships, and impactful initiatives across Indonesia.",
      alternates: {
        canonical: "/en/portfolio",
      },
    };
  }

  return {
    title: "Projek & Portofolio",
    description:
      "Dokumentasi berbagai proyek, program, dan kolaborasi APR Foundation dalam menciptakan dampak nyata.",
    alternates: {
      canonical: "/id/portfolio",
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
