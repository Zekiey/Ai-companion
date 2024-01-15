import eclipse1 from '../images/eclispe1.png'
import eclipse2 from '../images/Ellipse2.png'
import eclipse3 from '../images/Ellipse3.png'
import polygon1 from '../images/polygon1.png'
import polygon2 from '../images/Polygon 2.png'
import polygon3 from '../images/Polygon 3.png'
import subtract from '../images/Subtract.png'
import schedule from '../images/schedule.png'
import rectangle from '../images/Rectangle 122.png'
import arrows from '../images/arrowsdirection.png'

const Middle = () => {
    return (
        <div className="text-white flex flex-row  w-[60vw] justify-center ml-64 justify-around mt-10 max-[320px]:flex-col max-[425px]:flex-col max-[320px]:ml-16 max-[425px]:ml-20 max-[768px]:w-[90vw] max-[768px]:ml-10">
            <div className="bg-gradient-to-bl from-[rgb(140,140,140,0.40)] to-[rgb(52,52,52,0.40)] h-44 w-52 rounded-3xl pb-20  hover:-translate-y-2 hover:scale-110 transition ease-in-out duration-300  " >
                <div className='flex mt-5 justify-center'>
                    <img className='-mr-3' src={eclipse1} alt="" />
                    <img className='overflow-hidden -mr-4' src={eclipse2} alt="" />
                    <img src={eclipse3} alt="" />
                </div>
                <div className='flex justify-around mt-2'>
                    <div className='ml-7 '>
                        <img className='' src={polygon1} alt="" />
                        <p className='bg-[#D9D9D9] mt-3 text-[#555555] font-inter w-10 -ml-3 text-center rounded-3xl '>You</p>
                    </div>
                    <div className='mt-4'>
                        <img className='' src={polygon3} alt="" />
                        <p className='bg-[#676767] w-10 font-inter text-center rounded-3xl mt-3 -ml-3'>Ai</p>
                    </div>
                    <div>
                        <img className='' src={polygon2} alt="" />
                        <p className='bg-[#1A1A1A] w-10 font-inter text-center rounded-3xl -rotate-45'>Ai</p>
                    </div>
                </div>
                <div className='bg-[rgb(140,140,140,0.20)] mt-5'>
                    <div className=' flex justify-center  flex-col'>
                        <img className='  w-[1.5vw] max-[320px]:hidden max-[425px]:hidden  flex justify-center text-center items-center ml-24   ' src={polygon1} alt="" />
                        <h1 className='text-center text-[14px] font-inter'>AI-Powered Collaboration</h1>
                        <p className='text-center text-[10px]'>Experience the future of teamwork with <br /> our AI-driven collaboration app.</p>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-bl from-[rgb(140,140,140,0.40)] to-[rgb(52,52,52,0.40)] h-44 w-52 rounded-3xl pb-20 mt-20  hover:-translate-y-2 hover:scale-110 transition ease-in-out duration-300 " >
                <div className='flex mt-5 justify-center text-[#9B9B9B] font-inter'>
                    <p>12</p>
                    <img className='w-44' src={subtract} alt="" />
                    <p>30</p>
                </div>

                <div className='bg-[rgb(140,140,140,0.20)] mt-5'>
                    <div className=' flex justify-center  flex-col'>
                        <img className='  w-[1.5vw] max-[320px]:hidden max-[425px]:hidden flex justify-center text-center items-center ml-24' src={schedule} alt="" />
                        <h1 className='text-center text-[14px] font-inter'>Effortless Scheduling</h1>
                        <p className='text-center text-[10px]'>AI powered scheduling takes the <br /> stress out of managing your time.</p>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-bl from-[rgb(140,140,140,0.40)] to-[rgb(52,52,52,0.40)] h-44 w-52 rounded-3xl pb-20  hover:-translate-y-2 hover:scale-110 transition ease-in-out duration-300 max-[320px]:mt-16 max-[425px]:mt-16 " >
                <div className='flex mt-5 justify-center'>
                    <img src={rectangle} alt="rectangle image" />
                </div>

                <div className='bg-[rgb(140,140,140,0.20)] mt-5 '>
                    <div className=' flex justify-center  flex-col'>
                        <img className='  w-[2.8vw] max-[320px]:hidden max-[425px]:hidden flex justify-center text-center items-center ml-20' src={arrows} alt="" />
                        <h1 className='text-center text-[14px] font-inter'>AI-Expansion</h1>
                        <p className='text-center text-[10px]'>Unlock a world of possibilities with AI <br /> apps powerful expansion feature.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Middle