
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ user, children }) => {
    if (!user.token) {
        return <Navigate to='/login'/>;
    } 

    return children;
    
};

export default ProtectedRoute;