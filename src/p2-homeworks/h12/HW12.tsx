import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ChangeThemeType} from "./bll/themeReducer";


const themes = ['dark', 'red', 'some','darkolivegreen'];

function HW12() {
    const theme = useSelector<AppStoreType,ChangeThemeType >(state => state.theme); // useSelector
    const dispatch = useDispatch();
    // useDispatch, onChangeCallback

    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }
    return (
        <div className={`${s[theme.activeTheme]} `}>
            <hr/>
            <span className={`${s[theme.activeTheme + '-text']}`}>
                homeworks 12
            </span>
            <SuperSelect
                options = {themes}
                onChangeOption={onChangeCallback}/>
            {/*<SuperRadio*/}
            {/*    options = {themes}*/}
            {/*    onChangeOption={onChangeCallback}*/}
            {/*    name={"radio"}*/}
            {/*    value={theme.activeTheme}*/}
            {/*/>*/}

            <hr/>
        </div>
    );
}

export default HW12;
