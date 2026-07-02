import {
  StatItem,
  FocusArea,
  TimelineItem,
  TeamMember,
  FeatureCard,
  PartnerLogo,
} from "../types";

export const statsData: StatItem[] = [
  {
    id: "individu",
    value: 3000,
    suffix: "+",
    label: "Individu",
    icon: "Users",
    description: "Nurtured with core professional and leadership skills.",
  },
  {
    id: "organisasi",
    value: 50,
    suffix: "+",
    label: "Organisasi",
    icon: "Briefcase",
    description: "Telah menjadi mitra kami dalam mencapai tujuan pengembangan.",
  },
  {
    id: "project",
    value: 25,
    suffix: "+",
    label: "Project",
    icon: "Handshake",
    description:
      "Telah berhasil kami selesaikan dengan dampak yang signifikan.",
  },
  {
    id: "years",
    value: 5,
    suffix: "+",
    label: "Tahun Pengalaman",
    icon: "Calendar",
    description:
      "Dalam bidang talent development, project management & creative agency.",
  },
];

export const focusAreas: FocusArea[] = [
  {
    id: "leadership", // ID ini match dengan terjemahan
    logo: "/assets/logos/ILP.png",
    title: "Leadership, Talent & Future Workforce",
    description:
      "Mengembangkan talenta dan kepemimpinan generasi penerus bangsa, membekali mereka dengan kompetensi yang relevan yang dibutuhkan saat ini.",
    icon: "Compass",
    gradient: "from-[#34A8B8] to-[#3C569E]",
  },
  {
    id: "agriculture", // ID ini match dengan terjemahan
    logo: "/assets/logos/Mudatani.png",
    title: "Agripreneurship & Food Resilience",
    description:
      "Mendorong praktik pertanian berkelanjutan dan kesadaran ekologis di masyarakat untuk menjaga kelestarian alam dan menciptakan masa depan pangan lebih baik.",
    icon: "Sprout",
    gradient: "from-[#10B981] to-[#34A8B8]",
  },
  {
    id: "creative", // ID ini match dengan terjemahan
    logo: "/assets/logos/creafo.jpg",
    title: "Creative & Digital Economy",
    description:
      "Menyediaan layanan profesional dari para talenta kreatif-digital sehingga dapat mendorong sektor ekonomi kreatif tumbuh, lebih berkembang secara optimal.",
    icon: "Sparkles",
    gradient: "from-[#6952AD] to-[#EC4899]",
  },
];

export const timelineJourney: TimelineItem[] = [
  {
    year: "2016",
    title: "Foundation Laid",
    description:
      "Established APR Foundation in South Jakarta, dedicated to filling critical skill gaps in early-career Indonesian professionals.",
    tag: "Inception",
  },
  {
    year: "2018",
    title: "National Leadership Initiative",
    description:
      "Launched our flagship Indonesia Leadership Project, onboarding top-tier government and corporate partners.",
    tag: "Expansion",
  },
  {
    year: "2020",
    title: "Agripreneurship Launch",
    description:
      "Pivoted to address climate resilience by introducing agricultural cohorts in West and Central Java.",
    tag: "Innovation",
  },
  {
    year: "2022",
    title: "Creative Studio Integration",
    description:
      "Formed our digital & TVC division, offering full-service social media and creative management for public programs.",
    tag: "Diversification",
  },
  {
    year: "2024",
    title: "Net-Positive Agriculture Ecosystems",
    description:
      "Empowered over 5,000 active participants across all segments, scaling sustainable soil technologies nationwide.",
    tag: "Impact",
  },
  {
    year: "2026",
    title: "Visions Beyond boundaries",
    description:
      "Pioneering AI-powered youth micro-credentials and sovereign community food resilience systems for the next decade.",
    tag: "Future Horizon",
  },
];

export const manifestoData = {
  quote:
    "APR didirikan dengan keyakinan bahwa setiap individu dan organisasi memiliki potensi tak terbatas yang menunggu untuk dibuka.",
  descriptions: [
    {
      id: 1,
      icon: "🌱",
      title: "Perjalanan Kami",
      content:
        "Dimulai dari berbagai inisiatif, dari komunitas kecil, APR tumbuh berkembang menjadi entitas profesional yang telah menangani berbagai program pengembangan SDM dan proyek kreatif di seluruh Indonesia.",
    },
    {
      id: 2,
      icon: "🤝",
      title: "Semangat Kami",
      content:
        "Kami lahir dari semangat gotong royong memajukan kualitas manusia Indonesia melalui kolaborasi dan inovasi berkelanjutan.",
    },
  ],
  legal: {
    title: "Landasan Hukum",
    content:
      "APR Foundation berdiri berdasarkan Akta Pendirian Yayasan No. 01 tanggal 20 April 2026 dibuat di hadapan Notaris Nailul Husna, S.H., M.Kn.; dan Keputusan Menteri Hukum Republik Indonesia Nomor AHU-0010217.AH.01.04. Tahun 2026 tanggal 23 April 2026 tentang Pengesahan Badan Hukum Yayasan Aprakarsa Cipta Strategika Nusantara.",
  },
};

export const teamMembers: TeamMember[] = [
  {
    id: "aulia-pradipta", // Tambahkan ini
    name: "Aulia Pradipta",
    position: "Founder & Chief Executive Officer",
    description: "Memimpin visi dan strategi APR untuk impact sustainability.",
    image: "/assets/images/teams/Aulia Pradipta.webp",
    socials: {
      // linkedin: "https://linkedin.com/in/farhan-naufal",
      // instagram: "https://instagram.com/farhan_n",
    },
  },
  {
    id: "rosyad-al-ghani", // Tambahkan ini
    name: "M. Rosyad Al Ghani",
    position: "Advisor",
    description:
      "Memberikan insight terkait pengembangan agripreneurship dan food resilience.",
    image: "/assets/images/teams/M. Rosyad Al Ghani.webp",
    socials: {
      // linkedin: "https://linkedin.com/in/sarah-amalia",
      // instagram: "https://instagram.com/sarahamalia",
    },
  },
  {
    id: "fatkhurrokhim", // Tambahkan ini
    name: "Fatkhurrokhim",
    position: "Advisor",
    description:
      "Memberikan pengawasan dan insight terkait arah gerak organisasi.",
    image: "/assets/images/teams/Fatkhurrokhim.webp",
    socials: {
      // linkedin: "https://linkedin.com/in/marta-widjanarko",
      // instagram: "https://instagram.com/marta_widjanarko",
      // email: "marta@aprfoundation.org",
    },
  },
  {
    id: "safriko-desna", // Tambahkan ini
    name: "Safriko Desna Putra",
    position: "Advisor",
    description:
      "Memberikan insight terkait program pengembangan leadership, talent dan future workforce.",
    image: "/assets/images/teams/Safriko Desna Putra.webp",
    socials: {
      // linkedin: "https://linkedin.com/in/marta-widjanarko",
      // instagram: "https://instagram.com/marta_widjanarko",
      // email: "marta@aprfoundation.org",
    },
  },
  {
    id: "elfina-dewi", // Tambahkan ini
    name: "Elfina Dewi Roseningrum",
    position: "Foundation Secretary",
    description: "Memimpin dan mendukung proses administratif.",
    image: "/assets/images/teams/Elfina Dewi Roseningrum.webp",
    socials: {
      // linkedin: "https://linkedin.com/in/marta-widjanarko",
      // instagram: "https://instagram.com/marta_widjanarko",
      // email: "marta@aprfoundation.org",
    },
  },
  {
    id: "dwi-rahmanwati", // Tambahkan ini
    name: "Dwi Rahmawati Utami",
    position: "Foundation Treasury",
    description:
      "Memimpin pengelolaan keuangan dan memastikan stabilitas operasional.",
    image: "/assets/images/teams/Dwi Rahmawati Utami.webp",
    socials: {
      // linkedin: "https://linkedin.com/in/marta-widjanarko",
      // instagram: "https://instagram.com/marta_widjanarko",
      // email: "marta@aprfoundation.org",
    },
  },
  {
    id: "abdul-malik", // Tambahkan ini
    name: "Abdul Malik Fajar",
    position: "Creative Lead",
    description:
      "Memimpin proses kreatif dengan prinsip inovatif dan etos kerja dedikatif.",
    image: "/assets/images/teams/Abdul Malik Fajar.webp",
    socials: {
      // linkedin: "https://linkedin.com/in/marta-widjanarko",
      // instagram: "https://instagram.com/marta_widjanarko",
      // email: "marta@aprfoundation.org",
    },
  },
  {
    id: "annisa-bulan", // Tambahkan ini
    name: "Annisa Bulan Dewi",
    position: "Talent Lead",
    description:
      "Memimpin program pengembangan leadership, talent dan future workforce.",
    image: "/assets/images/teams/Annisa Bulan Dewi.webp",
    socials: {
      // linkedin: "https://linkedin.com/in/marta-widjanarko",
      // instagram: "https://instagram.com/marta_widjanarko",
      // email: "marta@aprfoundation.org",
    },
  },
  {
    id: "audri-syahroni", // Tambahkan ini
    name: "Audri Syahroni",
    position: "Agripreneurship Lead",
    description:
      "Memimpin program pengembangan agripreneurship dan food resilience.",
    image: "/assets/images/teams/Audri Syahroni.webp",
    socials: {
      // linkedin: "https://linkedin.com/in/marta-widjanarko",
      // instagram: "https://instagram.com/marta_widjanarko",
      // email: "marta@aprfoundation.org",
    },
  },
  {
    id: "marta-fibriantika", // Tambahkan ini
    name: "Marta Fibriantika",
    position: "Partnership Lead",
    description:
      "Menjalin dan membina kerjasama berkelanjutan dengan mitra strategis.",
    image: "/assets/images/teams/Marta Fibriantika.webp",
    socials: {
      // linkedin: "https://linkedin.com/in/marta-widjanarko",
      // instagram: "https://instagram.com/marta_widjanarko",
      // email: "marta@aprfoundation.org",
    },
  },
  {
    id: "dwi-maya", // Tambahkan ini
    name: "Dwi Maya Wijayanti",
    position: "Finance Lead",
    description: "Mengelola keuangan dan memastikan stabilitas operasional.",
    image: "/assets/images/teams/Dwi Maya Wijayanti.webp",
    socials: {
      // linkedin: "https://linkedin.com/in/marta-widjanarko",
      // instagram: "https://instagram.com/marta_widjanarko",
      // email: "marta@aprfoundation.org",
    },
  },
  {
    id: "jainal-abidin", // Tambahkan ini
    name: "Muhammad Jainal Abidin",
    position: " Project Officer",
    description:
      "Mendukung operasional program dan memastikan deliverable tercapai dengan baik.",
    image: "/assets/images/teams/Muhammad Jainal Abidin.webp",
    socials: {
      // linkedin: "https://linkedin.com/in/marta-widjanarko",
      // instagram: "https://instagram.com/marta_widjanarko",
      // email: "marta@aprfoundation.org",
    },
  },
];

export const whyChooseAPR: FeatureCard[] = [
  {
    id: "expert-led",
    title: "Fokus pada Kualitas",
    description:
      "Setiap program kami dirancang dan diimplementasikan dengan standar nasional tertinggi, memastikan hasil yang optimal dan berdampak.",
    icon: "GraduationCap",
  },
  {
    id: "awareness",
    title: "Peduli Pengembangan",
    description:
      "Kami memahami bahwa setiap individu dan organisasi memiliki potensi unik. Prioritas kami adalah membantu Anda mengidentifikasi dan mengembangkannya",
    icon: "ShieldCheck",
  },
  {
    id: "innovation",
    title: "Inovasi Berkelanjutan",
    description:
      "Kami senantiasa menghadirkan metode pembelajaran yang fresh, relevan, dan efektif, beradaptasi dengan dinamika kebutuhan pasar dan teknologi.",
    icon: "Globe",
  },
  {
    id: "impact-measured",
    title: "Hasil Terukur",
    description:
      "Kami berkomitmen untuk memberikan dampak nyata yang dapat diukur, mendukung pertumbuhan individu dan keberlanjutan organisasi Anda.",
    icon: "Trophy",
  },
];

export const partnerLogos: PartnerLogo[] = [
  {
    name: "Danantara",
    industry: "Government",
    logoUrl: "/assets/logos/danantara.png",
  },
  {
    name: "BAZNAS",
    industry: "Government",
    logoUrl: "/assets/logos/baznas.png",
  },
  {
    name: "Kementerian Kependudukan dan Pembangunan Keluarga",
    industry: "Government",
    logoUrl:
      "/assets/logos/kementerian-kependudukan-dan-pembangunan-keluarga.png",
  },
  {
    name: "Solusi Bangun Indonesia",
    industry: "Construction & Building Materials",
    logoUrl: "/assets/logos/Logo_Solusi_Bangun_Indonesia.png",
  },
  {
    name: "Kilang Pertamina Internasional",
    industry: "Oil & Gas",
    logoUrl: "/assets/logos/Kilang Pertamina Internasional.png",
  },
  {
    name: "PLN",
    industry: "Energy & Utilities",
    logoUrl: "/assets/logos/PLN.png",
  },
  {
    name: "Kementerian Pariwisata",
    industry: "Government",
    logoUrl: "/assets/logos/kementrian-pariwisata.png",
  },
  {
    name: "Kementerian Ekonomi Kreatif",
    industry: "Government",
    logoUrl: "/assets/logos/kementerian-ekonomi-kreatif.png",
  },
  {
    name: "Badan POM",
    industry: "Government",
    logoUrl: "/assets/logos/badan-POM.png",
  },
  {
    name: "Pemerintah Kabupaten Cilacap",
    industry: "Government",
    logoUrl: "/assets/logos/cilacap.png",
  },
  {
    name: "S2P",
    industry: "Organization",
    logoUrl: "/assets/logos/s2p.png",
  },
  {
    name: "Kementerian Koordinator Bidang Pemberdayaan Masyarakat",
    industry: "Government",
    logoUrl:
      "/assets/logos/kementerian-koordinator-bidang-pemberdayaan-masyarakat.png",
  },
  {
    name: "Rumah Tempe",
    industry: "Food & Beverage",
    logoUrl: "/assets/logos/rumahtempe.png",
  },
  {
    name: "Beasiswa 100",
    industry: "Education",
    logoUrl: "/assets/logos/beasiwa-100.png",
  },
  {
    name: "Dedikasi Untuk Negeri",
    industry: "Social Organization",
    logoUrl: "/assets/logos/dedikasi-untuk-negeri.png",
  },
  {
    name: "IDNL",
    industry: "Organization",
    logoUrl: "/assets/logos/IDNL.png",
  },
];
