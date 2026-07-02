import { VideoPortfolioItem } from "../types";

// ============================================
// SECTION 2: INDONESIA LEADERSHIP PROJECT (ILP)
// ============================================

export const leadershipData = {
  id: "leadership",
  icon: "/assets/logos/ILP.png", // Bisa diganti dengan image/logo nanti
  title: "INDONESIA LEADERSHIP PROJECT",
  badge: "Indonesia Leadership Projecteee",
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
      id: "government-leadership-training",
      title: "Pelatihan Kepemimpinan Aparatur Pemerintah",
      subtitle:
        "Membekali 120 aparatur sipil negara di Jakarta Selatan dengan kemampuan pengambilan keputusan yang etis, tata kelola digital, dan komunikasi krisis.",
      category: "Kepemimpinan",
      image:
        "/assets/images/leadership/Hari Pahlawan, 10 November 2019. Pemuda hadir untuk menuliskan tinta emas sejarah masa depan bangsa.jpg",
      year: "2019",
      description:
        "Program pengembangan kepemimpinan yang dirancang untuk meningkatkan kapasitas aparatur pemerintah melalui pembelajaran tentang kepemimpinan yang berintegritas, tata kelola digital, komunikasi strategis, dan pengambilan keputusan yang efektif.",
    },
    {
      id: "baznas-santripreneur",
      title: "Baznas Santripreneur",
      subtitle:
        "Program pemberdayaan santri melalui pelatihan kewirausahaan, pengembangan kepemimpinan, serta pendampingan dalam membangun usaha yang berkelanjutan.",
      category: "Talent",
      image: "/assets/images/leadership/IMG_0147.jpg",
      year: "2025",
      description:
        "Inisiatif pengembangan talenta bersama BAZNAS yang bertujuan membekali santri dengan keterampilan berwirausaha, pola pikir kepemimpinan, serta pengalaman praktis untuk menciptakan dampak ekonomi dan sosial yang berkelanjutan.",
    },
    {
      id: "townhall-muda",
      title: "Townhall Muda",
      subtitle:
        "Forum dialog interaktif yang mempertemukan pemuda, pemimpin, dan berbagai pemangku kepentingan untuk membahas isu kepemimpinan, inovasi, dan pembangunan masyarakat.",
      category: "Komunitas",
      image: "/assets/images/leadership/DSC00810.jpg",
      year: "2023",
      description:
        "Kegiatan diskusi dan kolaborasi yang mendorong partisipasi aktif generasi muda dalam bertukar gagasan, membangun jejaring, serta menciptakan solusi inovatif bagi tantangan sosial dan pembangunan bangsa.",
    },
  ],
};

// ============================================
// SECTION 3: REGENERATIVE AGRICULTURE
// ============================================

export const agricultureData = {
  id: "agriculture",
  icon: "/assets/logos/Mudatani.png",
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
      title: "Perawatan Rutin",
      subtitle:
        "Melaksanakan perawatan tanaman secara berkala melalui penyiraman, pemupukan, pengendalian hama, serta pemantauan pertumbuhan untuk menjaga produktivitas lahan.",
      category: "Agripreneurship",
      image: "/assets/images/agriculture/DSC07862.JPG",
    },
    {
      id: "agri-urban-farms",
      title: "Panen Raya",
      subtitle:
        "Momentum panen bersama yang menampilkan hasil budidaya pertanian berkualitas sekaligus memperkuat kolaborasi antara petani, komunitas, dan mitra.",
      category: "Food Resilience",
      image: "/assets/images/agriculture/DSC07867.JPG",
    },
    {
      id: "agri-organic-cocoa",
      title: "Pemasaran Hasil Pertanian",
      subtitle:
        "Mendukung petani dalam memperluas akses pasar melalui strategi pemasaran, peningkatan nilai tambah produk, serta kemitraan dengan berbagai sektor.",
      category: "Agripreneurship",
      image: "/assets/images/agriculture/DSC07886.JPG",
    },
  ],
};

// ============================================
// SECTION 4: CREATIVE MANAGEMENT
// ============================================

export const creativeData = {
  id: "creative",
  icon: "/assets/logos/creafo.jpg",
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
  ],
  portfolio: [
    {
      id: "creative-marta-agri",
      title: "ID Next Leader",
      subtitle:
        "Konten media sosial yang mengangkat semangat kepemimpinan generasi muda melalui edukasi, inspirasi, dan pengembangan karakter untuk menciptakan pemimpin masa depan Indonesia.",
      category: "Social Media",
      image: "/assets/images/social-media/idnl.jpeg",
    },
    {
      id: "creative-jakarta-green",
      title: "Dedikasi Untuk Negeri",
      subtitle:
        "Publikasi digital yang menampilkan kisah pengabdian, kontribusi, dan inspirasi individu maupun komunitas dalam memberikan dampak positif bagi masyarakat dan bangsa.",
      category: "Social Media",
      image: "/assets/images/social-media/dedikasi-untuk-negeri.jpeg",
    },
    {
      id: "creative-craftsmen-indonesia",
      title: "Beasiswa 10000",
      subtitle:
        "Konten informatif mengenai program beasiswa yang bertujuan memperluas akses pendidikan, memberikan informasi pendaftaran, serta mendorong lebih banyak generasi muda meraih kesempatan belajar.",
      category: "Social Media",
      image: "/assets/images/social-media/beasiswa-10000.jpeg",
    },
    {
      id: "creative-craftsmen-indonesia-test",
      title: "Rumah Tempe Indonesia",
      subtitle:
        "Konten promosi dan edukasi yang memperkenalkan inovasi produk olahan tempe, proses produksi, serta pemberdayaan masyarakat melalui pengembangan industri pangan lokal.",
      category: "Social Media",
      image: "/assets/images/social-media/rumah-tempe-indonesia.jpeg",
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
    title: "Waste to Energy - Danantara Indonesia",
    description:
      "Video corporate yang menampilkan solusi pengelolaan limbah menjadi energi berkelanjutan melalui inovasi teknologi, kolaborasi, dan komitmen terhadap pembangunan ramah lingkungan.",
    category: "Corporate TVC",
    thumbnail:
      "/assets/images/social-media/thumbnails/Waste to Energy - Danantara Indonesia.png",
    youtubeId: "8STMlxAM0y0",
    duration: "2:45",
  },
  {
    id: "vid-agri-doc",
    title: "BAZNAS Santripreneur 2025 - Kluster Haji dan Umroh",
    description:
      "Video dokumentasi program Santripreneur yang menyoroti pengembangan kewirausahaan santri pada kluster Haji dan Umrah melalui pelatihan, pendampingan, dan kolaborasi bersama BAZNAS.",
    category: "Mini-Documentary",
    thumbnail:
      "/assets/images/social-media/thumbnails/BAZNAS Santripreneur 2025 - Kluster Haji dan Umroh.png",
    youtubeId: "6ngUEPZVFZs",
    duration: "12:15",
  },
  {
    id: "vid-leadership-keynote",
    title: "Video Profil Kemendukbangga/BKKBN RI",
    description:
      "Video profil institusi yang memperkenalkan visi, misi, program unggulan, serta kontribusi Kemendukbangga/BKKBN RI dalam pembangunan keluarga dan kependudukan di Indonesia.",
    category: "Event Profile",
    thumbnail:
      "/assets/images/social-media/thumbnails/Video Profil KemendukbanggaBKKBN RI.png",
    youtubeId: "X66VfLXYV_4",
    duration: "4:20",
  },
  {
    id: "vid-leadership-keynote2",
    title: "Teaser Townhall Muda - Sustainable Energy",
    description:
      "Video teaser yang mengajak generasi muda untuk berpartisipasi dalam forum Townhall Muda dengan tema energi berkelanjutan melalui diskusi, kolaborasi, dan inovasi.",
    category: "Event Profile",
    thumbnail:
      "/assets/images/social-media/thumbnails/Teaser Townhall Muda - Sustainable Energy.png",
    youtubeId: "NOjF8rzmKU4",
    duration: "4:20",
  },
  {
    id: "vid-leadership-keynote3",
    title: "Duta Wisata Kabupaten Cilacap",
    description:
      "Video profil yang menampilkan potensi pariwisata, budaya, serta peran Duta Wisata Kabupaten Cilacap dalam mempromosikan destinasi dan kearifan lokal.",
    category: "Event Profile",
    thumbnail:
      "/assets/images/social-media/thumbnails/Duta Wisata Kabupaten Cilacap.png",
    youtubeId: "pLYLRlrwhBo",
    duration: "4:20",
  },
  {
    id: "vid-leadership-keynote4",
    title: "UMKM Bangkit dari Pandemi",
    description:
      "Video inspiratif yang mengangkat kisah kebangkitan pelaku UMKM melalui inovasi, adaptasi digital, dan semangat kolaborasi dalam menghadapi tantangan pascapandemi.",
    category: "Event Profile",
    thumbnail:
      "/assets/images/social-media/thumbnails/UMKM Bangkit dari Pandemi.png",
    youtubeId: "RKP7ZGxO9Vw",
    duration: "4:20",
  },
];
