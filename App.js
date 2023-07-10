import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* use stylesheet Object :: recommended */}
      <Text style={styles.dummyText}>Hello World!</Text>
      {/* inline styling :: not recommended */}
      <Text style={{ margin: 16, borderWidth: 2, borderColor: 'red', padding: 16 }}>New Text</Text>
      <Button title='Tap me!' />
    </View>
  );
}

// StyleSheet Object :: style 재사용성이 증가
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'red',
  },
});
