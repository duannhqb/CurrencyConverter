import React from 'react';
import PropTypes from 'proptypes';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';
import styles from './styles';

const InputWidthButton = (props) => {
  const { onPress, editable = true, buttonText } = props;
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);

  const containerStyles = [styles.container];

  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  const buttonTextStyles = [styles.buttonText];

  if (props.textColor) {
    buttonTextStyles.push({ color: props.textColor });
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={buttonTextStyles}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
    </View>
  );
};

InputWidthButton.propTypes = {
  onPress: PropTypes.func,
  editable: PropTypes.bool,
  buttonText: PropTypes.string,
  textColor: PropTypes.string,
};

export default InputWidthButton;
