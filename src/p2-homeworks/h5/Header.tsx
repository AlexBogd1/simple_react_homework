import React, {useState} from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header() {
    const [openNavbar, setOpenNavbar] = useState<boolean>(true)

    const onClickHandler = () => {
        setOpenNavbar(!openNavbar)
    }

    return (
        <div className={s.header} onClick={onClickHandler}>
            {openNavbar &&
            <ul className={s.ul}>
                <li className={s.li}><NavLink activeClassName={s.active} to="/pre-junior">Pre Junior</NavLink></li>
                <li className={s.li}><NavLink activeClassName={s.active} to="/junior">Junior</NavLink></li>
                <li className={s.li}><NavLink activeClassName={s.active} to="/junior-plus">Junior Plus</NavLink></li>
            </ul>}
        </div>
    );
}

export default Header;
