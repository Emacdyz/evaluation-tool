//src/containers/StudentView/StudentPage.jsx
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getStudentById} from '../../actions/student'

//Styling
import Paper from 'material-ui/Paper'
// import { Typography } from 'material-ui'
import Button from 'material-ui/Button'
import './StudentPage.css'

class StudentPage extends PureComponent {
    
    componentWillMount() {
        const studentId = Number((window.location.href).split('/').pop())
        this.props.getStudentById(studentId)
        console.log(studentId)
    }

    render () {
        const {history} = this.props
        return (
            <Paper className="outer-paper">

                <Button
                size="small"
                variant="raised"
                onClick={() => history.push(`/batches`)}
                > SAVE 
                </Button>
                <Button
                size="small"
                variant="raised"
                > SAVE & NEXT
                </Button>
            
            </Paper>
        )
    }

}

const mapStateToProps = state => ({
    students: state.fetchStudents === null ?
    null : Object.values(state.fetchStudents)    
})

export default connect(mapStateToProps, {getStudentById} )(StudentPage)
