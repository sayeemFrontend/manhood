import axios from "axios"
import { useEffect, useState } from "react"

const baseURL = "jachai.com/customer/api/cart"


export function Create(data) {
    const response = axios.post(baseURL + "/add", data)
    return response

}

export function GetAll() {
    const [data, setData] = useState()
    useEffect(() => {
        async function getData() {
            const res = await axios.get(baseURL)
            setData(res.data)
        }
        getData()
    }, [])
    return data
}

export function GetSingle(id) {
    // const allData = GetAll()
    const response = axios.get(baseURL + "/" + id)
    return response
}

export function Update(id, data) {
    const response = axios.put(baseURL + "/update/quantity" + id, data)
    return response
}

export function Delete(id) {
    const response = axios.delete(baseURL + "/update/remove/" + id)
    return response
}

export function ClearAll() {
    const response = axios.delete(baseURL + "/update/clear")
    return response
}
