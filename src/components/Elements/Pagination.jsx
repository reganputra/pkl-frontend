import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CustomPagination({ current, total, onChange }) {
  return (
    <>
      <div className="flex gap-10 bg-[#F5F5F5] justify-center py-7 items-center">
        <FontAwesomeIcon
          icon={faCaretLeft}
          onClick={() => {
            if (current > 1) {
              onChange(current - 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className={`px-4 py-2 rounded-lg font-bold ${
            current <= 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#BC303E] cursor-pointer"
          }`}
        />
        <button className="bg-[#BC303E] px-4 py-1 rounded-lg font-bold">
          {current}
        </button>
        <FontAwesomeIcon
          icon={faCaretRight}
          onClick={() => {
            if (current < total) {
              onChange(current + 1);
              window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
            }
          }}
          className={`px-4 py-2 rounded-lg font-bold ${
            current >= total
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#BC303E] cursor-pointer"
          }`}
        />
      </div>
    </>
  );
}
export default CustomPagination;
