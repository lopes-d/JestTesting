import React from 'react';
import { mount, unmount, shallow } from 'enzyme';
import Thing from 'components/Thing';

let wrapped;
let spy;
let propFunctionMock;
describe('', () => {
  beforeEach((() => {
    propFunctionMock = jest.fn(() => console.log('WAS CALLED!'));
    spy = jest.fn(() => {
      propFunctionMock();
    });

    // jest
    // .spyOn(Thing.prototype, 'testing2')
    // .mockImplementation(spy);

    // //method 1
    // wrapped = mount(
    //     <Thing />
    // );

    //method 2
    wrapped = shallow(shallow(<Thing propFunction={propFunctionMock}/>).get(0)); //returns Thing component
    
    const instance = wrapped.instance();
    jest.spyOn(instance, 'testing2').mockImplementation(spy);
    wrapped.update(); // because testing is used in componentDidMount
    
    // console.log('the wrap', wrapped.debug());
    // console.log('INSTANCE', wrapped.instance());
  }));

  it('things', () => {
    wrapped.instance().testing2();
    // expect(spy).toHaveBeenCalled();
    expect(propFunctionMock).toHaveBeenCalled();
   });

});
