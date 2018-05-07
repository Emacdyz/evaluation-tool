//src/containers/HomePage/BatchesList.jsx 
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getBatches} from '../../actions/batches'
import {getUsers} from '../../actions/users'

// Styling
import Paper from 'material-ui/Paper'
import Card, {CardActions, CardHeader, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import './BatchesList.css'

class BatchesList extends PureComponent {

    componentWillMount() {
        if (this.props.authenticated) {
            if (this.props.batches === null) this.props.getBatches()
            if (this.props.users === null) this.props.getUsers()
        }
    }

    renderBatch = (batch) => {
        const {history} = this.props
        
        return (
        <Card key={batch.id} className="batch-card">
            <CardContent>
                <CardHeader title={`Batch # ${batch.id}`}/>
            </CardContent>
                
            <CardActions>
                <Button
                size="small"
                variant="raised"
                onClick={() => history.push(`/batches/${batch.id}`)}
                > EDIT 
                </Button> 
                
            </CardActions>
        </Card>)
    }

    render() {
        const {batches, users, authenticated, addBatch} = this.props

        if (!authenticated) return (
			<Redirect to="/login" />
        )

        if (batches === null || users === null) return null
        
        return (
        <Paper className="outer-paper">
            <Button
            color="primary"
            variant="raised"
            onClick={addBatch}
            className="add-batch"
            > Add Batch
            </Button>

            <div>
                {batches.map(batch => this.renderBatch(batch))}
            </div>
        </Paper>
        )
    }
}

const mapStateToProps = state => ({
    authenticated: state.currentUser !== null,
    users: state.users === null ? null : state.users,
    batches: state.batches === null ?
    null : Object.values(state.batches).sort((a, b) => a.id - b.id)
})

export default connect(mapStateToProps, {getBatches, getUsers})(BatchesList)