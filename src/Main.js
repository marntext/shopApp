import React, {useEffect, useState} from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Alert, TextInput } from 'react-native';
import productData from './product_data.json';

import { ProductCard } from './components';

const Main = (props) => {
    const [searchValue, setSearchValue] = useState("");
    const [displayList, setDisplayList] = useState([])

    const renderListItem = ({item}) => <ProductCard product={item} />

    useEffect(() => {
        // Alert.alert("MShop", "Welcome to MShop, have a nice shopping...");
        setDisplayList(productData)
    }, [])

    useEffect(() =>{
        const filteredValue = productData.filter(item => {
            const text = searchValue.toUpperCase();
            const productTitle = item.title.toUpperCase();

            return productTitle.indexOf(text) > -1;
        })
        setDisplayList(filteredValue)
    }, [searchValue])

    return (
        <SafeAreaView style= {{flex: 1}}>
            <View style={{flex: 1}}>
                <Text style={styles.banner}>MShop</Text>

                <View style={styles.searchBar}>
                    <TextInput 
                        placeholder= "Search..."
                        onChangeText= {(value) => setSearchValue(value)}
                    />    
                </View>

                <FlatList 
                    keyExtractor={(_, index) => index.toString()}
                    data={displayList}
                    renderItem= {renderListItem}
                    numColumns={2}
                    
                />
            </View>
        </SafeAreaView>    
    )
}

export default Main;
const styles = StyleSheet.create ({
    banner: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 50, 
        margin: 10,
        textAlign: 'center'
    },
    searchBar: {
        backgroundColor: '#eceff1',
        padding: 5,
        margin: 5,
        borderRadius:10,
    }
})

