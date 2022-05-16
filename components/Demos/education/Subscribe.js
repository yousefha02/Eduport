export default function Subscribe()
{
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[60px] relativev">
                <div className="bg-[#ffc107] text-center flex items-center justify-center flex-col w-[1100px] m-auto max-w-full min-h-[300px] rounded-lg p-4">
                    <h2 className="w-[550px] max-w-full text-black font-bold mb-3 text-[24px] sm:text-[32px] px-4 md:text-[38px]">Subscribe to our Newsletter for Newest Course Updates</h2>
                    <div className="w-[300px] sm:w-[350px] md:w-[450px] max-w-full bg-white flex justify-between p-2 rounded-full">
                        <input type='email' placeholder="Enter your email" className="sm:flex-1 w-[50%] focus:outline-0 px-2"/>
                        <button className="text-white bg-[#1d3b53] hover:bg-black duration-300 py-2 px-4 rounded-full">Subscribe!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}