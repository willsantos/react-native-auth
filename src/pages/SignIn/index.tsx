import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {useAuth} from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

const SignIn: React.FC = () => {
  const {signed, signIn} = useAuth();
  console.log(signed);
  function handleSignIn() {
    signIn();
  }
  return (
    <View style={styles.container}>
      <Button title="Sing In" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
