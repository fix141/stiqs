// app.js

// Tunggu sampai semua konten HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    // 1. Inisialisasi AOS (Animate on Scroll)
    AOS.init({
        duration: 700, // durasi animasi
        once: true,     // animasi cuma jalan sekali
        offset: 100,    // trigger animasi 100px sebelum elemen keliatan
    });


    // 2. Interaksi Navbar "Scroll-to-Solid"
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Pas di-scroll ke bawah
            navbar.classList.add('bg-white', 'shadow-lg', 'text-gray-800');
            navbar.classList.remove('text-white');
        } else {
            // Pas di paling atas
            navbar.classList.remove('bg-white', 'shadow-lg', 'text-gray-800');
            navbar.classList.add('text-white');
        }
    });


    // 3. Interaksi "Product Hover Background Change"
    const productSection = document.getElementById('product-section');
    const productCards = document.querySelectorAll('.product-card');
    
    // Simpan warna background default
    const defaultBg = 'bg-gray-50';
    // List semua kemungkinan warna background
    const bgColors = ['bg-yellow-50', 'bg-red-50', 'bg-green-50'];

    productCards.forEach(card => {
        // Pas mouse masuk ke card
        card.addEventListener('mouseenter', () => {
            const newBg = card.getAttribute('data-bg-color');
            
            // Hapus semua kemungkinan warna bg
            productSection.classList.remove(defaultBg, ...bgColors);
            
            // Tambahkan warna bg yang baru
            if (newBg) {
                productSection.classList.add(newBg);
            }
        });

        // Pas mouse keluar dari card
        card.addEventListener('mouseleave', () => {
            // Hapus semua kemungkinan warna bg
            productSection.classList.remove(...bgColors);
            
            // Kembalikan ke warna default
            productSection.classList.add(defaultBg);
        });
    });

});

// ===== Efek 3D Hero Section (HAPUS BLOK INI) =====
const heroSection = document.getElementById('hero');
const heroContent = document.getElementById('hero-content');

heroSection.addEventListener('mousemove', (e) => {
    // ... (semua isi di dalemnya) ...
});

heroSection.addEventListener('mouseleave', () => {
    // ... (semua isi di dalemnya) ...
});
// ===============================================

// ===== FAQ Accordion =====
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const arrow = button.querySelector('.faq-arrow');

        // Toggle (buka/tutup) jawaban
        answer.classList.toggle('hidden');

        // Animasi panah
        arrow.classList.toggle('rotate-180');
    });
});