import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import useApi from '../../hooks/useApi';
import Header from '../../components/Header';
import {Character} from '../../types/Types';
import { styles } from './styles';
import CharacterCard from '../../components/CharacterCard';

const Home = () => {
  const {characters, loading, error, hasMore, loadMore} = useApi();

  const renderCharacterItem = ({item}: {item: Character}) => (
    <CharacterCard {...item}  />
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

  const renderEmptyComponent = () => {
    return !loading ? (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No characters found</Text>
      </View>
    ) : null;
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
          ListEmptyComponent={renderEmptyComponent}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
