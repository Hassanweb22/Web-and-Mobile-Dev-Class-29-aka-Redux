import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Api from './component/Api'
import ReduxData from './component/ReduxData'
import { set_Data, inc_counter, dec_counter, res_counter, data_fetch, sliced_Data } from './store/action/action'

import styles from './App.module.css';

class App extends Component {
    constructor(props) {
        console.log("Constructor")
        super(props);
        this.state = ({
            counter: 0,
            data: []
        });
        // this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e) => {
        let { counter } = this.state
        // console.log(e.target.innerHTML)
        if ((e.target.innerHTML).toLowerCase() === "increment") {
            this.setState({
                counter: counter + 1
            })
        }
        if ((e.target.innerHTML).toLowerCase() === "decrement") {
            this.setState({
                counter: counter - 1
            })
        }
    }

    render() {
        // let { data, counter } = this.state
        let { counter, fullData, sliced_Data, increment, decrement, fetchData } = this.props
        // console.log('render_props=> ', this.props)
        return (
            <div className={styles.App}>
                <h2>{(counter < 0) ? "Can Not BE Less Than 0" : `Counter : ${counter}`}</h2>
                {/* <button onClick={(event) => this.handleClick(event)}>Increment</button>
                <button onClick={(event) => (counter >= 0) ? this.handleClick(event) : null}>Decrement</button> */}

                <button onClick={(event) => {
                    // fetchData()
                    sliced_Data(fullData, counter)
                    increment(counter)
                    console.log("Ap.js Props", this.props)
                }}>Increment</button>

                <button onClick={() => {
                    if (counter >= 0) {
                        decrement(counter)
                        sliced_Data(fullData, counter)
                    }
                }}>Decrement</button>
                <button onClick={() => this.props.reset(counter)}>Reset</button>
                <button onClick={() => this.props.set_Data(counter)}>Set_Data</button>
                <ReduxData />
                {/* {counter < 5 && <Api counter={counter} data={data} />} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    name: state.auth.name,
    email: state.app.email,
    age: state.auth.age,
    counter: state.app.counter,
    fullData: state.auth.fullData,
    myData: state.auth.myData
})

const mapDispatchToProps = dispatch => {
    return {
        set_Data: (counter) => dispatch(set_Data(counter)),
        increment: (counter) => dispatch(inc_counter(counter)),
        decrement: (counter) => dispatch(dec_counter(counter)),
        reset: (counter) => dispatch(res_counter(counter)),
        fetchData: (counter) => dispatch(data_fetch(counter)),
        sliced_Data: (data, counter) => dispatch((sliced_Data(data, counter))),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);



// static getDerivedStateFromProps(props, state) {
//     console.log('getDerivedStateFromProps', state)
//     return null
// }

// shouldComponentUpdate(nextProps, nextState) {
//     // console.log("shouldComponentUpdate ", nextState);
//     return (nextState.counter > 5) ? false : true
// }

// getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("getSnapshotBeforeUpdate", prevState)
//     return 10
// }

// componentDidUpdate(prevProps, prevState, snapshot) {
//     // console.log("snapshot: ", snapshot)
//     // Typical usage (don't forget to compare props):
//     if (this.props.userID !== prevProps.userID) {
//         this.fetchData(this.props.userID);
//     }
// }
// componentDidMount = async () => {
//     console.log("componentDidMount")
//     let get = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
//     let reponse = await get.json()
//     // console.log(reponse)
//     this.setState({
//         data: reponse
//     })
// }
// componentWillUnmount() {
//     console.log("Khalas!!")
//     // return this.setState({
//     //     khalas: <h2>Khalas</h2>
//     // })
// }