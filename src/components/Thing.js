import React, { Component } from 'react';
import withSecretToLife from './Secret';

class Thing extends Component {
  constructor (props) {
    super(props);

    this.testing = this.testing.bind(this);
    this.testing2 = this.testing2.bind(this);
  }
  componentDidMount () {
    this.testing();
  }

  testing () {
    console.log('HEY');
    // const { propFunction } = this.props;
    // propFunction();
  }

  testing2() {
    const { propFunction } = this.props;
    propFunction();
    return 'Name';
  }

  render() {
    return (
      <div>
        <ul>
          YELLOW
          {/* {this.props.secretToLife} */}
        </ul>
      </div>
    )};
};


export default withSecretToLife(Thing);
// export default Thing;