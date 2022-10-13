import "../header/index.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ProfilePic from "../../../images/profile.png"
//import Avatar from '@mui/material/Avatar';



const Header = () => {
    return (
        <>
            <div className="header-nav">

                <div className="header-nav-inner">
                    <div>
                        <div className="search">
                            <input type="text" placeholder="search for anything"/>
                            <span>
                            <SearchIcon />
                            </span>
                        </div>

                        <div className="Profile-section">
                        <span className="text">Docs</span>
                        <span className="noti-icon"><NotificationsNoneIcon /></span>
                        
                        <div className="profile-picture">
                            <img src={ProfilePic} alt="profile" />
                            <span className="admin-name">Ayodeji</span>
                            <span className="drop-icon"><ArrowDropDownOutlinedIcon /></span>
                        </div>
                        </div>

                        <div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header