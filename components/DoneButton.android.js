import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export const DoneButton = ({
  styles, onDoneBtnClick, onNextBtnClick,
  rightTextColor, isDoneBtnShow,
  doneBtnLabel, nextBtnLabel,
}) => {
  return (
    <View style={[isDoneBtnShow ? styles.doneBtnContainer : styles.nextBtnContainer]}>
      <TouchableOpacity style={isDoneBtnShow ? styles.doneTouchable : styles.nextTouchable}
        onPress={ isDoneBtnShow ? onDoneBtnClick : onNextBtnClick}
      >
       <Text style={[isDoneBtnShow ? styles.doneButtonText : styles.nextButtonText, { color: rightTextColor }]}>
         {isDoneBtnShow ? doneBtnLabel : nextBtnLabel}
       </Text>
      </TouchableOpacity>
    </View>
  )
}

export default DoneButton
