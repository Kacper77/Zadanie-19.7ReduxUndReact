import { connect } from 'react-redux';
import Comment from './Comment';
import { thumbUpComment } from './actions';
import { thumbDownComment } from './actions';
import { removeComment } from './actions';
import { resetComment } from './actions';
import { editComment } from './actions';

const mapDispatchToProps = dispatch => ({
    thumbUpComment: (id) => dispatch(thumbUpComment(id)),
    thumbDownComment: (id) => dispatch(thumbDownComment(id)),
    removeComment: (id) => dispatch(removeComment(id)),
    resetComment: (id) => dispatch(resetComment(id)),
    editComment: (id, text) => dispatch(editComment(id, text))
});

export default connect(null, mapDispatchToProps)(Comment);