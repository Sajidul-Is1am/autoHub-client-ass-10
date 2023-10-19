import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";



const Register = () => {
    const { handleRegistration, handleUpdate } = useContext(AuthContext)
    const ValidationPassword = /(?=.*[A-Z])(?=.*[!@#$%^&*])/

    const navigate = useNavigate()

    const onRegistraion = event => {
        event.preventDefault()
        const form = event.target;
        const userName = form.username.value;
        const imglink = form.imglink.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            return toast.error('Password should be more than 6 characters');
        }
        else if (!ValidationPassword.test(password)) {
            return toast.error("Give a stronger password");
        }

        handleRegistration(email, password)
            .then((resuls) => {
                handleUpdate(userName, imglink)
                    .then(results => {
                        console.log(results.user)
                        toast.success('Successfully Registared')
                        form.reset();
                        navigate('/')
                    })

            })
            .catch((error) => {
                console.log(error.message);
                toast.error(error.message);
            });
        // 




    }

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-purple-600 mb-8">Registration!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <form onSubmit={onRegistraion} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name="username" placeholder="User Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Link</span>
                            </label>
                            <input type="text" name="imglink" placeholder="Image Link" className="input input-bordered" required />
                        </div>
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
                                <p className="text-base">You have an Account Please yet ?
                                    <Link to={'/login'} className="text-blue-600"> Login
                                    </Link>
                                </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Registration</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;