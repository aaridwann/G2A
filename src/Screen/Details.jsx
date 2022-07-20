import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import Fetch from '../Hooks/Fetch'
import { Video } from 'expo-av'

export default function Details({ route, navigation }) {
    const { data } = route.params
    const [dataResult, setDataResult] = useState({})
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(true)

    const url = 'https://itunes.apple.com/search?term=' + data.trackName + '&media=movie'

    useEffect(() => {
        Fetch(url, dataResult, setDataResult, setMessage, loading, setLoading)
    }, [])
console.log(data);
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
            {/* Top */}
            <View style={{padding:10, flex: 1, backgroundColor: 'black', borderBottomColor: 'white', borderBottomWidth: 1, paddingBottom: 10, flexDirection: 'row' }}>
                <Image
                    style={{ marginRight: 20, width: 80, height: 115, }}
                    source={{
                        uri: `${data.artworkUrl100}`,
                    }}
                />
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold', color: 'white', width: 190, overflow: 'hidden', flexWrap: 'nowrap' }} >{data.trackName}</Text>
                    {/* <Text style={{ color: 'white' }}>{data.primaryGenreName}</Text> */}
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>{data.contentAdvisoryRating}</Text>
                </View>
            </View>

            {/* VideoPalyer */}
            <View style={{ flex: 1, height: 300, justifyContent: 'center', alignItems: 'center' }}>
                {loading ? <Text>Loading...</Text> :
                    <Video
                        style={{ justifyContent: 'center', alignItems: 'center', flex: 1, alignSelf: 'stretch' }}
                        source={{ uri: dataResult[0].previewUrl }}
                        useNativeControls
                        resizeMode='contain'
                    />
                }
            </View>

            {/* Description */}
            <ScrollView style={{ borderTopWidth: 1, paddingVertical: 20, borderTopColor: 'white', paddingTop: 20, marginTop: 20, alignContent: 'center', flex: 1, paddingHorizontal: 20, height: 200 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>About the movie</Text>
                <Text style={{ color: 'white', textAlign: 'justify' }}>{data.longDescription}</Text>
            </ScrollView>
        </ScrollView>

    )
}
