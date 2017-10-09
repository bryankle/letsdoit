import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import Loadr from 'randloadr'; // Random loading messages
const instance = new Loadr();

const Loading = () => (
  <div>

  {/* Use API to fetch generated loading messages */}
     {/* https://github.com/DimitarChristoff/loadr */}
      <Dimmer active inverted>
        <Loader inverted>{instance.get()}</Loader>
      </Dimmer>
  </div>
)

export default Loading;
