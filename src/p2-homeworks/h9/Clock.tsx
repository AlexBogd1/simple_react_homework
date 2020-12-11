import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import style from './Clock.module.css'
function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearTimeout(timerId);
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            let date = new Date
            setDate(date)
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    const stringTime = "Time " + date?.toLocaleTimeString("en-US",{ hour: 'numeric', minute: 'numeric', second: 'numeric'}) ;
    const stringDate = "Date " + date?.toLocaleDateString("en-US",{ year: 'numeric', month: 'long', day: 'numeric', weekday: 'long',}) ;

    return (
        <div>
            <div className={style.container}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className={style.timeBlock}
                >
                    {stringTime}
                </div>

                {show && (
                    <div className={style.dateBlock}>
                        {stringDate}
                    </div>
                )}
            </div>


            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
