import logo from '../images/Designlogo.png';
import vector from '../images/Vector.png'
import posts from '../images/poster.png'
import star from '../images/Star.png'
import schedule from '../images/schedule.png'
import analytics from '../images/analytics.png'
import settings from '../images/settings.png'
import add from '../images/add.png'

const Sidebar = () => {
    return (
        <div className="w-[20vw] text-white pt-10 border-r-[#383838] border border-t-[transparent] border-b-[transparent] border-l-[transparent]  ">

            <img className='w-10 ml-9' src={logo} alt="logo design" />

            <div className='ml-9 mt-10 w-28 '>
                <ul >
                    <li className='flex mb-5 rounded-md hover:bg-gradient-to-br from-[#8c8c8c] to-[#343434] '> <img className='w-5 h-5 mr-2' src={vector} alt="vector image" /> Dashboard</li>
                    <li className='flex mb-5 rounded-md hover:bg-gradient-to-br from-[rgb(140,140,140)] to-[#343434]' ><img className='w-5 h-5 mr-2' src={posts} alt="post image" /> Posts</li>
                    <li className='flex mb-5 rounded-md  bg-gradient-to-br from-[#8c8c8c] to-[#343434] '> <img className='w-5 h-5 mr-2' src={star} alt="star image" /> Ai Generate</li>
                    <li className='flex mb-5 rounded-md hover:bg-gradient-to-br from-[#8c8c8c] to-[#343434]'><img className='w-5 h-5 mr-2' src={schedule} alt="schedule image" /> Schedules</li>
                    <li className='flex mb-5 rounded-md hover:bg-gradient-to-br from-[#8c8c8c] to-[#343434]'> <img className='w-5 h-5 mr-2' src={analytics} alt="analytics image" /> Analytics</li>
                    <li className='flex rounded-md hover:bg-gradient-to-br from-[#8c8c8c] to-[#343434]'> <img className='w-5 h-5 mr-2' src={settings} alt="settings image" /> Settings</li>
                </ul>
            </div>
            <div className='mt-28 ml-9 h-40 w-[15vw] flex-col justify-center items-center border-dashed border-[#9B9B9B] border-2'>
                <img className='ml-[5vw] mt-7' src={add} alt="add image" />
                <p className='mt-5 text-center font-inter'>Create new workspace </p>
                <p className='text-[14px] text-[#9B9B9B] text-center font-inter' >Up to 10% marketplace</p>
            </div>

        </div>

    )

}
export default Sidebar