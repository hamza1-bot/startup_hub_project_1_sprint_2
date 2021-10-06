import { useContext } from "react";
import { useHistory } from "react-router";
import GlobalContext from "../../../context/GlobalContext";

const SideMenu = (props) => {
  
    let history=useHistory()

    var loginData=useContext(GlobalContext)

    function Dashboard(){
        history.push('/dashboard')
    }
    
    function user_list(){
        history.push('/user_list')
    }

    function logout(){
        loginData.set_token('')
        loginData.set_first_name('')
        loginData.set_last_name('')
        loginData.set_email('')
        loginData.set_is_logged_in("false")
        
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('first_name')
        sessionStorage.removeItem('last_name')
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('is_logged_in')
        history.push('/login')
    }

    return (
    <div class="left_sidebar">
        <ul>
            <li><a onClick={Dashboard}><i class="fa fa-tachometer" aria-hidden="true"></i><span>Dashboard</span></a></li>
            <li><a onClick={user_list}><i class="fa fa-users" aria-hidden="true"></i><span>User Management</span></a></li>
            <li><a onClick={logout}><i class="fa fa-users" aria-hidden="true"></i><span>Logout</span></a></li>
        </ul>
    </div>
    );
};
export default SideMenu;
