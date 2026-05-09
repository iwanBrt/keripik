# 📸 UMKM Mood Scanner - Fitur Deteksi Wajah & Rekomendasi AI

Fitur cerdas yang mengintegrasikan kamera perangkat dengan AI untuk menganalisis ekspresi wajah (*mood*) pelanggan, lalu memberikan rekomendasi produk UMKM (camilan/minuman) yang paling sesuai dengan suasana hati mereka saat itu.


## ⚙️ Alur Kerja Sistem (Workflow)
1. **Akses Kamera:** Pengguna memberikan izin akses kamera melalui antarmuka web.
2. **Pengambilan Gambar:** 
3. **Pengiriman Data (Aman):** 
4. **Analisis Multimodal:** API Route mengirimkan gambar beserta instruksi (*prompt*) spesifik ke Gemini API untuk mendeteksi emosi dasar.
5. **Pemetaan Hasil:** Gemini mengembalikan respons berformat JSON murni yang berisi *mood* dan kategori rasa yang cocok.
6. **Tampilan Dinamis:** Frontend menerima JSON dan langsung memfilter data katalog produk UMKM berdasarkan kategori rasa tersebut.

## 🧠 Logika Pemetaan Mood ke Kategori Rasa
Prompt AI diatur untuk mengkategorikan ekspresi wajah ke dalam 5 suasana hati utama dan mencocokkannya dengan kebiasaan "ngemil" pelanggan Indonesia:

| Emosi Terdeteksi | Kategori Rasa | Contoh Produk UMKM |
| :--- | :--- | :--- |
| **Senang** 😄 | Manis | Brownies, Mochi, Minuman Manis |
| **Marah** 😡 | Pedas | Keripik Pedas Level, Basreng |
| **Santai** 😎 | Balado | Makaroni Balado, Kerupuk |
| **Cape** 😫 | Pedas Manis | Basreng Pedas Manis, Camilan Gurih |
| **Sedih** 😢 | Extra Pedas | Ceker Mercon, Seblak |

