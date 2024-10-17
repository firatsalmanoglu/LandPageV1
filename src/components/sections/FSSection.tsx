import React from "react";
import MainButton from "../common/MainButton";

function FSSection() {
  return (
    <section className="flex justify-between flex-col md:flex-row gap-4 items-center">
      <div>
        <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[2.375rem] text-darkBlue">
          {/* Sustainable Power Solutions Anywhere, Anytime */}
          Fırat Salmanoğlu
        </p>
          <p className="text-[1.375rem] font-[500]">
          {/* Clean and sustainable energy solutions anytime, anywhere with SolarMP. */}
          Proje ekip üyesi Fırat Salmanoğlu, lisans eğitimini Ege Üniversitesi Fen Fakültesi, Bilgisayar Bilimleri Ağırlıklı Matematik alanında tamamlamıştır. 
          Ege Üniversitesi Güneş Enerjisi Enstitüsü’nde yenilenebilir enerji teknolojileri alanında matematiksel modelleme ve yazılım geliştirme konularında doktora derecesine sahiptir. 
          Alanla ilgili çeşitli bilimsel projelerde yürütücü ve araştırmacı görevleri ve bununla birlikte sektör kuruluşlarına danışmanlık faaliyetleri bulunmaktadır. 
          Halen Ege Üniversitesi Güneş Enerjisi Enstitüsü'nde araştırmacı olarak görev almakta ve fotovoltaik güç sistemleri, depolama teknolojileri ve hibrit sistem modellemesi üzerine lisansüstü dersler vermektedir.
          </p>
        <div className="flex gap-[1.75rem] items-center mt-[3rem]">
          {/* <MainButton text="Get Started" classes="shadow-none w-[10.125rem]" /> */}
          <div className="flex gap-[1.56rem] items-center">
            <img src="/images/yellow_play_icon.png" alt="play icon" />
            <p className="font-bold text-normal"><a href="https://eusolar.ege.edu.tr/">Daha Fazla Bilgi </a></p>
            <img src="/images/instagram_icon.png" alt="play icon" />
            <img src="/images/linkedn_icon.png" alt="play icon" />
            <img src="/images/orcid_icon.png" alt="play icon" />
            <img src="/images/google_scholar_icon.png" alt="play icon" />
            
           

          </div>
        </div>
      </div>
      <div>
        <img
          src="/images/firat1.jpg"
          alt="guy with phone surrounded by action icons"
        />
      </div>
    </section>
  );
}

export default FSSection;
