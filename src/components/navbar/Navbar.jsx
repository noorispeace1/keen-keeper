import Link from 'next/link';

import { FaHome } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';
import { MdAvTimer } from 'react-icons/md';
import MyLink from './MyLink';

const Navbar = () => {

    const navItems = [
        {
            path: "/",
            text: <span className='flex items-center gap-1'><FaHome />home</span> ,
        },
        {
            path: "/timeline",
            text: <span className='flex items-center gap-1'><MdAvTimer />Timeline</span>,
        },
        {
            path: "/stats",
            text: <span className='flex items-center gap-1'><ImStatsDots />Stats</span>,
        },
        
    ];



    return (
        <>

            <div className='navbar shadow-sm'>
                <div className="flex justify-between   w-11/12 mx-auto">

                    <div className="">
                        <Link href="./"><button className='text-2xl font-bold'>Keen<span className='text-green-800'>Keeper</span></button></Link>
                    </div>
                    <div className="flex ">
                        <ul className=" flex gap-4 items-center">
                            {navItems.map((item, index) => (<MyLink key={index} href={item.path} > {item.text}</MyLink>))}

                        </ul>
                    </div>


                </div>
            </div>



        </>





    );
};

export default Navbar;