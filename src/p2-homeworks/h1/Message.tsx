import React from "react";
import style from './Message.module.css'

type MessageType = {
    avatar: string
    name: string,
    message: string,
    time: string,
}


function Message(props: MessageType) {
    return (
        <div className={style.message}>
            <img src={props.avatar}/>
            <div id={style.comment_bubble} className={style.inform}>
                <div className={style.user}>
                    <p className={style.name}>{props.name}</p>
                    <p className={style.text}>{props.message}</p>
                </div>
                <div>
                    <p className={style.clock}>{props.time}</p>
                </div>

            </div>


        </div>
    )
}

export default Message;
