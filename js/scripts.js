const dynamicImage = document.getElementById('dynamic-image');

const imageSources = [
    'image/Bali.jpg',
    'image/Bali2.jpg',
    'image/Bali3.jpg',
    'image/Bali4.jpg',
];

function changeImage() {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    dynamicImage.classList.add('hidden'); // Menambah kelas 'hidden' untuk menyembunyikan gambar dengan transisi
    setTimeout(() => {
        dynamicImage.src = imageSources[randomIndex];
        dynamicImage.classList.remove('hidden'); // Menghapus kelas 'hidden' setelah gambar berubah
    }, 500); // Waktu tunda sebelum mengubah gambar (dalam milidetik)
}

setInterval(changeImage, 3000);
