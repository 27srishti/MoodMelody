import React, { useState } from "react";
const product = () => {
  return (
    <div className="h-screen w-full flex overflow-hidden select-none">
      <nav className="w-24 flex flex-col items-center bg-white  py-4">
        {/* Left side NavBar */}
        <div>
          {/* App Logo */}
          <svg
            className="h-8 w-8 fill-current text-blue-600 "
            viewBox="0 0 24 24"
          >
            <path
              d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82
					6L12 12.72 5.18 9 12 5.28 18.82 9M17 16l-5 2.72L7 16v-3.73L12
					15l5-2.73V16z"
            />
          </svg>
        </div>
        <ul className="mt-2 text-blue-500 font-semibold capitalize">
          {/* Links */}
          <li className="mt-3 p-2  hover:text-gray-500  rounded-lg">
            <a href="#" className=" flex flex-col items-center">
              <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
							17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
							8h-8v10h8V11m-10 4H3v6h8v-6z"
                />
              </svg>
              <span className="text-xs  mt-2 ">Create</span>
            </a>
          </li>
          <li
            className="mt-3 p-2 hover:text-gray-500 
				rounded-lg"
          >
            <a href="#" className=" flex flex-col items-center">
              <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M23 3v-.5a2.5 2.5 0 00-5 0V3c-.55 0-1 .45-1 1v4c0
							.55.45 1 1 1h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1m-1
							0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V3M6
							11h9v2H6v-2m0-4h9v2H6V7m16 4v5c0 1.11-.89 2-2 2H6l-4
							4V4a2 2 0 012-2h11v2H4v13.17L5.17 16H20v-5h2z"
                />
              </svg>
              <span className="text-xs mt-2">History</span>
            </a>
          </li>
          <li
            className="mt-3 p-2 hover:text-gray-500 
				rounded-lg"
          >
            <a href="#" className=" flex flex-col items-center">
              <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M21 18v1a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0
							012-2h14a2 2 0 012 2v1h-9a2 2 0 00-2 2v8a2 2 0 002
							2m0-2h10V8H12m4 5.5a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0
							011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5z"
                />
              </svg>
              <span className="text-xs mt-2">Bin</span>
            </a>
          </li>
          <li
            className="mt-3 p-2 hover:text-gray-500 
				rounded-lg"
          >
            <a href="#" className=" flex flex-col items-center">
              <svg className="fill-current h-5 w-5" viewBox="0 0 512 512">
                <path
                  d="M505 442.7L405.3
							343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7
							44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208
							208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7
							17l99.7 99.7c9.4 9.4 24.6 9.4 33.9
							0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7
							0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128
							57.2 128 128 0 70.7-57.2 128-128 128z"
                />
              </svg>
              <span className="text-xs mt-2">Search</span>
            </a>
          </li>

          <li className="mt-3 p-2 hover:text-gray-500  rounded-lg">
            <a href="#" className=" flex flex-col items-center">
              <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0
							001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z"
                />
              </svg>
              <span className="text-xs mt-2">log-Out</span>
            </a>
          </li>
        </ul>
        <div
          className="mt-auto flex items-center p-2 text-blue-700 bg-purple-200
			 rounded-full"
        >
          {/* important action */}
          <a href="#">
            <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M12 1c-5 0-9 4-9 9v7a3 3 0 003 3h3v-8H5v-2a7 7 0 017-7
						7 7 0 017 7v2h-4v8h4v1h-7v2h6a3 3 0
						003-3V10c0-5-4.03-9-9-9z"
              />
            </svg>
          </a>
        </div>
      </nav>
      <main
        className="my-1 pt-2 pb-2 px-10 flex-1 bg-gray-200  rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto"
      >
        <div className="flex flex-col capitalize text-3xl">
          <span className="font-semibold">hello :)</span>
        </div>
        <div className="flex">
          <div
            className="mr-6 w-1/4 mt-8 py-2 flex-shrink-0 flex flex-col bg-white
				 rounded-lg"
          >
            {/* Card list container */}
            <h3
              className="flex items-center pt-1 pb-1 px-8 text-lg font-semibold
					capitalize "
            >
              {/* ************************************************** Header ********************************************************** */}
              <span>Song Description </span>
              <button className="ml-2">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 256 512">
                  <path
                    d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
								0l-22.6-22.6c-9.4-9.4-9.4-24.6
								0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
								0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
								136c9.5 9.4 9.5 24.6.1 34z"
                  />
                </svg>
              </button>
            </h3>
            <div>
              {/* List */}
              <ul className="pt-1 pb-2 px-3 overflow-y-auto">
                <li className="mt-2">
                  <a
                    className="p-5 flex flex-col justify-between items-center 
								bg-gray-100  rounded-lg"
                    href="#"
                  >
                    <textarea
                      id="message"
                      rows={6}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="Write your thoughts here ...."
                      defaultValue={""}
                    />

                    <button className="relative px-5 py-2 mt-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-300 rounded-lg shadow-inner group">
                      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease" />
                      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease" />
                      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease" />
                      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease" />
                      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100" />
                      <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                        Create!
                      </span>
                    </button>
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="p-5 flex flex-col justify-between
								bg-gray-100  rounded-lg"
                    href="#"
                  >
                    <div
                      className="flex items-center justify-between
									font-semibold capitalize "
                    >
                      {/* Top section */}
                      <span>english lesson</span>
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 fill-current mr-1
											text-gray-600"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M14 12l-4-4v3H2v2h8v3m12-4a10
												10 0 01-19.54 3h2.13a8 8 0
												100-6H2.46A10 10 0 0122 12z"
                          />
                        </svg>
                        <span>4.2 mi</span>
                      </div>
                    </div>
                    <p
                      className="text-sm font-medium leading-snug
									text-gray-600 my-3"
                    >
                      {/* Middle section */}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Explicabo assumenda porro sapiente, cum nobis tempore
                      delectus consectetur ullam reprehenderit quis ducimus,
                      iusto dolor nam corporis id perspiciatis consequuntur
                      saepe excepturi.
                    </p>
                    <div className="flex justify-between">
                      {/* Bottom section */}
                      <div className="flex">
                        <img
                          className="h-6 w-6 rounded-full mr-3"
                          src="https://i.pinimg.com/originals/b7/06/0b/b7060b60f6ee1beeedf7d648dabd89a1.jpg"
                          alt="Issue"
                        />
                        <span>
                          <span
                            className="text-blue-500
												font-semibold"
                          >
                            Regina C.
                          </span>
                          via HeyTutor
                        </span>
                      </div>
                      <p
                        className="text-sm font-medium leading-snug
										text-gray-600"
                      >
                        14 hours ago
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
              <a
                href="#"
                className="flex justify-center capitalize text-blue-500
						"
              >
                <span>see all</span>
              </a>
            </div>
          </div>
          <div
            className="mr-6 w-1/2 mt-8 py-2 flex-shrink-0 flex flex-col
				bg-purple-300 rounded-lg text-white"
          >
            <h3
              className="flex items-center pt-1 pb-1 px-8 text-lg font-bold
					capitalize"
            >
              {/* Header */}
              <span>scheduled lessons</span>
              <button className="ml-2">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 256 512">
                  <path
                    d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
								0l-22.6-22.6c-9.4-9.4-9.4-24.6
								0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
								0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
								136c9.5 9.4 9.5 24.6.1 34z"
                  />
                </svg>
              </button>
            </h3>
            <div className="flex flex-col items-center mt-12">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/empty-state-2130362-1800926.png"
                alt=" empty schedule"
              />
              <span className="font-bold mt-8">Your schedule is empty</span>
              <span className="text-purple-500">
                Make your first appointment
              </span>
              <button className="mt-8 bg-purple-800 rounded-lg py-2 px-4">
                Find a Job
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default product;
