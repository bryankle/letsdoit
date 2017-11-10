import React, { Component } from 'react';
import { Grid, Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class GroupCard extends Component {



	render() {
		const { groupName, groupCreator, groupId, deleteGroup } = this.props;

		return(
			<Card fluid>

			    <Card.Content>
			      <Card.Header>
			        <Link to={`/group/${groupId}`}>{groupName}</Link>
				<Icon name='close' onClick={() => deleteGroup(groupId)}/>
			      </Card.Header>
			      <Card.Meta>
			        <span className='date'>
			          Created by: {groupCreator}
			        </span>
			      </Card.Meta>
			      <Card.Description>
			       	This is a group description
			      </Card.Description>
			    </Card.Content>
			    <Card.Content extra>
			      <a>
			        <Icon name='user' />
			        5 members
			      </a>
			    </Card.Content>
	  		</Card>
		)
	}
}

export default GroupCard;