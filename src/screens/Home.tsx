import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import useApi from '../hooks/useApi';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header/Header';
import Screens from '../Router/Screens';
import {Character} from '../types/Types';

const Home = () => {
  const {navigate} = useNavigation();
  const {characters, loading, error, hasMore, loadMore} = useApi();

  const renderCharacterItem = ({item}: {item: Character}) => (
    <TouchableOpacity
      style={styles.characterCard}
      onPress={() =>
        navigate(Screens.Details, {characterId: item.id, name: item.name})
      }>
      <Image source={{uri: item.image}} style={styles.characterImage} />
      <View style={styles.characterInfo}>
        <Text style={styles.characterName}>{item.name}</Text>
        <View style={styles.characterStatusContainer}>
          <View
            style={[
              styles.statusDot,
              {
                ...(item.status === 'Alive'
                  ? styles.statusDotAlive
                  : item.status === 'Dead'
                  ? styles.statusDotDead
                  : styles.statusDotUnknown),
              },
            ]}
          />
          <Text style={styles.characterStatus}>
            {item.status} - {item.species}
          </Text>
        </View>
        <Text style={styles.characterLocation}>Last known location:</Text>
        <Text style={styles.characterLocationValue}>{item.location.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#f5f5f5" />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Rick and Morty Characters" />

      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Error: {error}</Text>
        </View>
      ) : (
        <FlatList
          data={characters}
          renderItem={renderCharacterItem}
          keyExtractor={item => `${item.id.toString()}-${item.name}`}
          onEndReached={hasMore ? loadMore : null}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
          ListEmptyComponent={
            !loading ? (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No characters found</Text>
              </View>
            ) : null
          }
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272b33',
  },
  characterCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#202329',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  characterImage: {
    width: 120,
    height: 120,
  },
  characterInfo: {
    flex: 1,
    padding: 10,
  },
  characterName: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  characterStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  characterStatus: {
    fontSize: 14,
    color: '#DDD',
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 5,
  },
  statusDotAlive: {
    backgroundColor: '#55CC44',
  },
  statusDotDead: {
    backgroundColor: '#D63D2E',
  },
  statusDotUnknown: {
    backgroundColor: '#9E9E9E',
  },
  characterLocation: {
    fontSize: 12,
    color: '#BBB',
    marginTop: 5,
  },
  characterLocationValue: {
    fontSize: 14,
    color: '#999',
  },
  loaderContainer: {
    padding: 20,
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});

export default Home;
