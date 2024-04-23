import {Component} from "react";
import Header1 from "../Header1";
import {Link} from "react-router-dom";
import "./index.css"

class Login extends Component {
    state={username:"",password:""}

    onChangeUser=(e)=>{
        this.setState({username:e.target.value})
    }

    onChangePass=(e)=>{
        this.setState({password:e.target.value})
    }

    onSubmitForm= async (e)=>{
        e.preventDefault();
        const {username,password}=this.state;
        const user ={username,password};
        const options = {
            method: 'POST',
            body:JSON.stringify(user)
        }
        const response = await fetch("http://localhost:3000/login",options)
        const data = await response.json()
        console.log(data);
    }

    renderUsername = ()=>{
        const {username}=this.state;
        return(
            <div className="username">
                <label id="user"  className="name">Username</label>
                <input type="text" className="inName" placeholder="Name" id="user" value={username} onChange={this.onChangeUser}/>
            </div>

        )
    }


    

    renderPassword = ()=>{
        const {password}=this.state;
        return(
            <div className="password">
                <label id="pass" className="pass">Password</label>
                <input type="password" className="inPass" placeholder="Password" id="pass" value={password} onChange={this.onChangePass}/>   
            </div>
    )}

    render(){
        return(
            <div className="background">
                <Header1/>
                <div className="loginContainer">
                <div className="login">
                    <div className="loginForm">
                        <h1 className="head">Login</h1>
                        <form onSubmit={this.onSubmitForm}>
                            {this.renderUsername()}
                            {this.renderPassword()}
                            <button type="submit" className="button" >Login</button>
                            <p style={{color:"white", textAlign:"center",fontSize:"18px",marginTop:"10px",fontFamily:"Roboto"}}>New User Click <Link to={"/register"} style={{color:"red",textDecoration:"none",animation:"0.5s"}}>Register</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Login;