// Fungsi untuk menampilkan halaman
function showPage(pageId) {
    // Sembunyikan semua halaman
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Tampilkan halaman yang dipilih
    document.getElementById(pageId).classList.add('active');

    // Update status aktif pada navbar
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Temukan link yang sesuai (logika sederhana)
    const activeLink = document.querySelector(`a[onclick="showPage('${pageId}')"]`);
    if(activeLink) activeLink.classList.add('active');

    // Tutup menu mobile jika terbuka
    const navbar = document.getElementById('navbar');
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
    }

    // Scroll ke atas
    window.scrollTo(0, 0);
}

// Fungsi Toggle Menu Mobile
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

// Inisialisasi awal
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
    
});
// Fungsi untuk Accordion pada Pertemuan 1
function toggleAccordion(contentId, itemElement) {
    // 1. Ambil elemen konten yang ingin ditampilkan
    const content = document.getElementById(contentId);
    
    // 2. Cek apakah item tersebut sedang aktif
    const isActive = itemElement.classList.contains('active');

    // 3. (Opsional) Tutup semua accordion lain agar hanya satu yang terbuka
    // Hapus blok kode ini jika ingin membiarkan banyak accordion terbuka sekaligus
    const allItems = document.querySelectorAll('.accordion-item');
    allItems.forEach(item => {
        item.classList.remove('active');
        const contentDiv = item.querySelector('.accordion-content');
        if (contentDiv) contentDiv.style.display = 'none';
    });

    // 4. Jika item yang diklik tadi tidak aktif, maka aktifkan sekarang
    if (!isActive) {
        itemElement.classList.add('active');
        content.style.display = 'block';
    }
}
