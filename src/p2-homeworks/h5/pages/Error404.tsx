import React from "react";
import s from './Error404.module.css'
function Error404() {
    return (
        <div className={s.notfound}>
            <div className={s.centered}><span className={s.inverted}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;
            </div>
            <div className={s.centered}><span className={s.inverted}>&nbsp;4&nbsp;0&nbsp;4&nbsp;</span><span
                className={s.shadow}>&nbsp;</span></div>
            <div className={s.centered}><span className={s.inverted}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                className={s.shadow}>&nbsp;</span></div>
            <div className={s.centered}>&nbsp;<span className={s.shadow}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
            <div className={s.row}>&nbsp;</div>
            <div className={s.row}>A fatal exception 404 has occurred at C0DE:ABAD1DEA in 0xC0DEBA5E.</div>
            <div className={s.row}>The current request will be terminated.</div>
            <div className={s.row}>&nbsp;</div>
            <div className={s.row}>* Press any key to return to the previous page.</div>
            <div className={s.row}>* Press CTRL+ALT+DEL to restart your computer. You will</div>
            <div className={s.row}>&nbsp;&nbsp;lose any unsaved information in all applications.</div>
            <div className={s.row}>&nbsp;</div>
            <div className={s.centered}>Press any key to continue...<span className={s.blink}>&#9608;</span></div>
        </div>
    );
}

export default Error404;
