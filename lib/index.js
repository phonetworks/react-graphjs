import React from 'react';

// Auth
const GraphJSAuth = (props) => (
  <graphjs-auth {...props}></graphjs-auth>
);

// Auth: State
const GraphJSAuthState = (props) => (
  <graphjs-auth-state {...props}></graphjs-auth-state>
);

// Auth: Login
const GraphJSAuthLogin = (props) => (
  <graphjs-auth-login {...props}></graphjs-auth-login>
);

// Auth: Register
const GraphJSAuthRegister = (props) => (
  <graphjs-auth-register {...props}></graphjs-auth-register>
);

// Auth: Reset
const GraphJSAuthReset = (props) => (
  <graphjs-auth-reset {...props}></graphjs-auth-reset>
);

// Forum
const GraphJSForum = (props) => (
  <graphjs-forum {...props}></graphjs-forum>
);

// Forum: List
const GraphJSForumList = (props) => (
  <graphjs-forum-list {...props}></graphjs-forum-list>
);

// Forum: Thread
const GraphJSForumThread = (props) => (
  <graphjs-forum-thread {...props}></graphjs-forum-thread>
);

// Forum: Composer
const GraphJSForumComposer = (props) => (
  <graphjs-forum-composer {...props}></graphjs-forum-composer>
);

// Messages
const GraphJSMessages = (props) => (
  <graphjs-messages {...props}></graphjs-messages>
);

// Messages: Composer
const GraphJSMessagesComposer = (props) => (
  <graphjs-messages-composer {...props}></graphjs-messages-composer>
);

// Profile
const GraphJSProfile = (props) => (
  <graphjs-profile {...props}></graphjs-profile>
);

// Profile: Card
const GraphJSProfileCard = (props) => (
  <graphjs-profile-card {...props}></graphjs-profile-card>
);

// Profile: List
const GraphJSProfileList = (props) => (
  <graphjs-profile-list {...props}></graphjs-profile-list>
);

// Group
const GraphJSGroup = (props) => (
  <graphjs-group {...props}></graphjs-group>
);

// Group: Card
const GraphJSGroupCard = (props) => (
  <graphjs-group-card {...props}></graphjs-group-card>
);

// Group: List
const GraphJSGroupList = (props) => (
  <graphjs-group-list {...props}></graphjs-group-list>
);

// Comments
const GraphJSComments = (props) => (
  <graphjs-comments {...props}></graphjs-comments>
);

// Private Content
const GraphJSPrivateContent = (props) => (
  <graphjs-private-content {...props}>
    {props.placeholder === 'custom' ? props.children : ''}
  </graphjs-private-content>
);

// Star: Button
const GraphJSStarButton = (props) => (
  <graphjs-star-button {...props}></graphjs-star-button>
);

// Star: List
const GraphJSStarList = (props) => (
  <graphjs-star-list {...props}></graphjs-star-list>
);

export default {
  GraphJSAuth, GraphJSAuthState, GraphJSAuthRegister, GraphJSAuthLogin, GraphJSAuthReset,
  GraphJSForum, GraphJSForumList, GraphJSForumThread, GraphJSForumComposer,
  GraphJSMessages, GraphJSMessagesComposer,
  GraphJSProfile, GraphJSProfileCard, GraphJSProfileList,
  GraphJSGroup, GraphJSGroupCard, GraphJSGroupList,
  GraphJSComments, GraphJSPrivateContent, GraphJSStarButton, GraphJSStarList
}