//src/containers/ClassView/StudentList.jsx
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { getStudents, deleteStudent } from '../../actions/student'
import CreateStudentCard from './AddStudent'

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
    }

    handleDelete = (event ) => {
        this.props.deleteStudent(event.target.value)
        console.log(event.target.value)
    }
    
    renderStudentCard = (student) => {
        const {history} = this.props
        const batchNb =  Number((window.location.href).split('/').pop())
        const studentId = String(student.id)
        
        if ( student.batchId === batchNb) {
            return (
                <Card key={student.id} className="student-card">
                    <CardContent className="card-content">
                        <Avatar src={student.picture} />
                        <Typography style= { {fontSize : 18, paddingLeft: 25 }}>{student.name}</Typography>
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
                        value={studentId}
                        onClick={this.handleDelete.bind(this)}
                        > DELETE 
                        </Button> 
                        
                    </CardActions>
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
    
                    <Button
                    size="small"
                    variant="raised"
                    className='return-button'
                    > ASK A QUESTION 
                    </Button>
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
    students: state.fetchStudents === null ? null : Object.values(state.fetchStudents).sort((a, b) => b.date - a.date)
})

export default connect(mapStateToProps, {getStudents, deleteStudent})(StudentList)
