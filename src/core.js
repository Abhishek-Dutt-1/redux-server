import {List} from 'immutable';

/*
 * Add a new Content to the contentList
 */
export function addContent(state, content) {
  // following set should be add
  return state.set('contentList', List(content));
}

/*
 * Updates old content by new content
 * TODO:: Figure out some Id based updation
 */
export function updateContent(state, newContent, oldContent) {

  var newContent_tmp = newContent

  return state.updateIn(['contentList', state.get("contentList").findIndex(() => { x => x == oldContent}, false) - 1 ], () => { newContent_tmp });

}
