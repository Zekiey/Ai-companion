import rightarrow from '../images/rightarrow.png'
import downarrow from '../images/arrowdown.png'
import check from '../images/check.png'
import design1 from '../images/design1.png'
import design2 from '../images/design2.png'

const Prompt = () => {
    return (
        <div className="w-[32.7vw]  flex flex-col border-r-[#383838] border-l-[transparent] border-t-[transparent] border-b-[transparent] border mt-5">
            <div className='w-[10vw] ml-72 p-2 border border-[#8C8C8C] rounded-2xl mr-5' >
                <button className='flex items-center text-[#9B9B9B] '>Hide Options <img className='ml-2' src={rightarrow} alt="" /><img src={rightarrow} alt="" /></button>
            </div>
            <div className='bg-[rgb(255,255,255,0.10)] w-[30vw] ml-5 rounded-md mt-5 pt-2 pb-10 pr-5 pl-5' >
                <h1 className='text-[#9B9B9B] text-[20px]'>Prompt</h1>
                <p className='mt-3 font-inter text-[16px]'>A dark website displaying minimalist approach, and focused on finance. Whose features are displayed in a synthetic manner right at the hero page.</p>
            </div>

            <div className='mt-5 ml-5'>
                <div className='flex justify-between w-[30vw] border-b-[#383838] border  border-l-[transparent] border-t-[transparent]  border-r-[transparent] pb-3'>
                    <p className='font-inter flex items-center text-[#9B9B9B]'><img className='w-2 h-2 mr-2' src={downarrow} alt="arrow down" />Domain</p>
                    <button className='font-inter flex items-center text-[#9B9B9B] bg-gradient-to-br from-[rgb(140,140,140,0.20)] to-[rgb(52,52,52,0.20)] rounded-3xl p-2'> <img className='  mr-2' src={check} alt="arrow down" />Continue</button>
                </div>
                <div className='flex mt-5 justify-between w-[30vw] border-b-[#383838] border  border-l-[transparent] border-t-[transparent]  border-r-[transparent] pb-3'>
                    <p className='font-inter flex items-center text-[#9B9B9B]'><img className='w-2 h-2 mr-2' src={downarrow} alt="arrow down" />Input</p>
                    <button className='font-inter flex items-center text-[#9B9B9B] bg-gradient-to-br from-[rgb(140,140,140,0.20)] to-[rgb(52,52,52,0.20)] rounded-3xl p-2'> <img className='  mr-2' src={check} alt="arrow down" />Tell a story</button>
                </div>
                <div className='flex mt-5 justify-between w-[30vw] border-b-[#383838] border  border-l-[transparent] border-t-[transparent]  border-r-[transparent] pb-3'>
                    <p className='font-inter flex items-center text-[#9B9B9B]'><img className='w-2 h-2 mr-2' src={downarrow} alt="arrow down" />Formality</p>
                    <button className='font-inter flex items-center text-[#9B9B9B] bg-gradient-to-br from-[rgb(140,140,140,0.20)] to-[rgb(52,52,52,0.20)] rounded-3xl p-2'> <img className='  mr-2' src={check} alt="arrow down" />Natural</button>
                </div>


            </div>
            <div className='mt-3 ml-5'>
                <h1 className='font-inter text-16px'>Suggested for you</h1>
                <div className='flex bg-gradient-to-br from-[rgb(140,140,140,0.20)] to-[rgb(52,52,52,0.20)] w-[25vw] p-2 mt-5'>
                    <img className='w-[12vw] mr-2' src={design1} alt=" first design" />

                    <img className='w-[12vw]' src={design2} alt="second design" />
                </div>
            </div>

        </div>

    )
}
export default Prompt