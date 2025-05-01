import { useState } from "react";
import StatusProductDetail from "../../Elements/StatusProductDetail";

function PendingCard({ handleClick }) {
  const noPo = "po-12345678";
  return (
    <>
      <StatusProductDetail>
        <p
          className="font-bold text-[#BC303E] text-[21px]/9"
          onClick={() => handleClick(noPo)}
        >
          Cek No PO Surat Jalan
        </p>
      </StatusProductDetail>
    </>
  );
}
export default PendingCard;
