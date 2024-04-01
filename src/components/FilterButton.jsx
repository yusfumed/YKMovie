import React from "react";

function FilterButton() {
  return (
    <div>
      <button className="bg-[#E2E6EA] flex gap-2 py-1 px-2 rounded text-sm ">
        <i className="fa fa-filter p-1" aria-hidden="true"></i>
        Filter
      </button>
    </div>
  );
}

export default FilterButton;
