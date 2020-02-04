import React, { useEffect } from 'react';
import { Animated, ViewPropTypes, Easing } from 'react-native';
import PropTypes from 'prop-types'

const Spin = ({ children, duration, start, end, style }) => {
  const spinValue = new Animated.Value(start);

  const spin = spinValue.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg']
  })

  useEffect(() => {
    Animated.timing(
      spinValue,
      {
        toValue: end,
        duration: duration,
        easing: Easing.linear
      }
    ).start()
  }, [end]);

  return (
    <Animated.View style={{ ...style, transform: [{rotate: spin}] }}>
      {children}
    </Animated.View>
  )
}

Spin.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  duration: PropTypes.number,
  start: PropTypes.number,
  end: PropTypes.number,
  style: ViewPropTypes.style,
}

Spin.defaultProps = {
  duration: 2000,
  start: 0,
  end: 360
}


export default Spin;