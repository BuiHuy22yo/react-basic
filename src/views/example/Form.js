import React from 'react';
import {ChildComponent} from "./ChildComponent";

class Form extends React.Component {

    state = {
        firstName: '',
        lastName: "",
        arrjobs: [
            { id : 'aaajob1' , title : 'dev' , salary : '500'},
            { id : 'aaajob12' , title : 'testter' , salary : '600'},
            { id : 'aaajob13' , title : 'PM' , salary : '1500'}
        ]
    }

    /**
     * JSX
     *
     */
    handleOnChageFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleOnChageLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleOnClick = (event) => {

        event.preventDefault()
        alert('click me')
        console.log(this.state)
    }

    render() {
        console.log(this.state)
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input type="text" value={this.state.firstName}
                           onChange={(event) => this.handleOnChageFirstName(event)}/><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text" value={this.state.lastName}
                           onChange={(event) => this.handleOnChageLastName(event)}/><br/><br/>
                    <input type="submit" value="submit" onClick={(event) => this.handleOnClick(event)}/>
                </form>
                <ChildComponent name={this.state.firstName} age={'20'} arrjobs={this.state.arrjobs}/>
                {/*<ChildComponent name={'bùi huy1'} age={'21'}/>*/}
                {/*<ChildComponent name={'bùi huy2'} age={'22'} />*/}
            </>
        )
    }
}

export {Form};
