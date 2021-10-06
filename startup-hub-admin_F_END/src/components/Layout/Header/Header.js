import { useContext } from "react";
import GlobalContext from "../../../context/GlobalContext";

const Header = (props) => {

	var loginData=useContext(GlobalContext)

    return (
    <header class="header">
		<div class="dashboard_logoarea text-center">
			<a href="#" class="menu_bar"><i class="fa fa-bars" aria-hidden="true"></i></a>
			<a href="#"><img src="images/logo.png" alt="" /></a>
		</div>
		<div class="right_loggedarea">
			<ul>
				<li><a href="">{loginData.first_name != null ? loginData.first_name : '' + ' ' + loginData.last_name != null ? loginData.last_name : ''} </a></li>
			</ul>
		</div>
	</header>
    );
};
export default Header;
	