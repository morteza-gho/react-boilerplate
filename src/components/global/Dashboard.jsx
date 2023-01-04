import {Outlet} from 'react-router-dom'
import { useContext, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { appContext } from "../../context/AppContext"
import { IsLogin } from '../../services/AuthService';
import MainHeader from "../header/MainHeader"
import Sidebar from "./Sidebar"
// import MiniFooter from "./MiniFooter"

const Dashboard = () => {

  const { showSidebar, toggleSidebar, toggleUserDropDown } = useContext(appContext); 
  const navigate = useNavigate();

  const clickOnBody = () => {
    // close user dropdown when click outside
    // toggleSidebar(true);
    toggleUserDropDown(false);
  }

  useEffect(() => {
    if (!IsLogin()) {
      navigate('/login')
    }
  }, [])

  return (
    <div className="app" onClick={() => clickOnBody()}>
      <MainHeader />

      <main id="main" className={showSidebar ? '' : 'full-width'}>
        <Sidebar />
        <div id="content-wrapper">
          <div className="container-fluid">
            <Outlet />
          </div>
        </div>
        {/* <MiniFooter /> */}
      </main>
    </div>
  )
}

export default Dashboard