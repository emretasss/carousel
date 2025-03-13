# LC Waikiki Ürün Carousel

## Proje Açıklaması

Bu proje, LC Waikiki ürün sayfalarında bulunan `.product-detail` elementinin hemen sonrasında dinamik olarak eklenen ve tüm cihazlarda uyumlu (responsive) çalışan bir ürün carousel'ı oluşturur. Ürün verileri, aşağıdaki URL üzerinden yapılan GET isteği ile çekilir:
https://gist.githubusercontent.com/sevindi/5765c5812bbc8238a38b3cf52f233651/raw/56261d81af8561bf0a7cf692fe572f9e1e91f372/products.json


Carousel, "You Might Also Like" başlığı altında görüntülenir. Kullanıcılar:

- Ürün kartına tıkladığında ilgili ürün sayfasını yeni sekmede açabilir.
- Kalp ikonuna tıkladığında ürünü favorilere ekleyip çıkarabilir; bu tercih localStorage’da saklanır.
- İlk çalışmada API’den çekilen veriler localStorage’a kaydedilir, sonraki çalışmalarda ise veriler localStorage üzerinden okunur.

## Özellikler

- **Dinamik Ürün Çekme:** API’den ürün verileri çekilir, localStorage ile yönetilir.
- **Favori İşlevselliği:** Ürün kartındaki kalp ikonuna tıklayarak favori ekleme/çıkarma yapılır.
- **Yeni Sekmede Ürün Açma:** Ürün kartına tıklandığında ilgili ürün sayfası yeni bir sekmede açılır.
- **Responsive Tasarım:** Carousel, mobil, tablet ve masaüstü cihazlarda uyumlu şekilde görüntülenir.
- **Tek Dosya Çözümü:** Tüm işlevsellik tek bir JavaScript dosyasında sunulmuştur.
- **jQuery Entegrasyonu:** Sayfada jQuery yüklü değilse, otomatik olarak yüklenir.

## Kurulum & Kullanım

1. **Çalışma Ortamı:**  
   Kod yalnızca sayfada `.product-detail` elementi bulunduğunda çalışır.

2. **Kullanım Adımları:**  
   - Tüm kodu kopyalayın.  
   - LC Waikiki ürün sayfasında, tarayıcınızın geliştirici araçları (Chrome Developer Tools) konsoluna yapıştırın ve çalıştırın.  
   - Eğer sayfada jQuery yüklü değilse, kod otomatik olarak jQuery kütüphanesini yükleyecektir.

## Proje Yapısı

- **HTML Oluşturma:**  
  Carousel HTML yapısı, `.product-detail` elementinin hemen sonrasına eklenir.

- **CSS:**  
  Dinamik olarak oluşturulan CSS kodları, responsive tasarımın yanı sıra stil ve düzenlemeleri sağlar. CSS, `<style>` etiketi aracılığıyla sayfaya eklenir.

- **JavaScript İşlevselliği:**  
  - Ürün verilerinin çekilmesi ve localStorage yönetimi.  
  - Ürün kartlarının oluşturulması ve DOM'a eklenmesi.  
  - Favori ekleme/çıkarma işlemleri.  
  - Carousel kaydırma işlevselliği (sol ve sağ yön tuşları ile).  
  - Ürün kartına tıklandığında ilgili ürünün yeni sekmede açılması.

## Notlar

- Sayfada reklam engelleyici veya izleme scriptleri nedeniyle oluşabilecek "ERR_BLOCKED_BY_CLIENT" hataları, carousel’in işlevselliğini etkilemez.
- Ürün görsellerinde görülen sertifika uyarıları, veri çekme ve carousel işlevselliği üzerinde etkili değildir.
- Kodun çalışması için internet bağlantısı gerekmektedir.
- Dış kaynaklı script hataları (ör. Google Optimize, AppDynamics) projenin işleyişine müdahale etmez.
