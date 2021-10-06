import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { userService } from "../../../services/CommonServices";

const UserList=(props)=>{
    
    let history=useHistory()
    const[users_list, set_users_list]=useState([])

    useEffect(()=>{
        userService.user_list_api().then(response=>{
            if(response.status==200){
                set_users_list(response.data.list)
            }
        })
    },[])

    function Add_User(){
      history.push('/add_user')
    }



  
return(

            <div class="content_area">
                        
                        <div class="tables_area">
                            <h2 class="pull-left">Users List</h2>
                            <div class="clear"></div>
                            <div class="white_box">
                                <div class="table-responsive">
                                    <table width="100%" cellspacing="0" cellpadding="0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email Address</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { users_list.length>0 && users_list.map((item)=>
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.firstName}</td>
                                                    <td>{item.lastName}</td>
                                                    <td>{item.email}</td>
                                                </tr>
                                             )}
                                            
                        
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    

                    </div>
);
};
export default UserList;