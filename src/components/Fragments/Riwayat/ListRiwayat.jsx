import KartuRiwayat from "./KartuRiwayat";

function ListRiwayat({ data }) {
  return (
    <div className="flex w-screen flex-col gap-5 bg-[#F5F5F5]">
      {data?.map((x, index) => (
        <KartuRiwayat data={x} key={index} />
      ))}
    </div>
  );
}
export default ListRiwayat;
