import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface ResponseCharactersAPI {
    info:    Info;
    results: Character[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface Character {
    id:       number;
    name:     string;
    status:   'Alive' | 'unknown' | 'Dead';
    species:  'Human' | 'Alien';
    type:     string;
    gender:   'Male' | 'Female' | 'unknown';
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export interface Location {
    name: string;
    url:  string;
}

export interface FetchCharactersResponse {
    data: Character[],
    error: string,
    hasMore: boolean
}

export interface FetchItemDetailsResponse {
    data: Character | null,
    error: string
}

export interface AuthenticateResponse {
    user: FirebaseAuthTypes.UserCredential | null,
    error: string
}
