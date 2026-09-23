import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { SCREENS } from '../../Router/screens';
import auth from '@react-native-firebase/auth';
import { getErrorCode } from '../../api/utils';
import { styles } from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const {reset} = useNavigation();

  const handleLogin = useCallback(async () => {
    try {
      const user = await auth().signInWithEmailAndPassword(
        email.toLowerCase(),
        password,
      );
      if (user) {
        console.log('User:', user);
        reset({index: 0, routes: [{name: SCREENS.Home}]});
      }
    } catch (error) {
      const errorCode = getErrorCode(error);
      console.log('Error:', errorCode);
      if (errorCode === 'auth/invalid-email') {
        Alert.alert('Error', 'That email address is invalid!');
      } else if (errorCode === 'auth/invalid-credential') {
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
          source={require('../../assets/logo.png')}
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

export default Login;
