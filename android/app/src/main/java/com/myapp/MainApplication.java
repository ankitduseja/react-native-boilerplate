package com.myapp;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage()
      );
    }
  };

//  public void onCreate() {
//    super.onCreate();
//    Stetho.initializeWithDefaults(this);
//    OkHttpClient client = new OkHttpClient.Builder()
//            .connectTimeout(0, TimeUnit.MILLISECONDS)
//            .readTimeout(0, TimeUnit.MILLISECONDS)
//            .writeTimeout(0, TimeUnit.MILLISECONDS)
//            .cookieJar(new ReactCookieJarContainer())
//            .addNetworkInterceptor(new StethoInterceptor())
//            .build();
//    OkHttpClientProvider.replaceOkHttpClient(client);
//  }

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
