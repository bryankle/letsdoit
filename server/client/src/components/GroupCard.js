import React, { Component } from 'react';
import { Grid, Card, Icon } from 'semantic-ui-react';


class GroupCard extends Component {



	render() {
		return(
			<Card fluid>

			    <Card.Content>
			      <Card.Header>
			        {this.props.groupName}
			      </Card.Header>
			      <Card.Meta>
			        <span className='date'>
			          Created by: {this.props.groupCreator}
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