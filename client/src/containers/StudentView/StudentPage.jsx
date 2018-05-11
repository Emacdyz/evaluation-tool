//src/containers/StudentView/StudentPage.jsx
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getStudentById} from '../../actions/student'
import {addEvaluation, editEvaluation, getEvaluations} from '../../actions/evaluation'

//Styling
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import './StudentPage.css'
import { Typography } from 'material-ui';

class StudentPage extends PureComponent {
    
    state = {
        studentId: Number((window.location.href).split('/').pop()),
        remarks: '',
        questionAsked: false,
        date: new Date()
    }
    
    componentWillMount() {
        const studentId = Number((window.location.href).split('/').pop()) 
        this.props.getStudentById(studentId)
        this.props.getEvaluations()
    }

    handleSave = () => {
        const {history, student} = this.props

        this.props.addEvaluation(this.state)
        history.push(`/batches/${student.batchId}`) 
    }

    handleEdit = () => {
        const {student} = this.props
        this.props.editEvaluation(this.state, student.id)
    }

    handleChange = (e) => {
        const {name, value} = e.target
    
        this.setState({
          [name]: value
        })
    }

    renderEvaluation = (evaluation) => {
        const {student} = this.props

        if (evaluation.studentId === student.id) {
            return (
                <Typography className="evaluation"> 
                {` ${evaluation.color} (${(evaluation.date).slice(0, 10)})`} 
                </Typography>
            )
        } 
    }

    render () {
        const {student, evaluations} = this.props

        if (evaluations === null) return null
        
        return (
            <Paper className="outer-paper">
            <div className="card">
                <div className="left-card">
                    <img src={student.picture} alt="avatar" className="avatar"/>

                    <input type="date" name="date" id="date" 
                    value={this.state.date } 
                    onChange={ this.handleChange }/>

                    <form value={this.state.color} onChange={this.handleChange} id="color">
                    <input type="radio" value={"GREEN"} name="color" className="radio"/><span>GREEN</span><br/>
                    <input type="radio" value={"YELLOW"} name="color" className="radio"/><span>YELLOW</span><br/>
                    <input type="radio" value={"RED"} name="color" className="radio" /><span>RED</span>    
                    </form>
                </div>

                <div className="right-card">
                    <div className="header-content">
                        <h2> {student.name} </h2>
                        <p><em>Batch #{student.batchId}</em></p>

                        {evaluations.map(evaluation => this.renderEvaluation(evaluation))}
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
                onClick={this.handleEdit}
                > EDIT & SAVE
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
    student: state.studentPage, 
    evaluations: state.fetchEvaluations === null ?
    null : Object.values(state.fetchEvaluations).sort((a, b) => b.date - a.date)   
})

export default connect(mapStateToProps, {getStudentById, addEvaluation, editEvaluation, getEvaluations} )(StudentPage)
