function StatusProductDetail({ data, children }) {
  return (
    <>
      <div className="bg-white text-black flex justify-around py-6 px-10">
        <div className="flex gap-4 items-center">
          <img
            src={data?.barang.image}
            alt=""
            className="w-44 object-contain shadow"
          />
          <div className="font-bold text-[#BC303E]">
            <p className="text-[30px]/9">{data?.nomorPO}</p>
            <p className="text-[22px]/9 font-bold text-black">
              {data?.barang.name}
            </p>
            <p className="text-[20px]/9">{data?.barang.kodeBarang}</p>
          </div>
        </div>
        <div className="w-100 flex flex-col items-end justify-between">
          {children}
        </div>
      </div>
    </>
  );
}
export default StatusProductDetail;
