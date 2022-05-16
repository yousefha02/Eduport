import Image from "next/image"
export default function News()
{
    return(
        <div>
            <div className="py-[50px]">
                <div className="flex md:flex-row flex-col justify-between md:items-center mb-4">
                    <h2 className="text-[26px] sm:text-[30px] leading-[40px] sm:leading-[44px] md:text-[34px] xl:text-[36px] mb-2 md:mb-3 font-bold md:leading-[46px] text-black">
                        Eduport Latest News
                    </h2>
                    <span className="flex gap-4 items-center">
                        <span className="text-dark text-[15px]">Want to read more?</span>
                        <button className="bg-[#066ac91a] text-blue w-[91px] h-[34px] flex justify-center 
                        items-center hover:bg-blue hover:text-white duration-300 rounded-[4px] text-[14px]"
                        >Go here</button>
                    </span>
                </div>
                <div className="lg:flex gap-8 grid md:grid-cols-2">
                    <div className="lg:w-[30%]">
                        <div className="overnews relative before:rounded-md">
                            <Image width="685px" height="457px" src='/images/university/20.jpg' className="rounded-md"/>
                            <button className="bg-[#d6293e] absolute top-[15px] left-[15px] z-10 text-white text-[13px] rounded-[4px] mb-2 px-2">Student Life</button>    
                        </div>
                        <h3 className="text-black mb-3 text-[20px] font-bold hover:text-blue duration-300 cursor-pointer">
                            Student Loan Survey: Many Owe $50K-plus
                        </h3>
                        <p className="text-dark mb-3 text-[15px]">
                        Affronting imprudence do he he everything. Offered chiefly farther of my
                        </p>
                        <span className="flex justify-between text-[15px] items-center">
                            <span className="text-black">Frances Guerrero</span>
                            <span className="text-dark text-[13px]">30M Ago</span>
                        </span>
                    </div>
                    <div className="flex flex-col gap-6 lg:w-[42%]">
                        <div className="rounded-md bg-[#f5f7f9] p-8">
                            <button className="bg-[#0cbc87] text-white text-[13px] rounded-[4px] mb-2 px-2">Research</button>
                            <h3 className="text-black mb-3 text-[20px] font-bold hover:text-blue duration-300 cursor-pointer">
                            How to make a college list
                            </h3>
                            <p className="text-dark mb-3 text-[15px]">
                                Prospective students should start broadly and then narrow their list down to colleges that best fit their needs, experts say.Yet remarkably appearance get him his projection.
                            </p>
                            <span className="flex justify-between text-[15px] items-center">
                                <span className="text-black">Louis Crawford</span>
                                <span className="text-dark text-[13px]">12H Ago</span>
                            </span>
                        </div>
                        <div> 
                            <div className="overnews relative before:rounded-md">
                                <Image width="685px" height="150px" src='/images/university/21.jpg' className="rounded-md"/>
                                <button className="bg-[#17a2b8] absolute top-[15px] left-[15px] z-10 text-white text-[13px] rounded-[4px] mb-2 px-2">Student Story</button>    
                            </div>
                            <h3 className="text-black mb-3 text-[20px] font-bold hover:text-blue duration-300 cursor-pointer">
                                Campus Support for First-Year Students
                            </h3>
                            <p className="text-dark mb-3 text-[15px]">
                                Prospective students should start broadly and then narrow their list
                            </p>
                            <span className="flex justify-between text-[15px] items-center">
                                <span className="text-black">Lori Stevens</span>
                                <span className="text-dark text-[13px]">3M Ago</span>
                            </span>
                        </div>
                    </div>
                    <div className="lg:w-[28%]">
                        <div className="overnews relative before:rounded-md">
                            <Image width="685px" height="457px" src='/images/university/22.jpg' className="rounded-md"/>
                            <button className="bg-[#6f42c1] absolute top-[15px] left-[15px] z-10 text-white text-[13px] rounded-[4px] mb-2 px-2">Covid-19</button>
                        </div>
                        <h3 className="text-black mb-3 text-[20px] font-bold hover:text-blue duration-300 cursor-pointer">
                            Covid-19 and the college experienced
                        </h3>
                        <p className="text-dark mb-3 text-[15px]">
                            Rooms oh fully taken by worse do. Points afraid but may end law.Points afraid but may end law.
                        </p>
                        <span className="flex justify-between text-[15px] items-center">
                            <span className="text-black">Amanda Reed</span>
                            <span className="text-dark text-[13px]">July 21, 2021</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}