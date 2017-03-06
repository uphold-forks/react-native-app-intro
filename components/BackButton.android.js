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
  backBtnElement,
  backBtnLabel,
  backFadeOpacity
}) => {
  return (
    <View style={[{
        paddingBottom: 5,
        opacity: isBackBtnShow ? 1 : 0,
      }, styles.btnContainer, styles.backBtnContainer]}>
      <TouchableOpacity
        style={[styles.full, styles.fullBack]}
        onPress={isBackBtnShow ? () => onBackBtnClick() : null}>
        {backBtnElement && backBtnElement}

        {!backBtnElement && backBtnLabel && <Text style={[{ color: leftTextColor }, styles.backBtnText]}>
          {backBtnLabel}
        </Text>}
      </TouchableOpacity>
    </View>
  )
}

export default BackButton
