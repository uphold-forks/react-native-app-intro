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
  backBtnLabel,
  backFadeOpacity
}) => {
  return (
    <Animated.View style={[styles.btnContainer, {
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
        style={styles.full}
        onPress={isBackBtnShow ? () => onBackBtnClick() : null}>
        <Text style={[styles.backButtonText, { color: leftTextColor }]}>
          {backBtnLabel}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default BackButton
