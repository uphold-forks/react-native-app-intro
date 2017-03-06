import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native';

export const BackButton = ({
  styles,
  isBackBtnShow,
  onBackBtnClick,
  leftTextColor,
  backBtnElement,
  backBtnLabel,
  backFadeOpacity
}) => {
  return (
    <Animated.View style={[{ right: 15 }, styles.btnContainer, styles.backBtnContainer, {
      opacity: backFadeOpacity,
      transform: [{
        translateX: backFadeOpacity.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 15],
        }),
      }],
    }]}
    >
      <TouchableOpacity
        style={[styles.full, styles.fullBack]}
        onPress={isBackBtnShow ? () => onBackBtnClick() : null}>
        {backBtnElement && backBtnElement}

        {!backBtnElement && backBtnLabel && <Text style={[{ color: options.leftTextColor }, options.styles.backBtnText]}>
          {options.backBtnLabel}
        </Text>}
      </TouchableOpacity>
    </Animated.View>
  )
}

export default BackButton
