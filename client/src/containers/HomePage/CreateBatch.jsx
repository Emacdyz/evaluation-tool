//src/containers/Homepage/CreateBtach.js
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {addBatch} from '../../actions/batches'

//Styling 
import Button from 'material-ui/Button'
import './BatchesList.css'

class CreateBatch extends PureComponent {

    state = {}

	handleSubmit = () => {
        this.props.addBatch(this.state)
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
        <form className="batch-form">
            <div>
                <label className="label-field">Batch Number : </label>
                <input type="batchNb" name="batchNb" className="input-field"
                id="batchNb" 
                value={this.state.batchNb } 
                onChange={ this.handleChange }/>
            </div>

            <div>
                <label className="label-field">Start Date: </label>
                <input type="date" name="startDate" className="input-field"
                id="startDate" 
                value={this.state.startDate } 
                onChange={ this.handleChange }/>
            </div>

            <div>
                <label className="label-field">End Date: </label>
                <input type="date" name="endDate" className="input-field"
                id="endDate" 
                value={this.state.endDate} 
                onChange={ this.handleChange }/>
            </div>
            
            <Button
            color="primary"
            variant="raised"
            onClick={this.handleSubmit}
            className="add-batch"
            > Add Batch
            </Button>
        </form>
        )
    }
}

export default connect(null, {addBatch})(CreateBatch)