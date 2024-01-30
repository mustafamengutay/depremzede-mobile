import { Button, Text, View } from "react-native";


const Test = ({ navigation }) => {
    return (
        <View>
            <Text>Deneme</Text>
            <Button title='Home Screen' onPress={() => navigation.navigate('Home')} />
        </View>
    );
};

export default Test;