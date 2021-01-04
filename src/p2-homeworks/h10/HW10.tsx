import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import { loadingAC } from "./bll/loadingReducer";
import img from './Loading-Icon.gif'

function HW10() {
    // useSelector, useDispatch
    //const loading = false;
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading);
    const dispatch = useDispatch();

    const setLoading = () => {
        // dispatch
        // setTimeout
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(false)), 2000);
        console.log("loading...");
    };

    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div style = {{display: 'inline-block'}}><img width={'120px'} src={img}></img>  </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
