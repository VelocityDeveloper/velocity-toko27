Velocity Child Theme Paket Toko Online Toko 27
=================
[toko27.velocitydeveloper.com](https://toko27.velocitydeveloper.com/)

Child Theme for the Velocity System WordPress theme.

### Required
Theme Velocity versi 2.7.0 keatas, [Download](https://github.com/VelocityDeveloper/velocity/releases)

### Required Plugins
**VD Store**, [Download](https://github.com/Velocity-Developer/vd-store/releases) — produk `store_product`,
kategori `store_product_cat`, merek `brand`. Sejak 1.1.0 tema tidak lagi memakai plugin Velocity Toko
maupun Kirki.

Integrasi VD Store ada di `inc/vd-store.php`, `css/vd-store.css`, dan template override di folder
`vd-store/` (arsip, kategori, merek, detail produk). Pencarian situs diarahkan ke arsip produk.

| Velocity Toko (≤1.0.x) | VD Store (1.1.0) |
|---|---|
| `[harga]` | `[wp_store_price]` |
| `[beli]` | `[wp_store_add_to_cart]` |
| `[cart]` | `[wp_store_cart]` |
| `[profile]` | ikon ke halaman Profil Saya VD Store (`velocity_toko27_profil()`) |
| `[kontak]` | kontak dari pengaturan VD Store (`velocity_toko27_kontak()`) |
| `[thumbnail]` | `[wp_store_thumbnail]` (label & diskon dari VD Store) |
| `[slider-produk]` | `[wp_store_gallery]` |
| `[detail-produk]` | `[wp_store_product_info]` |
| `[love]` | `[wp_store_add_to_wishlist]` |
| `[beli-lain]` | `velocity_toko27_beli_lain()` |
| `[share]` | `[velocity-sharepost]` (Velocity Addons) |
| filter kategori | `[wp_store_filters]` |

### Beranda
Template **Home Template** (`page-home.php`): bar merah kontak + profil/keranjang + cari, gambar header (Header Image),
menu, slider selebar kotak, lalu nama situs + 8 produk 4 kolom (tombol Detail) berpaginasi dan 3 artikel;
sidebar di KANAN.

### Widget
Shortcode untuk widget Teks (susunan demo, dibaca installer lewat `velocity_tema_widget_sidebar()`; footer tanpa widget):

- Sidebar (kanan): `[toko27_kategori]`, `[toko27_sosmed facebook="…" instagram="…" twitter="…" youtube="…"]`, `[toko27_bank]`, `[toko27_ekspedisi]`
- Lainnya: `[toko27_cari_produk]`, `[toko27_produk_terbaru jumlah="5"]`, `[toko27_best_seller jumlah="5"]`, `[toko27_info_terbaru]`,
  `[toko27_testimoni]`, `[toko27_kontak]`, `[toko27_kalender]`, `[kontak-inline style="false"]`

### Halaman
Halaman **Konfirmasi Pembayaran** = `[store_tracking]` (input nomor pesanan VD Store: tagihan, rekening, unggah bukti
transfer). Override tipis `vd-store/pages/tracking.php` membuat pencarian tetap di halaman tempat form dipasang.

### Customizer
Appearance > Customize > **Velocity Toko 27**: Warna (utama & sekunder), Slider Home (5 slot gambar),
Font (menu & judul widget, teks — Google Fonts; bawaan Roboto), Velocity Home News (judul & kategori artikel beranda).
Warna teks/judul/link: Theme Colors tema induk. Latar website: pengaturan Background tema induk.
Logo: Site Identity. Halaman beranda memakai template **Home Template**, halaman pricelist
template **Velocity Toko Pricelist**. Halaman Katalog & Profil Saya VD Store selalu tanpa sidebar.

### Usage
Simply download the zip and upload the zip (velocity-toko27.zip) under your WordPress dashboard at Appearance > Themes. Or extract and upload via FTP at wp-content/themes/.
