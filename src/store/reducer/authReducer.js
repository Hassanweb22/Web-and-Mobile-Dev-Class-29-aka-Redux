import { fullData, myData, delete1 } from '../action/action';

const InitialState = {
    name: "Faraz Ahmed",
    email: "Faraz_Ahmed@hotmail.com",
    age: 22,
    fullData: [],
    myData: []
}

export default function authReducer(state = InitialState, action) {
    switch (action.type) {
        case fullData:
            return { ...state, fullData: action.payload }
        case myData:
            console.log("myData ==>", action)
            return { ...state, myData: action.payload }
        case delete1:
            console.log("delete ==>", action)
            return { ...state, myData: [...action.payload] }
        default:
            return { ...state };
    }
}