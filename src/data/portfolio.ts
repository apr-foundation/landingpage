import { PortfolioItem, VideoPortfolioItem } from "../types";

import {
  Users,
  Award,
  Sparkles,
  Globe,
  TrendingUp,
  Leaf,
  Sprout,
  PenTool,
  Zap,
  Target,
} from "lucide-react";

// ============================================
// SECTION 2: INDONESIA LEADERSHIP PROJECT (ILP)
// ============================================

export const leadershipData = {
  id: "leadership",
  icon: "👑", // Bisa diganti dengan image/logo nanti
  title: "INDONESIA LEADERSHIP PROJECT",
  badge: "Indonesia Leadership Project",
  description:
    "Indonesia Leadership Project adalah program pengembangan talenta komprehensif yang dirancang oleh APR Foundation untuk mencetak pemimpin-pemimpin masa depan Indonesia yang berdaya saing global. Program ini berfokus pada tiga pilar utama.",
  tags: ["Leadership", "Talent", "Future Workforce"],
  pillars: [
    {
      id: 1,
      title: "Leadership",
      description:
        "Membangun kapasitas kepemimpinan yang kuat melalui pelatihan, mentoring, dan pengalaman nyata di lapangan, sehingga peserta siap memimpin di berbagai sektor.",
    },
    {
      id: 2,
      title: "Talent",
      description:
        "Mengidentifikasi dan mengembangkan talenta terbaik Indonesia, memberikan ruang bagi individu untuk mengeksplorasi potensi diri dan mengasah keahlian yang relevan dengan kebutuhan zaman.",
    },
    {
      id: 3,
      title: "Future Workforce",
      description:
        "Mempersiapkan generasi penerus bangsa agar mampu beradaptasi dan berkontribusi secara optimal di tengah perubahan dunia kerja.",
    },
  ],
  portfolio: [
    {
      id: "ilp-gov-cohort-24",
      title: "Sovereign Public Policy Cohort",
      subtitle:
        "Nurturing 120 regional civil servants in South Jakarta in ethical decision-making, digital governance, and crisis communications.",
      category: "Leadership",
      image:
        "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80",
      year: "2024",
      description:
        "A 6-month simulation resulting in three municipal bills draft models that were formally reviewed by the regional parliament.",
    },
    {
      id: "ilp-tech-futures",
      title: "Future Tech Executive Forum",
      subtitle:
        "High-caliber tech bootcamps in collaboration with the Nusantara Creative Guild targeting emerging engineering leads.",
      category: "Talent",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
      year: "2023",
      description:
        "Upskilling 85 tech team leads on cross-functional alignment, product strategy, and generative AI engineering.",
    },
    {
      id: "ilp-women-lead",
      title: "Srikandi Leadership Academy",
      subtitle:
        "Empowering young women leaders from rural communities with entrepreneurial skills and financial independence blueprints.",
      category: "Future Workforce",
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80",
      year: "2025",
      description:
        "An accelerator program supporting 40 women-led social enterprises spanning arts, sustainable garments, and digital tutoring.",
    },
  ],
};

// ============================================
// SECTION 3: REGENERATIVE AGRICULTURE
// ============================================

export const agricultureData = {
  id: "agriculture",
  icon: "🌾",
  title: "REGENERATIVE AGRICULTURE",
  badge: "Mudatani",
  description:
    "Mudatani adalah program pertanian regeneratif yang digagas oleh APR Foundation untuk mendorong transformasi sektor pertanian Indonesia melalui dua pilar utama:",
  tags: ["Agripreneurship", "Food Resilience"],
  pillars: [
    {
      id: 1,
      title: "Agripreneurship",
      description:
        "Menumbuhkan jiwa wirausaha di bidang pertanian bagi generasi muda Indonesia, dengan membekali mereka keterampilan bisnis agrikultur modern, inovasi teknologi pertanian, serta kemampuan mengelola usaha tani yang berkelanjutan dan menguntungkan.",
    },
    {
      id: 2,
      title: "Food Resilience",
      description:
        "Membangun ketahanan pangan nasional melalui praktik pertanian regeneratif yang menjaga kesuburan tanah, mengurangi ketergantungan pada bahan kimia, dan memastikan produksi pangan yang sehat, stabil, dan ramah lingkungan untuk generasi mendatang.",
    },
    {
      id: 3,
      title: "Sustainable Agriculture",
      description:
        "Mendorong penerapan sistem pertanian berkelanjutan melalui pemanfaatan teknologi, pengelolaan sumber daya alam yang bijaksana, serta praktik budidaya yang ramah lingkungan guna meningkatkan produktivitas dan kesejahteraan petani.",
    },
  ],
  portfolio: [
    {
      id: "agri-biochar-2024",
      title: "Java Biochar Cooperative Pilot",
      subtitle:
        "Revitalizing 120 hectares of depleted volcanic soil using specialized biochar kilns.",
      category: "Agripreneurship",
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "agri-urban-farms",
      title: "Jakarta Rooftop Sovereignty",
      subtitle:
        "Pioneering micro-farming loops on concrete rooftops to combat food supply volatility.",
      category: "Food Resilience",
      image:
        "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "agri-organic-cocoa",
      title: "Sulawesi Organic Cocoa Regeneration",
      subtitle:
        "Upskilling 200 smallholder cocoa farmers in regenerative composting and fair trade export protocols.",
      category: "Agripreneurship",
      image:
        "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

// ============================================
// SECTION 4: CREATIVE MANAGEMENT
// ============================================

export const creativeData = {
  id: "creative",
  icon: "🎨",
  title: "CREATIVE MANAGEMENT",
  badge: "Creafo",
  description:
    "Creafo adalah program manajemen kreatif dari APR Foundation yang dirancang untuk melahirkan dan memberdayakan talenta-talenta kreatif Indonesia yang siap bersaing di era ekonomi digital. Program ini berpijak pada dua pilar utama:",
  tags: ["Creative", "Digital Economy"],
  pillars: [
    {
      id: 1,
      title: "Creative",
      description:
        "Mengembangkan kemampuan kreatif tiap talenta di berbagai bidang industri kreatif, mulai dari konten digital, desain, produksi media, hingga storytelling. Tiap talenta dilatih untuk berpikir inovatif, mengekspresikan ide secara profesional, dan menciptakan karya yang berdampak.",
    },
    {
      id: 2,
      title: "Digital Economy",
      description:
        "Membekali tiap talenta dengan pemahaman mendalam tentang ekosistem ekonomi digital, termasuk strategi pemasaran digital, monetisasi konten, pengembangan bisnis kreatif berbasis platform, serta tren industri yang terus berkembang.",
    },
    {
      id: 3,
      title: "Creative Entrepreneurship",
      description:
        "Mendorong lahirnya pelaku usaha kreatif yang mampu mengubah ide menjadi produk dan layanan bernilai ekonomi melalui penguatan kemampuan bisnis, inovasi, kolaborasi, serta pemanfaatan teknologi digital.",
    },
  ],
  portfolio: [
    {
      id: "creative-marta-agri",
      title: '"Nafas Bumi" Social Campaign',
      subtitle:
        "An Instagram and TikTok digital narrative campaign explaining soil health mechanics directly to urban Gen-Z.",
      category: "Creative",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "creative-jakarta-green",
      title: "Jakarta Green Initiative Brand Kit",
      subtitle:
        "Developing standard corporate visual systems, website designs, and communications manuals for green tech NGOs.",
      category: "Digital Economy",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "creative-craftsmen-indonesia",
      title: "Indigenous Craftsmen Visual Archive",
      subtitle:
        "A high-definition video archive and photographic index cataloging vanishing handcrafting techniques in Kalimantan.",
      category: "Creative",
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "creative-craftsmen-indonesia-test",
      title: "Indigenous Craftsmen Visual Archive",
      subtitle:
        "A high-definition video archive and photographic index cataloging vanishing handcrafting techniques in Kalimantan.",
      category: "Creative",
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

// ============================================
// EXPORT ALL
// ============================================

export const portfolioSections = {
  leadership: leadershipData,
  agriculture: agricultureData,
  creative: creativeData,
};

export const videoPortfolio: VideoPortfolioItem[] = [
  {
    id: "vid-manifesto-25",
    title: "APR Foundation Corporate TVC 2025",
    description:
      "Our annual profile piece showcasing live agricultural fields in Java, class cohorts in Jakarta, and testimonials from public leadership figures.",
    category: "Corporate TVC",
    thumbnail:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    youtubeId: "dQw4w9WgXcQ", // Placeholder URL trigger or beautiful embedded modal play
    duration: "2:45",
  },
  {
    id: "vid-agri-doc",
    title: "“Generasi Bertani” Mini-Documentary",
    description:
      "A deep-dive look into how regional youth are bypassing office jobs to spearhead high-income organic soil franchises.",
    category: "Mini-Documentary",
    thumbnail:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80",
    youtubeId: "dQw4w9WgXcQ",
    duration: "12:15",
  },
  {
    id: "vid-leadership-keynote",
    title: "Indonesia Leadership Summit Highlights",
    description:
      "Highlighting top keynote addresses, panel debates, and pitch decks presented during our annual South Jakarta graduation gala.",
    category: "Event Profile",
    thumbnail:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    youtubeId: "dQw4w9WgXcQ",
    duration: "4:20",
  },
];
