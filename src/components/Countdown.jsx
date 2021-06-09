import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const minutesToMilliseconds = (min) => min * 1000 * 60;

const formatTime = (time) => time < 10 ? `0${time}` : time;

const Countdown = ({
  minutes = 1,
  isPaused,
  onProgress
}) => {
  const interval = React.useRef(null);
  const [milliseconds, setMilliseconds] = useState(null);
  const minute = Math.floor(milliseconds / 1000 / 60) % 60;
  const seconds = Math.floor(milliseconds / 1000) % 60;

  const countDown = () => {
    setMilliseconds((time) => {
      if (time === 0) {
        // do more stuff here
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft
    })
  };

  useEffect(() => {
    setMilliseconds(minutesToMilliseconds(minutes));
  }, [minutes]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);
    onProgress(milliseconds / minutesToMilliseconds(minutes));

    return () => clearInterval(interval.current);
  }, [isPaused, milliseconds]);

  return (
    <View>
      <Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(94, 132, 226, 0.3)'
  }
});

export default Countdown;