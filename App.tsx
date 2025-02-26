import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

const App = (): JSX.Element => {
  const webViewUrl = 'https://app-fish-y3pa.vercel.app';
  // SafeAreaView 는 기기의 indicator 영역을 제외한 컨텐츠 영역 배치

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{uri: webViewUrl}} // 웹뷰에 보여줄 URL 주소
        startInLoadingState={true} // 웹뷰가 로딩될 때 indicator 표시
        renderLoading={() => (
          // 웹뷰 로딩 중일 때 표시될 로딩 indicator 컴포넌트
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={'large'} color={'#0000ff'} />
            {/* 로딩 스피너 컴포넌트 */}
          </View>
        )}
        style={styles.webview}
      />
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
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
export default App;
