import React from 'react';
import {ChildComponent} from "./ChildComponent";
import {AddComponent} from "./AddComponent";
class Form extends React.Component {

    state = {
        arrjobs: [
            { id : 'aaajob1' , title : 'dev' , salary : '500'},
            { id : 'aaajob12' , title : 'testter' , salary : '600'},
            { id : 'aaajob13' , title : 'PM' , salary : '1500'}
        ]
    }

    render() {
        //console.log(this.state)
        return (
            <>
               <AddComponent></AddComponent>
                <ChildComponent arrjobs={this.state.arrjobs}/>
            </>
        )
    }
}

export {Form};
