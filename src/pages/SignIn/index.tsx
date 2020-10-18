import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

const SignIn: React.FC = () => (
  <View style={styles.container}>
    <Button title="Sing In" onPress={() => {}} />
  </View>
);

export default SignIn;
