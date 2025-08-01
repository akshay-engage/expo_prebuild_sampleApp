# 📱 Expo React Native Sample App – WebEngage Integration

This repository contains a sample **Expo React Native** app showcasing how to integrate [WebEngage](https://docs.webengage.com) with native support via Expo prebuild.

---

## 🚀 Features

- Integrates WebEngage SDK with a React Native (Expo) app
- Supports Firebase Cloud Messaging (FCM) push notifications
- Uses `expo prebuild` to generate native iOS/Android folders
- Easy configuration using `app.json`
- Example setup for Android push via `google-services.json`

---

## 📦 Requirements

- Node.js ≥ 14
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- WebEngage license key
- Firebase project with `google-services.json`
- macOS with Xcode (for iOS testing)

---

## 🔧 Setup Instructions

### ✅ Follow these 6 steps to get started:

1. **Run `expo prebuild`** to generate the native `android/` and `ios/` folders.
2. **Replace the `google-services.json` file** in `android/app/` with your actual Firebase config file.
3. **Update the package name** in `app.json` under `expo.android.package` to match the one in your `google-services.json`.
4. **Update `app.json`** with your WebEngage `licenseCode` and `environment` (`DEV` or `PROD`).
5. **Run the app** using the following commands:
   - `npm run android` – to run the app on Android.
   - `npm run ios` – to run the app on iOS (macOS only).
6. **The `android/` and `ios/` folders** will include all necessary native code, and `google-services.json` will be placed in the right directory automatically.

---

## 📄 Example `app.json` Configuration

```json
{
  "expo": {
    "name": "expoTest",
    "slug": "expoTest",
    "android": {
      "package": "com.yourcompany.app"
    },
    "plugins": [
    [
        "./node_modules/webengage-expo/src/withWebEngage.js",
        {
          "push": {
            "mode": "development"
          },
          "ios": {
            "WEGLicenseCode": "~1341056cd",
            "WEGLogLevel": "VERBOSE",
            "WEGEnvironment": "DEFAULT",
            "WEGAutoRegister": true
          },
          "android": {
            "manifest": {
              "com.webengage.sdk.android.environment": "us",
              "com.webengage.sdk.android.key": "~1341056cd",
              "com.webengage.sdk.android.debug": true
            }
          }
        }
      ],
      [
        "webengage-expo-push",
        {
          "mode": "development"
        }
      ]
    ]
  }
}
