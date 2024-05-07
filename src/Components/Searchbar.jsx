import React from "react";

const Searchbar = () => {
  return (
    <>
      <form className="max-w-md mx-auto">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium  sr-only "
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 ps-10 text-md text-black bg-[#F2FAFF] "
            placeholder="Search "
            required
          />
        </div>
      </form>
    </>
  );
};

export default Searchbar;
