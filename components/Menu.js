import React from 'react'
import { StyleSheet, View } from 'react-native'

import UnderDebrisLink from './menuButtons/UnderDebrisLink';
import InformationLink from './menuButtons/InformationLink';
import HelpLink from './menuButtons/HelpLink';

import donation from '../assets/donation.png';
import home from '../assets/fi-sr-home.png';
import clothes from '../assets/fi-sr-package.png';
import utensils from '../assets/fi-sr-utensils.png';
import car from '../assets/fi-sr-car.png';
import search from '../assets/fi-sr-search-alt.png';
import building from '../assets/fi-sr-building.png';

const Menu = () => {
    return (
        <View style={styles.menu}>
            <UnderDebrisLink />
            <InformationLink title={'Bağış Yap'} img={donation} />
            <View style={styles.row}>
                <HelpLink title={'Konaklama Sağlayabilirim'} img={home} />
                <HelpLink title={'Giysi Sağlayabilirim'} img={clothes} />
            </View>
            <View style={styles.row}>
                <HelpLink title={'Gıda Sağlayabilirim'} img={utensils} />
                <HelpLink title={'İş Aracı Kullanabilirim'} img={car} />
            </View>
            <InformationLink title={'Enkaz Altında Olanlar'} img={search} />
            <InformationLink title={'Konaklama Sağlayanlar'} img={building} />
        </View>
    );
};

const styles = StyleSheet.create({
    menu: {
        gap: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default Menu;