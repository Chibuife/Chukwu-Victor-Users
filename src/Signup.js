import React, {  useState, useEffect} from "react"
// import { Link, useOutletContext } from "react-router-dom";
import { createUserWithEmailAndPassword,  signInWithPopup, GoogleAuthProvider, sendEmailVerification, AuthErrorCodes } from "firebase/auth";
import { auth } from "./auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import passwordicon from "./password.svg"
// import {
//     useNavigate,
//   } from "react-router-dom";
import firebase from "./firebase.png"
import GoogleButton from "react-google-button";
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/alert";
import { useNavigate } from "react-router-dom";
// import submit from "./submit.svg"
const Signup = ({ history })=>{
    const [activeLogin, setActiveLogin] = useState(false)
    const [email , setEmail]= useState("");
    const navgateLink = ()=>{
        setActiveLogin(current=> !current)
    }
    const[name, setname] = useState("")
    const[password, setPassword] = useState("")
  const navigate = useNavigate()
    const inputname = (e)=>{
        setname(e.target.value)    
       }

   const inputemail = (e)=>{
    setEmail(e.target.value)    
   }


   const inputpassword= (e=>{
    setPassword( e.target.value)
   })
const createAccount = async (e)=>{
    e.preventDefault()
const loginEmail = email;
const loginPassword = password;
    try{    
        const userCredential = await createUserWithEmailAndPassword (auth, loginEmail, loginPassword, )
        if(userCredential.user.emailVerified === true){
           toast("You are verified")
        }else{
            toast.promise(
               sendEmailVerification(auth.currentUser),     
           {
                pending: 'Promise is pending',
               success: {
                // 'Email Sent Check Your Spam 👌'
                render(){
                    'Email Sent Check Your Spam 👌'
                    return navigate("/successfull");
                }
               },
               error: `Rejected 🤯`
            }
            
           )
        //    navigate("/successfull")
        }
    }
    catch(error){
        console.log(error.auth)
        const showLoginError = (error)=>{  
         
             if(AuthErrorCodes.EMAIL_EXISTS){
                toast("Email Exits")
            }
            else if (AuthErrorCodes.INVALID_AUTH){
                toast("Invaild Email")
            }
        }
        showLoginError()
    }
   }

const handleGoogleSignIn = async () =>{
        try{
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
            .then(()=> alert('your signed in'))
        }catch(error){
            console.log(error)
        }
    }

    return(
        <div>
        <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        <div className="signin">
        <div className="gray">
        <h1>Sign Up</h1>
        </div>
        {/* <div className="link-signUp-login"><Link className="link-login not-active" to={"/a/login"}>Log In</Link> <Link className={activeLogin ? "link-signup  not-active" : "link-signup active"} to={"/a/signup"}>Sign Up</Link></div> */}
        <form onSubmit={createAccount}>
        <GoogleButton   className="googleButton" type="light"   onClick={handleGoogleSignIn}/>
        <div className="or">or</div>
        <h5>Email</h5>
        <div><input type="email" onChange={inputemail} placeholder="acvb@gmail.com"/></div>
        <h5>Password</h5>
        <div className="inputbox"><div className="gray input-icon"></div><input type="password" placeholder="enter secret" value={password || ""}  onChange={inputpassword}/></div>
        <div className="small">
            <small>
             By signing up, you agree to our terms of service and privacy policy.
            </small>
        </div>
        <button >Sign Up</button><br />      
        </form>
        </div>
        <div><img className="authImg" src={firebase} alt="" /></div>
        </div>
    )
}

export default Signup
