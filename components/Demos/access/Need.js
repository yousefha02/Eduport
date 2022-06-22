export default function Need()
{
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[60px] relative">
                <div className="bg-[#17a2b8] text-center flex items-center justify-center flex-col w-[1100px] m-auto max-w-full min-h-[300px] rounded-lg p-4">
                    <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-white mb-2 sm:mb-4">Need early access?</h2>
                    <p className="text-[15px] text-white lg:w-[60%] text-center mx-auto mb-4">
                        How promotion excellent curiosity yet attempted happiness Gay prosperous impression had conviction For every delay death ask to style Me mean able
                    </p>
                    <div className="w-[300px] sm:w-[350px] md:w-[450px] max-w-full bg-white flex justify-between p-2 rounded-full">
                        <input type='email' placeholder="Enter your email" className="sm:flex-1 w-[50%] focus:outline-0 px-2"/>
                        <button className="text-white bg-[#1d3b53] hover:bg-black duration-300 py-2 px-4 rounded-full">Request!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}