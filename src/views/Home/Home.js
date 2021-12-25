import React from "react";

import { withRouter } from "react-router";
import Color from "../HOC/color";
import logo from '../../assets/images/logodemo.jpg'
class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }


    render() {
        return (
            <div>
                <div>Home</div>
                <img className="home-logo" src={logo} alt=""/>
            </div>
        )
    }
}

// export default withRouter(Home)
export default Color(Home)