import React from 'react';
import './demo.scss';
/*
* class component
* */

class ChildComponent extends React.Component {

state = {
    showJobs : false
}
    handleShowHide = () => {
    this.setState({
        showJobs : !this.state.showJobs
    })
    }
    handleDelete = (job) => {
        console.log('a',job)
        this.props.deleteAJob(job)
    }
    render() {
        console.log(this.state)
        let {arrjobs} = this.props
        let {showJobs} = this.state
        return (
            <>
                {showJobs === false ?
                    <div><button  className="bnt_show" onClick={(event) => this.handleShowHide(event)}>show</button></div>
                :
                    <>
                        <div className="job-lists">
                            {
                                arrjobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} = {item.salary}
                                            <></> <span onClick={() => this.handleDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button className="bnt_show" onClick={(event) => this.handleShowHide(event)}>hide</button></div>
                    </>
                }
            </>
        )
    }
}

/*
* function component
* */

// const  ChildComponent = (props) => {
//     console.log(' check props ', props)
//     let {arrjobs } = props
//         return (
//             <>
//                 <div className="job-lists">
//                     {
//                        arrjobs.map((item, index) => {
//                         return(
//                         <div key={item.id}>
//                             {item.title} = {item.salary} $
//                         </div>
//                         )
//                     })
//                     }
//                 </div>
//             </>
//         )
// }


export {ChildComponent};
