import "./index.css"
import Header from "../Header"

const NotFound = ()=>{
    return(
        <>
        <Header/>
        <div id="notfoundContainer">
        <div style={{textAlign:'center'}}>
        <h4 style={{color:'red'}}>SORRY</h4>
            <h1 className="notfoundText">Oops! Page not found </h1>
            <p className="notfoundTextPara">404 Error!</p>

        </div>
        <div>
        <img src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg" alt="notfound" className="notfoundImage"/>

        </div>
        </div>
        </>

    )
}
export default NotFound;