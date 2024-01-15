import article from '../images/article.png'
import Image from '../images/image.png'
import copy from '../images/copy.png'
import robot from '../images/robot.png'

const Article = () => {
    return (
        <div className="w-[40vw]  border-r-[#383838] border-l-[#383838] border-t-[transparent] border-b-[transparent] border  pt-10 max-[320px]:border-r-transparent max-[320px]:h-auto">

            <div className="ml-9 max-[320px]:w-[70vw] ">
                <p className="font-inter max-[320px]:ml-16">Ai Generate</p>
                <div className="h-20 w-[35vw] rounded-xl bg-[rgb(255,255,255,0.10)] mt-5 font-inter flex flex-row items-center justify-around max-[320px]:w-[70vw]">
                    <p className='flex items-center'> <img className='w-4 h-4 mr-2' src={article} alt="article image" /> Article</p>
                    <p className='flex items-center'> <img className='w-4 h-4 mr-2' src={Image} alt=" image" /> Image</p>
                    <p className='flex items-center '> <img className='w-4 h-4 mr-2' src={copy} alt="copy image" /> Copy</p>

                </div>
            </div>
            <div className='mt-5 ml-9 max-[320px]:w-[70vw]'>
                <h1 className='font-BeauRivage text-[40px] max-[320px]:text-[22px] '>The Potential of AI Power</h1>
                <p className='text-[16px] text-[#9B9B9B] font-inter'>We are on a mission to revolutionize the way businesses leverage artificial intelligence. Building websites and products through the lens of AI. With a  team of dedicated experts and a commitment to <br /> innovation, we strive to make AI accessible.</p>
            </div>
            <img className='w-[29vw] ml-20 max-[320px]:w-[30vw] max-[320px]:mt-10' src={robot} alt="" />
        </div>

    )
}
export default Article