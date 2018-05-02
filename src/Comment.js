import React from 'react';

const Comment = ({ text, votes, id, thumbUpComment, thumbDownComment, removeComment, editComment, resetComment }) =>
    <li>
    {text} <span>votes: {votes}</span> 
    <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button onClick={() => thumbDownComment(id)}>Thumb down</button>
    <button onClick={() => removeComment(id)}>Remove</button>
    <button onClick={() => editComment(id)}>Edit</button>
    <button onClick={() => resetComment(id)}>Reset</button>
  </li>;

export default Comment;