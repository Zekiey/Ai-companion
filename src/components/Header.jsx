import logo from '../images/Designlogo.png';
const Header = () => {
    return (
        <div className="flex w-full pt-10 animate-moveinopacity" >
            <div className='flex w-[30vw]'>
                <img className='w-10' src={logo} alt="" />
                <span className='text-[#FFFFFF] ml-2 font-BeauRivage'>OFAI</span>

            </div>
            <div className='text-[#FFFFFF] w-[40vw] max-[320px]:hidden max-[425px]:hidden'>
                <ul className='flex justify-between font-inter'>
                    <li className='hover:bg-gradient-to-br from-[#8c8c8c] to-[#343434] rounded-2xl hover:border p-1 border-[#8C8C8C] hover:-translate-y-2 hover:scale-110 transition ease-in-out duration-300'>About</li>
                    <li className='hover:bg-gradient-to-br from-[#8c8c8c] to-[#343434] rounded-2xl hover:border p-1 border-[#8C8C8C] hover:-translate-y-2 hover:scale-110 transition ease-in-out duration-300'>Features</li>
                    <li className='hover:bg-gradient-to-br from-[#8c8c8c] to-[#343434] rounded-2xl hover:border p-1 border-[#8C8C8C] hover:-translate-y-2 hover:scale-110 transition ease-in-out duration-300'>Pricing</li>
                    <li className='hover:bg-gradient-to-br from-[#8c8c8c] to-[#343434] rounded-2xl  hover:border p-1 border-[#8C8C8C] hover:-translate-y-2 hover:scale-110 transition ease-in-out duration-300'>Blog</li>
                </ul>
            </div>
            <div>
                <button className='text-[white] w-40 ml-40 font-inter bg-gradient-to-br from-[#8c8c8c] to-[#343434] rounded-3xl border-[1px] border-solid border-[#8C8C8C] hover:-translate-y-2 hover:scale-120 transition ease-in-out duration-300 max-[320px]:text-[10px] max-[320px]:w-20 max-[425px]:text-[10px] max-[425px]:w-20'>Buy Template</button>
            </div>
        </div>
    )
}

export default Header