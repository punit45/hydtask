import './HeaderPart.css';
import mindLogo from "../assets/mind-removebg-preview.png";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import profilePhoto from "../assets/punituser.jpg";

const Header = () => {
    return (
        <header className="header">
            <div className="left">
                <a href="https://www.ltimindtree.com/" target="_blank">
                    <img src={mindLogo} className="logo" alt="Vite logo" />
                </a>

                <Divider orientation="vertical" variant="middle" flexItem className='divider' />

                <Typography className="app-name" variant="h5">
                    Kubernates Autopilot
                </Typography>
            </div>
            <div className="right">
                <div className="username">
                    <span>Lincoln Dorwat</span>
                    <span>Proposal Manager,Germany</span>
                </div>


                <a href="https://www.ltimindtree.com/" target="_blank">
                    <img src={profilePhoto} alt="Profile" className="profile-photo" />
                </a>
            </div>
        </header>
    );
};

export default Header;