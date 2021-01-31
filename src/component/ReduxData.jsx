import React from 'react'
import { connect } from 'react-redux'
import { data_fetch, sliced_Data, delete_Data } from '../store/action/action';


function ReduxData(props) {
    // console.log("REduxDAta-Props", props.data)
    // let [fetchData, setFecthData] = useState([])
    if (!props.full) {
        console.log("counter REduxData=> nhi mila")
    }
    else {
        // console.log("REduxFullData Array=>", props.full)
        console.log("REduxMYData Array=>", props.half)
        // setFecthData(props.data.slice(0, props.counter))
        // console.log("fetchData", fetchData)
    }
    let showData = (!props.full.title) ? props.name1 : props.full.title;

    let delete_Arr = (id) => {
        let index = [...props.half].findIndex((item) => item.id === id);
        // console.log("delete_Arr", index)
        props.half.splice(index, 1)
        console.log("props.half.splice()", props.half)
        props.delete_Data(props.half, index)
    }

    let showTable = (props.data !== []) ?
        <table style={{ margin: "10px auto" }} border={1}>
            <thead>
                <tr>
                    <th>userID</th>
                    <th>Title</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {[...props.half].slice(0, props.counter).map((item) => {
                    return <>
                        <tr key={item.id}>
                            <td >{item.id}</td>
                            <td style={{ minWidth: "340px" }}>{item.title}</td>
                            <td><button style={{ margin: 2 }} onClick={() => delete_Arr(item.id)} >Delete</button></td>
                        </tr>
                    </>
                })}
            </tbody>
        </table> : <h2>No Table</h2>

    return (
        <div>
            <h3>Name: {showData} </h3>
            <h3>Email: {props.email1}</h3>
            <button onClick={() => {
                props.data_fetch()
                props.sliced_Data(props.full, props.counter)
            }} >Fetch Data</button>
            {showTable}
        </div>
    )
}

const mapStateToProps = (state) => ({
    name1: state.app.name,
    email1: state.auth.email,
    counter: state.app.counter,
    full: state.auth.fullData,
    half: state.auth.myData

})


export default connect(mapStateToProps, { data_fetch, sliced_Data, delete_Data })(ReduxData)
