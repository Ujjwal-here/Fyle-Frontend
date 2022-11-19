import React, { useState, useEffect } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

export const Pagination = ({ refetch, totalPages, pointers }) => {
  // State for current page
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  // fetches data when user clicks on number
  const pageChangeHandler = (value) => {
    setCurrentPage(value);
    if (value === 0) {
      refetch({ after: null });
    } else {
      refetch({ after: pointers[value * 10 - 1] });
    }
    window.scrollTo(0,0)
  };

  // Fetch previous data
  const prevPageNav = () => {
    if (currentPage === 0) {
      return;
    } else {
      refetch({
        after:
          currentPage - 1 === 0 ? null : pointers[(currentPage - 1) * 10 - 1],
      });
      setCurrentPage((page) => page - 1);
    }
    window.scrollTo(0,0)
  };

  // Fetch next data
  const nextPageNav = () => {
    console.log(currentPage);
    if (currentPage === totalPages - 1) return;
    else {
      refetch({ after: pointers[(currentPage + 1) * 10 - 1] });
      setCurrentPage((page) => page + 1);
    }
    window.scrollTo(0,0)
  };

  return (
    <>
      <div className="flex justify-center flex-wrap lg:mx-44 mb-12 sm:mx-10">
        <BsArrowLeftShort
          onClick={prevPageNav}
          size={45}
          className="text-white border border-yellow-500 mx-4 lg:my-4 px-3 py-2 sm:my-2 cursor-pointer rounded hover:bg-yellow-500"
        />
        {Array.from(Array(totalPages).keys()).map((value, i) => {
          return (
            <div
              onClick={() => {
                pageChangeHandler(value);
              }}
              className={`text-white border ${
                currentPage === i ? `bg-yellow-500` : ``
              } border-yellow-400 mx-4 lg:my-4 px-3 py-2 cursor-pointer sm:text-sm sm:my-2 sm:py-2 rounded hover:bg-yellow-400`}
              key={value}
            >
              {value + 1}
            </div>
          );
        })}
        <BsArrowRightShort
          onClick={nextPageNav}
          size={45}
          className="text-white border border-yellow-500 mx-4 lg:my-4 px-3 py-2 sm:my-2 sm:py-2 cursor-pointer rounded hover:bg-yellow-500"
        />
      </div>
      <div className="flex justify-between lg:mx-44 mb-12 sm:mx-10">
        <div
          onClick={prevPageNav}
          //disable if current page is first page
          className={`flex ${
            currentPage === 0
              ? `text-[#52525b] text-sm border border-yellow-100`
              : `text-white text-sm border border-yellow-400`
          } rounded px-4 py-2 cursor-pointer`}
        >
          <BsArrowLeftShort className="self-center bg-[#1B191A] " />
          <span className="self-center bg-[#1B191A]">Older</span>
        </div>
        <div
          onClick={nextPageNav}
          style={
            //disable if current page is last page
            currentPage === totalPages - 1
              ? { pointerEvents: "none" }
              : { pointerEvents: "painted" }
          }
          className={`flex ${
            currentPage === totalPages - 1
              ? `text-[#52525b] text-sm border border-yellow-100`
              : `text-white text-sm border border-yellow-400`
          } rounded px-4 py-2 cursor-pointer`}
        >
          <span className="self-center">Newer</span>
          <BsArrowRightShort className="self-center" />
        </div>
      </div>
    </>
  );
};
