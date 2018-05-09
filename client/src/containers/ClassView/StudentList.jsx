//src/containers/ClassView/StudentList.jsx
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { getStudents } from '../../actions/student'
import CreateStudentCard from './AddStudent'

//Styling
import Paper from 'material-ui/Paper'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import Avatar from 'material-ui/Avatar'
import './ClassView.css'
import { Typography } from 'material-ui';

class StudentList extends PureComponent {

    componentWillMount() {
        if (this.props.students === null) 
        this.props.getStudents()
    }
    

    renderStudentCard = (student) => {
        const {history} = this.props

            return (
                <Card key={student.id} className="student-card">
                    <CardContent>
                        <Typography>{student.name}</Typography>
                        <Avatar src={student.picture} />
                    </CardContent>
                        
                    <CardActions>
                        <Button
                        size="small"
                        variant="raised"
                        onClick={() => history.push(`${student.batchId}/student/${student.name}`)}
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
    return {
        students: state.fetchStudents === null ?
        null : Object.values(state.fetchStudents)
    }     
}

export default connect(mapStateToProps, {getStudents})(StudentList)
