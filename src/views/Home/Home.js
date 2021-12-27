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

    handleClickDelete = (item) => {
        console.log(item);
        this.props.deleteUserRedux(item)
    }
    handleClickCreate = () => {
        this.props.addUserRedux();
    }
    render() {
        console.log(this.props.dataRedux)
        let listUsers = this.props.dataRedux;
        return (
            <div>
                <div>Home</div>
                <img className="home-logo" src={logo} alt=""/>
                <div className="list-item">
                    {listUsers && listUsers.length >0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key ={item.id}>
                                    {index +1} {item.name}
                                    &nbsp; <span onClick={() => this.handleClickDelete(item)}>x</span>

                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleClickCreate()}>Add new</button>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        dataRedux: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux : (userDelete) => dispatch({type : 'DELETE_USER',payload:userDelete}),
        addUserRedux : () => dispatch({type : 'CREATE_USER'}),
    }
}
// export default withRouter(Home)
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home))