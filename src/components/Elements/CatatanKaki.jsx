function CatatanKaki() {
  return (
    <>
      <div className="flex w-screen flex-col items-center bg-[#FFCF45] pb-20 text-black md:pb-0">
        <div className="flex flex-col items-center justify-center gap-3 px-5 py-10 md:flex-row md:gap-10 md:px-0">
          <img
            src="/assets/images/LogoPerusahaan.png"
            alt="logo perusahaan"
            className="w-60 object-contain"
          />
          <p className="w-[90vw] md:w-110">
            PT. Anugerah Prima Manunggal merupakan anak perusahaan dari PT
            Lombok Gandaria yang dimana memproduksi kecap manis, kecap asin,
            saus cabai, saus tomat dan cuka makanan. PT. Anugerah Prima
            Manunggal bergerak di bidang distribusi area indonesia timur yang
            memasarkan produk Logan Food atau PT. Lombok Gandaria.
          </p>
          <div className="flex w-[90vw] flex-col gap-3 md:w-auto md:flex-row md:gap-10">
            <div>
              <ul>
                <li className="font-bold text-nowrap">Tautan Cepat</li>
                <li>Beranda</li>
                <li>Katalog</li>
                <li>Resep</li>
              </ul>
            </div>
            <div>
              <ul className="w-41">
                <li className="font-bold">Legal</li>
                <li>
                  Pemberitahuan Cookie Pemberitahuan Privasi Peraturan
                  Penggunaan Aksesibilitas
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-bold">Ikuti</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-[95%] justify-end border-t-2 border-white px-1">
          <p className="py-3 font-bold">&copy; PT. Anugerah Prima Manunggal</p>
        </div>
      </div>
    </>
  );
}
export default CatatanKaki;
