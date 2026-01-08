(function ($) {
    "use strict";

        
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        const scrollTop = $(this).scrollTop();
        const bannerHeight = $('.carousel').outerHeight();
    
        // Navbar
        if (scrollTop > bannerHeight - 60) {
            $('.navbar').addClass('show bg-dark shadow-sm');
        } else {
            $('.navbar').removeClass('show bg-dark shadow-sm');
        }
    
        
    });
    


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
})(jQuery);


//utamanya
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("openingVideo");
    const videoOpening = document.getElementById("videoOpening");
    const landingPage = document.getElementById("landingPage");
    const mainContent = document.getElementById("mainContent");
    const floatingButtons = document.getElementById("floatingButtons");
    const guestNameEl = document.getElementById("guestName");

    const params = new URLSearchParams(window.location.search);
    const guestName = params.get("to") || "Tamu Undangan";
    if (guestNameEl) guestNameEl.textContent = guestName;

    if (video) {
        video.addEventListener("ended", () => {
            videoOpening.classList.add("hide");

            setTimeout(() => {
                videoOpening.style.display = "none";
                landingPage.style.display = "flex";
                landingPage.getBoundingClientRect();
                landingPage.classList.add("show");
            }, 600);
        });

        video.addEventListener("error", () => {
            videoOpening.style.display = "none";
            landingPage.style.display = "flex";
            landingPage.getBoundingClientRect();
            landingPage.classList.add("show");
        });
    }
});

//Tombol open invitation
let invitationOpened = false;
function openInvitation() {
    invitationOpened = true;
    goFullScreen();
    const landingPage = document.getElementById("landingPage");
    const mainContent = document.getElementById("mainContent");
    const floatingButtons = document.getElementById("floatingButtons");
    const music = document.getElementById("bgMusic");

    landingPage.classList.remove("show");
    landingPage.classList.add("hide");

    setTimeout(() => {
        landingPage.style.display = "none";

        mainContent.style.display = "block";
        floatingButtons.style.display = "flex";

        mainContent.getBoundingClientRect();
        floatingButtons.getBoundingClientRect();

        mainContent.classList.add("show");
        floatingButtons.classList.add("show");

        fadeInMusic(music, 0.6, 3000);
    }, 800);
}

//Fade in content
const fadeItems = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

fadeItems.forEach(el => observer.observe(el));


//Fade in BGmusic
function fadeInMusic(audio, targetVolume = 0.6, duration = 3000) {
    if (!audio) return;

    audio.volume = 0;
    audio.play();

    const stepTime = 100;
    const steps = duration / stepTime;
    const volumeStep = targetVolume / steps;

    let currentStep = 0;
    const fadeInterval = setInterval(() => {
        currentStep++;
        audio.volume = Math.min(audio.volume + volumeStep, targetVolume);

        if (currentStep >= steps) {
            clearInterval(fadeInterval);
        }
    }, stepTime);
}

//Flotting icon
function openWhatsApp() {
    window.open("https://wa.me/628xxxxxxxxxx", "_blank");
}

function openGift() {
    alert("Fitur gift belum diaktifkan.");
}

let musicPlaying = true;

function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const icon = document.querySelector("#musicToggle i");

    if (!music) return;

    if (musicPlaying) {
        music.pause();
        icon.className = "fas fa-volume-mute";
    } else {
        music.play();
        icon.className = "fas fa-volume-up";
    }

    musicPlaying = !musicPlaying;
}

//klik lalu fullscreen
function goFullScreen() {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { // Safari
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge lama
        elem.msRequestFullscreen();
    }
}

