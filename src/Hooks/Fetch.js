import axios from 'axios'

export default async function Fetch(url, data, setData, setMessage, loading, setLoading) {
    setLoading(true)
    try {
        const res = await axios.get(url)
        setData(res.data.results)
    } catch (error) {
        setMessage(error)
    }
    setLoading(false)
}
