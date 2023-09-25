import {useState} from "react";
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from "../../firebase/firebase";
import {useNavigate} from "react-router-dom";

function Login(){

    const [user,setUser] = useState({
        username:'',
        password:''
    })

    const navigate = useNavigate()

    function handleInputChange(e){
        const {name, value} = e.target
        setUser(prevState => ({
            ...prevState,[name]:value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()

        signInWithEmailAndPassword(auth,user.username, user.password)
            .then(userCredential=>{
                console.log(userCredential)
                navigate('/')
            }).catch(error=>console.log(error.message))
    }

    const buttonStyle = {
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "12px 16px",
        fontSize: "18px",
        fontWeight: "bold",
        border: "none",
        cursor: "pointer",
        width: "100%",
        borderRadius: "4px",
    };

    return(
        <section className={'login w-100 vh-100 d-flex justify-content-center align-items-center'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-md-6 mx-auto'}>
                        <h2 className={'text-center'}>Login</h2>
                        <form className={'form-group '} onSubmit={handleSubmit}>
                            <div className={'my-3'}>
                                <input type="text" name="username" className={'form-control'} placeholder={"Login"} onChange={handleInputChange}/>
                            </div>

                            <div className={'my-3'}>
                                <input type="password" name="password" className={'form-control'} placeholder={"Password"} onChange={handleInputChange}/>
                            </div>

                            <div className={'w-100 text-center '}>
                                <button type="submit" style={buttonStyle}>Kirish</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login