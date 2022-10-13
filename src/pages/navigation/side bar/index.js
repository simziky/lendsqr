import "../side bar/index.scss"
import Logo from "../../../images/Union.png"
import LogoText from "../../../images/lendsqr.svg"
import { Sidebar, Menu, MenuItem, SubMenu, ProSidebarProvider  } from 'react-pro-sidebar';
import Briefcase from "../../../images/icons/briefcase.svg"
import Badge from "../../../images/icons/badge-percent.svg"
import Chart from "../../../images/icons/chart-bar.svg"
import Clipboard from "../../../images/icons/clipboard-list.svg"
import Coins from "../../../images/icons/coins-solid.svg"
import Galaxy from "../../../images/icons/galaxy.svg"
import Bank from "../../../images/icons/bank.svg"
import Handshake from "../../../images/icons/handshake-regular.svg"
import Home from "../../../images/icons/home.svg"
import Loan from "../../../images/icons/loan.svg"
import Piggybank from "../../../images/icons/piggy-bank.svg"
import Moneybag from "../../../images/icons/sack.svg"
import Scroll from "../../../images/icons/scroll.svg"
import Slider from "../../../images/icons/sliders-h.svg"
import Transact from "../../../images/icons/transact.svg"
import Usercheck from "../../../images/icons/user-check.svg"
import Usercog from "../../../images/icons/user-cog.svg"
import Userfriends from "../../../images/icons/user-friends.svg"
import Usertimes from "../../../images/icons/user-times.svg"
import Users from "../../../images/icons/users.svg"



const SideBar = () => {
    return (
        <>
            <ProSidebarProvider>
            <div className="sidebar-parent">
            <Sidebar>
                <div className="sidebar-logo">
                    <div className="sidebar-logo-inner">
                    <img src={Logo} />
                    <img src={LogoText} />
                    </div>
                   
                </div>
                    <Menu style={{backgroundColor:"white"}}>

                    <MenuItem icon={<img src={Briefcase} alt="img"/>}  >Switch Organisation</MenuItem>
                <MenuItem icon={< img src={Home} alt="img"/>} >Dashboard</MenuItem>
                <SubMenu   label="Customers">
                <MenuItem icon={<img src={Userfriends} alt="img"/>} > Users</MenuItem>
                <MenuItem icon={< img src={Users} alt="img"/>} > Guarantors </MenuItem>
                <MenuItem icon={< img src={Moneybag} alt="img"/>} > Loans</MenuItem>
                <MenuItem icon={< img src={Handshake} alt="img"/>} >Decision Model  </MenuItem>
                <MenuItem icon={< img src={Piggybank} alt="img"/>} >Savings </MenuItem>
                <MenuItem icon={< img src={Loan} alt="img"/>} >Laon Requests  </MenuItem>
                <MenuItem icon={< img src={Usercheck} alt="img"/>} >Whitelist </MenuItem>
                <MenuItem icon={< img src={Usertimes} alt="img"/>} >Karma  </MenuItem>
                </SubMenu>

                <SubMenu label="Businesses">
                <MenuItem icon={< img src={Briefcase} alt="img"/>} > Organisation</MenuItem>
                <MenuItem icon={< img src={Loan} alt="img"/>} > Loan Products </MenuItem>
                <MenuItem icon={< img src={Bank} alt="img"/>} > Saving Products</MenuItem>
                <MenuItem icon={< img src={Coins} alt="img"/>} >Fees and Charges  </MenuItem>
                <MenuItem icon={< img src={Transact} alt="img"/>} >Transaction </MenuItem>
                <MenuItem icon={< img src={Galaxy} alt="img"/>} >Services  </MenuItem>
                <MenuItem icon={< img src={Usercog} alt="img"/>} >Service Account </MenuItem>
                <MenuItem icon={< img src={Scroll} alt="img"/>} >Settlements </MenuItem>
                <MenuItem icon={< img src={Chart} alt="img"/>} >Reports </MenuItem>
                </SubMenu>

                <SubMenu label="Settings">
                <MenuItem icon={< img src={Slider} alt="img"/>}  > Prefernces</MenuItem>
                <MenuItem icon={< img src={Badge} alt="img"/>}  > Fee and Prices </MenuItem>
                <MenuItem icon={< img src={Clipboard} alt="img"/>}  > Audit Logs</MenuItem>
               
                </SubMenu>

                    </Menu>
                
               
                    
                </Sidebar>
            </div>
            </ProSidebarProvider>
        </>
    )
}

export default SideBar