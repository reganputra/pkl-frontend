import PendingCard from "./PendingCard";

function PendingList() {
  return (
    <div className="flex flex-col gap-5 bg-[#F5F5F5]">
      <PendingCard />
      <PendingCard />
    </div>
  );
}
export default PendingList;
