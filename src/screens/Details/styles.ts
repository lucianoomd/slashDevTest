import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272b33',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#202329',
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  characterImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  characterBasicInfo: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  characterName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
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
  statusText: {
    fontSize: 16,
    color: '#DDD',
  },
  section: {
    backgroundColor: '#202329',
    margin: 10,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#BBB',
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoLabel: {
    width: 80,
    fontSize: 16,
    color: '#777',
  },
  infoValue: {
    flex: 1,
    fontSize: 16,
    color: '#888',
    fontWeight: '500',
  },
});
