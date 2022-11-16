import { Text, TouchableOpacity, StyleSheet } from "react-native";

const MainButton = (props) => {
  const { text, onPress, style, disabled } = props;

  const onPressButton = () => {
    if (!disabled) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      style={
        disabled
          ? { ...styles.button, ...styles.disableButton, ...style }
          : { ...styles.button, ...style }
      }
      activeOpacity={disabled ? 1 : 0.7}
      onPress={onPressButton}
    >
      <Text
        style={
          disabled
            ? { ...styles.buttonText, ...styles.disableButtonText }
            : { ...styles.buttonText }
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
MainButton.defaultProps = {
  onPress: () => {},
  style: {},
  text: "NO TEXT",
  disabled: false,
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    padding: 16,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
  },
  disableButton: {
    backgroundColor: "#F6F6F6",
  },
  disableButtonText: {
    color: "#BDBDBD",
  },
});

export default MainButton;
