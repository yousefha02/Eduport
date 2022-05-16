import React from "react";
function Instructor()
{
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[50px] relative">
                <div className="flex lg:flex-row flex-col justify-between bg-[#17a2b8] py-12 px-8 md:px-24 rounded-lg lg:items-center">
                    <div className="mb-3 xl:w-[700px] lg:w-[560px] max-w-full">
                        <h2 className=" relative text-white leading-7 font-bold text-[24px] sm:text-[32px] mb-2 lg:mb-4">Become an Instructor!</h2>
                        <h4 className=" relative text-white text-[14px] md:text-[16px]">Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished.</h4>
                    </div>
                    <div className=' relative'><button className="text-white font-semibold border border-[#f7c32e] p-2 px-2 sm:px-4 rounded-md duration-300 hover:text-black hover:bg-[#f7c32e]">Start Teaching Today</button></div>
                </div>
            </div>
        </div>
    )
}
export default React.memo(Instructor)