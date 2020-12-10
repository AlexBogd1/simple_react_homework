

export const homeWorkReducer = (state: StateType, action: ActionsType): any => {
    switch (action.type) {
        case "sort": {
            if(action.payload === 'up'){
                debugger
                return [...state.sort(function (a, b) {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        // a должно быть равным b
                        return 0;
                    })]
            }
            if(action.payload === 'down'){
                return [...state.sort(function (a, b) {
                        if (a.name < b.name) {
                            return 1;
                        }
                        if (a.name > b.name) {
                            return -1;
                        }
                        // a должно быть равным b
                        return 0;
                    })]
            }

        }
        case "check": {
            return state.filter(it => it.age > action.payload)
        }
        default: return state
    }
};



type ActionsType = SortActionType | CheckActionType;

type SortActionType = {
    type: 'sort'
    payload: 'up' | 'down'
}

type CheckActionType = {
    type: 'check'
    payload: number
}

type StateType = Array<ObjectType>

type ObjectType = {
    _id: number
    name: string
    age: number
}