import { useNavigate } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function NotFound404() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-[1rem] items-center pt-[10rem]">
      <h1 className="text-primary-teal text-[4rem] font-semibold">
        Page not Found.
      </h1>
      <div className="flex">
        <button
          className="flex gap-[0.8rem] items-center text-[1.4rem] font-semibold bg-primary-black text-primary-white px-4 py-2 rounded-[1rem]"
          onClick={() => navigate(-1)}
        >
          <ArrowUturnLeftIcon width={20} />
          <span>Go Back</span>
        </button>
      </div>
    </div>
  );
}

export default NotFound404;
