import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styles from "./App.module.css"

export default class Home extends Component {
    render() {
        return (
            <div  className={styles.bgImage}>
                <div className="text-center m-auto">
                    <h1 className="text-success">WELCOME TO CUSTOMER PAGE! </h1>
                    <Link to="/dashboard" className="btn btn-danger m-2">Dashboard</Link>
                </div>
            </div>
        )
    }
}
