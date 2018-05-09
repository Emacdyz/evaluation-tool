//src/containers/StudentView/StudentPage.jsx
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getStudentById} from '../../actions/student'

//Styling
import Paper from 'material-ui/Paper'
import Radio, { RadioGroup } from 'material-ui/Radio'
import { FormControlLabel} from 'material-ui/Form';
// import { Typography } from 'material-ui'
import Button from 'material-ui/Button'
import './StudentPage.css'

class StudentPage extends PureComponent {
    
    componentWillMount() {
        const studentId = Number((window.location.href).split('/').pop())
        this.props.getStudentById(studentId)
    }

    handleRadio = (e) => {
        const {name, value} = e.target
    
        this.setState({
          [name]: value
        })
    }

    render () {
        const {history, student} = this.props
        
        return (
            <Paper className="outer-paper">
            <div className="card">
                <div className="left-card">
                    <img src={student.picture} alt="avatar" className="avatar"/>

                <form>
                <input type="radio" value="GREEN" name="color" /><span>GREEN</span><br/>
                <input type="radio" value="YELLOW" name="color"/><span>YELLOW</span><br/>
                <input type="radio" value="RED" name="color" /><span>RED</span>    
                </form>
            </div>

            <div className="right-card">
                <div className="header-content">
                <h2> {student.name} </h2>
                <p><em>Batch #{student.batchId}</em></p>
                </div>
                <input type="text" className="input"/>
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
                onClick={() => history.push(`/batches/${student.batchId}`)}
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
    // students: state.fetchStudents === null ?
    // null : Object.values(state.fetchStudents)    
})

export default connect(mapStateToProps, {getStudentById} )(StudentPage)
