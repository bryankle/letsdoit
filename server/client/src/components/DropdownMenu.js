import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'

const DropdownMenu = () => (
  <Dropdown text='Filter Tags' floating labeled button icon='filter' className='icon'>
    <Dropdown.Menu>
      <Dropdown.Header icon='tags' content='Filter by tag' />
      <Dropdown.Divider />
      <Dropdown.Item description='2 new' text='Important' />
      <Dropdown.Item description='10 new' text='Hopper' />
      <Dropdown.Item description='5 new' text='Discussion' />
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownMenu;