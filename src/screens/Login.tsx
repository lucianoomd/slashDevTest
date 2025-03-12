import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Screens from '../Router/Screens';
import auth from '@react-native-firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const {reset} = useNavigation();

  const handleLogin = useCallback(async () => {
    try {
      const user = await auth().signInWithEmailAndPassword(email, password);
      if (user) {
        console.log('User:', user);
        reset({index: 0, routes: [{name: Screens.Home}]});
      }
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        Alert.alert('Error', 'That email address is invalid!');
      }
      if (error.code === 'auth/invalid-credential') {
        Alert.alert(
          'Error',
          'The supplied auth credential is incorrect, malformed or has expired.',
        );
      } else {
        Alert.alert('Error', String(error));
      }
    }
  }, [email, password, reset]);

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
          resizeMode="contain"
        />
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.showHidePasswordButton}
            onPress={handleShowPassword}>
            <Text>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  formContainer: {
    flex: 2,
    paddingHorizontal: 30,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  passwordInputContainer: {
    justifyContent: 'center',
  },
  showHidePasswordButton: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  button: {
    backgroundColor: '#007BFF',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
