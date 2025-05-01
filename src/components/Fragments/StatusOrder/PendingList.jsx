import { useEffect, useState } from "react";
import PendingCard from "./PendingCard";
import AddPo from "./AddPo";

function PendingList() {
  const [showAddPo, setShowAddPo] = useState(false);
  const [noPo, setNoPo] = useState("");

  function handleClick(x) {
    setShowAddPo(true);
    setNoPo(x);
  }

  return (
    <>
      <div className="flex flex-col gap-5 bg-[#F5F5F5]">
        <PendingCard handleClick={(x) => handleClick(x)} />
      </div>
      {showAddPo && <AddPo closeAddPo={() => setShowAddPo(false)} />}
    </>
  );
}
export default PendingList;
