import {List, Map} from 'immutable';
import {expect} from 'chai';

import {addContent, updateContent} from '../src/core';

describe('application logic', () => {

  describe('addContent', () => {

    it('adds the given content to the empty state', () => {
      const state = Map();
      const content = ['Content 1', 'Content 2'];
      const nextState = addContent(state, content);
      expect(nextState).to.equal(Map({
        contentList: List.of('Content 1', 'Content 2')
      }));
    });

  });

  describe('updateContent', () => {

    it('replace an old content by new content', () => {
      const state = Map({
        contentList: List.of('Old Content1', 'Untouched Content')
      });
      const oldContent = ['Old Content1'];
      const newContent = ['New Content1'];
      const nextState = updateContent(state, newContent, oldContent);
      expect(nextState).to.equal(Map({
        contentList: List.of('New Content', 'Untouched Content')
      }));
    });

  });

});
