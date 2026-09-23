import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
});
