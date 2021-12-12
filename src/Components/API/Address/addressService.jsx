import axios from "axios"

const baseURL = "jachai.com/customer/api/address"


export function Create(data) {
    const response = axios.post(baseURL + "/add", data)
    return response

}

export function GetAll() {
    const response = axios.get(baseURL)
    return response
}

export function GetSingle(title) {
    // const allData = GetAll()
    const response = axios.get(baseURL + "//:" + title)
    return response
}

export function Update(id, data) {
    const response = axios.put(baseURL + "/" + id, data)
    return response
}

export function Delete(title) {
    const response = axios.delete(baseURL + "/update/delete/:" + title)
    return response
}

