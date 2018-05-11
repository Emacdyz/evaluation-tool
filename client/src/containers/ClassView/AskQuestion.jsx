//src/containers/ClassView/AskQuestion.jsx
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';

class AskQuestion extends PureComponent {

    getWeightColor = (color, weight) => {
        let total_weight = weight.reduce(function(total, num) {
            return total + num
        });
        
        let random_num = Math.random(0, total_weight);
        let weight_sum = 0;
        
        for (var i = 0; i < color.length; i++) {
            weight_sum += weight[i];
            weight_sum = +weight_sum.toFixed(2);
         
        if (random_num <= weight_sum) {
            return color[i];
        }
        // weight_sum = 0 + 0.53; Check if random_num <= 0.53
        // weight_sum = 0.53 + 0.28; Check if random_num <= 0.81
        // weight_sum = 0.81 + 0.19; Check if random_num <= 1
        }
    }

    pickRandomStudent = (event) => {
        event.preventDefault()
        const {students, evaluations} = this.props

        const colors = ['RED', 'YELLOW', 'GREEN']
        const weight = [0.53, 0.28, 0.19]
        
        const randomColor = this.getWeightColor(colors, weight)

        let selectedStudents = evaluations.filter(evaluation => evaluation.color === randomColor)

        let studentToTest = selectedStudents[Math.floor(Math.random()*selectedStudents.length)]
        
        let finalstudent = students.find(s => s.id === studentToTest.studentId)

        alert(`You should ask a question to: ${finalstudent.name}`)
        
    }

    render () {
        return (
            <Button
            size="small"
            variant="raised"
            className='return-button'
            onClick={this.pickRandomStudent}
            > ASK A QUESTION 
            </Button>
        )
    }
}

const mapStateToProps = (state) => ({
    students: state.fetchStudents === null ? null : Object.values(state.fetchStudents),
    evaluations: state.fetchEvaluations === null ? null : Object.values(state.fetchEvaluations)
})

export default connect(mapStateToProps) (AskQuestion);




