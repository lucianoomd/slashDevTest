import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useState } from 'react';
import { authenticate } from '../api/firebase';

const useFirebaseAuth = (email: string, password: string) => {
  const [user, setUser] = useState<FirebaseAuthTypes.UserCredential | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

const doAuthenticate = async () => {
    setLoading(true);
    const response = await authenticate(
        email.toLowerCase(),
        password,
    );
    setLoading(false);
    if (response.user) {
        setUser(response.user);
    }
    if(response.error) {
        setError(response.error);
    }
  };

  return {
    user,
    loading,
    error,
    doAuthenticate,
  };
};

export default useFirebaseAuth;
