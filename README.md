# Splash Screen ( 시작화면 )

- [참고 블로그](https://til-choonham.tistory.com/530)
- [Github](https://github.com/crazycodeboy/react-native-splash-screen)
- [npm](https://www.npmjs.com/package/react-native-splash-screen)

```bash
npm i react-native-splash-screen
```

## android ( MainActivity.java ) 수정

- `android/app/src/main/java/com/앱이름/MainActivity.java`
- 아래 소스는 구조만 참조하고 추가할 소스는 직접 작성하는 것을 추천

```java
package com.tilrn;

// Splash 를 위한 추가
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

// Splash 를 위한 추가
// react-native-splash-screen >= 0.3.1
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "tilrn";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled());
  }

  // Splash 를 위한 추가
  @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }
}
```

## Splash Screen 용 이미지 필요

- 900 \* 900 size 의 png 파일 추천
- `launch_screen.png`
- `android/app/src/main/res/drawable/` 폴더에 저장
- `android/app/src/main/res/drawable/launch_screen.png`

## launch_screen.xml 파일 생성 및 배치

- android/app/src/main/res/layout 폴더 생성
- android/app/src/main/res/layout/launch_screen.xml 파일 생성

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical" android:layout_width="match_parent"
    android:layout_height="match_parent">
    <ImageView android:layout_width="match_parent" android:layout_height="match_parent" android:src="@drawable/launch_screen" android:scaleType="centerCrop" />
</RelativeLayout>
```

## colors.xml 파일 생성 및 배치

- `android/app/src/main/res/values/` 폴더 안에
- `colors.xml` 파일 생성

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="primary_dark">#000000</color>
</resources>
```

## App.tsx 에 적용

```tsx
import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
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
        // 로딩 완료 후
        onLoadEnd={() => {
          console.log('로딩완료');
          setTimeout(() => {
            SplashScreen.hide();
          }, 1000);
        }}
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
