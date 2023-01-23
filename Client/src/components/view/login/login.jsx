import './login.css'

export const Login = ({ props }) => {
    return (
                <div className="login">
                    <div className="loginForm">
                        <div className="username-input">
                            <label >Username:</label>
                            <input type="text" name='username' className="username-input" onChange={(e) => props.setUser({...props.user, [e.target.name]:e.target.value})} />
                        </div>
                        <div className="password-input">
                            <label >Password:</label>
                            <input type="password" name='password' className="password-input" onChange={(e) => props.setUser({...props.user, [e.target.name]:e.target.value})} />
                        </div>
                    </div>
                        <button onClick={props.submitLogin} className='button'>LOGIN</button>

                    <div className="register-section">
                        <h4>If you do not have an account, sign up!</h4>
                        <button onClick={() => props.setRegister(true)} className="button">SIGN UP</button>
                    </div>
                </div>         
    )
}
