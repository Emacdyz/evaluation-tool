//src/containers/HomePage/BatchesList.jsx 
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getBatches} from '../../actions/batches'
import {getUsers} from '../../actions/users'
import CreateBatch from './CreateBatch'

// Styling
import Paper from 'material-ui/Paper'
import Card, {CardActions, CardHeader, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
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
                <CardHeader title={`Batch # ${batch.batchNb}`}/>
                <Typography>Start date: {batch.startDate}</Typography>
                <Typography>End date: {batch.endDate}</Typography>
            </CardContent>
                
            <CardActions>
                <Button
                size="small"
                variant="raised"
                onClick={() => history.push(`/batches/${batch.batchNb}`)}
                > EDIT 
                </Button> 
                
            </CardActions>
        </Card>)
    }

    render() {
        const {batches, users, authenticated} = this.props
        console.log(batches)

        if (!authenticated) return (
			<Redirect to="/login" />
        )

        if (batches === null || users === null) return null
        
        return (
        <Paper className="outer-paper">
            
            <CreateBatch/>

            {batches.map(batch => this.renderBatch(batch))}
        </Paper>
        )
    }
}

const mapStateToProps = state => ({
    authenticated: state.currentUser !== null,
    users: state.users === null ? null : state.users,
    batches: state.fetchBatches === null ?
    null : Object.values(state.fetchBatches).sort((a, b) => a.batchNb - b.batchNb)
})

export default connect(mapStateToProps, {getBatches, getUsers})(BatchesList)