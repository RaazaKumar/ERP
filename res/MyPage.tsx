import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View ,LayoutAnimation, Platform,UIManager} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true)
}


const MyPage = () => {
  const [dynamicHeader, setDynamicHeader] = useState(false);
  

  const handleScroll = (event: any) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    console.log('Scroll Y:', scrollY);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setDynamicHeader(scrollY>70)
  }
    
  const handleSearch = () => {
    console.log('Search icon pressed');
  }
  const handleNotification = () => {
    console.log('Notification icon pressed');
  }

    useEffect(() => {
    console.log('📱 MyPage UI rendered (mounted)');
  }, []);

  return (
    <SafeAreaView style={styles.container}>

    {dynamicHeader ?  <View style={styles.header}>

          <View style={styles.HeaderText}>
            <Text style={styles.HeaderTextText}>Welcome Guest!</Text>
            <Text style={styles.HeaderSubText}>Patna</Text>
          </View>

          <View style={styles.HeaderIcon}>
            <TouchableOpacity
              onPress={handleSearch}><FontAwesome name="search" size={30} color="black" /></TouchableOpacity>
            <TouchableOpacity
              onPress={handleNotification}><FontAwesome name="bell" size={30} color="black" /></TouchableOpacity>
          </View>
        </View>:null}

      <ScrollView
      onScroll={handleScroll}>
        <View style={styles.header}>

          <View style={styles.HeaderText}>
            <Text style={styles.HeaderTextText}>Welcome Guest!</Text>
            <Text style={styles.HeaderSubText}>Patna</Text>
          </View>

          <View style={styles.HeaderIcon}>
            <TouchableOpacity
              onPress={handleSearch}><FontAwesome name="search" size={30} color="black" /></TouchableOpacity>
            <TouchableOpacity
              onPress={handleNotification}><FontAwesome name="bell" size={30} color="black" /></TouchableOpacity>
          </View>
        </View>
        <View> 
          <Text>PS D:\CodeQuery\SerQfix-Provider-Anpm install react-native-vector-icons

            up to date, audited 1225 packages in 1m

            199 packages are looking for funding
            run `npm fund` for details

            14 vulnerabilities

            To address issues that do not require attention, run:
            npm audit fix

            To address all issues:
            npm audit fix --force

            Welcome to React Native v0.80
            Starting dev server on http://localhost:8081

            error listen EADDRINUSE: address already in use :::8081.
            netstat -ano | findstr :8081
            TCP    0.0.0.0:8081           0.0.0.0:0              LISTENING       6316
            TCP    127.0.0.1:8081         127.0.0.1:65285        ESTABLISHED     6316
            TCP    127.0.0.1:8081         127.0.0.1:65287        ESTABLISHED     6316
            TCP    127.0.0.1:65285        127.0.0.1:8081         ESTABLISHED     19864


            Welcome to React Native v0.80
            Starting dev server on http://localhost:8081


            ▒▒▓▓▓▓▒▒
            ▒▓▓▓▒▒░░▒▒▓▓▓▒
            ▒▓▓▓▓░░░▒▒▒▒░░░▓▓▓▓▒
            ▓▓▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▓▓
            ▓▓░░░░░▒▓▓▓▓▓▓▒░░░░░▓▓
            ▓▓░░▓▓▒░░░▒▒░░░▒▓▒░░▓▓
            ▓▓░░▓▓▓▓▓▒▒▒▒▓▓▓▓▒░░▓▓
            ▓▓░░▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░▓▓
            ▓▓▒░░▒▒▓▓▓▓▓▓▓▓▒░░░▒▓▓
            ▒▓▓▓▒░░░▒▓▓▒░░░▒▓▓▓▒
            ▒▓▓▓▒░░░░▒▓▓▓▒
            ▒▒▓▓▓▓▒▒

            WARN  the transform cache was reset.
            Welcome to Metro v0.82.5
            Fast - Scalable - Integrated


            INFO  Connection established to app='com.searchscrollbar' on device='I2405 - 15 - API 35'.
            INFO  💡 JavaScript logs have moved! They can now be viewed in React Native DevTools. Tip: Type j in the terminal to open (requires Google Chrome or Microsoft Edge).
            INFO  Dev server ready. Press Ctrl+C to exit.
            INFO  Key commands available:

            r
            d  - open Dev Menu
            j  - open DevTools

            INFO  Connection closed to device='I2405 - 15 - API 35' for app='com.searchscrollbar' with code='1006' and reason=''.

            INFO  Connection established to app='com.searchscrollbar' on device='I2405 - 15 - API 35'.
            WARN  Waiting for a DevTools connection to app='com.searchscrollbar' on device='I2405 - 15 - API 35'.
            Try again when it's established. If no connection occurs, try to:
            - Restart the app. For Android, force stopping the app first might be required.
            - Ensure a stable connection to the device.
            - Ensure that the app is built in a mode that supports debugging.
            - Take the app out of running in the background.
            WARN  No connected targets
            INFO  Reloading connected app
            BUNDLE  ./index.js
            INFO  Connection established to app='com.searchscrollbar' on device='I2405 - 15 - API 35'.
            INFO  Launching DevTools...
            INFO  Connection established to DevTools for app='com.searchscrollbar' on device='I2405 - 15 - API 35'.
            INFO  Connection closed to DevTools for app='com.searchscrollbar' on device='I2405 - 15 - API 35' with code='1001' and reason=''.
            PS D:\CodeQuery\SerQfix-Provi
            Installing APK 'app-debug.apk' on 'I2405 - 15' for :app:debug
            Installed on 1 device.

            Problems report is available at: file:///D:/CodeQuery/SearchScrollbar/android/build/reports/problems/problems-report.html

            Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

            You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

            For more on this, please refer to https://docs.gradle.org/9.0.0/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

            BUILD SUCCESSFUL in 24s
            104 actionable tasks: 9 executed, 95 up-to-date
            Consider enabling configuration cache to speed up this build: https://docs.gradle.org/9.0.0/userguide/configuration_cache_enabling.html
            info Connecting to the development server...
            info Starting the app on "10BF980D6Z00439"...
            Starting: Intent
          </Text>
           <Text>PS D:\CodeQuery\SerQfix-Provider-Anpm install react-native-vector-icons

            up to date, audited 1225 packages in 1m

            199 packages are looking for funding
            run `npm fund` for details

            14 vulnerabilities

            To address issues that do not require attention, run:
            npm audit fix

            To address all issues:
            npm audit fix --force

            Welcome to React Native v0.80
            Starting dev server on http://localhost:8081

            error listen EADDRINUSE: address already in use :::8081.
            netstat -ano | findstr :8081
            TCP    0.0.0.0:8081           0.0.0.0:0              LISTENING       6316
            TCP    127.0.0.1:8081         127.0.0.1:65285        ESTABLISHED     6316
            TCP    127.0.0.1:8081         127.0.0.1:65287        ESTABLISHED     6316
            TCP    127.0.0.1:65285        127.0.0.1:8081         ESTABLISHED     19864


            Welcome to React Native v0.80
            Starting dev server on http://localhost:8081


            ▒▒▓▓▓▓▒▒
            ▒▓▓▓▒▒░░▒▒▓▓▓▒
            ▒▓▓▓▓░░░▒▒▒▒░░░▓▓▓▓▒
            ▓▓▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▓▓
            ▓▓░░░░░▒▓▓▓▓▓▓▒░░░░░▓▓
            ▓▓░░▓▓▒░░░▒▒░░░▒▓▒░░▓▓
            ▓▓░░▓▓▓▓▓▒▒▒▒▓▓▓▓▒░░▓▓
            ▓▓░░▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░▓▓
            ▓▓▒░░▒▒▓▓▓▓▓▓▓▓▒░░░▒▓▓
            ▒▓▓▓▒░░░▒▓▓▒░░░▒▓▓▓▒
            ▒▓▓▓▒░░░░▒▓▓▓▒
            ▒▒▓▓▓▓▒▒

            WARN  the transform cache was reset.
            Welcome to Metro v0.82.5
            Fast - Scalable - Integrated


            INFO  Connection established to app='com.searchscrollbar' on device='I2405 - 15 - API 35'.
            INFO  💡 JavaScript logs have moved! They can now be viewed in React Native DevTools. Tip: Type j in the terminal to open (requires Google Chrome or Microsoft Edge).
            INFO  Dev server ready. Press Ctrl+C to exit.
            INFO  Key commands available:

            r
            d  - open Dev Menu
            j  - open DevTools

            INFO  Connection closed to device='I2405 - 15 - API 35' for app='com.searchscrollbar' with code='1006' and reason=''.

            INFO  Connection established to app='com.searchscrollbar' on device='I2405 - 15 - API 35'.
            WARN  Waiting for a DevTools connection to app='com.searchscrollbar' on device='I2405 - 15 - API 35'.
            Try again when it's established. If no connection occurs, try to:
            - Restart the app. For Android, force stopping the app first might be required.
            - Ensure a stable connection to the device.
            - Ensure that the app is built in a mode that supports debugging.
            - Take the app out of running in the background.
            WARN  No connected targets
            INFO  Reloading connected app
            BUNDLE  ./index.js
            INFO  Connection established to app='com.searchscrollbar' on device='I2405 - 15 - API 35'.
            INFO  Launching DevTools...
            INFO  Connection established to DevTools for app='com.searchscrollbar' on device='I2405 - 15 - API 35'.
            INFO  Connection closed to DevTools for app='com.searchscrollbar' on device='I2405 - 15 - API 35' with code='1001' and reason=''.
            PS D:\CodeQuery\SerQfix-Provi
            Installing APK 'app-debug.apk' on 'I2405 - 15' for :app:debug
            Installed on 1 device.

            Problems report is available at: file:///D:/CodeQuery/SearchScrollbar/android/build/reports/problems/problems-report.html

            Deprecated Gradle features were used in this build, making it incompatible with Gradle 10.

            You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

            For more on this, please refer to https://docs.gradle.org/9.0.0/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.

            BUILD SUCCESSFUL in 24s
            104 actionable tasks: 9 executed, 95 up-to-date
            Consider enabling configuration cache to speed up this build: https://docs.gradle.org/9.0.0/userguide/configuration_cache_enabling.html
            info Connecting to the development server...
            info Starting the app on "10BF980D6Z00439"...
            Starting: Intent
          </Text>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'lightgrey',
    justifyContent: 'space-between',
  },
  HeaderText: {
    // backgroundColor: 'pink',
  },
  HeaderTextText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  HeaderSubText: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  HeaderIcon: {
    flexDirection: 'row',
    gap: 20,
  },
});


// import { StyleSheet, Text, View, StatusBar } from 'react-native'
// import React from 'react'

// const MyPage = () => {
//   return (
//     <View style={styles.container}>                   //knock problem solved using statusbar.currentheight
//       {/* Active StatusBar */}
//       <StatusBar
//         barStyle="dark-content"
//         backgroundColor="white"
//       />

//       <Text>MyPage</Text>
//     </View>
//   )
// }

// export default MyPage

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:'white',
//     paddingTop: StatusBar.currentHeight || 0, // 👈 Android safety
//   }
// })import { StyleSheet, Text, View } from 'react-native';