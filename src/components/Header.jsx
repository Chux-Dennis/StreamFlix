import React from "react";

const Header = () => {
  return (
    <>
      <header class="relative z-10 px-4 py-3 md:px-8 md:pt-5 lg:pt-6 xl:px-12">
        <div class="container lg:pt-0 sm:pt-3 grid grid-cols-2 grid-rows-2 gap-4 mx-auto lg:flex lg:justify-between lg:gap-0 lg:items-center md:gap-5">
          <a
            class="flex items-center space-x-2 sm:space-x-3 md:space-x-5"
            href="/"
          >
            <div class="w-9 md:w-auto">
              <i class="fa-solid fa-video text-3xl"></i>
            </div>
            <span class="text-lg md:text-2xl sm:text-xl logo-text">
              MovieRoom
            </span>
          </a>
          <div class="flex items-center space-x-3 justify-end lg:justify-start lg:order-3 md:space-x-5">
            <span class="text-sm font-bold text-white md:text-[1rem]"></span>
            <div class="w-8 md:w-auto">
              <i class="fa-brands fa-x-twitter"></i>
            </div>
          </div>
          <form class="flex justify-between items-center rounded-lg border-2 border-lightestGray text-white p-1 pl-3 pr-1 md:pl-4 md:pr-2 col-span-2 lg:flex-1 lg:max-w-[525px] ">
            <input
              type="text"
              placeholder="What movie are you searching?"
              class="w-10/12 bg-transparent placeholder:text-red-50 focus:outline-none"
              readOnly={false}
            />
            <button type="submit" class="p-2 focus:outline-none">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </button>
          </form>
        </div>
      </header>
    </>
  );
};

export default Header;
