function Banner() {
  return (
    <>
      <div className="hidden h-15 md:block"></div>
      <div className="w-screen bg-[url(/assets/images/logan.jpg)] bg-cover bg-center">
        <div className="h-full w-full bg-black/50 px-5 py-15 md:pl-15">
          <p className="font-bold text-white md:w-140">
            Kecap Manis Lombok Gandaria Label Merah menawarkan keseimbangan
            sempurna dari manis dan rasa gurih. Dengan kombinasi bahan-bahan
            berkualitas tinggi kedelai rendah lemak, gandum / biji-bijian tinggi
            protein dan gula merah pilihan.
          </p>
          <button className="mt-5 rounded-lg bg-white px-14 py-2 font-bold text-[#BC303E]">
            Jelajahi Produk
          </button>
        </div>
      </div>
    </>
  );
}
export default Banner;
