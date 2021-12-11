import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'huy',
        learn: "react"
    }


    /**
     * JSX
     * fragment
     */

    handleOnChageName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnClick = (event) => {

        console.log('a');
        alert('b')
    }
    render() {

        let name = "huy"
        return (
            <>
                <div className="about">
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChageName(event)} />
                    hello {this.state.name}
                </div>

                <div className="about 1">
                    {console.log('hello', this.state.name)}
                    my learning {this.state['learn']}
                </div>
                <div className="third">
                    <button onClick={() => this.handleOnClick()} > Click me </button>
                </div>
            </>
        )
    }
}

class MyComponent2 extends React.Component {
    render() {
        return (
            <div className="about">
                my name
            </div>
        )
    }
}

export { MyComponent, MyComponent2 };