import React from "react";

import { withRouter } from "react-router";
import Color from "../HOC/color";
import logo from '../../assets/images/logodemo.jpg';
import {connect} from "react-redux";

class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }


    render() {
        console.log(this.props.dataRedux)
        return (
            <div>
                <div>Home</div>
                <img className="home-logo" src={logo} alt=""/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        dataRedux: state.users
    }
}
// export default withRouter(Home)
export default connect(mapStateToProps)(Color(Home))