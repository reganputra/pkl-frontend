function Footer() {
  return (
    <>
      <div className="flex w-screen flex-col items-center bg-[#FFCF45] pb-30 text-black">
        <div className="flex flex-col items-center justify-center gap-10 px-5 py-16 lg:flex-row lg:px-0">
          <img
            src="/assets/images/LogoPerusahaan.png"
            alt="logo perusahaan"
            className="w-60 object-contain"
          />
          <p className="lg:w-110">
            PT. Anugerah Prima Manunggal merupakan anak perusahaan dari PT
            Lombok Gandaria yang dimana memproduksi kecap manis, kecap asin,
            saus cabai, saus tomat dan cuka makanan. PT. Anugerah Prima
            Manunggal bergerak di bidang distribusi area indonesia timur yang
            memasarkan produk Logan Food atau PT. Lombok Gandaria.
          </p>
          <div className="flex gap-5 lg:gap-10">
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
                <li className="font-bold">Follow</li>
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
export default Footer;
