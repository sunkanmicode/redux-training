import "./navbar.css";
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navLogo'>
                <Link className='link' to='/'>Logo</Link>
            </div>
            <div className='navList'>
                <h5>
                    <Link to='/' className='link'>Home</Link>
                </h5> 
                <h5>
                 <Link to='/login' className='link'>Login</Link>
                </h5> 
                <h5>
                 <Link to='/register' className='link'>Register</Link>
                </h5>
            </div>
            
        </div>
    )
}
