import { connect } from 'react-redux';
import Comment from './Comment';
import { getThumbUp, getThumbDown, removeComment } from './actions';
import './Comment.css';

const mapDispatchToProps = dispatch => ({
  voteUp: (id) => dispatch(getThumbUp(id)),
  voteDown: (id) => dispatch(getThumbDown(id)),
  deleteComment: (id) => dispatch(removeComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);