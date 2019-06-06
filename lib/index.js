import React from 'react';

class GraphJSTag extends React.Component {
  componentDidMount(){
    if(window) {
      window.GraphJS.reMountRiotTags(this.props.tagName);
    }
  }
  render(){
    const {tagName, children, ...remainingProps} = this.props;
    const CustomTag = `${tagName}`;
    return (
      <CustomTag {...remainingProps}>
        {children && children}
      </CustomTag>
    );
  }
}

// Auth
const GraphJSAuth = (props) => (
  <GraphJSTag tagName="graphjs-auth" {...props}/>
);

// Auth: State
const GraphJSAuthState = (props) => (
  <GraphJSTag tagName="graphjs-auth-state" {...props}/>
);

// Auth: Login
const GraphJSAuthLogin = (props) => (
  <GraphJSTag tagName="graphjs-auth-login" {...props}/>
);

// Auth: Register
const GraphJSAuthRegister = (props) => (
  <GraphJSTag tagName="graphjs-auth-register" {...props}/>
);

// Auth: Reset
const GraphJSAuthReset = (props) => (
  <GraphJSTag tagName="graphjs-auth-reset" {...props}/>
);

// Forum
const GraphJSForum = (props) => (
  <GraphJSTag tagName="graphjs-forum" {...props}/>
);

// Forum: List
const GraphJSForumList = (props) => (
  <GraphJSTag tagName="graphjs-forum-list" {...props}/>
);

// Forum: Thread
const GraphJSForumThread = (props) => (
  <GraphJSTag tagName="graphjs-forum-thread" {...props}/>
);

// Forum: Composer
const GraphJSForumComposer = (props) => (
  <GraphJSTag tagName="graphjs-forum-composer" {...props}/>
);

// Messages
const GraphJSMessages = (props) => (
  <GraphJSTag tagName="graphjs-messages" {...props}/>
);

// Messages: Composer
const GraphJSMessagesComposer = (props) => (
  <GraphJSTag tagName="graphjs-messages-composer" {...props}/>
);

// Profile
const GraphJSProfile = (props) => (
  <GraphJSTag tagName="graphjs-profile" {...props}/>
);

// Profile: Card
const GraphJSProfileCard = (props) => (
  <GraphJSTag tagName="graphjs-profile-card" {...props}/>
);

// Profile: List
const GraphJSProfileList = (props) => (
  <GraphJSTag tagName="graphjs-profile-list" {...props}/>
);

// Group
const GraphJSGroup = (props) => (
  <GraphJSTag tagName="graphjs-group" {...props}/>
);

// Group: Card
const GraphJSGroupCard = (props) => (
  <GraphJSTag tagName="graphjs-group-card" {...props}/>
);

// Group: List
const GraphJSGroupList = (props) => (
  <GraphJSTag tagName="graphjs-group-list" {...props}/>
);

// Comments
const GraphJSComments = (props) => (
  <GraphJSTag tagName="graphjs-comments" {...props}/>
);

// Private Content
const GraphJSPrivateContent = (props) => (
  <GraphJSTag tagName="graphjs-private-content" {...props}>
    {props.placeholder === 'custom' ? props.children : ''}
  </GraphJSTag>
);

// Star: Button
const GraphJSStarButton = (props) => (
  <GraphJSTag tagName="graphjs-star-button" {...props}/>
);

// Star: List
const GraphJSStarList = (props) => (
  <GraphJSTag tagName="graphjs-star-list" {...props}/>
);


export {
  GraphJSAuth, 
  GraphJSAuthState, 
  GraphJSAuthRegister, 
  GraphJSAuthLogin, 
  GraphJSAuthReset,
  GraphJSForum, 
  GraphJSForumList, 
  GraphJSForumThread, 
  GraphJSForumComposer,
  GraphJSMessages, 
  GraphJSMessagesComposer,
  GraphJSProfile, 
  GraphJSProfileCard, 
  GraphJSProfileList,
  GraphJSGroup, 
  GraphJSGroupCard, 
  GraphJSGroupList,
  GraphJSComments, 
  GraphJSPrivateContent, 
  GraphJSStarButton, 
  GraphJSStarList
};
