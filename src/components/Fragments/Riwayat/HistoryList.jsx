import HistoryCard from "./HistoryCard";

function HistoryList({ data }) {
  return (
    <div className="flex flex-col gap-5 bg-[#F5F5F5]">
      {data?.map((x, index) => (
        <HistoryCard data={x} key={index} />
      ))}
    </div>
  );
}
export default HistoryList;
