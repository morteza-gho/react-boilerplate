import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import './scss/bootstrap-icons.css';
import './scss/style.scss';

import { appContext } from './context/AppContext';
import { useEffect, useState } from 'react';
import { constants } from './general/constants';
import { ToastContainer } from 'react-toastify'; // https://fkhadra.github.io/react-toastify/introduction
import Modal from "react-modal/lib/components/Modal"; // https://github.com/reactjs/react-modal
import AppRoutes from './general/routes';

const App = () => {

  useEffect(() => {
    // Change title in browse tab
    document.title = constants.APP_TTILE;
  }, [])

  const [showSidebar, toggleSidebar] = useState(true); // to show/hide sidebar panel
  const [showUserDropDown, toggleUserDropDown] = useState(false); // toggle user drowpDown in header

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root');

  return (
    <appContext.Provider value={{
      showSidebar, toggleSidebar,
      showUserDropDown, toggleUserDropDown
    }}>
      <AppRoutes />
      <ToastContainer />
    </appContext.Provider>
  );
}

export default App;
