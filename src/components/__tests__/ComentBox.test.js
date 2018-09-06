import React from 'react';
import { mount, unmount, shallow } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';
import configureMockStore from 'redux-mock-store';

let wrapped;
let propFunctionMock;
let spy;
const mockStore = configureMockStore();
let store;

beforeEach(() => { 
  store = mockStore({});

  // propFunctionMock = jest.fn(() => console.log('WAS CALLED INSTEAD OF ACTION!'));
  // spy = jest.fn(() => {
  //   propFunctionMock();
  // });
  // METHOD 3
  // wrapped = shallow(<Root>
  //   <CommentBox propFunction={propFunctionMock} store={store} />
  // </Root>).dive().dive().dive();
  
  // METHOD 2
  // wrapped = mount(shallow(shallow(shallow(mount(
  //   <Root>
  //     <CommentBox propFunction={propFunctionMock} store={store} />
  //   </Root>
  // ).get(0)).get(0)).get(0)).get(0));
  // METHOD 1
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );

  // const instance = wrapped.instance();
  // console.log('INSTANCE', wrapped.instance());
  // jest.spyOn(instance, 'handleSubmit');//.mockImplementation(spy);
});


afterEach((() => { 
  wrapped.unmount();
}));

// it('calls a mock', () => {
//   wrapped.instance().handleSubmit();
//   expect(propFunctionMock).toHaveBeenCalled();
//  });

it('has a text area and 2 buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' },
    });

    wrapped.update();
   });

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

  });

  it('when for is submitted, text area gets clear //has a form that can submit', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');

  });
});