export const INITIAL_STATE = {    
    result : 0
}

const reducer = (state, action) => {
    switch (action.type) {
        // eslint-disable-next-line no-undef
        case "QOSHISH":
            return {
                result: +action.payload.inp1 + +action.payload.inp2
            }
        case "AYIRISH":
            return {
                result: action.payload.inp1 - action.payload.inp2
            }
        case "KOPAYTIRISH":
            return {
                result: action.payload.inp1 * action.payload.inp2
            }
        case "BOLISH":
            return {
                result: action.payload.inp1 / action.payload.inp2
            }

            
        default: return state;
            
    }
}

export default reducer