import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { registerUser } from '../../api'; // Import the register function
import Button from '../../components/Button'; 
import Colors from '../../constants/Colors';
import { router } from 'expo-router';

const SignUpScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = async () => {
    try {
      const registerData = { email, password, fullName }; // Include fullName in the data
      const response = await registerUser(registerData); // Call the register function
      console.log('User registered:', response);
      // You can handle the success response here (e.g., navigate to login screen)
      router.push('/(user)/menu');
    } catch (error) {
      setErrorMessage('Sign-up failed. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        value={fullName}
        onChangeText={setFullName}
        placeholder="Jon Doe"
        style={styles.input}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="jon@gmail.com"
        style={styles.input}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="********"
        style={styles.input}
        secureTextEntry
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Button text="Create account" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    flex: 1,
  },
  label: {
    color: 'gray',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignUpScreen;

// import { View, Text, TextInput, StyleSheet } from 'react-native';
// import React, { useState } from 'react';
// import Button from '../../components/Button';
// import Colors from '../../constants/Colors';
// import { Link, Stack } from 'expo-router';

// const SignUpScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <View style={styles.container}>
//       <Stack.Screen options={{ title: 'Sign up' }} />

//       <Text style={styles.label}>Email</Text>
//       <TextInput
//         value={email}
//         onChangeText={setEmail}
//         placeholder="jon@gmail.com"
//         style={styles.input}
//       />

//       <Text style={styles.label}>Password</Text>
//       <TextInput
//         value={password}
//         onChangeText={setPassword}
//         placeholder=""
//         style={styles.input}
//         secureTextEntry
//       />

//       <Button text="Create account" />
//       <Link href="/sign-in" style={styles.textButton}>
//         Sign in
//       </Link>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     justifyContent: 'center',
//     flex: 1,
//   },
//   label: {
//     color: 'gray',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     padding: 10,
//     marginTop: 5,
//     marginBottom: 20,
//     backgroundColor: 'white',
//     borderRadius: 5,
//   },
//   textButton: {
//     alignSelf: 'center',
//     fontWeight: 'bold',
//     color: Colors.light.tint,
//     marginVertical: 10,
//   },
// });

// export default SignUpScreen;