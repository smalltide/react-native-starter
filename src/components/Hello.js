import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { connect } from 'react-redux';
import { sayHello } from '../actions';

class Hello extends Component {

  componentWillMount() {
    this.props.sayHello('message');
  }

  render() {
    return (
      <View>
        <Text>
          {this.props.hello.message}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { hello: state.hello };
};

export default connect(mapStateToProps, { sayHello })(Hello);
