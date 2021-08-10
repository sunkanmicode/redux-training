import "./login.css"
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div>
              <div className='register'>
            <div className='registerHeader'>
                <h3>Login</h3>
                <form className='registerForm'>
                    <input type='email' className='registerInput' placeholder='example@email.com' />
                    <input type='password' className='registerInput' placeholder='Enter your password' />
                    <div className='registerBtn'>
                        <button>
                            Register
                        </button>
                    </div>
                </form>
                <div>
                    <small>Have an Account <Link to='/register'>Register</Link></small>
                </div>
            </div> 
        </div>
        </div>
    )
}
