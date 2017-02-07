import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native';

export const BackButton = ({
  styles,
  onBackBtnClick,
  isBackBtnShow,
  leftTextColor,
  backBtnLabel,
  backFadeOpacity
}) => {
  return (
    <View style={[styles.btnContainer, {
        paddingBottom: 5,
        opacity: isBackBtnShow ? 1 : 0,
      }]}>
      <TouchableOpacity
        style={styles.full}
        onPress={isBackBtnShow ? () => onBackBtnClick() : null}>
        <Text style={[styles.backButtonText, { color: leftTextColor }]}>
          {backBtnLabel}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BackButton
