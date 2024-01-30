import { StyleSheet, Text, View } from "react-native";
import FormLayout from "../../components/layouts/FormLayout";

const UnderDebrisForm = () => {
    return (
        <FormLayout>
            <View style={styles.header}>
                <Text style={styles.title}>Tanıdığım Enkaz Altında Formu</Text>
                <Text>Form bilgileri sistem yöneticileri tarafından onaylandıktan sonra Enkaz Altında Olanlar bölümünde görünecektir.</Text>
            </View>
        </FormLayout>
    );
};

const styles = StyleSheet.create({
    header: {
    },
    title: {
        fontWeight: '500',
        fontSize: 20,
    }
});

export default UnderDebrisForm;