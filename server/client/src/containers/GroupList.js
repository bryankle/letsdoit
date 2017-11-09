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
		console.log('running loadGroup')
		this.props.loadGroup(1);
		// this.props.addToGroup(1, 1)
		this.renderGroups = this.renderGroups.bind(this);
	}

	renderGroups() {
		// Render groups once props have been received
		const groups = this.props.groups;
			return this.props.groups.map(group => {
				let { name, creator, id } = group;
				console.log('GROUP MAP')
				console.log('id', id)
				return (
					<GroupCard groupName={name} groupCreator={creator} groupId={id} deleteGroup={this.props.deleteGroup}/>
				)
			})
	}

	render() {
		console.log('GroupList')
		console.log(this.props)


		return(
			<div>

			<CreateGroup />

			<Grid style={{margin: '0 auto', paddingLeft: '3em', paddingTop: '1em', width: '80%'}}>
 
			<Card.Group itemsPerRow={3}>
				{this.props.groups.length ? this.renderGroups() : ''}
				
			</Card.Group>

		</Grid>
		</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		groups: state.group
	}
}

export default connect(mapStateToProps, actions)(GroupList)