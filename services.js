/**
 * SGR GRUP - HİZMETLER DİNAMİK GEÇİŞ MOTORU V3
 * Kartlı premium hizmetler sayfası + detay sayfaları
 */

const servicesDatabase = {
    'insaat-muteahhitlik': {
        number: "01",
        title: "İnşaat, Proje Geliştirme ve Müteahhitlik",
        tagline: "YAPI & PROJE GELİŞTİRME",
        summary: "Konut, ticari alan ve özel projelerde; arsa değerlendirmeden uygulama yönetimi ve teslim sürecine kadar bütüncül inşaat çözümleri.",
        content: `
            <p class="corp-lead">SGR Grup çatısı altında, güçlü teknik birikimimiz ve kalite odaklı yaklaşımımızla konut, ticari alan ve özel proje geliştirme süreçlerinde profesyonel çözümler sunuyoruz.</p>

            <p>Projelerimizi; güvenli yapı, doğru planlama, estetik mimari ve uzun ömürlü kullanım prensipleriyle ele alıyoruz. İstanbul Boğaziçi İnşaat markamızla, yapı sektöründe güvenilir, sağlam ve nitelikli projeler üretmeyi hedefliyoruz.</p>

            <p>Arsa değerlendirme, proje planlama, uygulama yönetimi ve teslim aşamasına kadar tüm müteahhitlik süreçlerinde bütüncül bir hizmet anlayışı benimsiyoruz. Her projede doğru zamanlama, şeffaf yönetim ve kaliteli uygulama standartlarını ön planda tutuyoruz.</p>

            <p>SGR Grup için müteahhitlik yalnızca yapı inşa etmek değil; güven veren, değer kazandıran ve kullanıcılarına uzun yıllar konfor sunan yaşam alanları oluşturmaktır. Deprem güvenliği, malzeme kalitesi, mühendislik disiplini ve yaşam konforu bizim için her projenin temel taşıdır.</p>
        `,
        highlights: [
            "Proje geliştirme",
            "Müteahhitlik",
            "Deprem güvenliği",
            "Arsa değerlendirme",
            "Uygulama yönetimi",
            "Zamanında teslim"
        ]
    },

    'premium-otomotiv': {
        number: "02",
        title: "Otomotiv Ticareti",
        tagline: "ÜMİT SAĞIR CAR TRADE",
        summary: "Premium araç alım-satım süreçlerinde güven, şeffaflık, doğru ekspertiz ve seçkin hizmet anlayışı.",
        content: `
            <p class="corp-lead"><strong>Ümit Sağır Car Trade</strong> markamızla, otomotiv ticareti alanında güvenilir, seçkin ve kaliteli araç çözümleri sunuyoruz.</p>
            <p>Araç alım-satım süreçlerinde şeffaflık, doğru ekspertiz, güvenli ticaret ve müşteri memnuniyeti ilkeleriyle hareket ediyoruz.</p>

            <p>Her aracı yalnızca bir ulaşım aracı olarak değil, kalite, güven ve prestij beklentisinin bir parçası olarak değerlendiriyoruz.</p>
        `,
        highlights: [
            "Seçkin araç çözümleri",
            "Güvenli ticaret",
            "Doğru ekspertiz",
            "Şeffaf süreç"
        ]
    },

    'operasyonel-kiralama': {
        number: "03",
        title: "Operasyonel Kiralama",
        tagline: "EMR MOTORS",
        summary: "Bireysel ve kurumsal müşteriler için kısa ve uzun dönem araç kiralama çözümleri.",
        content: `
            <p class="corp-lead"><strong>EMR Motors</strong> ile bireysel ve kurumsal müşterilerimize operasyonel kiralama hizmetleri sunuyoruz.</p>

            <p>Kısa ve uzun dönem araç ihtiyaçlarında, müşterilerimizin bütçesine ve kullanım beklentilerine uygun çözümler geliştiriyoruz.</p>

            <p>Bakım, güvenlik, konfor ve erişilebilirlik odaklı hizmet anlayışımızla, araç kiralama süreçlerini pratik, güvenilir ve sorunsuz hale getiriyoruz.</p>
        `,
        highlights: [
            "Kısa dönem kiralama",
            "Uzun dönem kiralama",
            "Kurumsal çözümler",
            "Konforlu süreç"
        ]
    },

'satis-sonrasi-kiralama': {
    number: "04",
    title: "Satış Sonrası Kiralama Yönetimi",
    tagline: "KONUT YATIRIM DESTEĞİ",
    summary: "SGR Grup’tan konut sahibi olan yatırımcılar için, teslim sonrası kiralama sürecinde profesyonel yönlendirme ve destek hizmeti.",
    content: `
        <p class="corp-lead">SGR Grup olarak hizmet anlayışımızı yalnızca konut satışıyla sınırlı görmüyoruz. Projelerimizden daire sahibi olan yatırımcılarımıza, teslim sonrasında kiralama sürecinde de destek sunuyoruz.</p>

        <p>Yatırım amaçlı konut alan müşterilerimiz için, dairenin doğru kiralama değerinin belirlenmesi, uygun kiracı profiline ulaşılması ve sürecin daha güvenli ilerlemesi adına profesyonel yönlendirme sağlıyoruz.</p>

        <p>Bu hizmet anlayışıyla amacımız; yatırımcının yalnızca konut sahibi olmasını değil, satın aldığı gayrimenkulden düzenli, güvenilir ve sürdürülebilir gelir elde edebilmesini desteklemektir.</p>

        <p>SGR Grup için satış sonrası kiralama yönetimi, yatırım değerini koruyan ve müşteri memnuniyetini teslimden sonra da sürdüren önemli bir hizmet başlığıdır.</p>
    `,
    highlights: [
        "Konut kiralama desteği",
        "Yatırımcı yönlendirme",
        "Kiracı süreci desteği",
        "Kira değer analizi",
        "Teslim sonrası hizmet",
        "Sürdürülebilir gelir"
    ]
},

'satis-sonrasi-teknik-destek': {
    number: "05",
    title: "Satış Sonrası Teknik Destek",
    tagline: "TESLİM SONRASI GÜVENCE",
    summary: "Teslim edilen konutlarda teknik kontrol, bakım yönlendirmesi ve ihtiyaç halinde çözüm odaklı destek süreci.",
    content: `
        <p class="corp-lead">SGR Grup projelerinde satış sonrası teknik destek, konut tesliminden sonra da müşterilerimizin yanında olma anlayışımızın önemli bir parçasıdır.</p>

        <p>Daire teslimi sonrasında ortaya çıkabilecek teknik sorular, kullanım ihtiyaçları, kontrol talepleri ve bakım yönlendirmeleri konusunda müşterilerimize çözüm odaklı destek sağlıyoruz.</p>

        <p>Elektrik, mekanik, tesisat, iç mekân kullanımı, ortak alan bilgilendirmesi ve teslim sonrası kontrol süreçlerinde müşterilerimizin taleplerini dikkatle değerlendiriyoruz.</p>

        <p>Amacımız; konut sahiplerinin yeni yaşam alanlarına güvenle adapte olmasını sağlamak, teslim sonrası memnuniyeti korumak ve SGR Grup kalitesini yalnızca inşaat sürecinde değil, yaşam başladıktan sonra da hissettirmektir.</p>
    `,
    highlights: [
        "Konut teknik desteği",
        "Teslim sonrası kontrol",
        "Bakım yönlendirmesi",
        "Tesisat ve mekanik destek",
        "Ortak alan bilgilendirme",
        "Çözüm odaklı süreç"
    ]
},

    'kalite-guven': {
        number: "06",
        title: "Kalite ve Güven Odaklı Hizmet Anlayışı",
        tagline: "ORTAK DEĞER",
        summary: "İnşaatta sağlamlık, otomotivde güvenilirlik ve kiralamada konforu birleştiren kurumsal hizmet yaklaşımı.",
        content: `
            <p class="corp-lead">SGR Grup’un tüm hizmetlerinde ortak değer; güven, kalite ve sürdürülebilir başarıdır.</p>

            <p>İnşaatta sağlamlık, otomotivde güvenilirlik ve kiralamada konfor ilkeleriyle hareket ediyoruz.</p>

            <p>Her projede ve her hizmette uzun vadeli memnuniyet oluşturmayı, güçlü iş ilişkileri kurmayı ve bulunduğumuz sektörlerde kalıcı değer üretmeyi hedefliyoruz.</p>
        `,
        highlights: [
            "Güven",
            "Kalite",
            "Sürdürülebilir değer",
            "Uzun vadeli memnuniyet"
        ]
    }
};

function resetServicesView() {
    const mainPage = document.getElementById('main-page-wrapper');
    const corpPage = document.getElementById('corporate-page-wrapper');
    const servicesPage = document.getElementById('services-page-wrapper');

    if (mainPage) mainPage.style.display = 'none';

    if (corpPage) {
        corpPage.classList.remove('active');
        corpPage.style.display = 'none';
        corpPage.innerHTML = '';
    }

    if (servicesPage) {
        servicesPage.classList.remove('active');
        servicesPage.style.display = 'block';
    }
}

function loadAllServices() {
    const servicesPage = document.getElementById('services-page-wrapper');
    const header = document.getElementById('header');

    if (!servicesPage) return;

    resetServicesView();

    const cardsHTML = Object.keys(servicesDatabase).map((key, index) => {
        const service = servicesDatabase[key];
        const isFeatured = index === 0 || index === 4;

        return `
            <article class="sgr-service-card ${isFeatured ? 'featured-service' : ''}" onclick="loadServicePage('${key}')">
                <div class="sgr-service-card-top">
                    <span class="sgr-service-number">${service.number}</span>
                    <span class="sgr-service-arrow">↗</span>
                </div>

                <div class="sgr-service-card-body">
                    <span class="sgr-service-kicker">${service.tagline}</span>
                    <h3>${service.title}</h3>
                    <p>${service.summary}</p>
                </div>

                <div class="sgr-service-card-bottom">
                    <span>Detaylı İncele</span>
                </div>
            </article>
        `;
    }).join('');

    servicesPage.innerHTML = `
        <section class="sgr-services-page">
            <div class="container">
                <div class="corp-page-header sgr-services-header">
                    <span class="corp-tagline">SGR GRUP HİZMETLERİ</span>
                    <h2>Hizmetlerimiz</h2>
                    <p>
                        SGR Grup olarak inşaat, premium otomotiv ticareti ve operasyonel kiralama alanlarında güven,
                        kalite ve sürdürülebilir değer anlayışıyla hizmet veriyoruz. Faaliyet gösterdiğimiz her sektörde
                        temel hedefimiz; yalnızca bugünün ihtiyaçlarına cevap veren değil, geleceğe de değer taşıyan
                        çözümler üretmektir.
                    </p>
                </div>

                <div class="sgr-services-grid">
                    ${cardsHTML}
                </div>
            </div>
        </section>
    `;

    requestAnimationFrame(() => {
        servicesPage.classList.add('active');
    });

    if (header) header.classList.add('scrolled');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function loadServicePage(pageKey) {
    const data = servicesDatabase[pageKey];
    const servicesPage = document.getElementById('services-page-wrapper');
    const header = document.getElementById('header');

    if (!data || !servicesPage) return;

    resetServicesView();

    const highlightsHTML = data.highlights.map(item => {
        return `<span class="sgr-detail-pill">${item}</span>`;
    }).join('');

    servicesPage.innerHTML = `
        <section class="sgr-service-detail-page">
            <div class="container">
                <div class="sgr-service-detail-layout">
                    <aside class="sgr-service-detail-side">
                        <span class="sgr-service-detail-number">${data.number}</span>
                        <span class="corp-tagline">${data.tagline}</span>
                        <h2>${data.title}</h2>

                        <div class="sgr-detail-pills">
                            ${highlightsHTML}
                        </div>

                        <button class="btn btn-primary sgr-back-services-btn" onclick="loadAllServices()">
                            Tüm Hizmetlere Dön
                        </button>
                    </aside>

                    <article class="sgr-service-detail-content">
                        ${data.content}
                    </article>
                </div>
            </div>
        </section>
    `;

    requestAnimationFrame(() => {
        servicesPage.classList.add('active');
    });

    if (header) header.classList.add('scrolled');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}