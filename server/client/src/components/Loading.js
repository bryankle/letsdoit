import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const Loading = () => (
  <div>

  {/* Use API to fetch generated loading messages */}
     {/* https://github.com/DimitarChristoff/loadr */}
      <Dimmer active inverted>
        <Loader inverted>Wrangling tasks...</Loader>
      </Dimmer>
  </div>
)

export default Loading;
