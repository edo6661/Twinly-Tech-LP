import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: { about: "About Us", projects: "Projects" },
      hero: {
        title: "Empowering businesses with scalable tech",
        subtitle:
          "Web, Mobile & Custom App Development. Smart & accessible IT solutions for your future.",
        cta: "Let's Talk",
      },
      partners: {
        title: "Trusted by innovative companies worldwide",
      },
      about: {
        title: "About Us",
        description:
          "Twinlytech is a technology company dedicated to building robust and scalable digital solutions. We specialize in web and mobile app development, ensuring your business stays ahead in the digital era.",
      },
      projects: {
        title: "Our Projects",
        subtitle: "A glimpse into our recent work.",
        view: "Case Study",
        filters: { all: "All", web: "Web", mobile: "Mobile" },
        items: {
          carrefour: {
            title: "Carrefour",
            role: "Design System Designer",
            quote:
              '"Specify brought us confidence and ease of mind. Before, we used to be cautious and hesitant before updating our design tokens."',
            category: "Web Development",
          },
          nortal: {
            title: "Nortal",
            role: "Frontend Engineer",
            quote:
              '"This platform dramatically improved our team\'s velocity. We can now ship features faster than ever before."',
            category: "Web Development",
          },
          fintech: {
            title: "Fintech Mobile",
            role: "Mobile Developer",
            quote:
              '"The transition to this new architecture saved us countless hours of debugging and maintenance."',
            category: "Mobile Development",
          },
          health: {
            title: "Health Tracker",
            role: "Fullstack Developer",
            quote:
              '"We have seen a 40% increase in user engagement since implementing the new dashboard system."',
            category: "Mobile Development",
          },
          company: {
            title: "Company Profile",
            role: "Web Designer",
            quote:
              '"Our brand identity is now consistent across all platforms, making our codebase much cleaner."',
            category: "Web Development",
          },
          ewallet: {
            title: "E-Wallet Solutions",
            role: "Backend Engineer",
            quote:
              '"Handling thousands of transactions per second requires a robust architecture. This microservices approach delivered perfectly."',
            category: "Web Development",
          },
          smarthome: {
            title: "Smart Home IoT",
            role: "Mobile App Developer",
            quote:
              '"Controlling home appliances with zero latency was the goal. The WebSocket integration here is absolutely seamless."',
            category: "Mobile Development",
          },
          analytics: {
            title: "SaaS Analytics",
            role: "Frontend Developer",
            quote:
              '"Visualizing millions of data points smoothly on the browser was a challenge, but the new rendering engine solved it."',
            category: "Web Development",
          },
        },
      },
      testimonials: {
        title: "What They Say",
        subtitle:
          "Explore our clients' experiences. Scroll down to see their stories firsthand.",
        items: [
          {
            name: "Budi Santoso",
            role: "CEO TechCorp",
            text: "Outstanding collaboration! The team is highly professional.",
          },
          {
            name: "Siti Aminah",
            role: "Product Manager",
            text: "Our website design and performance improved drastically.",
          },
          {
            name: "Reza Rahadian",
            role: "Startup Founder",
            text: "Very responsive and solution-oriented. Highly recommended!",
          },
          {
            name: "Diana Putri",
            role: "Marketing Head",
            text: "Our sales conversion increased by 200% thanks to the new UI.",
          },
          {
            name: "Ahmad Faisal",
            role: "CTO DevIndo",
            text: "Clean and easy-to-maintain code. Awesome!",
          },
          {
            name: "Nadia Vega",
            role: "Creative Director",
            text: "The animations are buttery smooth and a feast for the eyes.",
          },
          {
            name: "Kevin Wijaya",
            role: "E-commerce Owner",
            text: "Never disappoints. Always on time.",
          },
          {
            name: "Linda Kusuma",
            role: "Operations",
            text: "Team communication is excellent and transparent.",
          },
          {
            name: "Hendra Gunawan",
            role: "Lead Engineer",
            text: "The tech stack used is very up-to-date.",
          },
        ],
      },
    },
  },
  id: {
    translation: {
      nav: { about: "Tentang Kami", projects: "Proyek" },
      hero: {
        title: "Memberdayakan bisnis dengan teknologi terukur",
        subtitle:
          "Pengembangan Web, Mobile & Aplikasi Kustom. Solusi IT yang cerdas & mudah diakses untuk masa depan Anda.",
        cta: "Mari Berdiskusi",
      },
      partners: {
        title: "Dipercaya oleh perusahaan inovatif di seluruh dunia",
      },
      about: {
        title: "Tentang Kami",
        description:
          "Twinlytech adalah perusahaan teknologi yang berdedikasi untuk membangun solusi digital yang tangguh dan terukur. Kami ahli dalam pengembangan aplikasi web dan mobile, memastikan bisnis Anda tetap unggul di era digital.",
      },
      projects: {
        title: "Proyek Kami",
        subtitle: "Sekilas tentang karya terbaru kami.",
        view: "Studi Kasus",
        filters: { all: "Semua", web: "Web", mobile: "Mobile" },
        items: {
          carrefour: {
            title: "Carrefour",
            role: "Desainer Sistem Desain",
            quote:
              '"Specify memberikan kami kepercayaan diri dan ketenangan pikiran. Sebelumnya, kami sering ragu sebelum memperbarui token desain kami."',
            category: "Pengembangan Web",
          },
          nortal: {
            title: "Nortal",
            role: "Insinyur Frontend",
            quote:
              '"Platform ini secara drastis meningkatkan kecepatan tim kami. Kami sekarang dapat meluncurkan fitur lebih cepat dari sebelumnya."',
            category: "Pengembangan Web",
          },
          fintech: {
            title: "Fintech Mobile",
            role: "Pengembang Mobile",
            quote:
              '"Transisi ke arsitektur baru ini menyelamatkan kami dari berjam-jam proses debugging dan pemeliharaan."',
            category: "Pengembangan Mobile",
          },
          health: {
            title: "Health Tracker",
            role: "Pengembang Fullstack",
            quote:
              '"Kami melihat peningkatan 40% dalam keterlibatan pengguna sejak menerapkan sistem dasbor baru."',
            category: "Pengembangan Mobile",
          },
          company: {
            title: "Profil Perusahaan",
            role: "Desainer Web",
            quote:
              '"Identitas merek kami sekarang konsisten di semua platform, membuat basis kode kami jauh lebih bersih."',
            category: "Pengembangan Web",
          },
          ewallet: {
            title: "Solusi E-Wallet",
            role: "Insinyur Backend",
            quote:
              '"Menangani ribuan transaksi per detik membutuhkan arsitektur yang kuat. Pendekatan microservices ini bekerja dengan sempurna."',
            category: "Pengembangan Web",
          },
          smarthome: {
            title: "Smart Home IoT",
            role: "Pengembang Aplikasi Mobile",
            quote:
              '"Mengontrol peralatan rumah tangga tanpa latensi adalah tujuannya. Integrasi WebSocket di sini benar-benar mulus."',
            category: "Pengembangan Mobile",
          },
          analytics: {
            title: "SaaS Analitik",
            role: "Pengembang Frontend",
            quote:
              '"Memvisualisasikan jutaan titik data dengan lancar di browser adalah tantangan, tetapi mesin rendering baru ini berhasil menyelesaikannya."',
            category: "Pengembangan Web",
          },
        },
      },
      testimonials: {
        title: "Apa Kata Mereka?",
        subtitle:
          "Jelajahi pengalaman klien kami. Scroll ke bawah untuk melihat cerita mereka secara langsung.",
        items: [
          {
            name: "Budi Santoso",
            role: "CEO TechCorp",
            text: "Kerja sama yang luar biasa! Tim ini sangat profesional.",
          },
          {
            name: "Siti Aminah",
            role: "Product Manager",
            text: "Desain dan performa website kami meningkat drastis.",
          },
          {
            name: "Reza Rahadian",
            role: "Startup Founder",
            text: "Sangat responsif dan solutif. Highly recommended!",
          },
          {
            name: "Diana Putri",
            role: "Marketing Head",
            text: "Konversi penjualan kami naik 200% berkat UI baru.",
          },
          {
            name: "Ahmad Faisal",
            role: "CTO DevIndo",
            text: "Kode yang rapi dan mudah di-maintain. Keren!",
          },
          {
            name: "Nadia Vega",
            role: "Creative Director",
            text: "Animasi yang dibuat sangat mulus dan memanjakan mata.",
          },
          {
            name: "Kevin Wijaya",
            role: "E-commerce Owner",
            text: "Tidak pernah mengecewakan. Selalu on-time.",
          },
          {
            name: "Linda Kusuma",
            role: "Operations",
            text: "Komunikasi timnya sangat baik dan transparan.",
          },
          {
            name: "Hendra Gunawan",
            role: "Lead Engineer",
            text: "Stack teknologi yang dipakai sangat up-to-date.",
          },
        ],
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
