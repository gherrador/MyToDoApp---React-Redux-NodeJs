import './signup.css'

export function Signup({ props }) {
    return (
        <div className="register">
            <div className="registerForm">
                <div className="username-input">
                    <label >Name:</label>
                    <input type="text" name='name' className="username-input" onChange={(e) => props.setUser({ ...props.user, [e.target.name]: e.target.value })} />
                </div>
                <div className="username-input">
                    <label >Surname:</label>
                    <input type="text" name='surname' className="username-input" onChange={(e) => props.setUser({ ...props.user, [e.target.name]: e.target.value })} />
                </div>
                <div className="username-input">
                    <label >Username:</label>
                    <input type="text" name='username' className="username-input" onChange={(e) => props.setUser({ ...props.user, [e.target.name]: e.target.value })} />
                </div>
                <div className="password-input">
                    <label >Password:</label>
                    <input type="password" name='password' className="password-input" onChange={(e) => props.setUser({ ...props.user, [e.target.name]: e.target.value })} />
                </div>
            </div>
            <button onClick={props.submitSigIn} className='button'>REGISTER</button>
            <div className="register-section">
                <h4>Do you already have an account?</h4>
                <button onClick={() => props.setRegister(false)} className="button">LOGIN</button>
            </div>
        </div>
    )
}

