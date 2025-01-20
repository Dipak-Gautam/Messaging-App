const SuggestOverLay = (data: string, placement: "bottom" | "right") => (
  <div
    className={`text-gray-700 text-base font-medium  p-2 px-3 my-auto bg-slate-200  rounded-2xl ${
      placement == "right" ? "ml-4" : "mt-2"
    } `}
  >
    {data}
  </div>
);

export default SuggestOverLay;
