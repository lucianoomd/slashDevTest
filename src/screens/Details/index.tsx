/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import useAPI from '../../hooks/useApi';
import {Character} from '../../types/Types';
import { styles } from './styles';
import { useRoute } from '@react-navigation/native';

const Details = () => {
  const route = useRoute();
  const {characterId} = route.params;
  const {getCharacterDetails} = useAPI();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const characterData = await getCharacterDetails(characterId);
        setCharacter(characterData);
      } catch (err) {
        setError(String(err.message));
      } finally {
        setLoading(false);
      }
    };

    fetchCharacterDetails();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  if (!character) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Character not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{uri: character.image}} style={styles.characterImage} />
        <View style={styles.characterBasicInfo}>
          <Text style={styles.characterName}>{character.name}</Text>
          <View style={styles.statusContainer}>
            <View
              style={[
                styles.statusDot,
                {
                  ...(character.status === 'Alive'
                    ? styles.statusDotAlive
                    : character.status === 'Dead'
                    ? styles.statusDotDead
                    : styles.statusDotUnknown),
                },
              ]}
            />
            <Text style={styles.statusText}>
              {character.status} - {character.species}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Character Info</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Gender:</Text>
          <Text style={styles.infoValue}>{character.gender}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Origin:</Text>
          <Text style={styles.infoValue}>{character.origin.name}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Location:</Text>
          <Text style={styles.infoValue}>{character.location.name}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Type:</Text>
          <Text style={styles.infoValue}>{character.type || 'Unknown'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Created:</Text>
          <Text style={styles.infoValue}>
            {new Date(character.created).toLocaleDateString()}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;
