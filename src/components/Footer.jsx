import React from 'react'

function Footer() {
  return (
    <div className="  mt-20 bg-black ">
          <div className="footer    px-[4.5rem] p-8">
            <div className=" grid grid-cols-8 px-6 text-[#a5a3a3]  ">
              <div className="flex flex-col justify-between w-fit">
                <h1 className="text-4xl text-white inline ">
                  <span className="text-red-500 font-bold">yk</span>Movie
                </h1>
                <p className="text-sm mb-2">&copy; ykMovie</p>
              </div>

              <div className="  col-span-4 ml-20 w-fit leading-5 text-sm ">
                <div>
                  ykMovie is a Free Movies streaming site with zero ads. We let
                  you watch movies online without having to register or paying,
                  with over 10000 movies and TV-Series. You can also find any
                  movies and TV-Series from ykMovie and watch it now or later if
                  you want.
                </div>
                <div className="flex text-white mt-3 gap-2 ">
                  <a href="">Android App</a>
                  <span className="text-[#565656]">-</span>
                  <a href="">Terms of service</a>
                  <span className="text-[#565656]">-</span>
                  <a href="">Contact</a>
                  <span className="text-[#565656]">-</span>
                  <a href="">Sitemap</a>
                </div>
              </div>
              <div className="relative col-span-3  ">
                <div className="absolute z-10 right-[-0.2rem] top-[-0.3rem]">
                  <span className="relative  flex h-3 w-3">
                    <span className="animate-ping absolute  inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                </div>
                <div className=" w-[75%] absolute right-0.5  text-[.75rem] p-2 border border-[#454545] ">
                  ykMovie does not store any files on our server, we only linked
                  to the media which is hosted on 3rd party services.
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Footer