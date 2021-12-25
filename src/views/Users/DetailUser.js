import React from "react";
import {withRouter} from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
    state = {
        user: {}
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }
    handleBackButton = () => {
        this.props.history.push('/user')
    }
    render() {
        let {user} = this.state;
        let isEmptyObj = Object.keys(user).length === 0
        return (
            <>
                <div>
                    detail user {this.props.match.params.id}
                </div>
                {isEmptyObj === false &&
                    <>
                        <div className="user_name">user name : {user.first_name} - {user.last_name}</div>
                        <div className="user_email">user email : {user.email} </div>
                        <div className="user_avatar">
                            <img className="avatar" src={user.avatar} alt=""/>

                        </div>
                        <div>
                            <button type ="button" onClick={() => this.handleBackButton()}>
                                Back
                            </button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default withRouter(DetailUser)