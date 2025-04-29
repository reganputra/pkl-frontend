import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AddPo({ closeAddPo }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => closeAddPo()}
      ></div>

      <form
        action=""
        method="post"
        className="relative flex flex-col bg-white justify-center items-center text-black border gap-3 w-fit p-8 rounded"
        onClick={(e) => e.stopPropagation()} // important to stop clicks inside the modal
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="flex self-end !h-6 cursor-pointer"
          onClick={() => closeAddPo()}
        />
        <p className="text-[#BC303E] text-3xl font-bold">No Surat Jalan</p>
        <input
          type="text"
          name="SJalan"
          className="border-2 rounded-lg p-1 w-96 text-center"
        />
        <input
          type="submit"
          value="Verifikasi"
          className="bg-[#BC303E] text-white rounded px-10 py-2 font-bold mt-4"
        />
      </form>
    </div>
  );
}

export default AddPo;
