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
  doneBtnLabel, nextBtnLabel,
  doneFadeOpacity, skipFadeOpacity, nextOpacity
}) => {
  return (
    <View style={styles.nextDoneBtnContainer}>
      <Animated.View style={[styles.animatedBtnSubcontainer, {
        opacity: doneFadeOpacity,
        transform: [{
          translateX: doneFadeOpacity.interpolate({
            inputRange: [0, 1],
            outputRange: [50, 0],
          }),
        }],
      }]}
      >
        <View style={styles.doneTouchable}>
          <Text style={[styles.doneButtonText, { color: rightTextColor }]}>
            {doneBtnLabel}
          </Text>
        </View>
      </Animated.View>
      <Animated.View style={[styles.animatedBtnSubcontainer, { opacity: nextOpacity }]}>
        <TouchableOpacity style={styles.nextTouchable}
          onPress={ isDoneBtnShow ? onDoneBtnClick : onNextBtnClick}>
         <Text style={[styles.nextButtonText, { color: rightTextColor }]}>
          {nextBtnLabel}
        </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

export default DoneButton
