function HistoryCard({ data }) {
  return (
    <div className="flex flex-col gap-5 bg-[#F5F5F5]">
      <div className="bg-white text-black flex justify-between py-6 px-10">
        <div className="flex items-center">
          <img
            src={data?.image}
            alt=""
            className="w-44 object-contain shadow mr-4"
          />

          <div>
            <div className="flex">
              <p className="text-[20px]/9 font-bold text-black w-45">
                Kode Barang :
              </p>
              <p className="text-[20px]/9 font-bold text-black">
                {data?.kodeBarang}
              </p>
            </div>

            <div className="flex">
              <p className="text-[20px]/9 font-bold text-black w-45">
                Nama Barang :
              </p>
              <p className="text-[20px]/9 font-bold text-black">{data?.name}</p>
            </div>

            <div className="flex">
              <p className="text-[20px]/9 font-bold text-black w-45">
                Kuantitas :
              </p>
              <p className="text-[20px]/9 font-bold text-black">
                {data?.quantity}
              </p>
            </div>

            <div className="flex">
              <p className="text-[20px]/9 font-bold text-black w-45">
                Ukuran Kemasan :
              </p>
              <p className="text-[20px]/9 font-bold text-black">
                {data?.ukuranKemasan}
              </p>
            </div>
          </div>
        </div>
        <div className="w-fit flex flex-col items-end justify-between">
          <p
            className={`text-[20px]/9 font-bold text-black py-1 px-3 rounded-lg ${data?.status == "barang masuk" ? "bg-[#b5e550]" : "bg-[#ff5252]"}`}
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
