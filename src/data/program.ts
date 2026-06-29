import { ProgramService, ProcessStep } from "../types";

export const programsData: ProgramService[] = [
  {
    id: "program-management-service",
    title: "Manajemen Program",
    description:
      "Layanan pendampingan untuk memastikan setiap program berjalan secara terstruktur, tepat sasaran, dan mencapai target yang telah ditetapkan. Kami membantu mulai dari tahap perencanaan, pengelolaan pelaksanaan, hingga evaluasi dengan pendekatan yang adaptif dan terukur.",
    icon: "Compass",
    image: "/assets/images/leadership/DSC_0614.JPG",
    category: "Manajemen Program",
    benefits: [
      "Perencanaan program secara komprehensif dan terukur",
      "Manajemen timeline menggunakan pendekatan Agile",
      "Pengelolaan sumber daya yang efektif dan efisien",
      "Monitoring, evaluasi, dan pelaporan perkembangan program",
    ],
  },
  {
    id: "intensive-bootcamp",
    title: "Bootcamp Intensif",
    description:
      "Program pelatihan intensif yang dirancang untuk meningkatkan kompetensi peserta melalui kurikulum berbasis praktik, studi kasus, dan pendampingan langsung oleh mentor profesional sesuai dengan kebutuhan industri.",
    icon: "Award",
    image: "/assets/images/leadership/IMG_0147.jpg",
    category: "Pelatihan",
    benefits: [
      "Pelatihan komprehensif untuk pengembangan keterampilan spesifik",
      "Kurikulum terstruktur dengan pendekatan praktik langsung",
      "Pendampingan oleh mentor berpengalaman di bidangnya",
      "Studi kasus dan proyek nyata sesuai kebutuhan industri",
    ],
  },
  {
    id: "leadership-mentorship-program",
    title: "Leadership & Mentorship Program",
    description:
      "Program pengembangan kepemimpinan yang berfokus pada peningkatan kapasitas individu melalui mentoring personal, penguatan soft skills, serta perencanaan karier untuk menciptakan pemimpin yang berdampak.",
    icon: "Users",
    image: "/assets/images/leadership/DSC00810.jpg",
    category: "Kepemimpinan",
    benefits: [
      "Pengembangan leadership dan professional growth secara personal",
      "Mentoring eksklusif 1-on-1 bersama praktisi profesional",
      "Career guidance untuk perencanaan jalur karier yang jelas",
      "Pengembangan soft skills, komunikasi, dan kemampuan pengambilan keputusan",
    ],
  },
  {
    id: "creative-agency-service",
    title: "Layanan Agensi Kreatif",
    description:
      "Layanan kreatif end-to-end yang membantu organisasi, institusi, maupun perusahaan membangun identitas merek, menghasilkan konten berkualitas, dan memperluas jangkauan komunikasi melalui strategi kreatif yang efektif.",
    icon: "Sparkles",
    image: "/assets/images/social-media/background.avif",
    category: "Agensi Kreatif",
    benefits: [
      "Strategi merek, desain identitas visual, dan produksi konten multimedia",
      "Kolaborasi dengan tim kreatif dan pakar industri",
      "Pembuatan materi promosi untuk berbagai platform digital",
      "Peluang publikasi dan distribusi konten melalui berbagai media",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    letter: "I",
    title: "Intake & Insights",
    description:
      "Memahami kebutuhan unik klien melalui analisis mendalam dan diskusi interaktif.",
    icon: "Search",
    details: [
      "Sesi konsultasi untuk memahami kebutuhan dan tujuan program.",
      "Analisis kondisi, tantangan, dan potensi organisasi atau peserta.",
      "Identifikasi prioritas serta ruang lingkup layanan yang dibutuhkan.",
    ],
  },
  {
    letter: "D",
    title: "Direction",
    description:
      "Menyusun rencana strategis dan terstruktur yang selaras dengan tujuan yang ingin dicapai.",
    icon: "Route",
    details: [
      "Penyusunan strategi dan roadmap pelaksanaan program.",
      "Penentuan target, indikator keberhasilan, dan timeline kerja.",
      "Pemilihan metode, mentor, dan sumber daya yang paling sesuai.",
    ],
  },
  {
    letter: "E",
    title: "Execution",
    description:
      "Melakukan implementasi program dan layanan secara interaktif dan dinamis.",
    icon: "PlayCircle",
    details: [
      "Pelaksanaan program, pelatihan, atau pendampingan sesuai rencana.",
      "Kolaborasi aktif bersama mentor, fasilitator, dan seluruh pemangku kepentingan.",
      "Monitoring progres secara berkala untuk memastikan target tercapai.",
    ],
  },
  {
    letter: "A",
    title: "Assessment",
    description:
      "Evaluasi dampak dan memberikan laporan komprehensif untuk perbaikan berkelanjutan.",
    icon: "ClipboardCheck",
    details: [
      "Evaluasi hasil berdasarkan indikator yang telah ditetapkan.",
      "Penyusunan laporan dan dokumentasi pelaksanaan program.",
      "Rekomendasi pengembangan dan strategi tindak lanjut yang berkelanjutan.",
    ],
  },
];
