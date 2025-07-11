document.addEventListener('DOMContentLoaded', (event) => {

       // Kamus Terjemahan
       const translations = {
        nav_home: { id: "Home", en: "Home" },
        nav_about: { id: "Tentang", en: "About" },
        nav_skills: { id: "Keahlian", en: "Skills" },
        nav_work: { id: "Karya", en: "Work" },
        nav_projects: { id: "Proyek", en: "Projects" },
        nav_templates: { id: "Template", en: "Templates" },
        nav_writings: { id: "Antologi", en: "Anthology" },
        nav_cv: { id: "Curriculum Vitae", en: "Resume" },
        nav_contact: { id: "Kontak", en: "Contact" },
        home_greeting: { id: "Halo, saya <span class='text-blue-400'>Julian</span>.", en: "Hello, I'm <span class='text-blue-400'>Julian</span>." },
        home_subtitle: { id: "> Junior Coder | Writer", en: "> Junior Coder | Writer" },
        home_description: { id: "Saya suka membangun hal-hal baru dan memecahkan masalah kompleks dengan kode. Mari ciptakan sesuatu yang luar biasa.", en: "I love building new things and solving complex problems with code. Let's create something amazing." },
        home_button: { id: "Lihat Proyek Saya", en: "View My Projects" },
        about_title: { id: "Tentang Saya", en: "About Me" },
        about_p1: { id: "Saya adalah seorang pengembang perangkat lunak yang bersemangat dengan fokus pada <span class='text-blue-400 font-semibold'>pengembangan web full-stack</span>.", en: "I am a passionate software developer with a focus on <span class='text-blue-400 font-semibold'>full-stack web development</span>." },
        about_p2: { id: "Filosofi saya dalam coding adalah <span class='text-green-400 font-semibold'>kemudahan, efisiensi, dan keterbacaan</span>. Saya percaya bahwa kode yang baik tidak hanya berfungsi, tetapi juga mudah dipahami dan dipelihara oleh orang lain (termasuk diri saya sendiri di masa depan!). Saya selalu mencari cara untuk belajar teknologi baru dengan panduan <span class='text-red-400 font-semibold'>Artificial Intelligence</span> dan meningkatkan keterampilan saya.", en: "My coding philosophy is <span class='text-green-400 font-semibold'>simplicity, efficiency, and readability</span>. I believe good code not only works, but is also easy for others (and my future self!) to understand and maintain. I am always looking for ways to learn new technologies with the guidance of <span class='text-red-400 font-semibold'>Artificial Intelligence</span> and improve my skills." },
        about_p3: { id: "Ketika tidak sedang coding, saya biasanya <span class='text-yellow-400 font-semibold'>membaca buku, bermain game, atau menulis cerita sederhana.</span>", en: "When I'm not coding, I'm usually <span class='text-yellow-400 font-semibold'>reading books, playing games, or writing simple stories.</span>" },
        skills_title: { id: "Keahlian Saya", en: "My Skills" },
        skills_p1: { id: "Bahasa & Database", en: "Language & Database" },
        skills_p1_desc_php: { id: "Belajar bahasa pemrograman PHP untuk pengembangan web sisi server, termasuk pembuatan aplikasi dinamis, mengelola database", en: "Learn PHP programming language for server-side web development, including creating dynamic applications, managing databases." },
        skills_p1_desc_mysql: { id: "Dipandu oleh Artifial Intelligence dalam merancang, mengelola, dan melakukan query pada database relasional MySQL untuk menyimpan dan mengambil data aplikasi secara efisien.", en: "Guided by Artificial Intelligence in designing, managing, and querying a MySQL relational database to efficiently store and retrieve application data." },
        skills_p2_desc_laravel: { id: "Pengalaman membangun aplikasi web yang kompleks dan skalabel melalui peta AI menggunakan framework Laravel, termasuk Eloquent, Blade, dan Artisan.", en: "Experience building complex and scalable web applications through AI maps using the Laravel framework, including Eloquent, Blade, and Artisan." },
        skills_p2_desc_ci4: { id: "Membangun aplikasi web yang cepat dan ringan menggunakan framework CodeIgniter 4 dengan pola desain MVC.", en: "Build fast and lightweight web applications using the CodeIgniter 4 framework with the MVC design pattern." },
        skills_p2_desc_bootstrap: { id: "Menggunakan framework CSS Bootstrap untuk membangun situs web yang responsif dan menarik secara visual dengan cepat dan efisien.", en: "Use the Bootstrap CSS framework to build responsive and visually appealing websites quickly and efficiently." },
        skills_p3: { id: "Keahlian Profesional", en: "Professional Skills" },
        skills_p3_desc_cw: { id: "Keahlian dalam menulis teks yang persuasif dan menarik untuk tujuan pemasaran, periklanan, atau konten web.", en: "Skill in writing persuasive and engaging text for marketing, advertising, or web content purposes." },
        skills_p3_desc_ps: { id: "Kemampuan untuk menyampaikan informasi atau presentasi di depan umum dengan jelas, percaya diri, dan menarik.", en: "The ability to convey information or presentations in public clearly, confidently, and engagingly." },
        skills_p3_desc_tw: { id: "Mampu bekerja secara efektif baik sebagai individu yang mandiri dengan inisiatif tinggi maupun sebagai anggota tim yang kolaboratif.", en: "Able to work effectively both as an independent individual with high initiative and as a collaborative team member." },
        skills_p3_tw: { id: "Kerja Tim & Mandiri", en: "Teamwork & Independent" },
        skills_p3_desc_gd: { id: "Mampu dalam menciptakan visual yang menarik dan efektif untuk berbagai media, menggunakan perangkat lunak desain grafis mobile.", en: "Capable of creating engaging and effective visuals for a variety of media, using mobile graphic design software." },
        skills_detail: { id: "Pilih salah satu keahlian di samping untuk melihat detailnya.", en: "Select one of the skills next to see its details." },
        e_purchasing_desc: { id: "  Sistem informasi purchasing yang mengadaptasi proses bisnis purchasing berbasis web-responsive. Dapat mengelola supplier, product, stock, purchase-request, purchase-order, penerimaan barang, permintaan barangi internal, faktur, laporan dan pengguna. Menggunakan Laravel 11 dan PHP serta MySQL. Cocok untuk bidang Purchasing.", en: "A purchasing information system that adapts responsive web-based purchasing business processes. It can manage suppliers, products, stock, purchase requests, purchase orders, goods receipts, internal goods requests, invoices, reports, and users. It uses Laravel 11, PHP, and MySQL. It's suitable for the Purchasing sector." },
        features: { id: "Fitur", en: "Features" },
        simpeg_title: { id: "SIMPEG Karyawan", en: "Employee Management" },
        simpeg_desc: { id: " Proyek ini berfokus pada visualisasi data interaktif untuk tren skor kinerja Bulanan. Cocok untuk mengelola performa karyawan dalam perusahaan. Menggunakan Laravel 11, PHP 8.3, MySQL Laragon, Tailwind.css dan Alpine.js serta Chart.js.", en: "This project focuses on interactive data visualization for monthly performance score trends. It's suitable for managing employee performance within a company. It uses Laravel 11, PHP 8.3, MySQL Laragon, Tailwind.css, Alpine.js, and Chart.js." },
        myshop_title: { id: "TokoKu", en: "MyShop" },
        myshop_desc: { id: " Proyek marketplace-like cocok untuk membangun toko digital independen. Mampu mengelola produk, kupon, melakukan belanja dan seterusnya. Menggunakan Laravel 11, PHP 8+, Tailwind.css, MySQL XAMPP dan Alpine.js serta Chart.js.", en: "This marketplace-like project is perfect for building a standalone digital store. It can manage products, coupons, manage purchases, and more. It uses Laravel 11, PHP 8+, Tailwind.css, MySQL, XAMPP, Alpine.js, and Chart.js." },
        inv_title: { id: "Manajemen Inventori", en: "Inventory Management" },
        inv_desc: { id: " Aplikasi CRUD lengkap untuk manajemen inventori berbasis web. Dibangun menggunakan CodeIgniter 4 serta Laragon dengan fitur hak akses, ekspor data, dan dashboard dinamis.", en: "A complete CRUD application for web-based inventory management. Built using CodeIgniter 4 and Laragon, it features access rights, data export, and a dynamic dashboard." },
        dss_title: { id: "Sistem Pendukung Keputusan", en: "Decision Support System" },
        dss_desc: { id: "Aplikasi desktop yang dibangun dengan Java Swing untuk membantu pengambilan keputusan menggunakan metode SAW. Dilengkapi manajemen data CRUD penuh dan antarmuka modern.", en: "A desktop application built with Java Swing to support decision-making using the SAW method. It features full CRUD data management and a modern interface." },
        blog_title: { id: "Bloguv: Aplikasi Blog", en: "Bloguv: Blog Application" },
        blog_desc: { id: " Aplikasi blog lengkap yang dibangun dari nol menggunakan Laravel 10. Mencakup panel admin komprehensif dengan sistem role, CRUD penuh, rich text editor, upload gambar, moderasi komentar, dan antarmuka publik yang modern.", en: "A complete blog application built from scratch using Laravel 10. Includes a comprehensive admin panel with a role system, full CRUD, rich text editor, image upload, comment moderation, and a modern public interface." },
        presence_title: { id: "PresenceCorp: Sistem Presensi", en: "PresenceCorp: Presence System" },
        presence_desc: { id: " Sistem informasi presensi karyawan lengkap yang dibangun dari nol menggunakan Laravel 10. Mencakup manajemen kehadiran, cuti, pengguna, dan pengaturan dinamis dengan antarmuka yang modern dan responsif.", en: "A complete employee attendance information system built from scratch using Laravel 10. Includes attendance, leave, user management, and dynamic settings with a modern and responsive interface." },
        school_demo_title: { id: "Template Profil Sekolah", en: "School Profile Template" },
        school_demo_desc: { id: "Template website profil sekolah yang modern, responsif, dan kaya fitur. Dibangun dari nol hanya dengan HTML, CSS, dan JavaScript murni untuk memastikan performa yang cepat dan kemudahan kustomisasi.", en: "A modern, responsive, and feature-rich school profile website template. Built from the ground up using only pure HTML, CSS, and JavaScript to ensure fast performance and easy customization." },
        lms_title: { id: "Template Learning Management System (LMS)", en: "Learning Management System Template" },
        lms_desc: { id: "Template frontend LMS yang kaya fitur, dibangun dari nol hanya dengan HTML, CSS, dan JavaScript murni. Mencakup alur pengguna yang lengkap, desain responsif, dan tema terang/gelap. Gunakan email: user@example.com dan kata sandi: password123.", en: "A feature-rich LMS frontend template built from scratch with only pure HTML, CSS, and JavaScript. It includes a complete user flow, responsive design, and light/dark themes. Use email: user@example.com and password: password123." },
        hypnus_title: { id: "Jalan Mati Hypnus", en: "Hypnus's Dead End" },
        hypnus_desc: { id: "Koleksi tulisan yang terdiri dari 10 bagian, diperuntukkan bagi orang-orang yang mampu memahami variasi makna.", en: "A collection of writings consisting of 10 parts, intended for people who are able to understand the variety of meanings." },
        aphorism: { id: "Aforisme", en: "Aphorism" },
        metaphor: { id: "Metafora", en: "Metaphor" },
        fantasy: { id: "Fantasi", en: "Fantasy" },
        read: { id: "Baca Koleksi Lengkap", en: "Read Collection" },
        nihilist_title: { id: "Anarkisme, Nihilisme Bias", en: "Anarchism, Nihilism Biases" },
        nihilist_desc: { id: "Sebuah koleksi yang berisi 10 cerita dan prosa, masing-masing dengan makna dan dunianya yang unik.", en: "A collection of 10 stories and prose, each with its own unique meaning and world." },
        reality: { id: "Realitas", en: "Reality" },
        prose: { id: "Prosa", en: "Prose" },
        copyright2: { id: "Dibuat dengan dan Semangat Koding", en: "Made with love and Coding Spirits" },
        projects_title: { id: "Proyek Pilihan", en: "Featured Projects" },
        templates_title: { id: "Template Demo Pilihan", en: "Featured Demo Templates" },
        writings_title: { id: "Antologi", en: "Anthology" },
        cv_title: { id: "Curriculum Vitae", en: "Resume" },
        cv_description: { id: "Lihat atau unduh CV lengkap saya dalam format PDF untuk informasi lebih rinci mengenai pengalaman dan kualifikasi saya.", en: "View or download my full resume in PDF format for more detailed information about my experience and qualifications." },
        cv_button: { id: "Unduh CV (PDF)", en: "Download Resume (PDF)" },
        contact_title: { id: "Hubungi Saya", en: "Contact Me" },
        contact_description: { id: "Tertarik untuk berkolaborasi atau hanya ingin menyapa? Jangan ragu untuk menghubungi saya melalui saluran berikut:", en: "Interested in collaborating or just want to say hi? Feel free to contact me through the following channels:" },
    };

    // Fungsi untuk Mengganti Bahasa
    const setLanguage = (lang) => {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[key] && translations[key][lang]) {
                element.innerHTML = translations[key][lang];
            }
        });
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        localStorage.setItem('preferredLanguage', lang);
    };

    // Event Listener untuk semua tombol bahasa
    const allLangBtns = document.querySelectorAll('.lang-btn');
    allLangBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedLang = e.target.dataset.lang;
            setLanguage(selectedLang);
        });
    });

    // Cek bahasa yang tersimpan saat halaman dimuat
    const savedLang = localStorage.getItem('preferredLanguage') || 'id';
    setLanguage(savedLang);

    // --- INISIALISASI DASAR ---
    lucide.createIcons();
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // --- LOGIKA SMOOTH SCROLL ---
    document.querySelectorAll('header nav ul li a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- LOGIKA NAVIGASI AKTIF SAAT SCROLL ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('header nav ul li a');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('nav-active');
                });
                const id = entry.target.getAttribute('id');
                const correspondingLink = document.querySelector(`header nav ul li a[href="#${id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('nav-active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        if (section.id) { // Hanya amati section yang punya ID
           scrollObserver.observe(section);
        }
    });

    // --- LOGIKA PANEL DETAIL KEAHLIAN ---
    const skillButtons = document.querySelectorAll('.skill-item-v2');
    const skillPlaceholder = document.getElementById('skill-placeholder');
    const skillDetailContent = document.getElementById('skill-detail-content');
    const detailImage = document.getElementById('skill-detail-image');
    const detailName = document.getElementById('skill-detail-name');
    const detailDescription = document.getElementById('skill-detail-description');

    skillButtons.forEach(button => {
        button.addEventListener('click', function() {
            skillButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const skillName = this.dataset.skillName;
            const skillImage = this.dataset.skillImage;
            const skillDescription = this.dataset.skillDescription;
            detailName.textContent = skillName;
            detailImage.src = skillImage;
            detailImage.alt = skillName + " Image";
            detailDescription.textContent = skillDescription;
            skillPlaceholder.classList.add('hidden');
            skillDetailContent.classList.remove('hidden');
        });
    });
    
    // --- LOGIKA MODAL PROYEK ---
    const projectDemoBtns = document.querySelectorAll('.project-demo-btn');
    const projectModal = document.getElementById('projectModal');
    const closeProjectModalBtn = document.getElementById('closeProjectModalBtn');
    const modalProjectName = document.getElementById('modalProjectName');

    projectDemoBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const projectCard = this.closest('.project-card');
            const projectName = projectCard.dataset.projectName;
            const projectFeaturesJson = projectCard.dataset.projectFeatures;
            let projectFeatures = [];
            try {
                projectFeatures = JSON.parse(projectFeaturesJson);
            } catch (error) {
                console.error("Error parsing project features JSON:", error);
                return;
            }

            modalProjectName.textContent = projectName;
            
            const oldContainer = projectModal.querySelector('.flex.flex-col.md\\:flex-row');
            if (oldContainer) oldContainer.remove();

            const mainContainer = document.createElement('div');
            mainContainer.className = 'flex flex-col md:flex-row gap-6 mt-4';
            const tabsContainer = document.createElement('div');
            tabsContainer.id = 'modalProjectTabs';
            tabsContainer.className = 'flex-shrink-0 md:w-1/4 overflow-y-auto md:max-h-[60vh]';
            const contentContainer = document.createElement('div');
            contentContainer.id = 'modalProjectContent';
            contentContainer.className = 'flex-grow';

            projectFeatures.forEach((feature, index) => {
                const tabButton = document.createElement('button');
                tabButton.className = 'tab-button';
                tabButton.textContent = feature.title;
                tabButton.dataset.target = `feature-${index}`;
                tabsContainer.appendChild(tabButton);

                const tabContent = document.createElement('div');
                tabContent.className = 'tab-content';
                tabContent.id = `feature-${index}`;
                tabContent.innerHTML = `
                    <img src="${feature.image}" alt="${feature.title}" class="modal-image" onerror="this.style.display='none'">
                    <h4 class="text-xl font-semibold text-blue-400 my-2">${feature.title}</h4>
                    <p class="text-gray-300">${feature.description}</p>
                `;
                contentContainer.appendChild(tabContent);

                if (index === 0) {
                    tabButton.classList.add('active');
                    tabContent.classList.add('active');
                }
            });

            tabsContainer.querySelectorAll('.tab-button').forEach(button => {
                button.addEventListener('click', function() {
                    tabsContainer.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
                    contentContainer.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                    this.classList.add('active');
                    document.getElementById(this.dataset.target).classList.add('active');
                });
            });
            
            mainContainer.appendChild(tabsContainer);
            mainContainer.appendChild(contentContainer);
            modalProjectName.after(mainContainer);
            projectModal.classList.add('active');
        });
    });

    // Event listener untuk menutup modal proyek
    const closeModal = () => projectModal.classList.remove('active');
    closeProjectModalBtn.addEventListener('click', closeModal);
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            closeModal();
        }
    });

// --- LOGIKA MODAL TULISAN (VERSI RESPONSIVE DENGAN DROPDOWN) ---
const writingModalBtns = document.querySelectorAll('.writing-modal-btn');
const writingModal = document.getElementById('writingModal');

if (writingModal) {
const closeWritingModalBtn = document.getElementById('closeWritingModalBtn');
const modalWritingTitle = document.getElementById('modalWritingTitle');
const modalWritingContent = document.getElementById('modalWritingContent');

const clearModalContent = () => {
const oldDynamicContent = writingModal.querySelector('.dynamic-modal-container');
if (oldDynamicContent) oldDynamicContent.remove();
modalWritingContent.innerHTML = '';
modalWritingContent.style.display = 'none';
};

writingModalBtns.forEach(btn => {
btn.addEventListener('click', function(e) {
    e.preventDefault();
    clearModalContent();

    const card = this.closest('.project-card');
    const type = card.dataset.writingType || 'simple';
    const title = card.dataset.writingTitle;

    modalWritingTitle.textContent = title;

    if (type === 'tabbed') {
        const pagesJson = card.dataset.writingPages;
        let pages = [];
        try {
            pages = JSON.parse(pagesJson);
        } catch (error) {
            console.error("Error parsing JSON halaman tulisan:", error);
            return;
        }

        const mainContainer = document.createElement('div');
        mainContainer.className = 'flex flex-col md:flex-row gap-6 mt-4 dynamic-modal-container';
        
        const navContainer = document.createElement('div');
        navContainer.className = 'flex-shrink-0 md:w-1/4';

        const contentContainer = document.createElement('div');
        contentContainer.className = 'flex-grow';

        // --- MEMBUAT NAVIGASI ---
        // 1. Daftar Tombol untuk Desktop
        const desktopTabs = document.createElement('div');
        desktopTabs.className = 'desktop-tabs'; // Kelas untuk kontrol via CSS

        // 2. Dropdown untuk Mobile
        const mobileDropdown = document.createElement('select');
        mobileDropdown.className = 'mobile-dropdown'; // Kelas untuk kontrol via CSS

        pages.forEach((page, index) => {
            const targetId = `page-content-${index}`;

            // Isi daftar tombol desktop
            const tabButton = document.createElement('button');
            tabButton.className = 'tab-button';
            tabButton.textContent = page.title;
            tabButton.dataset.target = targetId;
            desktopTabs.appendChild(tabButton);

            // Isi dropdown mobile
            const option = document.createElement('option');
            option.value = targetId;
            option.textContent = page.title;
            mobileDropdown.appendChild(option);

            // Buat konten halaman
            const tabContent = document.createElement('div');
            tabContent.className = 'tab-content';
            tabContent.id = targetId;
            tabContent.innerHTML = `<img src="${page.image}" alt="Gambar untuk ${page.title}" class="writing-modal-hero-image" onerror="this.style.display='none'">${page.content}`;
            contentContainer.appendChild(tabContent);

            if (index === 0) {
                tabButton.classList.add('active');
                tabContent.classList.add('active');
            }
        });
        
        navContainer.appendChild(desktopTabs);
        navContainer.appendChild(mobileDropdown);

        // --- FUNGSI UNTUK PINDAH TAB ---
        const switchTab = (targetId) => {
            contentContainer.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            document.getElementById(targetId).classList.add('active');
            
            // Sinkronisasi antara desktop & mobile
            desktopTabs.querySelectorAll('.tab-button').forEach(b => b.classList.toggle('active', b.dataset.target === targetId));
            mobileDropdown.value = targetId;
        };

        // Event listener untuk tombol desktop
        desktopTabs.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', () => switchTab(button.dataset.target));
        });

        // Event listener untuk dropdown mobile
        mobileDropdown.addEventListener('change', (event) => switchTab(event.target.value));

        mainContainer.appendChild(navContainer);
        mainContainer.appendChild(contentContainer);
        modalWritingTitle.after(mainContainer);

    } else {
        modalWritingContent.style.display = 'block';
        const contentId = card.dataset.contentId;
        const contentElement = document.querySelector(`#writing-contents #${contentId}`);
        if (contentElement) {
            modalWritingContent.innerHTML = contentElement.innerHTML;
        }
    }
    writingModal.classList.add('active');
});
});

const closeWritingModal = () => writingModal.classList.remove('active');
closeWritingModalBtn.addEventListener('click', closeWritingModal);
writingModal.addEventListener('click', (e) => {
if (e.target === writingModal) closeWritingModal();
});
document.addEventListener('keydown', (e) => {
if (e.key === 'Escape' && writingModal.classList.contains('active')) closeWritingModal();
});

// --- LOGIKA UNTUK MENU HAMBURGER MOBILE ---
const menuToggle = document.getElementById('menu-toggle');
const mainMenu = document.getElementById('main-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (menuToggle && mainMenu) {
menuToggle.addEventListener('click', () => {
// Tampilkan atau sembunyikan menu saat tombol diklik
mainMenu.classList.toggle('active');
});
}

// Menutup menu secara otomatis saat salah satu link diklik (berguna untuk Single Page App)
navLinks.forEach(link => {
link.addEventListener('click', () => {
if (mainMenu.classList.contains('active')) {
    mainMenu.classList.remove('active');
}
});
});
}
});