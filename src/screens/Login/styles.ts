import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
