import { decrement, increment, reset } from "../action/action"

const InitialState = {
    name: "Hassan",
    email: "Hassan@yahoo.com",
    age: 21,
    counter: 0
}



export default function appReducer(state = InitialState, action) {
    // console.log("appReducer_action ==>", action)
    switch (action.type) {
        case increment:
            // return { ...state, counter: state.counter + 1 }
            return { ...state, counter: action.payload }
        case decrement:
            return { ...state, counter: state.counter - 1 }
        case reset:
            return { ...state, counter: 0 }
        default:
            return { ...state }
    }
}