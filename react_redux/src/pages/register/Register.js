import './register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Register() {
    const [ name, setName] = useState('')
    const [ email, setEmail] = useState('')
    const [ password, setPassowrd] = useState('')

    return (
        <div className='register'>
            <div className='registerHeader'>
                <h3>REGISTER</h3>
                <form className='registerForm'>
                    <input 
                        type='text' 
                        className='registerInput' 
                        placeholder='Username'
                        onChange={(e)=>setName(e.target.value)}

                    />
                    <input 
                        type='email' 
                        className='registerInput' 
                        placeholder='example@email.com' 
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input 
                        type='password' 
                        className='registerInput' 
                        placeholder='Enter your password' 
                        onChange={(e)=>setPassowrd(e.target.value)}

                    />
                    <div className='registerBtn'>
                        <button>
                            Register
                        </button>
                    </div>
                </form>
                <div>
                    <small>Have an Account</small>
                    <Link to='/login'>Login</Link>
                </div>
               
            </div> 
        </div>
    )
}
