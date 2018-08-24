import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    Dimensions,
    Button,

} from 'react-native';

const numColumns = 3;

const data = [
    {
        key: 1,
        name: '아메리카노 ice',
        price: '2,500 원',
        img_url: 'https://www.tlj.co.kr:7008/data/product/2016-2-18_event(5).jpg',
    },
    {
        key: 2,
        name: '카페라떼 hot',
        price: '3,500 원',
        img_url: 'https://www.tlj.co.kr:7008/data/product/2016-2-18_event(80).jpg',
    },
    {
        key: 3,
        name: '망고 요거트 스무디',
        price: '4,800 원',
        img_url: 'https://www.tlj.co.kr:7008/data/product/2016-2-18_event(10).jpg',
    },
    {
        key: 4,
        name: '카라멜 마끼야또 hot ',
        price: '3,800 원',
        img_url: 'https://www.tlj.co.kr:7008/data/product/2016-2-18_event(65).jpg',
    },
];

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
        numberOfElementsLastRow = numberOfElementsLastRow + 1;
    }

    return data;
};
export default class App extends React.Component {
    _onMenuPress = () => {
        console.log("menu selected!");
    };

    _onResultButtonPress = () => {
        console.log("result page");
    };

    _renderItem = ({item, index}) => {
        return (
            <TouchableOpacity onPress={this._onMenuPress}>
                <View style={styles.item}>
                    <Image
                        style={styles.img}
                        source={{uri: item.img_url}}
                    />
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>


                </View>
            </TouchableOpacity>
        );
    };


    render() {
        return (
            <View style={styles.container}>
                <Text>Cafe EDIYA 메뉴</Text>
                <FlatList
                    style={styles.main}
                    numColumns={numColumns}
                    data={formatData(data, numColumns)}
                    renderItem={this._renderItem}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this._onResultButtonPress}

                >
                    <Text style={{color:"#fff"}}> 주문서 보기 (0) </Text>
                </TouchableOpacity>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    header: {
        // flex: 1,
        height: 150,
        backgroundColor: '#74ffe7',
        justifyContent: 'center',
        alignItems: 'center',

    },
    main: {
        flex: 1,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:25,
        flex: 1,
        backgroundColor: '#fff',
    },
    img: {
        width: 80,
        height: 80,
    },
    item: {
        backgroundColor: '#f0f0f0',
        flex: 1,
        margin: 1,
        height: Dimensions.get('window').width / numColumns,
        width: Dimensions.get('window').width / numColumns,
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    button: {
        flex:1,
        height: 60,
        backgroundColor:'#3ae9d3',
    }


});
