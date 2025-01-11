import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const Home = () => {
  return (
    <>
      <Header />
     
    <div className="container mt-5">
      <div className="row">
       
        <div className="col-md-4">
          <img
            alt="Sales Suzuzki"
            className="img-fluid"
            src="https://placehold.co/350x350"
          />
          <div className="contact-info mt-3">
            <div>
              <strong>Sharif Hidayat</strong>
              <br />
              (Sales Consultant)
            </div>
            <div>
              <i className="fas fa-phone"></i> TLP: 08******
            </div>
            <div>
              <i className="fas fa-mobile-alt"></i> WA: 08*******
            </div>
            <div>
              <i className="fas fa-map-marker-alt"></i> Suzuki
              <br />
              PT. Sentral Oto Maju
              <br />
              Jalan Sultan Agung KM.28 No1, Medan Satria, Kota Bekasi, Jawa
              Barat - 17152.
            </div>
          </div>
        </div>

    
        <div className="col-md-8">
          <h2>Sales Mobil Suzui Bandung</h2>
          <p>
            Selamat Datang di website Sales Dealer Suzuki
          </p>
          <p>
            Perkenalkan nama saya <strong>ZSaharif Hidayat</strong> / Sales
            Consultant Promo Mazda Jakarta. Anda bisa menghubungi saya di no
            Telepon dan Chat WhatsApp: 0823-1234-8722 Sales Consultant di Dealer
            Resmi <strong>Mazda Sultan Agung Jakarta</strong> dari PT. Sentral
            Oto Maju Menawarkan pelayanan pembelian Cash atau Kredit dengan
            Harga yang bersaing, Cashback (Discount) yang super duper
            fantastis, dan juga Test Drive, Proses Mudah dan Sangat Cepat, DP
            Rendah, Angsuran terjangkau, Terima tukar tambah dengan Harga
            terbaik, serta kualitas pelayanan terbaik.
          </p>
          <p>
            Mau pesan Mobil Mazda di Dealer Resmi kami{" "}
            <strong>Dealer Mazda Sultan Agung</strong>, saya siap membantu Anda:
          </p>
          <ul className="list-group">
            <li className="list-group-item">
              Berlaku Seluruh <strong>Jakarta & Jabodetabek</strong>
            </li>
            <li className="list-group-item">Pembelian Cash dan Kredit</li>
            <li className="list-group-item">Dapat Gratis Aksesoris</li>
            <li className="list-group-item">
              Unit Cepat, Proses Cepat dan Mudah
            </li>
            <li className="list-group-item">
              Data di Bantu Sampai Approve
            </li>
            <li className="list-group-item">Free Jasa Service dan Oli</li>
            <li className="list-group-item">
              Promo Terbaik dan Diskon Maksimal
            </li>
            <li className="list-group-item">
              Terima tukar tambah dengan Harga terbaik
            </li>
          </ul>
          <p>
            Kepuasan customer selalu menjadi prioritas kami dalam melayani
            kebutuhan anda dalam pembelian mobil Mazda. Dapatkan harga Promo
            Mazda Jakarta. Buktikan sekarang juga.
          </p>
        </div>
      </div>

  
      <div className="cta-section text-center mt-4">
        <h4>Anda Butuh Informasi Lebih Lengkap ?</h4>
        <p>Hubungi Via Telepon /WA untuk Respon Cepat</p>
        <a className="btn btn-danger me-2" href="tel:0823-1234-8722">
          <i className="fas fa-phone"></i> TLP: 0823-1234-8722
        </a>
        <a className="btn btn-success" href="https://wa.me/082312348722">
          <i className="fab fa-whatsapp"></i> Chat via WhatsApp
        </a>
      </div>

    
      <div className="mt-4 text-center">
        <h5>Pilih Mobil Mazda Jakarta</h5>
        <p>
          Promo Mazda Jakarta, Promo DP Rendah dan Angsuran Ringan, Terima tukar
          tambah dengan Harga terbaik. Proses mudah dan cepat hubungi saya.
        </p>
        <button className="btn btn-outline-secondary">
          Lihat semua &gt;
        </button>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Home;