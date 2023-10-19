import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import { Dna } from "react-loader-spinner";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="flex h-screen justify-center items-center">
            <Dna
                visible={true}
                height="100"
                width="100"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    }

    if (!user) {
        return <Navigate to={'/login'}></Navigate>
    }


    return (children);
};

export default PrivetRoute;