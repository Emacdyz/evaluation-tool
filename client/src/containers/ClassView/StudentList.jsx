//src/containers/ClassView/StudentList.jsx
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { getStudents, deleteStudent } from '../../actions/student'
import {getEvaluations} from '../../actions/evaluation'
import CreateStudentCard from './AddStudent'
import AskQuestion from './AskQuestion'

//Styling
import Paper from 'material-ui/Paper'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import { Typography } from 'material-ui'
import Button from 'material-ui/Button'
import Avatar from 'material-ui/Avatar'
import './ClassView.css'

class StudentList extends PureComponent {

    componentWillMount() {
        if (this.props.students === null) this.props.getStudents()
        if (this.props.evaluations === null) this.props.getEvaluations()
    }

    handleDelete = (event ) => {
        this.props.deleteStudent(event.target.value)
        console.log(event.target.value)
    }
    
    renderStudentCard = (student) => {
        const {history, evaluations} = this.props
        const batchNb =  Number((window.location.href).split('/').pop())

        // const evaluation = evaluations.find(e => e.studentId === student.id);
        // console.log(evaluation.color, student.name);
        
        if ( student.batchId === batchNb) {
            return (
                <Card key={student.id} className="student-card">
                    <CardContent className="card-content">
                        <Avatar src={student.picture} />
                        <Typography style= { {fontSize : 18, paddingLeft: 25 }}>{student.name}</Typography><br/>
                        {/* <Typography>{evaluation.color}</Typography> */}
                    </CardContent>
                        
                    <CardActions>
                        <Button
                        size="small"
                        variant="raised"
                        onClick={() => history.push(`${student.batchId}/student/${student.id}`)}
                        > EVALUATE 
                        </Button> 
        
                        <Button
                        size="small"
                        variant="raised"
                        value={student.id}
                        onClick={this.handleDelete}
                        > DELETE 
                        </Button> 
                        
                    </CardActions>
                    {/* {evaluation !== undefined} */}
                    
               </Card>
            )
        }   
    }

    render () {
        const batchNb = (window.location.href).split('/').pop()
        const {history, students} = this.props

        if (students === null) return null

        return (
            <Paper className="outer-paper">
                <div className="topnav">
                    <Button
                    size="small"
                    variant="raised"
                    onClick={() => history.push(`/batches`)}
                    className='return-button'
                    > GO BACK 
                    </Button>
    
                    <AskQuestion/>
                </div>
    
                <div>
                    <h2>Batch # {batchNb} </h2>
                </div>
    
                <CreateStudentCard/>
                
                {students.map(student => this.renderStudentCard(student))}
               
            </Paper> 
        )
    }
}

const mapStateToProps = state => ({
    students: state.fetchStudents === null ? null : Object.values(state.fetchStudents),
    evaluations: state.fetchEvaluations  === null ? null : Object.values(state.fetchEvaluations).sort((a, b) => b.date - a.date) 
})

export default connect(mapStateToProps, {getStudents, deleteStudent, getEvaluations})(StudentList)
