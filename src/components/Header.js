// Import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// Make a Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// Make a style object
const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    paddingTop: 15,
    height: 60,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  }
};

// Make the component available to other parts of the app
export default Header;
