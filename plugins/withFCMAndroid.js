// const { withAppBuildGradle, withProjectBuildGradle } = require('@expo/config-plugins');

// // Plugin to configure FCM for Android
// module.exports = function withFCMAndroid(config) {
//   // Add Google Services classpath to project-level build.gradle
//   config = withProjectBuildGradle(config, async (config) => {
//     config.modResults.contents = config.modResults.contents.replace(
//       /dependencies\s*{/,
//       `dependencies {
//         classpath 'com.google.gms:google-services:4.4.3'`
//     );
//     return config;
//   });

//   // Apply Google Services plugin in app-level build.gradle
//   config = withAppBuildGradle(config, async (config) => {
//     config.modResults.contents += `\napply plugin: 'com.google.gms.google-services'`;
//     return config;
//   });

//   return config;
// };


// <<<<<<<< With this app build.gradle added automatically, use this plugin in case dependencies are missing from build.gradle files>>>>>>>>>