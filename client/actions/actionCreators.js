import C from './actionTypes';
//increment
export const increment = (index) => ({
  type: C.INCREMENT_LIKES,
  index,

});
//add comment
export const addComment = (postId, author, comment) => ({
  type: C.ADD_COMMENT,
  postId,
  author,
  comment,
});
//remove comment

export const removeComment = (postId, i) => ({
  type: C.REMOVE_COMMENT,
  i,
  postId,
});
