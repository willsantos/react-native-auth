import React, {useContext} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import authContext from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

const Dashboard: React.FC = () => {
  const {signOut} = useContext(authContext);

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};
export default Dashboard;
