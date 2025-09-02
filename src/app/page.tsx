"use client";

import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import IconButton from "@/components/buttons/IconButton";
import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex flex-col w-screen bg-white overflow-hidden overflow-x-hidden h-full">
      <div className="w-screen min-h-screen overflow-hidden relative flex items-center justify-center px-12">
        <NextImage
          src="/bg-section1.png"
          alt="Hero Image"
          width={1920}
          height={1080}
          className="absolute inset-0 object-covers h-screen"
        />

        <Typography
          className="text-red-800 w-full  z-20"
          weight="bold"
          variant="h1"
        >
          KAMPOENG BATIK JETIS SIDOARJO
        </Typography>
        <NextImage
          src="/assets-section1.png"
          alt="Background Image 2"
          width={400}
          height={370}
          className="w-1/2  z-20"
        />
      </div>

      <div className="w-screen overflow-hidden min-h-screen relative flex items-center justify-center bg-white px-12">
        <NextImage
          src="/assets-section2.png"
          alt="Background Image 2"
          width={400}
          height={370}
          className="w-1/2"
        />
        <div className="flex flex-col w-full gap-4">
          <Typography
            className="text-red-800 w-full"
            weight="bold"
            variant="h2"
          >
            Sejarah Batik Jetis
          </Typography>
          <Typography className="text-justify w-full" variant="p">
            Kampung Batik Jetis di Sidoarjo merupakan salah satu sentra batik
            tertua di Jawa Timur yang memiliki akar sejarah sejak abad ke-17.
            Tradisi membatik di kawasan ini dipercaya dimulai oleh Mbah Atun,
            seorang tokoh lokal yang mengajarkan keterampilan membatik kepada
            warga sekitar pada masa kolonial Belanda. Batik Jetis memiliki ciri
            khas motif yang kuat dan berwarna cerah, seperti motif burung merak,
            bunga sepatu, dan gringsing, yang mencerminkan kehidupan sosial dan
            budaya masyarakat Sidoarjo. Meski sempat mengalami penurunan pada
            era modernisasi, kampung ini berhasil bangkit melalui berbagai
            pelatihan dan promosi dari pemerintah daerah dan komunitas kreatif,
            sehingga kini menjadi ikon budaya sekaligus destinasi wisata
            edukatif di Sidoarjo.
          </Typography>
        </div>
      </div>

      <div className="bg-red-700 w-full overflow-x-hidden py-2 ">
        <div
          className="flex items-center animate-banner-marquee whitespace-nowrap"
          style={{ width: "max-content" }}
        >
          {Array.from({ length: 8 }).map((_, idx) => (
            <Typography
              key={idx}
              variant="h3"
              weight="bold"
              className="text-white mx-8 inline-block max-lg:text-3xl"
            >
              Kampoeng Batik Jetis.
            </Typography>
          ))}
        </div>
        <style>{`
          @keyframes banner-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-banner-marquee {
            animation: banner-marquee 18s linear infinite;
          }
        `}</style>
      </div>

      <div className="flex px-12 py-8  justify-center items-center w-screen min-h-screen overflow-hidden relative bg-white">
        <div className="flex flex-col w-1/2 gap-2">
          <Typography
            className="text-red-800 w-full"
            weight="bold"
            variant="h2"
          >
            PRODUK
          </Typography>
          <Typography
            className="text-red-800 w-full"
            weight="bold"
            variant="h5"
          >
            Kampoeng Batik Jetis
          </Typography>
          <Typography className=" w-full" weight="medium" variant="p">
            Kampung Batik Jetis menghasilkan cukup banyak produk yang mereka
            hasilkan tentunya asli dengan handmade dan memiliki nilai keaslian
            yang bisa dijamin, diantara produk mereka antaran lain:
          </Typography>
          <ul className="list-disc list-inside text-black ml-6 space-y-1 ">
            <li>Baju Wanita</li>
            <li>Kemeja Batik</li>
            <li>Kain Batik</li>
            <li>Accesories</li>
            <li>Tas</li>
            <li>Dompet</li>
            <li>Dan Masih Banyak Lagi</li>
          </ul>
        </div>
        {/* Carousel Produk Batik Jetis */}
        {(() => {
          const produkList = [
            { nama: "Baju Wanita", img: "/baju-wanita.png" },
            { nama: "Kemeja Batik", img: "/images/assets-section1.png" },
            { nama: "Kain Batik", img: "/images/assets-section2.png" },
            { nama: "Accesories", img: "/images/NotFound.png" },
            { nama: "Tas", img: "/images/NotFound.png" },
            { nama: "Dompet", img: "/images/NotFound.png" },
          ];
          const [idx, setIdx] = React.useState(0);
          const prev = () =>
            setIdx((i) => (i === 0 ? produkList.length - 1 : i - 1));
          const next = () =>
            setIdx((i) => (i === produkList.length - 1 ? 0 : i + 1));
          const produk = produkList[idx];
          return (
            <div className="flex flex-col items-center w-full justify-center">
              <div className="flex w-full justify-center items-center gap-4">
                <IconButton
                  variant="red"
                  className="h-fit bg-red-800"
                  onClick={prev}
                  icon={MdChevronLeft}
                  aria-label="Sebelumnya"
                />
                <NextImage
                  src={produk.img}
                  alt={produk.nama}
                  width={387}
                  height={500}
                  className="w-fit"
                />
                <IconButton
                  variant="red"
                  className="h-fit bg-red-800"
                  onClick={next}
                  icon={MdChevronRight}
                  aria-label="Selanjutnya"
                />
              </div>
            </div>
          );
        })()}
      </div>

      <div className="flex relative w-screen h-full justify-center items-center">
        <NextImage
          src="/bg-section4.png"
          alt="Not Found"
          width={795}
          height={605}
          className="w-full absolute top-0 left-0"
        />
        <div className="flex flex-col w-full h-full justify-center  p-12 z-20">
          <Typography className="text-white w-full" weight="bold" variant="h2">
            WORKSHOP
          </Typography>
          <Typography className="text-white w-full" weight="bold" variant="h5">
            MEMBATIK MULAI 50RB AJA!
          </Typography>
          <Typography
            className="text-white w-full mt-4"
            weight="regular"
            variant="p"
          >
            Workshop disini seru banget selain kita dapet softskill ngebatik,
            kita dapet batik buatan kita, kita juga diceritain sejarah tentang
            batik pokoknya rekomended banget buat ide liburan, ngedate dan
            family time di Kampoeng Batik Jetis ini.
          </Typography>
          <div className="flex flex-col ">
            <Typography
              className="text-white w-full mt-4"
              weight="bold"
              variant="p"
            >
              Aul dan Ali
            </Typography>
            <Typography className="text-white w-full text-xs" weight="thin">
              Couple Mahasiswa
            </Typography>
          </div>
        </div>
        <NextImage
          src="/assets-section4.png"
          alt="Not Found"
          width={643}
          height={605}
          className="w-full z-20"
        />
      </div>
    </main>
  );
}
