import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const ProductCard = ({product}) => {
    const stockStatus = product.inStock ? 'in stock.' : 'out of stock.';
    const stockStatusColor = product.inStock ? 'green' : 'red';

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style= {styles.container}>
                <Image
                    source={{uri: product.imgURL}}style= {styles.image}
                />
                <View style= {{flex:1, justifyContent: 'space-between' }}>
                    <Text>{product.title}</Text>
                    <Text style={{fontWeight: 'bold'}}>{product.price}</Text>
                    <Text style={{ color: stockStatusColor }}>This Product is { stockStatus } </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export { ProductCard };

const styles=StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 10,
        borderColor: '#e0e0e0',
        
    },
    image: {
        height: Dimensions.get('window').height / 4,
        resizeMode: 'contain'
    }
})