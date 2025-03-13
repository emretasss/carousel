LC Waikiki Ürün Carousel
Açıklama
Bu proje, LC Waikiki ürün sayfalarında yer alan .product-detail elementi sonrasında dinamik olarak eklenen, responsive bir ürün carousel'ı oluşturur. Ürün listesi, aşağıdaki URL'den yapılan GET isteği ile çekilir:

bash
Kopyala
https://gist.githubusercontent.com/sevindi/5765c5812bbc8238a38b3cf52f233651/raw/56261d81af8561bf0a7cf692fe572f9e1e91f372/products.json
Carousel, "You Might Also Like" başlığı altında görüntülenir. Kullanıcı:

Bir ürün kartına tıkladığında ilgili ürün sayfası yeni sekmede açılır.
Kalp ikonuna tıkladığında ürünü favorilere ekleyip çıkarabilir; bu tercih localStorage’da saklanır.
Ürünler, ilk çalışmada API’den çekilip localStorage’a kaydedilir. Sonraki çalışmalarda ise veriler localStorage’dan okunur.
Özellikler
Responsive Tasarım: Mobil, tablet ve masaüstü uyumlu.
Dinamik Ürün Çekme: Ürün verileri API’den alınır ve localStorage’da saklanır.
Favori İşlevselliği: Kalp ikonuna tıklanarak favori ekleme/çıkarma yapılır.
Yeni Sekmede Açma: Ürün kartına tıklandığında ürün sayfası yeni sekmede açılır.
Tek Dosya Çözümü: Tüm işlevsellik, tek bir JavaScript dosyasında sunulmuştur.
Kullanım
Çalışma Ortamı: Kod, yalnızca sayfada .product-detail elementi bulunuyorsa çalışır.
Kullanım Şekli:
Kodun tamamını kopyalayın.
LC Waikiki ürün sayfasında, tarayıcınızın geliştirici araçları (Chrome Developer Tools) konsoluna yapıştırın ve çalıştırın.
jQuery Desteği:
Sayfada jQuery yüklü değilse, kod otomatik olarak jQuery kütüphanesini yükler.
Proje Yapısı
HTML Oluşturma: Carousel HTML yapısı, .product-detail elementinden hemen sonra eklenir.
CSS: Dinamik olarak oluşturulan CSS kodları, responsive tasarımı sağlar ve <style> etiketi ile sayfaya eklenir.
JavaScript İşlevselliği:
Ürün verilerinin çekilmesi ve localStorage yönetimi,
Ürün kartlarının oluşturulması ve gösterilmesi,
Favori ekleme/çıkarma işlemleri,
Carousel kaydırma işlemleri.
