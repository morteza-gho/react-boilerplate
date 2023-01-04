import { Navigate, Route, Routes } from "react-router";
import Dashboard from "../components/global/Dashboard";
import PageNotFound from "../components/global/PageNotFound"
import Login from "../components/login/Login";
import Contacts from '../components/contacts/Contacts'

const AppRoutes = () => {
  return (
    <Routes>

      <Route exact path='/login' element={<Login />} />

      <Route path='/' element={<Navigate to='/dashboard' />} />
      <Route path='*' element={<Navigate to='/dashboard/404' />} />
      
      <Route path='/dashboard' element={<Dashboard />}>

        <Route path="contacts" element={<Contacts />} />

        <Route path='404' element={<PageNotFound />} />
      </Route>

    </Routes>
  )
}
export default AppRoutes;