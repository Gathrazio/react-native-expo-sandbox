import { View, Text, Button } from 'react-native';

export default function Cat ({ name, isHungry, updateIsHungry}) {
    return (
        <View>
            <Text>I am a cat and my name is {name} and I am {isHungry ? "hungry" : "not hungry"}.</Text>
            <Button
                onPress={updateIsHungry}
                disabled={!isHungry}
                title={isHungry ? "gib me" : "thenk"}
            />
        </View>
    )
}