import { useState } from "react";
import Footer from "../components/Elements/Footer";
import Header from "../components/Elements/Header";
import StatusProduct from "../components/Fragments/StatusOrder/StatusProduct";
import PendingList from "../components/Fragments/StatusOrder/PendingList";
import SendingList from "../components/Fragments/StatusOrder/SendingList";
import DoneList from "../components/Fragments/StatusOrder/DoneList";

function StatusOrderPage() {
  const [redActive, setRedActive] = useState(1);
  return (
    <>
      <Header />
      <StatusProduct active={redActive} change={(x) => setRedActive(x)} />
      {redActive == 1 && <PendingList />}
      {redActive == 2 && <SendingList />}
      {redActive == 3 && <DoneList />}
      <div className="bg-[#F5F5F5] pt-20"></div>
      <Footer />
    </>
  );
}
export default StatusOrderPage;
