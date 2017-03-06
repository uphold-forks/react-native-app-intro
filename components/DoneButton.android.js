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
    <View style={[styles.btnContainer, styles.nextBtnContainer]}>
      <TouchableOpacity style={styles.full}
        onPress={ isDoneBtnShow ? onDoneBtnClick : onNextBtnClick}
      >
        {!isDoneBtnShow && nextBtnElement && nextBtnElement}

        {!nextBtnElement && !isDoneBtnShow && <Text style={[{ color: rightTextColor }, styles.nextBtnText]}>
          {nextBtnLabel}
        </Text>}

        {isDoneBtnShow && <Text style={[{ color: rightTextColor }, styles.nextBtnText]}>
          {doneBtnLabel}
        </Text>}
      </TouchableOpacity>
    </View>
  )
}

export default DoneButton
