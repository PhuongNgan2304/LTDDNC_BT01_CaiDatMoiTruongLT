/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// Màn hình Intro
const IntroScreen = ({ onNext }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext(); // Sau 10 giây gọi hàm onNext để chuyển sang màn hình Home
    }, 10000); // 10 giây
    return () => clearTimeout(timer);
  }, [onNext]);

  return(
    <View style={styles.container}>
       <Image
        source={require('./assets/images/avatar.png')} // Đường dẫn đến avatar của bạn
        style={styles.avatar}
      />
      <Text style={styles.text}>Xin chào, tôi là Nguyễn Hoàng Phương Ngân!</Text>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
       <Text style={styles.text}>Chào mừng đến với HomePage!</Text>
    </View>
  );
};

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("Intro");

  const handleNextScreen = () => {
    setCurrentScreen("Home"); // Chuyển sang màn hình Home sau 10 giây
  };

  return (
    <View style={styles.container}>
      {currentScreen === "Intro" ? (
        <IntroScreen onNext={handleNextScreen} />
      ) : (
        <HomeScreen />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
  },
  avatar: {
    width: 150, 
    height: 150, 
    borderRadius: 75, 
    marginBottom: 20, 
    borderWidth: 3,
    borderColor: "#333",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
