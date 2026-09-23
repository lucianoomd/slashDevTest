import { auth } from '../../firebase';
import { AuthenticateResponse } from '../types/types';
import { getErrorCode } from './utils';

const authenticate = async (email: string, password: string) => {
    const response: AuthenticateResponse = { user: null, error: '' };
    try {
        const user = await auth().signInWithEmailAndPassword(
            email.toLowerCase(),
            password,
        );
        if (user) {
            console.log('User:', user);
            response.user = user;
        }
    } catch (error) {
        // TODO: Fix getErrorCode
        console.log('Error:', error);
        const errorCode = getErrorCode(error);
        if (errorCode === 'auth/invalid-email') {
            response.error = 'That email address is invalid!';
        } else if (errorCode === 'auth/invalid-credential') {
            response.error = 'The supplied auth credential is incorrect, malformed or has expired.';
        } else {
            response.error =  String(error);
        }
    }
    return response;
};

export {
    authenticate,
};
