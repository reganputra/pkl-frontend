function HistoryCard({ data }) {
  return (
    <div className="flex flex-col gap-5 bg-[#F5F5F5]">
      <div className="flex flex-col justify-between gap-5 bg-white px-10 py-6 text-black md:flex-row md:gap-0">
        <div className="flex flex-col items-center gap-5 md:flex-row md:gap-0">
          <img
            src={data?.image}
            alt=""
            className="mr-4 w-65 object-contain shadow md:w-44"
          />

          <div className="w-full">
            <div className="flex">
              <p className="w-45 text-[20px]/9 font-bold text-black">
                Kode Barang :
              </p>
              <p className="w-1/2 text-[20px]/9 font-bold text-black md:w-auto">
                {data?.kodeBarang}
              </p>
            </div>

            <div className="flex">
              <p className="w-45 text-[20px]/9 font-bold text-black">
                Nama Barang :
              </p>
              <p className="w-1/2 text-[20px]/9 font-bold text-black md:w-auto">
                {data?.name}
              </p>
            </div>

            <div className="flex">
              <p className="w-45 text-[20px]/9 font-bold text-black">
                Kuantitas :
              </p>
              <p className="w-1/2 text-[20px]/9 font-bold text-black md:w-auto">
                {data?.quantity}
              </p>
            </div>

            <div className="flex">
              <p className="w-45 text-[20px]/9 font-bold text-black">
                Ukuran Kemasan :
              </p>
              <p className="w-1/2 text-[20px]/9 font-bold text-black md:w-auto">
                {data?.ukuranKemasan}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row-reverse items-end justify-between md:w-fit md:flex-col">
          <p
            className={`rounded-lg px-3 py-1 text-[20px]/9 font-bold text-black ${data?.status == "barang masuk" ? "bg-[#b5e550]" : "bg-[#ff5252]"}`}
          >
            {data?.status}
          </p>
          <p className="text-[20px]/9 font-bold text-black">
            {data?.day}-{data?.month}-{data?.year}
          </p>
        </div>
      </div>
    </div>
  );
}
export default HistoryCard;
