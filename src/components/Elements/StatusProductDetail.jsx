function StatusProductDetail({ data, children }) {
  return (
    <>
      <div className="flex flex-col justify-around bg-white px-5 py-6 text-black lg:flex-row lg:px-10">
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <img
            src={data?.itemImage}
            alt=""
            className="w-70 object-contain shadow lg:w-44"
          />
          <div className="w-full font-bold text-[#BC303E] lg:w-100">
            <p className="text-[30px]/9">{data?.nomorPO}</p>
            <p className="text-[22px]/9 font-bold text-black">
              {data?.itemName}
            </p>
            <p className="text-[20px]/9">{data?.itemKodeBarang}</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between text-nowrap lg:w-60 lg:flex-col lg:items-end">
          {children}
        </div>
      </div>
    </>
  );
}
export default StatusProductDetail;
