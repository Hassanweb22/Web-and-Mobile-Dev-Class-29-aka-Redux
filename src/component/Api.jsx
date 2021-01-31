import React, { Component } from 'react'

export default class Api extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            khalas: null
        }
    }

    componentWillUnmount() {
        console.log("Jaa Naa!!")
        return this.setState({
            khalas: <h2>Khalas</h2>
        })
    }
    // componentWillMount () {
    //     console.log("AA naa!!")
    // }

    render() {
        let table;
        let { data, counter } = this.props
        // console.log("API ", data[counter])
        if (data !== []) {
            table = <h2>Loading...</h2>
        }
        else {
            table =
                <table border={1}>
                    <thead>
                        <tr>
                            <th>userID</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >{data[counter].id}</td>
                            <td style={{ minWidth: "340px" }}>{data[counter].title}</td>
                        </tr>
                    </tbody>
                </table>
        }

        return (
            <div>
                {this.state.khalas}
                {/* <h3>Title {data[counter].title}</h3> */}
                {table}
            </div>
        )
    }
}

