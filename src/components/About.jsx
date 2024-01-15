
import { Sidebar, Article, Prompt } from './';

const About = () => {
    return (
        <div className='text-white mt-10 flex h-[120vh] ml-[3vw] bg-gradient-to-br from-[rgb(140,140,140,0.10)] to-[rgb(52,52,52,0.10)]  w-[92.5vw] flex-row  rounded-3xl overflow-hidden max-[320px]:flex-col max-[425px]:flex-col'>
            <Sidebar />
            <Article />
            <Prompt />
        </div>
    )
}

export default About