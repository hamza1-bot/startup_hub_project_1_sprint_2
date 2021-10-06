import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SideMenu from "./SideMenu/SideMenu";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

const Layout = (props) => {
    
    var globalContext = useContext(GlobalContext)

    return (
        <>
        {globalContext.is_logged_in == "true" ?
            <>
            <Header></Header>
            <SideMenu></SideMenu>
            </>
        :
        ''
        }
        {props.children}
        {globalContext.is_logged_in == "true" ?
            <Footer></Footer>
        :
        ''
        }
      </>
    );
  };
  
  export default Layout;