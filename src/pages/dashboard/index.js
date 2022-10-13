import Layout from "../layout/layout"
//import User from "../users/index"
import "./dashboard.scss"
import User from "../users/index"
import {  Route } from "react-router-dom";


const Dashboard = () => {

    return (
      
        <Layout className="Layout">
          <User />
          
        </Layout>
      
    )

}

export default Dashboard