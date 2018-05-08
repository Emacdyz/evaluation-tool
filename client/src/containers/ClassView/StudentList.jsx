//src/containers/ClassView/StudentList.jsx
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { getStudents } from '../../actions/student'
import CreateStudentCard from './AddStudent'

//Styling
import Paper from 'material-ui/Paper'
import Card, {CardActions, CardHeader, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import './ClassView.css'

class StudentList extends PureComponent {

    componentWillMount() {
        if (this.props.students === null) 
        this.props.getStudents()
        console.log(this.props.students)
    }

    renderStudentCard = (student) => {
        const {history} = this.props
        console.log('hallo', student)
            return (
                <Card key={student.id} className="student-card">
                    <CardContent>
                        <CardHeader
                        title={student.name}
                        subtitle="GREEN"
                        avatar={student.picture}
                        />
                    </CardContent>
                        
                    <CardActions>
                        <Button
                        size="small"
                        variant="raised"
                        onClick={() => history.push(`student/${student.id}`)}
                        > EVALUATE 
                        </Button> 
        
                        <Button
                        size="small"
                        variant="raised"
                        > DELETE 
                        </Button> 
                        
                    </CardActions>
                </Card>
            )
    }

    render () {
        const batchNb = (window.location.href).split('/').pop()
        const {history, students} = this.props
        console.log(students, this.props, students instanceof Array)

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

const mapStateToProps = state => {
    console.log('map state to props')
    return {
        students: state.fetchStudents === null ?
        null : Object.values(state.fetchStudents)
    }  
      
}

export default connect(mapStateToProps, {getStudents})(StudentList)
