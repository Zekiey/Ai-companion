import check from '../images/check.png'
import star1 from '../images/star1.png'
import dots from '../images/dots.png'
import copy1 from '../images/copy1.png'
import lineleft from '../images/lineleft.png'
import lineright from '../images/linerghti.png'

const Mid = () => {
    return (
        <div className="text-[white] flex-col flex mt-10 ">
            <div className=' flex justify-center font-inter max-[320px]:text-[10px] max-[320px]:text-center max-[425px]:text-[10px] max-[425px]:text-center '>
                <p className='flex items-center mr-10 bg-gradient-to-br from-[rgb(140,140,140,0.20)] to-[rgb(52,52,52,0.20)] rounded-3xl p-2 '><img className='h-4 w-4 mr-3 max-[320px]:hidden  max-[425px]:hidden' src={check} alt="check image" />Visual Harmony</p>
                <p className='flex items-center mr-10 bg-gradient-to-br from-[rgb(140,140,140,0.20)] to-[rgb(52,52,52,0.20)]  rounded-3xl p-2 '><img className='h-4 w-4 mr-3 max-[320px]:hidden max-[425px]:hidden ' src={check} alt="check image" />AI Powered Insights</p>
                <p className='flex items-center bg-gradient-to-br from-[rgb(140,140,140,0.20)] to-[rgb(52,52,52,0.20)]  rounded-3xl p-2 '><img className='h-4 w-4  mr-3 max-[320px]:hidden max-[425px]:hidden ' src={check} alt="check image" />Seamless Synergy</p>

            </div>
            <p className='text-center text-[#9B9B9B] mt-8 font-inter '> AI-Powered</p>
            <h1 className='text-[56px] text-center font-BeauRivage mt-5 max-[320px]:text-[24px] max-[425px]:text-[30px]'>Artistry at Your Fingertips</h1>

            <div className='flex flex-row justify-center mt-10 max-[320px]:hidden max-[425px]:hidden '>
                <div className='bg-gradient-to-br from-[rgb(140,140,140,0.20)] to-[rgb(52,52,52,0.20)] items-center justify-around w-[30vw] flex p-2 font-inter rounded-3xl text-[#9B9B9B]  max-[768px]:w-[90vw]'>
                    <p className='text-[14px] font-inter '>Features</p>
                    <img src={star1} alt="star" />
                    <img src={dots} alt="dots" />
                    <img src={copy1} alt="copy" />
                    <p>see all</p>
                </div>

            </div>
            <div className='flex items-center justify-center -mt-2 max-[320px]:-mt-2 '>

                <img src={lineleft} alt="" />
                <p className='font-inter text-[16px] bg-gradient-to-br from-[rgb(140,140,140,0.20)] to-[rgb(52,52,52,0.20)] p-2 rounded-3xl mt-4 pr-2 pl-2'>AI Assistant</p>
                <img src={lineright} alt="" />
            </div>
        </div>

    )
}

export default Mid