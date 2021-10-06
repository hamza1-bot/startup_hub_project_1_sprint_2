import { useContext, useEffect } from "react";
import GlobalContext from "../../context/GlobalContext";

const Dashboard = (props) => {
     var dashboardData=useContext(GlobalContext)
    useEffect(() => {
        // alert(dashboardData.token);
    }, []);

    return (
        <div class="content_area">
			Welcome Admin
		</div>
        );
    };
    export default Dashboard;