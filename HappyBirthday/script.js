// Fungsi untuk memutar musik ulang tahun
function playBirthdayMusic() {
    const music = document.getElementById('birthdayMusic');
    if (music) {
        music.play().catch(error => {
            console.log('Autoplay diblokir, klik kue untuk memutar musik');
        });
    }
}

// Fungsi untuk menampilkan konfeti
function showConfetti() {
    const colors = ['#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d', '#43aa8b', '#577590'];
    
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(confetti);
        
        // Hapus confetti setelah animasi selesai
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.remove();
            }
        }, 5000);
    }
}

// Fungsi untuk menampilkan pesan ulang tahun
function showBirthdayMessage() {
    const message = document.getElementById('birthdayMessage');
    if (message) {
        message.classList.remove('hidden');
    }
}

// Event listener setelah halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    const cakeImage = document.getElementById('cakeImage');
    const birthdayImage = document.querySelector('.birthday-image');
    
    if (cakeImage) {
        cakeImage.addEventListener('click', function() {
            // Tambah efek goyang pada gambar kue
            birthdayImage.classList.add('shake');
            
            // Putar musik
            playBirthdayMusic();
            
            // Tampilkan konfeti
            showConfetti();
            
            // Tampilkan pesan ulang tahun
            showBirthdayMessage();
            
            // Hentikan efek goyang setelah 2 detik
            setTimeout(() => {
                birthdayImage.classList.remove('shake');
            }, 2000);
        });
    }
});