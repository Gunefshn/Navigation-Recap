# 📱 Navigation Recap – Fintech App Home

Bu proje, **Siliconmade Academy Mobil–Frontend Eğitim Serisi** kapsamında geliştirilmiş **5. mobil uygulama projesidir**.

Amaç; çoklu ekranlı bir mobil uygulamada **navigation akışını**, **dosya organizasyonunu** ve **UI spacing & layout disiplinini** gerçek bir tasarım referansı üzerinden pekiştirmektir.

---

## 🎯 Proje Amacı

Bu projede;
- Expo Router ile navigation yapısını pekiştirmek
- Tasarıma sadık kalarak UI yerleşimini doğru kurgulamak
- Bileşen bazlı, ölçeklenebilir bir mimari oluşturmak
hedeflenmiştir.

Hocamız tarafından verilen **Fintech App Home – Spacing Guidelines** tasarımı referans alınmıştır.

---

## 🚀 Kullanılan Teknolojiler

- **React Native**
- **TypeScript**
- **Expo**
- **Expo Router**
- **Native Components**
- **FlatList**

---

## 📱 Uygulama Özellikleri

- Çoklu ekran yapısı (Tab Navigation)
- Home, Analytics, Exchange, Investing ve More ekranları
- Yatay kart listeleri
- Quick Actions alanı
- Spacing guideline’lara uygun UI hiyerarşisi
- iOS uyumlu sade ve modern arayüz

---

## 🧭 Navigation Yapısı

- Expo Router kullanılarak dosya tabanlı navigation oluşturuldu
- Tab yapısı üzerinden ekranlar arası geçiş sağlandı
- Her ekran kendi sorumluluğuna göre ayrıştırıldı

---

## 🧩 Proje Yapısı

app/
 ├─ _layout.tsx
 ├─ index.tsx        # Home
 ├─ analytics.tsx
 ├─ exchange.tsx
 ├─ investing.tsx
 └─ more.tsx

components/
 ├─ Header.tsx
 ├─ CreditCardItem.tsx
 ├─ Currency.tsx
 ├─ AccountInfo.tsx
 ├─ ActionCard.tsx
 ├─ Lines.tsx
 └─ Container.tsx

data/
 ├─ creditCards.ts
 └─ actions.ts

assets/
 ├─ creditCard.png
 ├─ avatar.png
 └─ icons & images

🎨 UI & Layout Yaklaşımı

Referans tasarımdaki spacing değerleri dikkate alındı
Ekranlar arasında görsel tutarlılık sağlandı
Component’ler yeniden kullanılabilir şekilde tasarlandı
FlatList ile performanslı listeleme yapıldı

📸 Ekranlar
-Home (Fintech Dashboard)
-Analytics
-Exchange
-Investing
-More

Ekran görüntülerine LinkedIn paylaşımım üzerinden ulaşabilirsiniz.
https://www.linkedin.com/feed/update/urn:li:activity:7420094480684515328/?originTrackingId=gpoLP4e07sh5aQdMBhQj8g%3D%3D


⚙️ Kurulum
npm install
npx expo start

