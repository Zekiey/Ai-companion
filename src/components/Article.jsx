import article from '../images/article.png'
import Image from '../images/image.png'
import copy from '../images/copy.png'
import robot from '../images/robot.png'

const Article = () => {
    return (
        <div className="w-[40vw]  border-r-[#383838] border-l-[#383838] border-t-[transparent] border-b-[transparent] border  pt-10">

            <div className="ml-9">
                <p className="font-inter">Ai Generate</p>
                <div className="h-20 w-[35vw] rounded-xl bg-[rgb(255,255,255,0.10)] mt-5 font-inter flex flex-row items-center justify-around">
                    <p className='flex items-center'> <img className='w-4 h-4 mr-2' src={article} alt="article image" /> Article</p>
                    <p className='flex items-center'> <img className='w-4 h-4 mr-2' src={Image} alt=" image" /> Image</p>
                    <p className='flex items-center '> <img className='w-4 h-4 mr-2' src={copy} alt="copy image" /> Copy</p>

                </div>
            </div>
            <div className='mt-5 ml-9'>
                <h1 className='font-BeauRivage text-[40px]'>The Potential of AI Power</h1>
                <p className='text-[16px] text-[#9B9B9B] font-inter'>We are on a mission to revolutionize the way businesses leverage artificial intelligence. Building websites and products through the lens of AI. With a  team of dedicated experts and a commitment to <br /> innovation, we strive to make AI accessible.</p>
            </div>
            <img className='w-[29vw] ml-20' src={robot} alt="" />
        </div>

    )
}
export default Article