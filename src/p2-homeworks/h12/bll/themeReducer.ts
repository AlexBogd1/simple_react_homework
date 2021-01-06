const initState = {
    activeTheme: 'default'
};

export type ChangeThemeType = typeof initState;

export const themeReducer = (state: ChangeThemeType = initState, action: ChangeThemeAction): any => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {
                ...state,
                activeTheme: action.theme
            };
        }
        default:
            return state;
    }
};

const CHANGE_THEME = 'CHANGE_THEME'
type ChangeThemeAction = {
    type: typeof CHANGE_THEME,
    theme: string
}
export const changeThemeC = (theme: string): ChangeThemeAction => ({
    type: CHANGE_THEME,
    theme
});