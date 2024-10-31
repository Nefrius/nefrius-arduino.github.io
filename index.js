const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Ana sayfa
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // index.html dosyanız
});

// Diğer sayfalar
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html')); // diğer sayfanız
});

// 404 Hata Sayfası
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html')); // 404.html dosyanız
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
