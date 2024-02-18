import classes from "./header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { GrBottomCorner } from "react-icons/gr";
import logo from "../../images/spaceX_logo.png";
import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    function menuTogglerHandler() {
        setMenuOpen(!menuOpen)
    }
    return (
        <>
        <header className={classes.header}>
            <div className={classes.header__container}>
                <div className={classes.logo}>
                    < GrBottomCorner className={classes.logo_corner} id={classes.logo_top_left_corner}/>
                    < GrBottomCorner className={classes.logo_corner} id={classes.logo_top_right_corner}/>
                    <img src={logo} alt="logo"/>
                    < GrBottomCorner className={classes.logo_corner} id={classes.logo_bottom_left_corner}/>
                    < GrBottomCorner className={classes.logo_corner} id={classes.logo_bottom_right_corner}/>
                </div>
                <nav className={`${classes.header__nav} ${menuOpen ? classes.isMenu : ''}`}>
                <ul>
                    <li>Главная</li>
                    <li>Технология</li>
                    <li>График полетов</li>
                    <li>Гарантии</li>
                    <li>О компании</li>
                    <li>Контакты</li>
                </ul>
                </nav>
                <div className={classes.header__nav_toggle}>
                    {menuOpen ? < AiOutlineClose onClick={menuTogglerHandler} className={classes.header__nav_toggle_icon}/> : 
                    < BiMenuAltRight onClick={menuTogglerHandler} className={classes.header__nav_toggle_icon}/>}
                </div>
            </div>
        </header>
        <div className={classes.open_isMenu}></div>
        </>
    )
};

export default Header;