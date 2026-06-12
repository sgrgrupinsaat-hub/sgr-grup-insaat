// --- HEADER SCROLL MANAGEMENT ---
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header?.classList.add('scrolled');
    } else {
        header?.classList.remove('scrolled');
    }
});

// --- MOBILE NAV DRAWER TOGGLE LOGIC ---
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const mobileOverlay = document.getElementById('mobileOverlay');
const menuClose = document.getElementById('menuClose');
const mobileLinks = document.querySelectorAll('.mobile-link');

function openMenu() {
    if (mobileNav && mobileOverlay) {
        mobileNav.classList.add('active');
        mobileOverlay.classList.add('active');
    }
}

function closeMenu() {
    if (mobileNav && mobileOverlay) {
        mobileNav.classList.remove('active');
        mobileOverlay.classList.remove('active');
    }
}

if (menuToggle) menuToggle.addEventListener('click', openMenu);
if (menuClose) menuClose.addEventListener('click', closeMenu);
if (mobileOverlay) mobileOverlay.addEventListener('click', closeMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// --- INTERSECTION OBSERVER FOR SCROLL REVEAL EFFECTS ---
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.05, 
    rootMargin: '0px 0px -20px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));
/* ==========================================================================
   HEADER MOD KONTROLÜ - ANA SAYFA / İÇ SAYFA AYRIMI
   ========================================================================== */

function syncHeaderPageMode() {
    const mainPage = document.getElementById('main-page-wrapper');
    const header = document.getElementById('header');

    if (!mainPage || !header) return;

    const isMainVisible = window.getComputedStyle(mainPage).display !== 'none';
    const isInnerPage = !isMainVisible;

    document.body.classList.toggle('inner-page-mode', isInnerPage);

    if (isInnerPage || window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('load', syncHeaderPageMode);
window.addEventListener('scroll', syncHeaderPageMode);
document.addEventListener('click', function () {
    setTimeout(syncHeaderPageMode, 80);
});
/* ==========================================================================
   360 SANAL TUR DİNAMİK SAYFA
   ========================================================================== */

let tour360Viewer = null;

const tour360Data = {
tipA: {
    title: "TİP A Daire",
    desc: "TİP A daire planı için antre, salon, yatak odası ve banyo alanlarını 360° sanal tur ile keşfedin.",
    firstScene: "antre",
    rooms: [
        { id: "antre", label: "Antre", panorama: "assets/images/360/tip-a/antre.webp" },
        { id: "salon", label: "Salon", panorama: "assets/images/360/tip-a/salon.webp" },
        { id: "yatak-oda", label: "Yatak Odası", panorama: "assets/images/360/tip-a/yatak-oda.webp" },
        { id: "banyo", label: "Banyo", panorama: "assets/images/360/tip-a/banyo.webp" }
    ]
},

tipB: {
    title: "TİP B Daire",
    desc: "TİP B daire planı için antre, salon, yatak odası ve banyo alanlarını 360° sanal tur ile keşfedin.",
    firstScene: "antre",
    rooms: [
        { id: "antre", label: "Antre", panorama: "assets/images/360/tip-b/antre.webp" },
        { id: "salon", label: "Salon", panorama: "assets/images/360/tip-b/salon.webp" },
        { id: "yatak-oda", label: "Yatak Odası", panorama: "assets/images/360/tip-b/yatak-oda.webp" },
        { id: "banyo", label: "Banyo", panorama: "assets/images/360/tip-b/banyo.webp" }
    ]
},

    tipC: {
        title: "TİP C Daire",
        desc: "TİP C daire planına ait 360° sanal tur deneyimi.",
        firstScene: "salon",
        rooms: [
            { id: "salon", label: "Salon", panorama: "assets/images/3d.webp" },
            { id: "mutfak", label: "Mutfak", panorama: "assets/images/mutfak.webp" },
            { id: "yatak-oda", label: "Yatak Odası", panorama: "assets/images/yatak-oda.webp" },
            { id: "banyo", label: "Banyo", panorama: "assets/images/banyo.webp" }
        ]
    },

tipD: {
    title: "TİP D Daire",
    desc: "TİP D daire planı için antre, salon, yatak odası ve banyo alanlarını 360° sanal tur ile keşfedin.",
    firstScene: "antre",
    rooms: [
        { id: "antre", label: "Antre", panorama: "assets/images/360/tip-d/antre.webp" },
        { id: "salon", label: "Salon", panorama: "assets/images/360/tip-d/salon.webp" },
        { id: "yatak-oda", label: "Yatak Odası", panorama: "assets/images/360/tip-d/yatak-oda.webp" },
        { id: "banyo", label: "Banyo", panorama: "assets/images/360/tip-d/banyo.webp" }
    ]
}
};

function hide360TourPage() {
    const tourPage = document.getElementById('tour360-page-wrapper');

    if (tourPage) {
        tourPage.classList.remove('active');
        tourPage.style.display = 'none';
        tourPage.innerHTML = '';
    }

    if (tour360Viewer) {
        tour360Viewer.destroy();
        tour360Viewer = null;
    }
}

function load360TourPage() {
    const mainPage = document.getElementById('main-page-wrapper');
    const corpPage = document.getElementById('corporate-page-wrapper');
    const servicesPage = document.getElementById('services-page-wrapper');
    const contactPage = document.getElementById('contact-page-wrapper');
    const projectsPage = document.getElementById('projects-page-wrapper');
    const tourPage = document.getElementById('tour360-page-wrapper');
    const header = document.getElementById('header');

    if (!tourPage) return;

    if (mainPage) mainPage.style.display = 'none';

    [corpPage, servicesPage, contactPage, projectsPage].forEach(page => {
        if (page) {
            page.classList.remove('active');
            page.style.display = 'none';
            page.innerHTML = '';
        }
    });

    tourPage.style.display = 'block';

    tourPage.innerHTML = `
        <section class="tour360-page">
            <div class="container">
                <div class="tour360-header">
                    <span>360° SANAL TUR</span>
                   <h2>Nebi Abide Suites 3. Etap <strong>Daire Deneyimi</strong></h2>
                    <p>
                        Tüm daire tiplerini 360° sanal tur ile keşfedin.
                        Salon, mutfak, yatak odası ve banyo alanları arasında geçiş yaparak projeyi dijital olarak deneyimleyin.
                    </p>
                </div>

                <div class="tour360-shell">
                    <div class="tour360-topbar">
                        <div>
                            <h3 id="tour360Title">1+1 Örnek Daire</h3>
                            <p id="tour360Desc">Modern 1+1 yaşam alanı için 360° iç mekan deneyimi.</p>
                        </div>

<div class="tour360-type-tabs">
    <button class="active" type="button" onclick="change360ApartmentType('tipA', this)">TİP A</button>
    <button type="button" onclick="change360ApartmentType('tipB', this)">TİP B</button>
    <button type="button" onclick="change360ApartmentType('tipC', this)">TİP C</button>
    <button type="button" onclick="change360ApartmentType('tipD', this)">TİP D</button>
</div>
                    </div>

                    <div class="tour360-viewer-wrap">
                        <div id="tour360Viewer"></div>
                    </div>

                    <div class="tour360-room-bar" id="tour360RoomBar"></div>
                </div>

                <div class="tour360-back-wrap">
                    <a href="javascript:void(0)" class="tour360-back" onclick="showMainPage()">
                        Ana Sayfaya Dön
                    </a>
                </div>
            </div>
        </section>
    `;

    requestAnimationFrame(() => {
        tourPage.classList.add('active');
        init360ApartmentTour('tipA');
    });

    if (header) header.classList.add('scrolled');

    document.body.classList.add('inner-page-mode');
    if (typeof closeMenu === 'function') {
    closeMenu();
}

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function build360Scenes(apartment) {
    const scenes = {};

    apartment.rooms.forEach(room => {
        scenes[room.id] = {
            type: "equirectangular",
            panorama: room.panorama,
            autoLoad: true,
            hfov: 120,
            maxHfov: 130,
            minHfov: 60,
            autoRotate: -1,
            showControls: true,
            compass: false,
            mouseZoom: false
        };
    });

    return scenes;
}

function render360RoomButtons(apartment) {
    const roomBar = document.getElementById('tour360RoomBar');

    if (!roomBar) return;

    roomBar.innerHTML = apartment.rooms.map((room, index) => `
        <button 
            type="button" 
            class="${index === 0 ? 'active' : ''}" 
            onclick="switch360Room('${room.id}', this)">
            ${room.label}
        </button>
    `).join('');
}

function init360ApartmentTour(type = "onePlusOne") {
    const apartment = tour360Data[type];

    if (!apartment) return;

    const title = document.getElementById('tour360Title');
    const desc = document.getElementById('tour360Desc');

    if (title) title.textContent = apartment.title;
    if (desc) desc.textContent = apartment.desc;

    render360RoomButtons(apartment);

    if (tour360Viewer) {
        tour360Viewer.destroy();
        tour360Viewer = null;
    }

    tour360Viewer = pannellum.viewer('tour360Viewer', {
        default: {
            firstScene: apartment.firstScene,
            sceneFadeDuration: 900
        },
        scenes: build360Scenes(apartment)
    });
}

function switch360Room(roomId, button) {
    if (tour360Viewer) {
        tour360Viewer.loadScene(roomId);
    }

    document.querySelectorAll('.tour360-room-bar button').forEach(btn => {
        btn.classList.remove('active');
    });

    if (button) button.classList.add('active');
}

function change360ApartmentType(type, button) {
    document.querySelectorAll('.tour360-type-tabs button').forEach(btn => {
        btn.classList.remove('active');
    });

    if (button) button.classList.add('active');

    init360ApartmentTour(type);
}
/* ==========================================================================
   SGR GRUP - PRELOADER / ÇİZGİ DOLUNCA SAYFA AÇ
   ========================================================================== */

(function initSgrPreloader() {
    const preloader = document.getElementById("sgrPreloader");

    if (!preloader) return;

    document.body.classList.add("sgr-loading");

    window.addEventListener("load", () => {
        preloader.classList.add("is-loading");

        setTimeout(() => {
            preloader.classList.add("is-hidden");
            document.body.classList.remove("sgr-loading");

            setTimeout(() => {
                preloader.remove();
            }, 800);
        }, 920);
    });

    setTimeout(() => {
        if (!preloader.classList.contains("is-hidden")) {
            preloader.classList.add("is-loading");

            setTimeout(() => {
                preloader.classList.add("is-hidden");
                document.body.classList.remove("sgr-loading");

                setTimeout(() => {
                    preloader.remove();
                }, 800);
            }, 920);
        }
    }, 3200);
})();
/* ==========================================================================
   SGR GRUP - MOBILE MENU ENGINE
   ========================================================================== */

(function initMobileMenu() {
    const menuToggle = document.getElementById("menuToggle");
    const menuClose = document.getElementById("menuClose");
    const mobileNav = document.getElementById("mobileNav");
    const mobileOverlay = document.getElementById("mobileOverlay");
    const mobileLinks = document.querySelectorAll(".mobile-nav a");

    if (!menuToggle || !mobileNav || !mobileOverlay) return;

    function openMobileMenu() {
        mobileNav.classList.add("active");
        mobileOverlay.classList.add("active");
        document.body.classList.add("mobile-menu-open");
    }

    function closeMobileMenu() {
        mobileNav.classList.remove("active");
        mobileOverlay.classList.remove("active");
        document.body.classList.remove("mobile-menu-open");
    }

    menuToggle.addEventListener("click", openMobileMenu);
    mobileOverlay.addEventListener("click", closeMobileMenu);

    if (menuClose) {
        menuClose.addEventListener("click", closeMobileMenu);
    }

    mobileLinks.forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
    });

    window.closeMenu = closeMobileMenu;
})();
/* ==========================================================================
   SGR GRUP - MOBILE SUBMENU ENGINE
   ========================================================================== */

(function initMobileSubmenus() {
    const submenuToggles = document.querySelectorAll(".mobile-submenu-toggle");

    submenuToggles.forEach((toggle) => {
        toggle.addEventListener("click", function () {
            const currentSubmenu = this.closest(".mobile-submenu");

            document.querySelectorAll(".mobile-submenu").forEach((submenu) => {
                if (submenu !== currentSubmenu) {
                    submenu.classList.remove("active");
                }
            });

            currentSubmenu.classList.toggle("active");
        });
    });
})();
/* ==========================================================================
/* ==========================================================================
   SGR GRUP - MOBILE SUBMENU ENGINE
   ========================================================================== */

(function initMobileSubmenus() {
    const submenuToggles = document.querySelectorAll(".mobile-submenu-toggle");

    document.querySelectorAll(".mobile-submenu").forEach((submenu) => {
        submenu.classList.remove("active");
    });

    submenuToggles.forEach((toggle) => {
        toggle.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            const currentSubmenu = this.closest(".mobile-submenu");

            document.querySelectorAll(".mobile-submenu").forEach((submenu) => {
                if (submenu !== currentSubmenu) {
                    submenu.classList.remove("active");
                }
            });

            currentSubmenu.classList.toggle("active");
        });
    });
})();
(function clearContactActiveOnNavigation() {
    const functionsToPatch = [
        "showMainPage",
        "loadCorporatePage",
        "loadAllServices",
        "load360TourPage",
        "loadProjectsPage",
        "loadProjectDetail"
    ];

    functionsToPatch.forEach((functionName) => {
        const originalFunction = window[functionName];

        if (typeof originalFunction !== "function") return;
        if (originalFunction.__contactPatchApplied) return;

        window[functionName] = function (...args) {
            document.body.classList.remove("contact-active");
            return originalFunction.apply(this, args);
        };

        window[functionName].__contactPatchApplied = true;
    });
})();
/* ==========================================================================
   SGR GRUP - PREMIUM MOUSE EFFECT ENGINE
   ========================================================================== */

(function initSgrPremiumCursor() {
    const dot = document.getElementById("sgrCursorDot");
    const ring = document.getElementById("sgrCursorRing");

    if (!dot || !ring) return;
    if (window.matchMedia("(max-width: 1024px)").matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    function moveCursor(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;

        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;

        document.body.classList.add("sgr-cursor-visible");
        document.body.classList.remove("sgr-cursor-hidden");
    }

    function animateRing() {
        ringX += (mouseX - ringX) * 0.16;
        ringY += (mouseY - ringY) * 0.16;

        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;

        requestAnimationFrame(animateRing);
    }

    function bindHoverTargets() {
        const targets = document.querySelectorAll(`
            a,
            button,
            .sgr-project-card,
            .sgr-detail-thumb,
            .room-text-btn,
            .hero-slider-arrow,
            .slider-dot,
            input,
            textarea,
            select
        `);

        targets.forEach((target) => {
            if (target.__sgrCursorBound) return;

            target.addEventListener("mouseenter", () => {
                document.body.classList.add("sgr-cursor-hover");
            });

            target.addEventListener("mouseleave", () => {
                document.body.classList.remove("sgr-cursor-hover");
            });

            target.__sgrCursorBound = true;
        });
    }

    window.addEventListener("mousemove", moveCursor);

    window.addEventListener("mouseleave", () => {
        document.body.classList.add("sgr-cursor-hidden");
    });

    window.addEventListener("mouseenter", () => {
        document.body.classList.remove("sgr-cursor-hidden");
    });

    bindHoverTargets();
    animateRing();

    const observer = new MutationObserver(() => {
        bindHoverTargets();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();