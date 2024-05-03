import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { Logo } from '../utils/Constants';
const Header = () => {
    return (
        <div className="flex justify-between items-center text-white font-medium h-[110px] bg-gradient-to-r from-teal-800 to-indigo-900  sticky top-0 " >
           <img src={Logo} alt="Logo" className="h-16" />
            <ul className="flex justify-between">
                <li className='p-4'><Link to="/body">Home</Link></li>
               <li className='p-4'><Link to="/aboutus">About us</Link></li>
                <li className='p-4'><Link to="/contactus">Contact us</Link></li>
               
            </ul>
        </div>
    );
};

export default Header;
