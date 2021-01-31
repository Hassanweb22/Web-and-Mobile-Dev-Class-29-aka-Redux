let increment = "Increment";
let decrement = "Decrement"
let reset = "Reset"
let fullData = "fullData"
let myData = "myData"
let delete1 = "delete"

const set_Data = (counter) => {
    return (dispatch) => {
        console.log("counter=>", counter)
        dispatch({
            type: "setData",
            counter: counter
        })
    }
}

const inc_counter = (counter) => (dispatch) => {
    dispatch({ type: increment, payload: counter + 1 })
}

const dec_counter = (counter) => {
    return (dispatch) => {
        dispatch({
            type: decrement,
            payload: counter - 1
        })
    }
}
const res_counter = (counter) => {
    return (dispatch) => {
        console.log("counter=>", counter)
        dispatch({
            type: reset,
            payload: counter * 0
        })
    }
}

const data_fetch = (counter) => {
        return async (dispatch) => {
            let res = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
            let json = await res.json()
            console.log("json",json)
            dispatch({
                type: fullData,
                payload: json
            })
    }
}
const sliced_Data = (data, counter) => {
    return (dispatch) => {
        dispatch({
            type: myData,
            payload: data.slice(0, counter+1)
        })
    }
}

const delete_Data = (data) => {
    return (dispatch) => {
        // console.log("delete_Data", data)
        dispatch({
            type: delete1,
            payload: data
        })
    }
}



export {
    set_Data,
    inc_counter,
    dec_counter,
    res_counter,
    data_fetch,
    sliced_Data,
    delete_Data,
    increment,
    decrement,
    reset,
    fullData,
    myData,
    delete1
}

// let increment= "Increment"
// let decrement= "Decrement"


// const increment_counter = (counter) => {
//     return (dispatch) => {
//         console.log("counter=>", counter)
//         dispatch({
//             type: increment,
//             payload: counter 
//         })
//     }
// }
// const decrement_counter = (counter) => {
//     return (dispatch) => {
//         console.log("counter=>", counter)
//         dispatch({
//             type: decrement,
//             payload: counter 
//         })
//     }
// }

// export {
//     set_Data,
//     decrement,
//     increment
// }