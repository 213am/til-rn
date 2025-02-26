# Webview 적용

- https://www.npmjs.com/package/react-native-webview

```bash
npm i react-native-webview
```

## 기본형

- App.tsx

```tsx
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

const App = (): JSX.Element => {
  const webViewUrl = 'https://app-fish-y3pa.vercel.app';
  // SafeAreaView 는 기기의 indicator 영역을 제외한 컨텐츠 영역 배치

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
```

## 웹뷰에 로딩중인 상태를 표현하자

- [참고 블로그](https://velog.io/@ttoottie/RN-데이터-로딩-UI를-자연스럽게-구성해보자)

```tsx
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
```

- `npm run start`
- `a`
