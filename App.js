import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>subject</Text>
        ) : (
        <Text>no subject</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50
  },
});
