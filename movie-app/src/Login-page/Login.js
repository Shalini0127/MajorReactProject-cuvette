import Loginn from "../Login-page/Login.png";
import React, {useState} from 'react'
import "../Login-page/Login.css"

const Login = () => {
    const [email, setEmail] = useState("");
    const [passw, setPassw] = useState("");
    const [name, setname] = useState("");
    const [userName, setuserName] = useState("");
    const [dataInput, setDataInput] = useState("");
    const submitThis = () => {
        const info = {
            email: email,
            passw: passw,
            name: name,
            userName: userName
        };
        setDataInput([info]);
    }
    return (

        <>
		<div className="maindiv">
            <div className="Styling">
                <div className="imageclass">
                    <img className="img1" src={Loginn} alt="Logo"/>
					{/* <p>Discover new things on Superapp</p> */}
				</div>
                <div className="Super">
					<h1>Super App</h1>
					<p>Create your new account</p>
					<div className="form-box">
                    <form action=""
                        onSubmit={submitThis}>
                        <div>
                            {/* <label htmlFor="name">Name</label> */}
                            <input placeholder="Name" type="text" name="name" id="name"
                                value={name}
                                onChange={
                                    (e) => setname(e.target.value)
                                }/>
                        </div>
                        <div>
                            {/* <label htmlFor="userName">User Name</label> */}
                            <input placeholder="User Name" type="text" name="userName" id="userName"
                                value={userName}
                                onChange={
                                    (e) => setuserName(e.target.value)
                                }/>
                        </div>
                        <div>
                            {/* <label htmlFor="email">Email</label> */}
                            <input placeholder="Email" type="text" name="email" id="email"
                                value={email}
                                onChange={
                                    (e) => setEmail(e.target.value)
                                }/>
                        </div>
                        <div>
                            {/* <label htmlFor="passw">Password</label> */}
                            <input placeholder="Password" type="text" name="passw" id="passw"
                                value={passw}
                                onChange={
                                    (e) => setPassw(e.target.value)
                                }/>
                        </div>
                        <button type="submit">Login</button>
                    </form>
					</div>
					<p className="Para1">By clicking on Sign up. you agree to Superapp Terms and Conditions of Use</p>
					<p className="Para2">To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp Privacy Policy</p>
                </div>
            </div>
			</div>
        </>
    )
}


export default Login
