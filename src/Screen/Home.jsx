import React, { useEffect, useState } from 'react'
import { FlatList, Image, ScrollView, Text, TouchableHighlight, View } from 'react-native'
import Fetch from '../Hooks/Fetch'
import { Icon } from 'react-native-elements'

export default function Home({ navigation }) {
    const url = 'https://itunes.apple.com/search?term=marvel&entity=movie&limit=4'
    const [limit, setLimit] = useState(2)
    const [data, setData] = useState([])
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        Fetch(url, data, setData, setMessage, loading, setLoading)
    }, [])


    const renderItem = ({ item }) => (
        <View style={{ borderBottomWidth: 1, paddingVertical: 10, borderBottomColor: 'red', justifyContent: 'flex-start', height: 140, paddingHorizontal: 30, alignItems: 'center', width: 370, display: 'flex', flexDirection: 'row' }}>
            <Image
                style={{ marginRight: 20, width: 80, height: 115, }}
                source={{
                    uri: `${item.artworkUrl100}`,
                }}
            />
            <View>
                <Text style={{ fontWeight: 'bold', width: 190, overflow: 'hidden', flexWrap: 'nowrap' }} >{item.trackName}</Text>
                <Text>{item.primaryGenreName}</Text>
                <Text style={{ fontWeight: 'bold' }}>{new Date(item.releaseDate).toDateString()}</Text>
            </View>
            <Icon name="chevron-forward-outline"
                type='ionicon'
                onPress={() => navigation.navigate('Details', { data: item })}
            />
        </View>
    );
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                data={data}
                renderItem={renderItem}
            />
            <Text>Home</Text>
        </View>
    )
}
