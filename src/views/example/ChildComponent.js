import React from 'react';

class ChildComponent extends React.Component {

    state = {
        firstName: this.props.name,
        age: this.props.age
    }

    /**
     * JSX
     *
     */


    render() {
        console.log(this.state)
        let { name , age ,arrjobs } = this.props
        let a = ''
        return (
            <>
                <div className="job-lists">
                    {
                       a = arrjobs.map((item, index) => {
                        return(
                        <div key={item.id}>
                            {item.title} = {item.salary}
                        </div>
                        )
                    })
                    }
                </div>
            </>
        )
    }
}

export {ChildComponent};
