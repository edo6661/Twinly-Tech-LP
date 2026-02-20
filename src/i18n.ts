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
      faq: {
        title: "Frequently Asked Questions",
        subtitle:
          "Find answers to common questions about our services and process.",
        items: [
          {
            question: "What services do you offer?",
            answer:
              "We specialize in end-to-end digital solutions, including Web Development, Mobile App Development, Custom Enterprise Software, and UI/UX Design.",
          },
          {
            question: "How long does a typical project take?",
            answer:
              "Project timelines vary depending on complexity. A standard web application might take 4-8 weeks, while complex mobile apps or enterprise platforms can take 3-6 months. We provide detailed timelines during the scoping phase.",
          },
          {
            question: "Do you provide post-launch support?",
            answer:
              "Yes, we offer ongoing maintenance and support packages to ensure your application remains secure, up-to-date, and performs optimally as your user base grows.",
          },
          {
            question: "What is your development process?",
            answer:
              "Our process typically follows Agile methodologies: Discovery & Planning, UI/UX Design, Development (with regular sprint reviews), Testing/QA, Deployment, and Post-Launch Support.",
          },
        ],
      },
      contact: {
        title: "Get in Touch",
        subtitle:
          "Have a project in mind? Let's build something great together. Fill out the form below and we'll get back to you shortly.",
        info: {
          email: "Email Us",
          phone: "Call Us",
          location: "Visit Us",
        },
        form: {
          name: "Your Name",
          email: "Your Email",
          message: "Your Message",
          placeholder: "Tell us about your project...",
          submit: "Send Message",
        },
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
      faq: {
        title: "Pertanyaan yang Sering Diajukan",
        subtitle:
          "Temukan jawaban untuk pertanyaan umum seputar layanan dan proses kami.",
        items: [
          {
            question: "Layanan apa saja yang Anda tawarkan?",
            answer:
              "Kami fokus pada solusi digital dari hulu ke hilir, termasuk Pengembangan Web, Pengembangan Aplikasi Mobile, Perangkat Lunak Perusahaan Kustom, dan Desain UI/UX.",
          },
          {
            question: "Berapa lama waktu yang dibutuhkan untuk sebuah proyek?",
            answer:
              "Waktu pengerjaan sangat bergantung pada kompleksitas. Aplikasi web standar biasanya memakan waktu 4-8 minggu, sementara aplikasi mobile kompleks atau platform enterprise bisa memakan waktu 3-6 bulan. Kami akan memberikan estimasi waktu yang detail saat fase perencanaan.",
          },
          {
            question: "Apakah Anda menyediakan dukungan setelah peluncuran?",
            answer:
              "Ya, kami menawarkan paket pemeliharaan dan dukungan berkelanjutan untuk memastikan aplikasi Anda tetap aman, mutakhir, dan berkinerja optimal seiring bertambahnya pengguna.",
          },
          {
            question: "Bagaimana proses pengembangan yang Anda lakukan?",
            answer:
              "Proses kami biasanya mengikuti metodologi Agile: Penemuan & Perencanaan, Desain UI/UX, Pengembangan (dengan tinjauan sprint rutin), Pengujian/QA, Peluncuran, dan Dukungan Pasca-Peluncuran.",
          },
        ],
      },
      contact: {
        title: "Hubungi Kami",
        subtitle:
          "Punya ide proyek? Mari bangun sesuatu yang hebat bersama. Isi formulir di bawah ini dan kami akan segera menghubungi Anda.",
        info: {
          email: "Email Kami",
          phone: "Telepon Kami",
          location: "Kunjungi Kami",
        },
        form: {
          name: "Nama Anda",
          email: "Email Anda",
          message: "Pesan Anda",
          placeholder: "Ceritakan tentang proyek Anda...",
          submit: "Kirim Pesan",
        },
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
