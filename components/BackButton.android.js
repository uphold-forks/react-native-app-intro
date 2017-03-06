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
      }, styles.btnContainer ]}>
      <TouchableOpacity
        style={[styles.full, styles.backBtn]}
        onPress={isBackBtnShow ? () => onBackBtnClick() : null}>
        {backBtnElement && backBtnElement}

        {!backBtnElement && backBtnLabel && <Text style={[styles.backButtonText, { color: leftTextColor }]}>
          {backBtnLabel}
        </Text>}
      </TouchableOpacity>
    </View>
  )
}

export default BackButton
