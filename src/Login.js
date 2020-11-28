import React from 'react'
import {GoogleLogin} from 'react-google-login';

const clientId="359837985798-9u8msn8i0ie47cmmdir7vmuvqnhfuhq3.apps.googleusercontent.com"
function Login() {
    const onSuccess=(res) =>{
        console.log('[Login Success] currentUser:',res.profileObj)
    };
    const onFailure=(res)=>{
        console.log("[Login Failed] res:",res)
    }
    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{marginTop:'100px'}}
                isSignedIn={true}
            
            />
            
        </div>
    )
}

export default Login