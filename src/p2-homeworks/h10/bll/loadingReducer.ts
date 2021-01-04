const initState = {
    loading: false
};
type loadingStateType = typeof initState;


export const loadingReducer = (state = initState, action: loadingACType): loadingStateType => { // fix any
    switch (action.type) {
        case "IS-LOADING": {
            return {
                ...state,
                loading: action.loading
            };
        }
        default: return state;
    }
};

type loadingACType = {
    type: "IS-LOADING"  ,
    loading: boolean
} ;
export const loadingAC = (loading: boolean): loadingACType => {
    return {
        type: "IS-LOADING",
        loading
    } as const
}; // fix any