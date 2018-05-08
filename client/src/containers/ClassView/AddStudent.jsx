//src/containers/ClassView/AddStudent.jsx
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {addStudent} from '../../actions/student'

//Styling 
import Button from 'material-ui/Button'
import './ClassView.css'

class CreateStudentCard extends PureComponent {

    state = {
        batchId: Number((window.location.href).split('/').pop())
    }

	handleSubmit = () => {
        this.props.addStudent(this.state)
        console.log(this.state)
    }
    
    handleChange = (event) => {
        const {name, value} = event.target
    
        this.setState({
          [name]: value
        })
    }

    render () {

        return (
        <form className="student-form">
            <div>
                <label className="label-field">First Name/ Last Name </label>
                <input type="text" name="name" className="input-field"
                id="name" 
                value={this.state.name } 
                onChange={ this.handleChange }/>
            </div>

            <div>
                <label className="label-field">Picture (url) : </label>
                <input type="url" name="picture" className="input-field"
                id="picurl" 
                value={this.state.picture } 
                onChange={ this.handleChange }/>
            </div>
            
            <Button
            color="primary"
            variant="raised"
            onClick={this.handleSubmit}
            className="add-student"
            > Add Student
            </Button>
        </form>
        )
    }
}

export default connect(null, {addStudent})(CreateStudentCard)