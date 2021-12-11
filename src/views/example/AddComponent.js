import React from 'react';


class AddComponent extends React.Component {

    state = {
        titlejob: '',
        salary: "",
    }

    handleOnChageTitleJob = (event) => {
        this.setState({
            titlejob: event.target.value
        })
    }

    handleOnChageSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleOnClick = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">First name:</label><br/>
                <input type="text" value={this.state.titlejob}
                       onChange={(event) => this.handleOnChageTitleJob(event)}/><br/>
                <label htmlFor="lname">Last name:</label><br/>
                <input type="text" value={this.state.salary}
                       onChange={(event) => this.handleOnChageSalary(event)}/><br/><br/>
                <input type="submit" value="submit" onClick={(event) => this.handleOnClick(event)}/>
            </form>
        )
    }
}

export {AddComponent};
