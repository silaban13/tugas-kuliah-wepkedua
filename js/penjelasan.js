const params = new URLSearchParams(window.location.search)
const food = params.get("food")

const foods = {
  "gado-gado": {
    name: "Gado-gado",
    origin: "Betawi (Jakarta)",
    img: "/img/food-gado_gado.jpeg",
    desc: "<p> Gado-gado adalah makanan khas Indonesia, terutama populer di daerah Betawi (Jakarta).</p> <p> Nama gado-gado berasal dari bahasa Betawi yang berarti 'campur-campur', sesuai dengan bentuk hidangannya yang terdiri dari berbagai sayuran, lontong, tahu, tempe, telur, dan disiram saus kacang. </p> Meskipun mirip dengan makanan lain seperti pecel (Jawa Tengah/Jawa Timur) dan lotek (Sunda), gado-gado memiliki ciri khas pada bumbu kacangnya yang lebih kental dan gurih karena menggunakan campuran santan atau air asam jawa.  "
  },
  "nasi-goreng": {
    name: "Nasi Goreng",
    origin: "Tiongkok (China)",
    img: "/img/food-nasi_goreng.jpeg",
    desc: "<p> Nasi goreng berasal dari Tiongkok (China). </p> <p> Awalnya, nasi goreng dibuat sebagai cara untuk memanfaatkan nasi sisa dari hari sebelumnya agar tidak terbuang. </p> </p>  Tradisi ini sudah ada sejak lebih dari 1.000 tahun lalu, pada masa Dinasti Sui (589–618 M). <p>  Kemudian, masakan ini menyebar ke Asia Tenggara melalui perantauan orang Tionghoa, termasuk ke Indonesia, Malaysia, dan Singapura. </p> Di Indonesia, nasi goreng berkembang menjadi makanan khas Nusantara dengan cita rasa yang berbeda karena pengaruh bumbu lokal dan rempah-rempah."
  },
  "sate": {
    name: "Sate",
    origin: "Madura & Ponorogo",
    img: "/img/food-sate.jpeg",
    desc: "<p> Nasi goreng berasal dari Tiongkok (China). </p> <p> Awalnya, nasi goreng dibuat sebagai cara untuk memanfaatkan nasi sisa dari hari sebelumnya agar tidak terbuang. </p> <p>  Tradisi ini sudah ada sejak lebih dari 1.000 tahun lalu, pada masa Dinasti Sui (589–618 M). </p>  Kemudian, masakan ini menyebar ke Asia Tenggara melalui perantauan orang Tionghoa, termasuk ke Indonesia, Malaysia, dan Singapura. Di Indonesia, nasi goreng berkembang menjadi makanan khas Nusantara dengan cita rasa yang berbeda karena pengaruh bumbu lokal dan rempah-rempah."
  },
  "soto": {
    name: "Soto",
    origin: "Jawa Timur",
    img: "/img/food-soto.jpeg",
    desc: "<p>Soto Lamongan adalah makanan khas dari Lamongan, sebuah kabupaten di Provinsi Jawa Timur, Indonesia. </p> <p>  Soto ini merupakan salah satu varian dari soto ayam Indonesia yang sangat populer di seluruh nusantara. </p> <p>  Ciri khas Soto Lamongan adalah kuahnya yang berwarna kuning bening, gurih, dan biasanya diberi taburan bubuk koya (campuran kerupuk udang dan bawang goreng yang dihaluskan) di atasnya. </p> <p>  Soto ini berasal dari tradisi masyarakat Lamongan yang gemar mengolah ayam kampung dengan bumbu rempah khas Jawa Timur. </p> Karena rasanya yang lezat dan mudah diterima lidah semua orang, Soto Lamongan kini banyak dijual di berbagai kota di Indonesia. "
  },
  "ambon": {
    name: "Ambon",
    origin: "Kota Medan",
    img: "/img/kue-ambon.jpeg",
    desc: " <p>  Bika Ambon adalah kue tradisional khas Indonesia yang berasal dari Kota Medan, Sumatera Utara — meskipun namanya mengandung kata “Ambon”, kue ini tidak berasal dari Ambon (Maluku). </p> <p> Menurut cerita, nama Ambon diambil dari nama sebuah jalan di Medan, yaitu Jalan Ambon, tempat pertama kali kue ini dijual dan menjadi populer. </p> <p>   Sejak itu, kue ini dikenal luas dengan nama Bika Ambon Medan. </p> Bika Ambon memiliki tekstur berongga, lembut, dan kenyal, serta aroma harum dari serai dan daun jeruk. "
  },
  "bolu": {
    name: "Bolu",
    origin: "Belum Ada",
    img: "/img/kue-bolu.jpeg",
    desc: "Belum Ada"
  },

}

if (foods[food]) {
  document.getElementById("food-name").textContent = foods[food].name
  document.getElementById("food-origin").textContent = foods[food].origin
  document.getElementById("food-desc").innerHTML = foods[food].desc
  document.getElementById("food-img").src = foods[food].img
} else {
  document.body.innerHTML = "<h2>Data makanan tidak ditemukan</h2>"
}
