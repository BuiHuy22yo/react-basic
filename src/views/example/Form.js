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

    addNewJob = (job) => {
        console.log('check parrent', job)
        let currenJobs = this.state.arrjobs;
        currenJobs.push(job)
         this.setState({
             // arrjobs: [...this.state.arrjobs, job]
             arrjobs : currenJobs
         })
    }


    deleteAJob = (job) => {
        let currenJobs = this.state.arrjobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id);
        this.setState({
            arrjobs : currenJobs
        })
    }
    render() {
        //console.log(this.state)
        return (
            <>
               <AddComponent addNewJob={this.addNewJob} ></AddComponent>
                <ChildComponent
                    arrjobs={this.state.arrjobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )
    }
}

export {Form};
