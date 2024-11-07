import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Button from '@/src/components/Button';  // Adjust this import path as needed
import Colors from '../../constants/Colors'; // Adjust this import path as needed
import { loginUser } from '@/src/api'; // Adjust this import path as needed
import { Link, router } from 'expo-router';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    setLoading(true);
    setError(''); // Clear previous errors
    try {
      const response = await loginUser({ email, password });
      Alert.alert('Success', 'Login successful');
      
      console.log(response); // For debugging, or redirecting to another screen

      // Here you can redirect or do further actions after successful login.
      router.push('/(user)/menu');
    } catch (error) {
      console.error('Sign-in error:', error);
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="jon@gmail.com"
        style={styles.input}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
        style={styles.input}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Button text={loading ? 'Signing in...' : 'Sign in'} onPress={handleSignIn} disabled={loading} />
      <Link href="/sign-up" style={styles.textButton}>
        Create an account
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    color: 'gray',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginVertical: 10,
  },
  textButton: {
    alignSelf: 'center',
    color: Colors.light.tint,
    marginVertical: 10,
  },
});

export default SignInScreen;




// import { View, Text, TextInput, StyleSheet } from 'react-native';
// import React, { useState } from 'react';
// import Button from '../../components/Button';
// import Colors from '../../constants/Colors';
// import { Link, Stack } from 'expo-router';

// const SignInScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <View style={styles.container}>
//       <Stack.Screen options={{ title: 'Sign in' }} />

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

//       <Button text="Sign in" />
//       <Link href="/sign-up" style={styles.textButton}>
//         Create an account
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

// export default SignInScreen;