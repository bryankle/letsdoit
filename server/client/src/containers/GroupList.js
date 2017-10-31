import React, { Component } from 'react';
import { Grid, Card, Image, Icon } from 'semantic-ui-react';
import CreateGroup from './CreateGroupModal';
import GroupCard from '../components/GroupCard';

class GroupList extends Component {
	constructor(props) {
		super(props)
	}


	render() {



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

export default GroupList;