import axios from "axios"
import { useEffect, useState } from "react"

const baseURL = "https://jirabo.com/api/category"


export function Create(data) {
    const response = axios.post(baseURL, data)
    return response

}

export async function GetAll() {
    const respose = await axios.get(baseURL)
    return respose
}

export function GetSingle(id) {
    // const allData = GetAll()
    const response = axios.get(baseURL + "/" + id)
    return response
}

export function Update(id, data) {
    const response = axios.put(baseURL + "/" + id, data)
    return response
}

export function Delete(id) {
    const response = axios.delete(baseURL + "/" + id)
    return response
}

