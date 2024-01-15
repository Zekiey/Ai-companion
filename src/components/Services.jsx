import Eclipse from '../images/Eclipse.png';

const Services = () => {
    return (
        <div className='h-auto' >
            <div className='flex items-center justify-center mt-16 animate-moveinbottom'>
                <img className='w-[50vw]' src={Eclipse} alt="" />
            </div>

            <div className='flex justify-around w-[90vw] font-inter text-center  text-[18px] max-[320px]:text-[10px] max-[320px]:ml-5 max-[425px]:text-[10px]'>
                <p className='text-[#9B9B9B]'>Our AI-powered suite of solutions empowers your<br /> business with cutting-edge-capabilities.</p>
                <p className='text-[#9B9B9B] ml-10'>Turning text to images harnessing intelligent AI and <br /> performing in-depth data analysis.</p>
            </div>
            <div className='text-[86px] font-BeauRivage text-center text-[#fff] mt-5 max-[320px]:text-[24px] max-[425px]:text-[24px]'>Your AI design companion.</div>
            <div className='text-center font-inter text-[16px] mt-4 max-[320px]:text-[10px] max-[425px]:text-[10px]  '>
                <button className='text-[#fff] p-3 bg-gradient-to-br from-[#8c8c8c] to-[#343434] rounded-3xl hover:-translate-y-2 hover:scale-110 transition ease-in-out duration-300 max-[320px]:p-1 max-[425px]:p-2'>Join Waitlist</button>
                <p className='text-[#9B9B9B]'>Coming Soon</p>
            </div>

        </div>
    )
}

export default Services