import { Text, Image, StyleSheet, Pressable, View } from "react-native"
import { useNavigation } from "@react-navigation/native";



const ContactListItem = ({user}) => {
    const navigation = useNavigation()
    return (
        <Pressable onPress={() => {}} style={styles.container}>
            <Image 
                source={{uri: user.image}}
                style={styles.image}
            />
            <View style={styles.content}>
                <Text style={styles.name}>{user.name}</Text>
                <Text numberOfLines={2} style={styles.subTitle}>{user.status}</Text>
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
        alignItems: 'center'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10
    },
    content: {
        flex: 1,
        borderBottomColor: 'lightgray',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5
    },
    name: {
        flex: 1,
        fontWeight: 'bold'
    },
    subTitle: {
        color: 'gray'
    }
})
export default ContactListItem