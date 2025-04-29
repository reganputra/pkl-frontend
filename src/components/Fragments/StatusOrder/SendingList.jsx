import SendingCard from "./SendingCard";

function SendingList() {
  return (
    <div className="flex flex-col gap-5 bg-[#F5F5F5]">
      <SendingCard />
      <SendingCard />
    </div>
  );
}
export default SendingList;
