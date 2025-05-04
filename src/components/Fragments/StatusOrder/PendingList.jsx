import { useEffect, useState } from "react";
import PendingCard from "./PendingCard";
import AddSuratJalan from "./AddSuratJalan";

function PendingList() {
  const [showAddSuratJalan, setShowAddSuratJalan] = useState(false);
  const [noPo, setNoPo] = useState("");

  function handleClick(x) {
    setShowAddSuratJalan(true);
    setNoPo(x);
  }

  return (
    <>
      <div className="flex flex-col gap-5 bg-[#F5F5F5]">
        <PendingCard handleClick={(x) => handleClick(x)} />
      </div>
      {showAddSuratJalan && (
        <AddSuratJalan closeAddSuratJalan={() => setShowAddSuratJalan(false)} />
      )}
    </>
  );
}
export default PendingList;
