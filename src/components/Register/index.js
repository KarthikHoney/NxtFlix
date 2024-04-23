import {Component} from "react";
import {Link} from "react-router-dom";
import Header1 from "../Header1";
import "./index.css"

class Register extends Component {
    state={username:"",password:"",email:""}

    onChangeUser=(e)=>{
        this.setState({username:e.target.value})
    }

    onChangeEmail=(e)=>{
        this.setState({email:e.target.value})
    }

    onChangePass=(e)=>{
        this.setState({password:e.target.value})
    }

    onSubmitForm= async (e)=>{
        e.preventDefault();
        const {username,password,email}=this.state;
        const user ={username,password,email};
        const options = {
            method: 'POST',
            body:JSON.stringify(user)
        }
        const response = await fetch("http://localhost:3000/register",options)
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

    renderEmail = ()=>{
        const {email}=this.state;
        return(
            <div className="Email">
                <label id="email" className="email">Email</label>
                <input type="email" className="inEmail" placeholder="Email" id="email" value={email} onChange={this.onChangeEmail}/>
                
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
                        <h1 className="head">Register</h1>
                        <form onSubmit={this.onSubmitForm}>
                            {this.renderUsername()}
                            {this.renderPassword()}
                            {this.renderEmail()}
                            <button type="submit" className="button" >Register</button>
                            <p style={{textAlign: "center", fontSize: "18px", marginTop: "20px", color: "whitesmoke", fontFamily: "Roboto"}}>
  Already have an Account? Click <Link to={"/"} style={{color: "red", textDecoration: "none",fontSize:'18px'}}>Login</Link>
</p>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Register;