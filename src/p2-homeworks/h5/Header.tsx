import React, {useState} from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";

function Header() {
    const [openNavbar, setOpenNavbar] = useState<boolean>(true)

    const onClickHandler = () => {
        setOpenNavbar(!openNavbar)
    }

    return (
        <div className={s.header} >
            <button className={s.button} onClick={onClickHandler}>Menu</button>
            {openNavbar &&
            <ul className={s.ul} >
                <li className={s.li}><NavLink activeClassName={s.active} to={PATH.PRE_JUNIOR}>Pre Junior</NavLink></li>
                <li className={s.li}><NavLink activeClassName={s.active} to={PATH.JUNIOR}>Junior</NavLink></li>
                <li className={s.li}><NavLink activeClassName={s.active} to={PATH.JUNIOR_PLUS}>Junior Plus</NavLink></li>
            </ul>}
        </div>
    );
}

export default Header;
