//src/containers/StudentView/StudentPage.jsx
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getStudentById} from '../../actions/student'
import {addEvaluation} from '../../actions/evaluation'

//Styling
import Paper from 'material-ui/Paper'
// import Radio, { RadioGroup } from 'material-ui/Radio'
// import { FormControlLabel} from 'material-ui/Form';
// import { Typography } from 'material-ui'
import Button from 'material-ui/Button'
import './StudentPage.css'

class StudentPage extends PureComponent {
    
    state = {
        studentId: 1,
        batchId: 1,
        remarks: '',
        questionAsked: false
        // date: new Date()
    }
    
    componentWillMount() {
        const studentId = Number((window.location.href).split('/').pop()) //or get it from state
        this.props.getStudentById(studentId)
    }

    handleSave = () => {
        const {history, student} = this.props

        this.props.addEvaluation(this.state)
        history.push(`/batches/${student.batchId}`) 
        console.log(this.state)
    }

    // handleSaveNext = () => {
    //     const {history, student} = this.props

    //     this.props.addEvaluation(this.state)
    //     history.push(`/batches/${student.batchId}/${student.id}`) 
    //     console.log(this.state)
    // }

    handleChange = (e) => {
        const {name, value} = e.target
    
        this.setState({
          [name]: value
        })
    }

    render () {
        const {student} = this.props
        
        return (
            <Paper className="outer-paper">
            <div className="card">
                <div className="left-card">
                    <img src={student.picture} alt="avatar" className="avatar"/>

                    <input type="date" name="date" id="date" 
                    value={this.state.date } 
                    onChange={ this.handleChange }/>

                    <form value={this.state.color} onChange={this.handleChange} id="color">
                    <input type="radio" value={"GREEN"} name="color"/><span>GREEN</span><br/>
                    <input type="radio" value={"YELLOW"} name="color"/><span>YELLOW</span><br/>
                    <input type="radio" value={"RED"} name="color" /><span>RED</span>    
                    </form>
                </div>

                <div className="right-card">
                    <div className="header-content">
                        <h2> {student.name} </h2>
                        <p><em>Batch #{student.batchId}</em></p>
                    </div>

                    <input type="text" name="remarks" className="input" id="remarks"
                    value={this.state.remarks || ''}  
                    onChange={this.handleChange}/>
                </div>
            </div>

            <div className="bottom-navigation">
                <Button
                size="small"
                variant="raised"
                > EDIT EVALUATION 
                </Button>

                <Button
                size="small"
                variant="raised"
                onClick={this.handleSave}
                > SAVE 
                </Button>

                <Button
                size="small"
                variant="raised"
                > SAVE & NEXT
                </Button>
            </div>
            </Paper>
        )
    }

}

const mapStateToProps = state => ({
    student: state.studentPage   
})

export default connect(mapStateToProps, {getStudentById, addEvaluation} )(StudentPage)
