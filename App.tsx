import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

const App = (): JSX.Element => {
  const webViewUrl = 'http://172.28.240.1:5173/';
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: webViewUrl}} style={styles.webview} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  webview: {
    flex: 1,
  },
});
export default App;
