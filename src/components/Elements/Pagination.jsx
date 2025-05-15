import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CustomPagination({ current, total, onChange }) {
  return (
    <>
      <div className="flex w-screen items-center justify-center gap-10 bg-[#F5F5F5] py-7">
        <FontAwesomeIcon
          icon={faCaretLeft}
          onClick={() => {
            if (current > 1) {
              onChange(current - 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className={`rounded-lg px-4 py-2 font-bold ${
            current <= 1
              ? "cursor-not-allowed bg-gray-400"
              : "cursor-pointer bg-[#BC303E]"
          }`}
        />
        <button className="rounded-lg bg-[#BC303E] px-4 py-1 font-bold">
          {current}
        </button>
        <FontAwesomeIcon
          icon={faCaretRight}
          onClick={() => {
            if (current < total) {
              onChange(current + 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className={`rounded-lg px-4 py-2 font-bold ${
            current >= total
              ? "cursor-not-allowed bg-gray-400"
              : "cursor-pointer bg-[#BC303E]"
          }`}
        />
      </div>
    </>
  );
}
export default CustomPagination;
