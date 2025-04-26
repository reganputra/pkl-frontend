function StatusProductDetail({ children }) {
  return (
    <>
      <div className="bg-white text-black flex justify-around py-6 px-10">
        <div className="flex gap-4 items-center">
          <img
            src="/assets/images/kecap.jpg"
            alt=""
            className="w-44 object-contain shadow"
          />
          <div className="font-bold text-[#BC303E]">
            <p className="text-[30px]/9">PO-12345678</p>
            <p className="text-[22px]/9 font-bold text-black">
              Kecap Manis - Lombok Gandaria 1 Karton
            </p>
            <p className="text-[20px]/9">KMLG1</p>
          </div>
        </div>
        <div className="w-100 flex justify-end">{children}</div>
      </div>
    </>
  );
}
export default StatusProductDetail;
