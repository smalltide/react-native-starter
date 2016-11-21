import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { connect } from 'react-redux';
import { sayHelloAsync } from '../actions';

class Hello extends Component {

  componentWillMount() {
    this.props.sayHelloAsync('message');
  }

  render() {
    return (
      <View>
        <Text>
          {this.props.hello.asyncMessage}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { hello: state.hello };
};

export default connect(mapStateToProps, { sayHelloAsync })(Hello);
