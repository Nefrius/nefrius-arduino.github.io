const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// src klasöründeki statik dosyaları servis et
app.use('/src', express.static(path.join(__dirname, 'src')));

// output.css'yi sunmak için ayar yap
app.use(express.static(path.join(__dirname))); // Kök dizinde yer alan dosyaları sunmak için

// index.html dosyasını sun
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 404.html dosyasını sun
app.get('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Sunucuyu başlat
app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor.`);
});
