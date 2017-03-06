import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native';

export const DoneButton = ({
  styles, onDoneBtnClick, onNextBtnClick,
  rightTextColor, isDoneBtnShow,
  doneBtnLabel, nextBtnElement, nextBtnLabel,
  doneFadeOpacity, skipFadeOpacity, nextOpacity
}) => {
  return (
    <View style={styles.btnContainer}>
      <Animated.View style={[styles.full, { height: 0 }, {
        opacity: doneFadeOpacity,
        transform: [{
          translateX: skipFadeOpacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 20],
          }),
        }],
      }]}
      >
        <View style={styles.full}>
          <Text style={[styles.controllText, {
            color: rightTextColor, paddingRight: 30,
          }]}>
            {doneBtnLabel}
          </Text>
        </View>
      </Animated.View>
      <Animated.View style={[styles.full, { height: 0 }, { opacity: nextOpacity }]}>
        <TouchableOpacity style={[styles.full, styles.nextBtn]}
          onPress={ isDoneBtnShow ? onDoneBtnClick : onNextBtnClick}>
            {nextBtnElement && nextBtnElement}

            {!nextBtnElement && nextBtnLabel && <Text style={[{ color: rightTextColor }, styles.nextButtonText]}>
              {nextBtnLabel}
            </Text>}
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

export default DoneButton
        