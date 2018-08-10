import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
 });
it('shows Comment Box', () => { 
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // expect(div.innerHTML).toContain('Comment Box!');
  // ReactDOM.unmountComponentAtNode(div);
  expect(wrapped.find(CommentBox).length).toEqual(1);

});

it('shows Comment List', () => { 
  expect(wrapped.find(CommentList).length).toEqual(1);

});