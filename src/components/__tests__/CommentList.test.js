import React from 'react';
import { mount, unmount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
let store;
const mockStore = configureMockStore();
let spy;
let propFunctionMock;

beforeEach((() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2', 'Comment 3'],
  };
  store = mockStore(initialState);
  // METHOD 1
  wrapped = mount(
    <Root>
      <CommentList store={store} />
    </Root>
  );

  // propFunctionMock = jest.fn(() => console.log('WAS CALLED!'));
  // spy = jest.fn(() => {
  //   propFunctionMock();
  // });

  // wrapped = mount(shallow(shallow(shallow(mount(
  //   <Root initialState={initialState}>
  //     <CommentList propFunction={propFunctionMock} store={store} />
  //   </Root>
  // ).get(0)).get(0)).get(0)).get(0));

  // const instance = wrapped.instance();
  // console.log('INSTANCE', wrapped.instance());
  // jest.spyOn(instance, 'testi2').mockImplementation(spy);

  // console.log('YES', wrapped.instance());
}));
// it.only('stuffs', () => {
//   // console.log('DEBUG', wrapped.debug());
//   wrapped.instance().testi2();
//   expect(propFunctionMock).toHaveBeenCalled();
// });
// it.only('stuffs', () => {
//   // const instance = wrapped.instance();
//   // jest.spyOn(instance, 'testi');

// });

it('creates one LI per comment', () => {
  // console.log(wrapped.find('li').length);
  console.log(wrapped.debug());
  expect(wrapped.find('li').length).toEqual(3);
});

it('shows the text per each comment', () => {
  // console.log(wrapped.find('li').length);
  expect(wrapped.render().text()).toContain('Comment 1');
  expect(wrapped.render().text()).toContain('Comment 2');
  expect(wrapped.render().text()).toContain('Comment 3');
});