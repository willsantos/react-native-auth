import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {signIn} from '../../services/api';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

const SignIn: React.FC = () => {
  async function handleSignIn() {
    const response = await signIn();

    console.log(response);
  }
  return (
    <View style={styles.container}>
      <Button title="Sing In" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
