import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const { handleLogin ,handleGoogleLogin} = useContext(AuthContext);
    const navigate = useNavigate()

    const onRegistraion = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

// login with email and password
        handleLogin(email, password)
            .then((resuls) => {
                toast.success('Successfully Login');
                navigate('/')
                console.log(resuls);
            })
            .catch((error) => {
                toast.error(error.message);
                navigate('/login')
            });
            
        }
        // login with google 
        const googleLogin = () =>{
            handleGoogleLogin()
            .then(resuls => {
                toast.success('Successfully Login');
                navigate('/')
            })
            .catch(error =>{
                toast.error(error.message);
                navigate('/login')
            })
        }

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-purple-600 mb-8">Login now</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <form onSubmit={onRegistraion} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p className="text-base">Dont have an Account yet?
                                    <Link to={'/register'} className="text-blue-600">Registration</Link>
                                </p>
                            </label>
                            <div className="divider">Or</div>
                            <button onClick={googleLogin} className="btn btn-outline btn-accent text-x"><FcGoogle></FcGoogle>Google</button>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;