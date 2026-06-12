/**
 * SGR GRUP - PROJELER DİNAMİK GEÇİŞ MOTORU V1
 */

const projectsDatabase = {
ongoing: [
{
    slug: "nebi-abide-suites-3-etap",
    title: "Nebi Abide Suites 3. Etap",
    status: "Satışa Açık Aktif Proje",
    location: "Düzce / Türkiye",
    year: "2025",
    image: "assets/images/projects/nebi-abide-suites3/01.webp",
    summary: "SGR Grup güvencesiyle yükselen, öz sermaye modeliyle geliştirilen modern konut projesi.",
    tag: "SATIŞA AÇIK",
    closed: false,

    gallery: Array.from({ length: 14 }, (_, i) => 
        `assets/images/projects/nebi-abide-suites3/${String(i + 1).padStart(2, '0')}.webp`
    ),

    detailText: "Nebi Abide Suites 3. Etap, SGR Grup’un öz sermaye gücüyle geliştirilen, modern şehir yaşamını güvenli yatırım anlayışıyla bir araya getiren özel bir konut projesidir. Proje; mimari çizgisi, lokasyon avantajı, ödeme kolaylığı ve nitelikli yaşam alanlarıyla yatırımcılar için güçlü bir alternatif sunar.",

features: [
    "Düzce Üniversitesi’nin Tam Karşısında Güçlü Lokasyon",
    "Kendi Arsamız Üzerinde Yükselen Güvenli Yatırım Modeli",
    "40 Ay 0 Faizli Ödeme Avantajı",
    "Modern Yaşam Anlayışına Uygun 1+1 Suits Konsepti"
]
},

{
    slug: "istanbul-bogazici-villalari",
    title: "İstanbul Boğaziçi Villaları",
    status: "Satışa Açık Aktif Proje",
    location: "Düzce / Türkiye",
    year: "2023",
    image: "assets/images/projects/istanbul-bogazici-villa/01.webp",
    summary: "İstanbul Boğaziçi İnşaat markasıyla geliştirilen, seçkin villa yaşamını modern mimari ve nitelikli yapı anlayışıyla bir araya getiren özel konut projesidir.",
    tag: "SATIŞA AÇIK",
    closed: false,

    gallery: Array.from({ length: 10 }, (_, i) =>
        `assets/images/projects/istanbul-bogazici-villa/${String(i + 1).padStart(2, '0')}.webp`
    ),

    detailText: "İstanbul Boğaziçi Villaları, İstanbul Boğaziçi İnşaat markasının seçkin yaşam anlayışını SGR Grup kalite vizyonuyla buluşturan özel bir villa projesidir. Proje; modern mimari dili, ferah yaşam alanları, güçlü villa kurgusu ve prestijli konut yaklaşımıyla kullanıcılarına konforlu, güvenli ve nitelikli bir yaşam atmosferi sunar.",

    features: [
        "Seçkin Villa Yaşamına Uygun Mimari Planlama",
        "Ferah, Konforlu ve Nitelikli Yaşam Alanları",
        "İstanbul Boğaziçi İnşaat Marka Güvencesi",
        "SGR Grup Kalite Anlayışını Yansıtan Özel Villa Konsepti"
    ]
},

    {
        slug: "nebi-abide-suites-1-etap",
        title: "Nebi Abide Suites 1. Etap",
        status: "Satışa Kapalı",
        location: "Düzce / Türkiye",
        year: "2025",
        image: "assets/images/projects/nebi-abide-suites1/01.webp",
        summary: "SGR Grup kalite anlayışıyla hayata geçirilen Nebi Abide Suites projesinin ilk etabıdır. Bu proje satışa kapalıdır.",
        tag: "SATIŞA KAPALI",
        closed: true,
        gallery: Array.from({ length: 13 }, (_, i) => 
    `assets/images/projects/nebi-abide-suites1/${String(i + 1).padStart(2, '0')}.webp`
),

detailText: "Nebi Abide Suites 1. Etap, SGR Grup kalite anlayışıyla hayata geçirilen, modern 1+1 daire konsepti ve merkezi Düzce lokasyonuyla dikkat çeken konut projesidir. Proje satışa kapalı olup, SGR Grup’un tamamlanmış etap tecrübesini ve güvenilir yatırım yaklaşımını yansıtır.",

features: [
    "Merkezi Konumda Değerli Yaşam Alanı",
    "Kendi Arsamız Üzerinde Yükselen Güvenli Proje",
    "Satışı Tamamlanmış Başarılı Etap",
    "Sosyal Alanlara Çok Yakın Avantajlı Lokasyon"
]
        
    },


{

    slug: "nebi-abide-suites-2-etap",
    title: "Nebi Abide Suites 2. Etap",
    status: "Satışa Sunulmamaktadır",
    location: "Düzce / Türkiye",
    year: "2025",
    image: "assets/images/projects/nebi-abide-suites3/05.webp",
    summary: "Nebi Abide Suites projesinin ikinci etabı, SGR Grup güvencesiyle geliştirilen; ancak şu aşamada satışa sunulmayan özel portföy projelerinden biridir.",
    tag: "SATIŞA SUNULMUYOR",
    closed: true,
    buttonText: "Satışa Sunulmuyor",

    gallery: [
        "assets/images/projects/nebi-abide-suites3/05.webp"
    ],

    detailText: "Nebi Abide Suites 2. Etap, SGR Grup’un modern konut üretim vizyonunu ve nitelikli yaşam alanı yaklaşımını yansıtan özel etap projelerinden biridir. Proje; merkezi lokasyon avantajı, güvenli yapı anlayışı ve çağdaş mimari diliyle geliştirilmiş olup, satış süreci tamamlanmış bir proje değildir. Nebi Abide Suites 2. Etap, SGR Grup portföyünde özel olarak tutulan ve şu aşamada satışa sunulmayan projeler arasında yer almaktadır.",

    features: [
        "SGR Grup Portföyünde Özel Olarak Tutulan Etap",
        "Şu Aşamada Satışa Sunulmayan Konut Projesi",
        "Modern Yaşam Anlayışına Uygun Mimari Kurgu",
        "SGR Grup Kalite Anlayışını Yansıtan Referans Etap"
    ]
},

{
    slug: "trio-vista-villalari",
    title: "Trio Vista Villaları",
    status: "Satışa Sunulmamaktadır.",
    location: "Sakarya / Türkiye",
    year: "2024",
    image: "assets/images/projects/trio-vista/01.webp",
    summary: "Modern villa yaşamını estetik mimari, ferah planlama ve doğayla bütünleşen özel yaşam anlayışıyla bir araya getiren seçkin villa projesidir.",
    tag: "SATIŞA KAPALI",
    closed: true,
        buttonText: "Satışa Sunulmuyor",

    gallery: Array.from({ length: 13 }, (_, i) =>
        `assets/images/projects/trio-vista/${String(i + 1).padStart(2, '0')}.webp`
    ),

detailText: "Trio Vista Villaları, SGR Grup’un nitelikli yaşam alanı üretme vizyonunu modern villa mimarisiyle buluşturan özel bir konut projesidir. Proje; sakin çizgileri, güçlü kütle dengesi, geniş cam yüzeyleri ve doğayla kurduğu ilişkiyle kullanıcılarına ferah, konforlu ve prestijli bir yaşam atmosferi sunar. Trio Vista, satış süreci tamamlanmış bir proje değil; SGR Grup’un portföyünde özel olarak tutulan, şu aşamada satışa sunulmayan referans villa projelerinden biridir.",
features: [
    "Modern Villa Yaşamına Uygun Mimari Kurgu",
    "Doğayla Bütünleşen Ferah Yaşam Alanları",
    "SGR Grup Portföyünde Özel Olarak Tutulan Proje",
    "Satışa Sunulmayan Referans Villa Konsepti"
]
}
],

completed: [

{
    slug: "selective-suites",
    title: "Selective Suites",
    status: "Tamamlanan Proje",
    location: "Karasu / Sakarya",
    year: "SGR GRUP",
    image: "assets/images/projects/selective-suites/01.webp",
    summary: "Sakarya Karasu’da hayata geçirilen Selective Suites, havuzlu site yaşamını modern konut anlayışı ve SGR Grup kalite standardıyla bir araya getiren tamamlanmış referans projedir.",
    tag: "TAMAMLANAN",
    closed: true,
    buttonText: "Proje Tamamlandı",

    gallery: Array.from({ length: 9 }, (_, i) =>
        `assets/images/projects/selective-suites/${String(i + 1).padStart(2, '0')}.webp`
    ),

    detailText: "Selective Suites, Sakarya Karasu’da hayata geçirilen, havuzlu site yaşamını modern mimari çizgiler ve nitelikli konut anlayışıyla bir araya getiren tamamlanmış referans projelerden biridir. Proje; sosyal yaşam alanları, konforlu daire planlaması, güvenli site konsepti ve SGR Grup’un kalite odaklı uygulama yaklaşımıyla bölgesinde değerli bir yaşam alternatifi sunmuştur.",

    features: [
        "Sakarya Karasu’da Tamamlanmış Referans Proje",
        "Havuzlu Site Yaşam Konsepti",
        "Modern Konut Planlaması",
        "SGR Grup Kalite Standardını Yansıtan Uygulama"
    ]
},

{
    slug: "sera-villalari",
    title: "Sera Villaları",
    status: "Tamamlanan Proje",
    location: "Karasu / Sakarya",
    year: "SGR GRUP",
    image: "assets/images/projects/sera-villa/01.webp",
    summary: "Sakarya Karasu’da hayata geçirilen Sera Villaları, tripleks villa yaşamını ferah planlama, özel konut konforu ve SGR Grup kalite anlayışıyla bir araya getiren tamamlanmış villa projesidir.",
    tag: "TAMAMLANAN",
    closed: true,
    buttonText: "Proje Tamamlandı",

    gallery: Array.from({ length: 11 }, (_, i) =>
        `assets/images/projects/sera-villa/${String(i + 1).padStart(2, '0')}.webp`
    ),

    detailText: "Sera Villaları, Sakarya Karasu’da hayata geçirilen, tripleks villa yaşamını modern mimari çizgiler ve konforlu aile yaşamı anlayışıyla buluşturan tamamlanmış özel konut projelerinden biridir. Proje; geniş yaşam alanları, katlı villa planlaması, sakin çevre kurgusu ve SGR Grup’un kalite odaklı uygulama yaklaşımıyla Karasu’da nitelikli bir yaşam alternatifi sunmuştur.",

    features: [
        "Sakarya Karasu’da Tamamlanmış Villa Projesi",
        "Tripleks Villa Yaşam Konsepti",
        "Geniş ve Ferah Aile Yaşam Alanları",
        "SGR Grup Kalite Anlayışını Yansıtan Uygulama"
    ]
},

{
    slug: "vera-villalari",
    title: "Vera Villaları",
    status: "Tamamlanan Proje",
    location: "Karasu / Sakarya",
    year: "SGR GRUP",
    image: "assets/images/projects/vera-villa/01.webp",
    summary: "Sakarya Karasu’da hayata geçirilen Vera Villaları, teraslı dubleks villa yaşamını modern mimari, ferah planlama ve SGR Grup kalite anlayışıyla bir araya getiren tamamlanmış özel konut projesidir.",
    tag: "TAMAMLANAN",
    closed: true,
    buttonText: "Proje Tamamlandı",

    gallery: Array.from({ length: 10 }, (_, i) =>
        `assets/images/projects/vera-villa/${String(i + 1).padStart(2, '0')}.webp`
    ),

    detailText: "Vera Villaları, Sakarya Karasu’da hayata geçirilen, teraslı dubleks villa yaşamını modern mimari çizgiler ve konforlu aile yaşamı anlayışıyla buluşturan tamamlanmış özel konut projelerinden biridir. Proje; geniş kullanım alanları, teraslı yaşam kurgusu, ferah iç mekân planlaması ve SGR Grup’un kalite odaklı uygulama yaklaşımıyla Karasu’da nitelikli bir villa yaşamı sunmuştur.",

    features: [
        "Sakarya Karasu’da Tamamlanmış Villa Projesi",
        "Teraslı Dubleks Villa Yaşam Konsepti",
        "Geniş ve Ferah Aile Yaşam Alanları",
        "SGR Grup Kalite Anlayışını Yansıtan Uygulama"
    ]
},

{
    slug: "seaport-villalari",
    title: "Seaport Villaları",
    status: "Tamamlanan Proje",
    location: "Karasu Merkez / Sakarya",
    year: "SGR GRUP",
    image: "assets/images/projects/seaport-villa/01.webp",
    summary: "Sakarya Karasu Merkez’de çok güçlü bir lokasyonda hayata geçirilen Seaport Villaları, ultra lüks villa yaşamını prestijli mimari ve SGR Grup kalite anlayışıyla bir araya getiren tamamlanmış özel konut projesidir.",
    tag: "TAMAMLANAN",
    closed: true,
    buttonText: "Proje Tamamlandı",

    gallery: Array.from({ length: 9 }, (_, i) =>
        `assets/images/projects/seaport-villa/${String(i + 1).padStart(2, '0')}.webp`
    ),

    detailText: "Seaport Villaları, Sakarya Karasu Merkez’de çok güçlü ve değerli bir lokasyonda hayata geçirilen ultra lüks villa projelerinden biridir. Proje; prestijli mimari dili, geniş yaşam alanları, yüksek konfor standardı ve seçkin villa konseptiyle SGR Grup’un özel konut üretimindeki kalite anlayışını güçlü biçimde yansıtır. Karasu’nun merkez avantajını lüks villa yaşamıyla birleştiren Seaport Villaları, tamamlanmış referans projeler arasında yer almaktadır.",

    features: [
        "Karasu Merkez’de Çok Güçlü Lokasyon",
        "Ultra Lüks Villa Yaşam Konsepti",
        "Prestijli Mimari ve Geniş Yaşam Alanları",
        "SGR Grup Kalite Anlayışını Yansıtan Referans Villa Projesi"
    ]
},

{
    slug: "waterport-villalari",
    title: "Waterport Villaları",
    status: "Tamamlanan Proje",
    location: "Karasu / Sakarya",
    year: "SGR GRUP",
    image: "assets/images/projects/waterport-villa/01.webp",
    summary: "Sakarya Karasu’da göl kenarında hayata geçirilen Waterport Villaları, 6 adet havuzlu süper lüks villa konseptini doğa, prestij ve SGR Grup kalite anlayışıyla bir araya getiren tamamlanmış özel konut projesidir.",
    tag: "TAMAMLANAN",
    closed: true,
    buttonText: "Proje Tamamlandı",

    gallery: Array.from({ length: 10 }, (_, i) =>
        `assets/images/projects/waterport-villa/${String(i + 1).padStart(2, '0')}.webp`
    ),

    detailText: "Waterport Villaları, Sakarya Karasu’da göl kenarında konumlanan, 6 adet havuzlu süper lüks villa konseptiyle hayata geçirilmiş tamamlanmış özel konut projelerinden biridir. Proje; doğayla bütünleşen konumu, özel havuzlu villa yaşamı, geniş kullanım alanları ve prestijli mimari yaklaşımıyla SGR Grup’un seçkin konut üretim anlayışını güçlü biçimde yansıtır. Göl manzarası, sakin çevre kurgusu ve yüksek konfor standardıyla Waterport Villaları, Karasu’da özel yaşam arayan kullanıcılar için değerli bir referans proje niteliğindedir.",

    features: [
        "Göl Kenarında Özel Villa Lokasyonu",
        "6 Adet Havuzlu Süper Lüks Villa",
        "Doğayla Bütünleşen Prestijli Yaşam Konsepti",
        "SGR Grup Kalite Anlayışını Yansıtan Referans Villa Projesi"
    ]
},

{
    slug: "class-suites",
    title: "Class Suites",
    status: "Tamamlanan Proje",
    location: "Merkez / Düzce",
    year: "SGR GRUP",
    image: "assets/images/projects/class-suites/01.webp",
    summary: "Merkezi konum avantajıyla hayata geçirilen Class Suites, modern suites yaşam konseptini fonksiyonel planlama, ulaşılabilirlik ve SGR Grup kalite anlayışıyla bir araya getiren tamamlanmış referans projedir.",
    tag: "TAMAMLANAN",
    closed: true,
    buttonText: "Proje Tamamlandı",

    gallery: Array.from({ length: 7 }, (_, i) =>
        `assets/images/projects/class-suites/${String(i + 1).padStart(2, '0')}.webp`
    ),

    detailText: "Class Suites, merkezi konum avantajıyla hayata geçirilen, modern suites yaşam konseptini fonksiyonel planlama ve nitelikli yapı anlayışıyla bir araya getiren tamamlanmış referans projelerden biridir. Proje; şehir yaşamına yakınlığı, kullanışlı daire kurgusu, kompakt ve konforlu yaşam alanlarıyla SGR Grup’un konut geliştirme yaklaşımını yansıtır. Class Suites, merkezi lokasyonda pratik, modern ve kaliteli yaşam arayan kullanıcılar için güçlü bir konut alternatifi olarak tamamlanmıştır.",

    features: [
        "Merkezi Konumda Tamamlanmış Suites Projesi",
        "Modern ve Fonksiyonel Yaşam Alanları",
        "Şehir Yaşamına Yakın Kullanışlı Konut Kurgusu",
        "SGR Grup Kalite Anlayışını Yansıtan Referans Proje"
    ]
}
    
]
};

const projectCategoryLabels = {
    ongoing: {
        kicker: "DEVAM EDEN PROJELER",
        title: "Devam Eden Projeler",
        desc: "SGR Grup imzasıyla geliştirilmekte olan, satış ve yatırım süreci devam eden projeler."
    },
    completed: {
        kicker: "TAMAMLANAN PROJELER",
        title: "Tamamlanan Projeler",
        desc: "SGR Grup kalite anlayışıyla tamamlanmış, teslim edilmiş veya portföy geçmişinde yer alan projeler."
    }
};

function hideProjectsPage() {
    const projectsPage = document.getElementById('projects-page-wrapper');

    if (projectsPage) {
        projectsPage.classList.remove('active');
        projectsPage.style.display = 'none';
        projectsPage.innerHTML = '';
    }
}

function loadProjectsPage(category = 'ongoing') {
    const mainPage = document.getElementById('main-page-wrapper');
    const corpPage = document.getElementById('corporate-page-wrapper');
    const servicesPage = document.getElementById('services-page-wrapper');
    const contactPage = document.getElementById('contact-page-wrapper');
    const projectsPage = document.getElementById('projects-page-wrapper');
    const header = document.getElementById('header');

    if (!projectsPage) return;

    if (!projectsDatabase[category]) {
        category = 'ongoing';
    }

    if (mainPage) mainPage.style.display = 'none';

    if (corpPage) {
        corpPage.classList.remove('active');
        corpPage.style.display = 'none';
        corpPage.innerHTML = '';
    }

    if (servicesPage) {
        servicesPage.classList.remove('active');
        servicesPage.style.display = 'none';
        servicesPage.innerHTML = '';
    }

    if (contactPage) {
        contactPage.classList.remove('active');
        contactPage.style.display = 'none';
        contactPage.innerHTML = '';
    }

    const current = projectCategoryLabels[category];
    const projects = projectsDatabase[category];

    const cardsHTML = projects.length
        ? projects.map(project => `
            <article class="sgr-project-card ${project.closed ? 'project-closed' : ''}">
                <div class="sgr-project-image">
                    <img src="${project.image}" alt="${project.title}">
                    <span class="sgr-project-status">${project.status}</span>
                </div>

                <div class="sgr-project-content">
                    <span class="sgr-project-meta">${project.location} · ${project.year}</span>
                    <h3>${project.title}</h3>
                    <p>${project.summary}</p>

<button class="sgr-project-detail-btn" type="button" onclick="loadProjectDetail('${project.slug}')">
    Detaylı İncele
</button>
                </div>
            </article>
        `).join('')
        : `
            <div class="sgr-project-empty">
                <span>PORTFÖY HAZIRLANIYOR</span>
                <h3>Bu kategori yakında güncellenecek.</h3>
                <p>Tamamlanan proje bilgileri ve görseller eklendiğinde bu alan otomatik olarak proje kartlarıyla dolacak.</p>
            </div>
        `;

    projectsPage.style.display = 'block';

    projectsPage.innerHTML = `
        <section class="sgr-projects-page">
            <div class="container">
                <div class="sgr-projects-header">
                    <span class="corp-tagline">${current.kicker}</span>
                    <h2>${current.title}</h2>
                    <p>${current.desc}</p>
                </div>

                <div class="sgr-project-switch">
                    <button 
                        class="${category === 'ongoing' ? 'active' : ''}" 
                        onclick="loadProjectsPage('ongoing')">
                        Devam Eden Projeler
                    </button>

                    <button 
                        class="${category === 'completed' ? 'active' : ''}" 
                        onclick="loadProjectsPage('completed')">
                        Tamamlanan Projeler
                    </button>
                </div>

                <div class="sgr-projects-grid ${projects.length ? '' : 'empty-mode'}">
                    ${cardsHTML}
                </div>
                
            </div>
        </section>
    `;

    requestAnimationFrame(() => {
        projectsPage.classList.add('active');
    });

    if (header) header.classList.add('scrolled');

    if (typeof closeMenu === 'function') {
        closeMenu();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function getProjectCategory(projectSlug) {
    if (projectsDatabase.ongoing.some(project => project.slug === projectSlug)) {
        return 'ongoing';
    }

    if (projectsDatabase.completed.some(project => project.slug === projectSlug)) {
        return 'completed';
    }

    return 'ongoing';
}
function getAllProjects() {
    return [
        ...projectsDatabase.ongoing,
        ...projectsDatabase.completed
    ];
}

function loadProjectDetail(projectSlug) {
    const mainPage = document.getElementById('main-page-wrapper');
    const corpPage = document.getElementById('corporate-page-wrapper');
    const servicesPage = document.getElementById('services-page-wrapper');
    const contactPage = document.getElementById('contact-page-wrapper');
    const projectsPage = document.getElementById('projects-page-wrapper');
    const header = document.getElementById('header');

    if (!projectsPage) return;

const project = getAllProjects().find(item => item.slug === projectSlug);

if (!project) {
    loadProjectsPage('ongoing');
    return;
}

const projectCategory = projectsDatabase.completed.some(item => item.slug === projectSlug)
    ? 'completed'
    : 'ongoing';

    if (mainPage) mainPage.style.display = 'none';

    if (corpPage) {
        corpPage.classList.remove('active');
        corpPage.style.display = 'none';
        corpPage.innerHTML = '';
    }

    if (servicesPage) {
        servicesPage.classList.remove('active');
        servicesPage.style.display = 'none';
        servicesPage.innerHTML = '';
    }

    if (contactPage) {
        contactPage.classList.remove('active');
        contactPage.style.display = 'none';
        contactPage.innerHTML = '';
    }

    const detailGallery = project.gallery || [
        project.image,
        "assets/images/projects/nebi-abide-suites3/02.webp",
        "assets/images/projects/nebi-abide-suites3/03.webp",
        "assets/images/projects/nebi-abide-suites3/04.webp"
    ];

    const features = project.features || [
        "SGR Grup güvencesi",
        "Nitelikli mimari yaklaşım",
        "Yatırım değeri yüksek lokasyon",
        "Modern yaşam alanları"
    ];

    projectsPage.style.display = 'block';

    projectsPage.innerHTML = `
        <section class="sgr-project-detail-page">
            <div class="sgr-project-detail-hero">
                <img src="${project.image}" alt="${project.title}">
                <div class="sgr-project-detail-overlay"></div>

                <div class="container sgr-project-detail-hero-content">
<button class="sgr-detail-back" onclick="loadProjectsPage('${projectCategory}')">
    ← Projelere Dön
</button>

                    <span class="sgr-project-detail-status ${project.closed ? 'closed' : ''}">
                        ${project.status}
                    </span>

                    <h1>${project.title}</h1>

                    <div class="sgr-detail-meta">
                        <span>${project.location}</span>
                        <span>${project.year}</span>
                        <span>${project.closed ? 'Satışa Kapalı' : 'Satışa Açık'}</span>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="sgr-detail-content-grid">
                    <div class="sgr-detail-main">
                        <span class="corp-tagline">PROJE DETAYI</span>
                        <h2>${project.title}</h2>
                        <p>${project.detailText || project.summary}</p>

<div class="sgr-detail-gallery-premium">
    <div class="sgr-detail-main-image">
        <img id="projectDetailMainImage" src="${detailGallery[0]}" alt="${project.title}">
    </div>

    <div class="sgr-detail-thumb-row">
        ${detailGallery.map((img, index) => `
            <button 
                type="button" 
                class="sgr-detail-thumb ${index === 0 ? 'active' : ''}" 
                data-image="${img}"
                onclick="changeProjectDetailImage(this)">
                <img src="${img}" alt="${project.title}">
            </button>
        `).join('')}
    </div>
</div>

                    </div>

                    <aside class="sgr-detail-sidebar">
                        <div class="sgr-detail-info-card">
                            <h3>Proje Bilgileri</h3>

                            <div class="sgr-detail-info-row">
                                <span>Durum</span>
                                <strong>${project.status}</strong>
                            </div>

                            <div class="sgr-detail-info-row">
                                <span>Lokasyon</span>
                                <strong>${project.location}</strong>
                            </div>

                            <div class="sgr-detail-info-row">
                                <span>Yıl</span>
                                <strong>${project.year}</strong>
                            </div>

                            <div class="sgr-detail-info-row">
                                <span>Marka</span>
                                <strong>SGR GRUP</strong>
                            </div>

                            <div class="sgr-detail-action-row">
                                <a 
                                    href="javascript:void(0)" 
                                    class="sgr-detail-contact-btn ${project.closed ? 'is-disabled' : ''}" 
                                    onclick="${project.closed ? 'return false;' : 'loadContactPage()'}">
                                    ${project.closed ? (project.buttonText || 'Satış Tamamlandı') : 'Satış Ekibiyle Görüş'}
                                </a>

                                <button 
                                    type="button" 
                                    class="sgr-detail-contact-btn sgr-detail-return-btn"
                                    onclick="loadProjectsPage('${projectCategory}')">
                                    Projelere Dön
                                </button>
                            </div>
                        </div>

                        <div class="sgr-detail-feature-card">
                            <h3>Öne Çıkanlar</h3>

                            ${features.map(item => `
                                <div class="sgr-feature-line">
                                    <span>✓</span>
                                    <p>${item}</p>
                                </div>
                            `).join('')}
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    `;

    requestAnimationFrame(() => {
        projectsPage.classList.add('active');
    });

    if (header) header.classList.add('scrolled');

    if (typeof closeMenu === 'function') {
        closeMenu();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}
/**
 * Eski #projects linki bir yerde kalırsa otomatik yakala.
 */
document.addEventListener('click', function(event) {
    const projectsLink = event.target.closest('a[href="#projects"]');

    if (projectsLink) {
        event.preventDefault();
        loadProjectsPage('ongoing');
    }
});

/**
 * Diğer sayfalara geçerken projeleri temizle.
 */
(function patchProjectsNavigation() {
    const originalShowMainPage = window.showMainPage;
    const originalLoadCorporatePage = window.loadCorporatePage;
    const originalLoadAllServices = window.loadAllServices;
    const originalLoadContactPage = window.loadContactPage;

    if (typeof originalShowMainPage === 'function') {
        window.showMainPage = function() {
            hideProjectsPage();
            return originalShowMainPage.apply(this, arguments);
        };
    }

    if (typeof originalLoadCorporatePage === 'function') {
        window.loadCorporatePage = function(pageKey) {
            hideProjectsPage();
            return originalLoadCorporatePage.apply(this, arguments);
        };
    }

    if (typeof originalLoadAllServices === 'function') {
        window.loadAllServices = function() {
            hideProjectsPage();
            return originalLoadAllServices.apply(this, arguments);
        };
    }

    if (typeof originalLoadContactPage === 'function') {
        window.loadContactPage = function() {
            hideProjectsPage();
            return originalLoadContactPage.apply(this, arguments);
        };
    }
})();
function changeProjectDetailImage(button) {
    const imagePath = button.dataset.image;
    const mainImage = document.getElementById('projectDetailMainImage');

    if (!imagePath || !mainImage) return;

    const thumbRow = button.closest('.sgr-detail-thumb-row');

    if (thumbRow) {
        thumbRow.querySelectorAll('.sgr-detail-thumb').forEach(item => {
            item.classList.remove('active');
        });
    }

    button.classList.add('active');

    mainImage.style.opacity = '0';

    setTimeout(() => {
        mainImage.src = imagePath;
        mainImage.style.opacity = '1';
    }, 160);

    // Küçük fotoğraf şeridini tıklanan görsele göre otomatik kaydır
    button.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
    });
}