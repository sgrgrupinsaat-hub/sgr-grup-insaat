/**
 * SGR GRUP - İLETİŞİM SAYFASI DİNAMİK GEÇİŞ MOTORU V1
 */

function hideContactPage() {
    const contactPage = document.getElementById('contact-page-wrapper');

    if (contactPage) {
        contactPage.classList.remove('active');
        contactPage.style.display = 'none';
        contactPage.innerHTML = '';
    }
}

function loadContactPage() {
        if (window.innerWidth <= 1024) {
        const homeVirtualTour = document.querySelector("#main-page-wrapper #virtual-tour");

        if (homeVirtualTour) {
            homeVirtualTour.style.display = "none";
            homeVirtualTour.style.height = "0";
            homeVirtualTour.style.minHeight = "0";
            homeVirtualTour.style.padding = "0";
            homeVirtualTour.style.margin = "0";
            homeVirtualTour.style.overflow = "hidden";
        }
    }
    const mainPage = document.getElementById('main-page-wrapper');
    const corpPage = document.getElementById('corporate-page-wrapper');
    const servicesPage = document.getElementById('services-page-wrapper');
    const contactPage = document.getElementById('contact-page-wrapper');
    const header = document.getElementById('header');

    if (!contactPage) return;

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

    contactPage.style.display = 'block';

    contactPage.innerHTML = `
        <section class="sgr-contact-page">
            <div class="container">
                <div class="sgr-contact-header">
                    <span class="corp-tagline">SGR GRUP İLETİŞİM</span>
                    <h2>Bizimle İletişime Geçin</h2>
                    <p>
                        Kampanyamız hakkında detaylı bilgi almak, ödeme planı seçeneklerini öğrenmek ve satış ekibimizle görüşmek için
bizimle iletişime geçebilirsiniz.
                    </p>
                </div>

                <div class="sgr-contact-layout">
                    <div class="sgr-contact-info-panel">
                        <div class="sgr-contact-panel-top">
                            <span class="sgr-contact-small-title">SATIŞ VE BİLGİ HATTI</span>
                            <h3>SGR Grup ile güvenli bir yatırım sürecine başlayın.</h3>
                            <p>
                                Proje detayları, ödeme planı, teslim süreci ve satış sonrası hizmetler hakkında ekibimizden bilgi alabilirsiniz.
                            </p>
                        </div>

                        <div class="sgr-contact-cards">
<a href="tel:+905376237201" class="sgr-contact-card">
                                <span class="sgr-contact-icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.6 2.5a2 2 0 0 1-.45 2.11L9 10.5a16 16 0 0 0 4.5 4.5l1.17-1.17a2 2 0 0 1 2.11-.45c.8.28 1.64.48 2.5.6A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </span>
                                <span>
                                    <small>Telefon</small>
<strong>0537 623 72 01</strong>
                                </span>
                            </a>

<a href="mailto:info@sgrgroupinsaat.com" class="sgr-contact-card">
                                <span class="sgr-contact-icon">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <path d="m22 6-10 7L2 6"></path>
                                    </svg>
                                </span>
                                <span>
                                    <small>E-posta</small>
<strong>info@sgrgroupinsaat.com</strong>
                                </span>
                            </a>
                        </div>

                        <div class="sgr-location-list">
                            <div class="sgr-location-item">
                                <span>DÜZCE OFİS</span>
                                <p>Camikebir Mah. Mehmet Gösterişli Sk. No:1 Kat:1 Daire:6 Merkez/Düzce</p>
                            </div>

                            <div class="sgr-location-item">
                                <span>İSTANBUL OFİS</span>
                                <p>Eyüpsultan Mah. Zulal Sk. A220 No:10/D Otostat/Sancaktepe</p>
                            </div>
                        </div>
                    </div>

                    <div class="sgr-contact-form-panel">
                        <span class="sgr-contact-form-kicker">BİLGİ TALEP FORMU</span>
                        <h3>Size ulaşalım</h3>
                        <p>Formu doldurun, satış ve danışmanlık ekibimiz en kısa sürede sizinle iletişime geçsin.</p>

                        <form 
    class="sgr-contact-form" 
    action="https://formsubmit.co/info@sgrgrupinsaat.com" 
    method="POST"
><input type="hidden" name="_subject" value="SGR Grup Web Sitesi Yeni İletişim Talebi">
<input type="hidden" name="_captcha" value="false">
<input type="hidden" name="_template" value="table">
<input type="hidden" name="_next" value="https://www.sgrgroupinsaat.com/tesekkurler.html">
                            <div class="sgr-form-grid">
                                <div class="sgr-form-group">
                                    <label>Ad Soyad</label>
                                    <input type="text" name="name" placeholder="Adınız Soyadınız" required>
                                </div>

                                <div class="sgr-form-group">
                                    <label>Telefon</label>
                                    <input type="tel" name="phone" placeholder="Telefon numaranız" required>
                                </div>
                            </div>

                            <div class="sgr-form-group">
                                <label>E-posta</label>
                                <input type="email" name="email" placeholder="E-posta adresiniz">
                            </div>

                            <div class="sgr-form-group">
                                <label>İlgilendiğiniz Konu</label>
                                <select name="subject">
                                    <option>Nebi Abide Suites 3. Etap</option>
                                    <option>Konut Satışı</option>
                                    <option>Satış Sonrası Kiralama</option>
                                    <option>Satış Sonrası Teknik Destek</option>
                                    <option>Kurumsal İş Birliği</option>
                                </select>
                            </div>

                            <div class="sgr-form-group">
                                <label>Mesajınız</label>
                                <textarea name="message" rows="5" placeholder="Mesajınızı yazın"></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary sgr-contact-submit">
                                Gönder
                            </button>

                            <p class="sgr-form-note">
                                Form üzerinden iletilen bilgiler doğrudan SGR Grup iletişim ekibine yönlendirilir.
                            </p>
                        </form>
                    </div>
                </div>

                <div class="sgr-contact-map-section">
                    <div class="sgr-contact-map-header">
                        <span class="corp-tagline">LOKASYONLARIMIZ</span>
                        <h3>Ofislerimize Ulaşın</h3>
                        <p>Düzce ve İstanbul lokasyonlarımız üzerinden SGR Grup ile doğrudan iletişim kurabilirsiniz.</p>
                    </div>

                    <div class="sgr-map-grid">
                        <div class="sgr-map-card">
                            <div class="sgr-map-info">
                                <span>DÜZCE OFİS</span>
                                <p>Camikebir Mah. Mehmet Gösterişli Sk. No:1 Kat:1 Daire:6 Merkez/Düzce</p>
                            </div>
                            <div class="sgr-map-frame">
                                <iframe
                                    src="https://www.google.com/maps?q=Camikebir%20Mah.%20Mehmet%20G%C3%B6steri%C5%9Fli%20Sk.%20No%3A1%20Kat%3A1%20Daire%3A6%20Merkez%20D%C3%BCzce&output=embed"
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>

                        <div class="sgr-map-card">
                            <div class="sgr-map-info">
                                <span>İSTANBUL OFİS</span>
                                <p>Eyüpsultan Mah. Zulal Sk. A220 No:10/D Otostat/Sancaktepe</p>
                            </div>
                            <div class="sgr-map-frame">
                                <iframe
                                    src="https://www.google.com/maps?q=Ey%C3%BCpsultan%20Mah.%20Zulal%20Sk.%20A220%20No%3A10%2FD%20Otostat%20Sancaktepe&output=embed"
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    requestAnimationFrame(() => {
        contactPage.classList.add('active');
    });

    if (header) header.classList.add('scrolled');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}


/**
 * Mevcut #contact linklerini otomatik olarak iletişim sayfasına yönlendirir.
 */
document.addEventListener('click', function(event) {
    const contactLink = event.target.closest('a[href="#contact"]');

    if (contactLink) {
        event.preventDefault();
        loadContactPage();

        if (typeof closeMenu === 'function') {
            closeMenu();
        }
    }
});

/**
 * Mevcut showMainPage / loadCorporatePage / loadAllServices fonksiyonlarını contact ile uyumlu hale getirir.
 */
(function patchContactNavigation() {
    const originalShowMainPage = window.showMainPage;
    const originalLoadCorporatePage = window.loadCorporatePage;
    const originalLoadAllServices = window.loadAllServices;

    if (typeof originalShowMainPage === 'function') {
        window.showMainPage = function() {
            hideContactPage();
            return originalShowMainPage.apply(this, arguments);
        };
    }

    if (typeof originalLoadCorporatePage === 'function') {
        window.loadCorporatePage = function(pageKey) {
            hideContactPage();

            const servicesPage = document.getElementById('services-page-wrapper');
            const corpPage = document.getElementById('corporate-page-wrapper');

            if (servicesPage) {
                servicesPage.classList.remove('active');
                servicesPage.style.display = 'none';
                servicesPage.innerHTML = '';
            }

            if (corpPage) {
                corpPage.style.display = 'block';
            }

            return originalLoadCorporatePage.apply(this, arguments);
        };
    }

    if (typeof originalLoadAllServices === 'function') {
        window.loadAllServices = function() {
            hideContactPage();
            return originalLoadAllServices.apply(this, arguments);
        };
    }
})();