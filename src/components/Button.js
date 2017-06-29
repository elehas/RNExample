import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#fff'
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#007aaf',
    borderColor: '#007aff',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
