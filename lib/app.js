// React
import React from 'react';
import {render} from 'react-dom';

// Components
import {
  GraphJSAuth, GraphJSAuthState, GraphJSAuthRegister, GraphJSAuthLogin, GraphJSAuthReset,
  GraphJSForum, GraphJSForumList, GraphJSForumThread, GraphJSForumComposer,
  GraphJSMessages, GraphJSMessagesComposer,
  GraphJSProfile, GraphJSProfileCard, GraphJSProfileList,
  GraphJSGroup, GraphJSGroupCard, GraphJSGroupList,
  GraphJSComments, GraphJSPrivateContent, GraphJSStarButton, GraphJSStarList
} from './index.js';

// Container for components-to-be-tested
const App = () => (
  <section id="app">
    <h1>GraphJS for React</h1>
    <div>
      <h2>Auth</h2>
      <GraphJSAuth
        type="standalone"
        theme="default"
        position="topleft"
      ></GraphJSAuth>
    </div>
    <div>
      <h2>Auth: State</h2>
      <GraphJSAuthState
        type="standalone"
        theme="default"
      ></GraphJSAuthState>
    </div>
    <div>
      <h2>Auth: Register</h2>
      <GraphJSAuthRegister></GraphJSAuthRegister>
    </div>
    <div>
      <h2>Auth: Login</h2>
      <GraphJSAuthLogin></GraphJSAuthLogin>
    </div>
    <div>
      <h2>Auth: Reset</h2>
      <GraphJSAuthReset></GraphJSAuthReset>
    </div>
    <div>
      <h2>Forum</h2>
      <GraphJSForum
        access="public"
        max-width="800px"
      ></GraphJSForum>
    </div>
    <div>
      <h2>Forum: List</h2>
      <GraphJSForumList
        access="public"
        max-width="800px"
      ></GraphJSForumList>
    </div>
    <div>
      <h2>Forum: Thread</h2>
      <GraphJSForumThread
        id="50a5a634eed9d6dad5f64daa3bef6587"
        access="public"
        max-width="800px"
      ></GraphJSForumThread>
    </div>
    <div>
      <h2>Forum: Composer</h2>
      <GraphJSForumComposer
        max-width="800px"
      ></GraphJSForumComposer>
    </div>
    <div>
      <h2>Messages</h2>
      <GraphJSMessages
        max-width="800px"
      ></GraphJSMessages>
    </div>
    <div>
      <h2>Messages: Composer</h2>
      <GraphJSMessagesComposer
        to="48760696099368953dd71a90b727acba"
        anonymity="off"
      ></GraphJSMessagesComposer>
    </div>
    <div>
      <h2>Profile</h2>
      <GraphJSProfile
        id="48760696099368953dd71a90b727acba"
      ></GraphJSProfile>
    </div>
    <div>
      <h2>Profile: Card</h2>
      <GraphJSProfileCard
        id="48760696099368953dd71a90b727acba"
      ></GraphJSProfileCard>
    </div>
    <div>
      <h2>Profile: List</h2>
      <GraphJSProfileList
        access="public"
      ></GraphJSProfileList>
    </div>
    <div>
      <h2>Group</h2>
      <GraphJSGroup
        id="33365d758357b6e724c360272ebf8895"
      ></GraphJSGroup>
    </div>
    <div>
      <h2>Group: Card</h2>
      <GraphJSGroupCard
        id="33365d758357b6e724c360272ebf8895"
      ></GraphJSGroupCard>
    </div>
    <div>
      <h2>Group: List</h2>
      <GraphJSGroupList
        access="public"
      ></GraphJSGroupList>
    </div>
    <div>
      <h2>Comments</h2>
      <GraphJSComments
        max-width="800px"
      ></GraphJSComments>
    </div>
    <div>
      <h2>Private Content</h2>
      <GraphJSPrivateContent
        id="585d867a5a7304faafc434a7479e3250"
        placeholder="custom"
        max-width="600px"
        max-height="400px"
      ></GraphJSPrivateContent>
    </div>
    <div>
      <h2>Star: Button</h2>
      <GraphJSStarButton
        type="default"
      ></GraphJSStarButton>
    </div>
    <div>
      <h2>Star: List</h2>
      <GraphJSStarList
        scope="global"
        type="default"
        max-width="800px"
      ></GraphJSStarList>
    </div>
  </section>
);

render(
  <App />,
  document.getElementById('root')
);