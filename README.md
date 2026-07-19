# Blog-Manager
Blog Manager
# 🚀 React Blog & Gönderi Yönetim Sistemi

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

Web Geliştirme eğitimi proje yönergelerine uygun olarak **sıfırdan** geliştirilmiş, modern bir frontend uygulamasıdır. Kullanıcıların tarayıcı üzerinde (LocalStorage) blog gönderilerini yönetebildiği, CRUD (Oluşturma, Okuma, Güncelleme, Silme) işlemlerini barındıran dinamik bir yapıdır.

## ✨ Özellikler (Proje İsterleri Tamamlandı)

- ✅ **Ekleme İşlemi:** Yeni bir blog gönderisi (başlık, içerik, yazar) eklenebilir.
- ✅ **Listeleme İşlemi:** Eklenen tüm yazılar ana sayfada modern kart tasarımlarıyla listelenir.
- ✅ **Güncelleme İşlemi:** Var olan gönderilerin içerikleri düzenlenebilir.
- ✅ **Silme İşlemi:** Seçilen bir gönderi sistemden kalıcı olarak silinebilir.
- ✅ **Local Storage Kullanımı:** Herhangi bir backend kullanılmadan veriler tarayıcıda tutulur, sayfa yenilense de veriler kaybolmaz.

## 🛠️ Kullanılan Teknolojiler

- **Kütüphane:** ReactJS (Vite ile kurulmuştur)
- **Tip Güvenliği:** TypeScript
- **Stil & Tasarım:** Tailwind CSS
- **Veri Depolama:** Tarayıcı LocalStorage API

## 📂 Proje Klasör Yapısı

Proje, yönergelerde istenen modüler yapıya uygun olarak tasarlanmıştır:

```text
src/
├── Components/     # Uygulama genelinde tekrar kullanılan UI bileşenleri (Navbar, PostCard vb.)
├── Pages/          # Yönlendirme yapılan ana ekranlar (Home, Form/Manage sayfaları)
├── Interfaces/     # TypeScript tip tanımlamaları (Post modeli vb.)
├── App.tsx         # Ana uygulama bileşeni
└── main.tsx        # React DOM render noktası
```

## 🚀 Kurulum ve Çalıştırma

Projeyi bilgisayarınızda çalıştırmak için:

1. **Projeyi Klonlayın:**
   ```bash
   git clone https://github.com/kullanici-adiniz/react-blog-project.git
   ```

2. **Proje Dizinine Girin:**
   ```bash
   cd react-blog-project
   ```

3. **Gerekli Paketleri Yükleyin:**
   ```bash
   npm install
   ```

4. **Geliştirme Sunucusunu Başlatın:**
   ```bash
   npm run dev
   ```

5. **Tarayıcıda Görüntüleyin:**
   Terminalde beliren adrese (genellikle `http://localhost:5173`) giderek uygulamayı test edebilirsiniz.

## 🌐 Yayına Alma (Deployment)
Bu proje, GitHub üzerinden **Netlify** (veya Vercel) kullanılarak yayına alınmaya hazır bir mimaride oluşturulmuştur.
