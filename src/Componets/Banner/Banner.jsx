import './Banner.css'
import { GiRank3 } from 'react-icons/gi';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
const Banner = () => {
    return (
        <div className='banner_img flex items-center justify-start'>
            <div className='lg:mx-24 md:mx-16 mx-10'>
                <h2 className='text-white lg:text-4xl text-2xl font-semibold'>Powerful, Fun and</h2>
                <h1 className='text-white lg:text-7xl text-5xl font-bold my-4'>Fierce To <span className='text-mainColor'>Drive</span> </h1>
                <p className=' text-white lg:text-xl text-base'>Real Poise, Real Power, Real Perfomance.</p>
                <button className="btn bg-[#08213e] hover:bg-mainColor text-white border-none my-10">
                    See Ranking Car
                    <GiRank3 className='text-xl'></GiRank3>
                    <PiPaperPlaneRightFill className='text-white'></PiPaperPlaneRightFill>
                </button>
            </div>
        </div>
    );
};

export default Banner;