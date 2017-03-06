import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export const DoneButton = ({
  styles, onDoneBtnClick, onNextBtnClick,
  rightTextColor, isDoneBtnShow,
  doneBtnLabel, nextBtnElement, nextBtnLabel,
}) => {
  return (
    <View style={[styles.btnContainer]}>
      <TouchableOpacity style={[styles.full, styles.nextBtn]}
        onPress={ isDoneBtnShow ? onDoneBtnClick : onNextBtnClick}
      >
        {!isDoneBtnShow && nextBtnElement && nextBtnElement}

        {!nextBtnElement && !isDoneBtnShow && <Text style={[styles.nextButtonText, { color: rightTextColor }]}>
          {nextBtnLabel}
        </Text>}

        {isDoneBtnShow && <Text style={[styles.nextButtonText, { color: rightTextColor }]}>
          {doneBtnLabel}
        </Text>}
      </TouchableOpacity>
    </View>
  )
}

export default DoneButton
