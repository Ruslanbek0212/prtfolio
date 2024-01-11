import { useCallback } from 'react'

export default function Api() {
    const request = useCallback( async ( url, method = "GET", body = null, headers = { 'Content-type': 'application/json'}) => {
        try {
           const response = await fetch( url, { method, body, headers }) 
           if (!response.ok) {
            console.log('xatolik yuz berdi')
            throw new Error ('xatolik bor')
           }
           const data = await response.json()
        //    console.log(data)
           return data
        } catch (error) {
            console.log(error)
        }
    }, [])
    return request
}
