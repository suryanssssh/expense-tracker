import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
// import { useGetUserInfo } from "../../hooks/useGetUserInfo";
// import "./styles.css";

export const Login = () => {
    const signInWithGoogle=async()=>{
        const results = await signInWithPopup(auth, provider);
        const authInfo = {
            userID: results.user.uid,
            name: results.user.displayName,
            profilePhoto: results.user.photoURL,
            isAuth: true,
        };
        localStorage.setItem("auth", JSON.stringify(authInfo));
    }
  return (
    <div>
        <h1>LOGIN FIRST</h1>
        <button onClick={signInWithGoogle}>LOGIN With Google</button>

        
    </div>
  )
}

export default Login