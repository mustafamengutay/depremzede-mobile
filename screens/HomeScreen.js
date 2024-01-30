import { Button } from 'react-native';
import Header from '../components/Header';
import AppLayout from '../components/layouts/AppLayout';
import Menu from '../components/Menu';

const HomeScreen = ({ navigation }) => {
    return (
        <AppLayout>
            <Header />
            <Menu />
            <Button title='Click' onPress={() => navigation.navigate('UnderDebrisForm')} />
        </AppLayout>
    );
};

export default HomeScreen;