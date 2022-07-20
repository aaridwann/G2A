import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Fetch from '../Hooks/Fetch'
import Video from 'react-native-video';
// import Video from 'react-native';

export default function Details({ route, navigation }) {
    const { data } = route.params
    const [dataResult, setDataResult] = useState({})
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(true)

    const url = 'https://itunes.apple.com/search?term=' + data.trackName + '&media=movie'

    useEffect(() => {
        Fetch(url, dataResult, setDataResult, setMessage, loading, setLoading)
    }, [])

    { !loading && console.log(dataResult[0].previewUrl) };
    console.log(loading);
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1, height: 400, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
                {!loading &&
                    <Video
                        source={{uri:`${dataResult[0].previewUrl}`}}                  // the video file
                        // paused={false}                  // make it start    
                        // style={styles.backgroundVideo}  // any style you want
                        repeat={true}                   // make it a loop
                    />
                }

            </View>
            <ScrollView style={{ alignContent: 'center', flex: 1, backgroundColor: 'white', paddingHorizontal: 20, height: 200 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>About the movie</Text>
                <Text style={{ textAlign: 'justify' }}>{data.longDescription}</Text>
            </ScrollView>
        </ScrollView>

    )
}
