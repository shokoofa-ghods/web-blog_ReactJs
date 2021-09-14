import React, { useRef } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import { ButtonStyle, InputStyle} from '../../Style'

function LogIn(props) {
    const Email = useRef('')
    const passWord = useRef('')
    const history = useHistory();
    
    function submitHandler(e) {
        e.preventDefault()
        
        Axios.post('http://localhost:3000/api/users/login' ,
        {"user":
            {"email":Email.current.value,
            "password":passWord.current.value
            }
        }) 
        .then(res=>{
              if(res.status === 200){
                localStorage.setItem('token', res.data.user.token);
                return history.push('/')
             }
        })
        .catch(console.error);

        //return localStorage.getItem('token') ? <Route> <Admin/>  </Route>  : <Redirect to='/' />       
    }

    
    return(
        <>
        <div>
            <h2>Login page</h2>
            <h3>inter your information</h3>
            <form>
            <InputStyle type= 'email' defaultValue ='' placeholder= 'email' ref= {Email} ></InputStyle>
            <br></br>
            <InputStyle type= 'password' defaultValue ='' placeholder= 'password' ref= {passWord} ></InputStyle>
            <br></br>
            <ButtonStyle onClick={submitHandler}>sign in</ButtonStyle>
            </form>
        </div>
        </>
    )
}
export default LogIn