const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace brand
html = html.replace(/NutriAlam/g, 'KeripikKu');
html = html.replace(/NUTRIALAM/g, 'KERIPIKKU');
html = html.replace(/ph-leaf/g, 'ph-cookie');

html = html.replace('Jamu Herbal Premium', 'Keripik Kentang Premium');
html = html.replace('Koleksi jamu herbal', 'Koleksi keripik kentang');
html = html.replace('Temukan hangat alami di setiap tegukan.', 'Temukan renyah gurih di setiap gigitan.');
html = html.replace('Racikan kunyit, jahe, temulawak, dan rempah pilihan dalam kemasan praktis untuk rutinitas sehat setiap hari.', 'Irisan kentang pilihan dengan bumbu rahasia dalam kemasan praktis untuk menemani aktivitas setiap hari.');
html = html.replace('Pilih Jamu', 'Pilih Keripik');

html = html.replace('<p class="mt-2 font-display text-xl font-extrabold text-brand-cream">Kunyit Asam</p>', '<p class="mt-2 font-display text-xl font-extrabold text-brand-cream">Keripik Balado</p>');
html = html.replace('<p class="text-sm font-bold text-brand-cream/60">Segar dan hangat</p>', '<p class="text-sm font-bold text-brand-cream/60">Renyah dan gurih</p>');

html = html.replace('Varian jamu', 'Varian keripik');

// Catalog
html = html.replace('Jamu Kunyit Asam', 'Keripik Manis');
html = html.replace('>Kunyit Asam</h2>', '>Keripik Manis</h2>');
html = html.replace('Segar, asam manis, cocok untuk ritual sehat pagi.', 'Manis karamel yang pas, bikin nggak bisa berhenti ngunyah.');
html = html.replace('Rp28k', 'Rp15k');
html = html.replace('Tambah Kunyit Asam', 'Tambah Keripik Manis');

html = html.replace('Jamu Beras Kencur', 'Keripik Pedas');
html = html.replace('>Beras Kencur</h2>', '>Keripik Pedas</h2>');
html = html.replace('Lembut, creamy, dengan aroma kencur yang khas.', 'Sensasi pedas yang nendang, cocok buat pencinta pedas.');
html = html.replace('Rp30k', 'Rp15k');
html = html.replace('Tambah Beras Kencur', 'Tambah Keripik Pedas');

html = html.replace('Jamu Temulawak Madu', 'Keripik Balado');
html = html.replace('>Temulawak Madu</h2>', '>Keripik Balado</h2>');
html = html.replace('Hangat herbal dengan sentuhan madu yang nyaman.', 'Bumbu balado meresap sempurna, gurih pedas nikmat.');
html = html.replace('Rp32k', 'Rp16k');
html = html.replace('Tambah Temulawak Madu', 'Tambah Keripik Balado');

html = html.replace('Jamu Jahe Sereh', 'Keripik Pedas Manis');
html = html.replace('>Jahe Sereh</h2>', '>Pedas Manis</h2>');
html = html.replace('Aroma sereh segar dengan hangat jahe yang ringan.', 'Kombinasi pedas manis yang bikin nagih setiap saat.');
html = html.replace('Rp29k', 'Rp16k');
html = html.replace('Tambah Jahe Sereh', 'Tambah Keripik Pedas Manis');

html = html.replace('Jamu Rosella Herbal', 'Keripik Extra Pedas');
html = html.replace('>Rosella Herbal</h2>', '>Extra Pedas</h2>');
html = html.replace('Asam segar, floral, dan cocok diminum dingin.', 'Level pedas maksimal untuk kamu yang berani coba!');
html = html.replace('Rp31k', 'Rp17k');
html = html.replace('Tambah Rosella Herbal', 'Tambah Keripik Extra Pedas');

html = html.replace('Butuh rekomendasi jamu?', 'Butuh rekomendasi keripik?');

html = html.replace('Setiap batch dibuat dari rempah pilihan untuk rasa, aroma, dan warna seduhan yang konsisten.', 'Setiap batch dibuat dari kentang pilihan dengan potongan presisi untuk tingkat kerenyahan yang konsisten.');
html = html.replace('Racikannya dibuat seimbang, tidak menusuk, dan nyaman diminum sebagai ritual harian.', 'Bumbunya dibuat seimbang, tidak berlebihan, dan gurihnya pas bikin nyaman dimakan tiap hari.');

html = html.replace('agar jamu terlihat menarik', 'agar keripik terlihat menarik, tidak hancur,');

html = html.replace('Pilih berdasarkan kebutuhan harian.', 'Pilih varian rasa favoritmu.');
html = html.replace('Setiap menu bisa diarahkan ke produk tertentu, misalnya stamina, relaksasi, pencernaan, atau minuman segar setelah aktivitas.', 'Setiap momen pasti butuh cemilan berbeda, dari rasa manis yang pas sampai pedas nendang, selalu ada pilihan buat kamu.');

html = html.replace('ph-sun-horizon', 'ph-film-strip');
html = html.replace('Pagi Segar', 'Teman Nonton');
html = html.replace('Kunyit asam dan beras kencur.', 'Keripik Manis dan Balado.');

html = html.replace('ph-fire', 'ph-game-controller');
html = html.replace('Hangat Malam', 'Mabar Seru');
html = html.replace('Jahe sereh dan temulawak madu.', 'Keripik Pedas dan Extra Pedas.');

html = html.replace('ph-drop', 'ph-coffee');
html = html.replace('Dingin Segar', 'Santai Sore');
html = html.replace('Rosella herbal dan kunyit asam.', 'Keripik Pedas Manis dan Manis.');

html = html.replace('Bundling jamu untuk hampers.', 'Bundling semua rasa keripik.');

html = html.replace('Bisa hangat, bisa dingin, tetap terasa rempahnya.', 'Selalu renyah, bumbu meresap, dan bikin nagih.');
html = html.replace('Tuang racikan', 'Buka kemasan');
html = html.replace('Seduh atau dinginkan', 'Ambil keripiknya');
html = html.replace('Nikmati perlahan', 'Nikmati kriuknya');
html = html.replace('Penyajian jamu', 'Penyajian keripik');

html = html.replace('Cari tahu racikan jamu mana yang paling cocok buat kamu.', 'Cari tahu varian keripik mana yang paling cocok buat kamu.');
html = html.replace('Aksen rempah', 'Aksen bumbu');

html = html.replace('Jamu herbal rumahan dari rempah pilihan untuk rutinitas sehat harian, acara keluarga, dan pesanan hampers.', 'Keripik kentang gurih renyah dengan bumbu spesial untuk menemani santai harian, acara keluarga, dan pesanan oleh-oleh.');

fs.writeFileSync('index.html', html);
