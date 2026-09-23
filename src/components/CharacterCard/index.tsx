import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Character } from '../../types/Types';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../Router/screens';
import { styles } from './styles';



const CharacterCard = ({id, name, image, status, species, location}: Character) => {
    const {navigate} = useNavigation();

    const navigateToDetails = () => {
        navigate(SCREENS.Details, {characterId: id, name});
    };

    return (
        <TouchableOpacity style={styles.characterCard} onPress={navigateToDetails}>
            <Image source={{uri: image}} style={styles.characterImage} />
            <View style={styles.characterInfo}>
            <Text style={styles.characterName}>{name}</Text>
            <View style={styles.characterStatusContainer}>
                <View
                    style={[
                        styles.statusDot,
                        {
                        ...(status === 'Alive'
                            ? styles.statusDotAlive
                            : status === 'Dead'
                            ? styles.statusDotDead
                            : styles.statusDotUnknown),
                        },
                    ]}
                />
                    <Text style={styles.characterStatus}>
                    {status} - {species}
                    </Text>
                </View>
                <Text style={styles.characterLocation}>Last known location:</Text>
                <Text style={styles.characterLocationValue}>{location.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CharacterCard;
