function StatusProductDetail({ data, children }) {
  return (
    <>
      <div className="bg-white text-black flex justify-around py-6 px-10">
        <div className="flex gap-4 items-center">
          <img
            src={data?.itemImage}
            alt=""
            className="w-44 object-contain shadow"
          />
          <div className="font-bold text-[#BC303E] w-100">
            <p className="text-[30px]/9">{data?.nomorPO}</p>
            <p className="text-[22px]/9 font-bold text-black">
              {data?.itemName}
            </p>
            <p className="text-[20px]/9">{data?.itemKodeBarang}</p>
          </div>
        </div>
        <div className="w-60 flex flex-col items-end justify-between">
          {children}
        </div>
      </div>
    </>
  );
}
export default StatusProductDetail;
