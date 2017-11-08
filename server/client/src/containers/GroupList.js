import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Grid, Card, Image, Icon } from 'semantic-ui-react';
import CreateGroup from './CreateGroupModal';
import GroupCard from '../components/GroupCard';

class GroupList extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		console.log('componentDidMount')
	}

	render() {
		console.log('GroupList')
		console.log(this.props)


		return(
			<div>

			<CreateGroup />

			<Grid style={{margin: '0 auto', paddingLeft: '3em', paddingTop: '1em', width: '80%'}}>
 
			<Card.Group itemsPerRow={4}>

				<GroupCard />
				<GroupCard />
				<GroupCard />
				<GroupCard />
				<GroupCard />
			</Card.Group>

		</Grid>
		</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		group: state.group
	}
}

export default connect(mapStateToProps, actions)(GroupList)