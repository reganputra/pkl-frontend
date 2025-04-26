import BoxIcon from "../../Elements/icons/box";
import CheckIcon from "../../Elements/icons/check";
import TruckIcon from "../../Elements/icons/truck";

function StatusProduct({ active, change }) {
  return (
    <div className="bg-[#F5F5F5] pt-30 pb-13">
      <div className="flex justify-center gap-20 py-4 text-black bg-white">
        <div className="flex flex-col items-center" onClick={() => change(1)}>
          <BoxIcon color={active == 1 ? "red" : "black"} size={"size-12"} />
          <p>Pending</p>
        </div>
        <div className="flex flex-col items-center" onClick={() => change(2)}>
          <TruckIcon color={active == 2 ? "red" : "black"} size={"size-12"} />
          <p>Dikirim</p>
        </div>
        <div className="flex flex-col items-center" onClick={() => change(3)}>
          <CheckIcon color={active == 3 ? "red" : "black"} size={"size-12"} />
          <p>Selesai</p>
        </div>
      </div>
    </div>
  );
}
export default StatusProduct;
