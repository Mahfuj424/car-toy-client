

// import groupStudy from './images.jpg'
import './styles.css'
import { MdScience } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { AiOutlineRead } from "react-icons/ai";
import { PiHandbagBold } from "react-icons/pi";

const ExtraStudy = () => {
    return (
        <div className='mt-5'>
            <div className='featured-bg bg-fixed my-20 py-20 text-gray-200'>
                <div className=' bg-gray-200 text-black py-28 px-3 bg-opacity-50'>
                    <div className='md:flex gap-10 mt-8 max-w-4xl mx-auto '>
                        {/* <img className='w-[400px]' src={groupStudy} alt="" /> */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div>

                                <p className='text-4xl text-gray-600'><span className='text-5xl font-bold text-[#F4D160]'>Research From The</span> World’s <br /> Leading Experts</p>
                                <p>Nullam suscipit id ante bibendum bibendum. Vivamus interdum gravida justo id venenatis. tempus velit sed, lobortis metus. Donec id tincidunt libero, eget dapibus quam. Aenean felis ex, blandit pretium pharetra eu.</p>
                                <button className='button mt-5'>Sign Up Now</button>
                            </div>
                            <div className='grid grid-cols-2 gap-5'>
                                <div className='border bg-white rounded-lg w-36 h-36 flex items-center justify-center'>
                                    <div><MdScience className='w-20 h-20' />
                                        <h2 className="absolute  text-lg text-black ">Science</h2>
                                    </div>
                                </div>
                                <div className='border bg-white rounded-lg w-36 h-36 flex items-center justify-center'>
                                    <div><GrTechnology  className='w-20 h-20'/>
                                        <h2 className="absolute  text-lg text-black ">Technology</h2>
                                    </div>
                                </div>
                                <div className='border bg-white rounded-lg w-36 h-36 flex items-center justify-center'>
                                    <div><AiOutlineRead  className='w-20 h-20'/>
                                        <h2 className="absolute  text-center  text-black">Study</h2>
                                    </div>
                                </div>
                                <div className='border bg-white rounded-lg w-36 h-36 flex items-center justify-center'>
                                    <div><PiHandbagBold  className='w-20 h-20'/>
                                        <h2 className="absolute  text-lg text-black ">Marketing</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraStudy;