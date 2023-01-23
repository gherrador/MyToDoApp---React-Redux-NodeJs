import axios from 'axios'

export const loginUser = async (user) => {   
    const url = "/login";
    let query = await axios.post(url, user)
    return query.data
}

export const registerUser = async (data) => {
    const url = `/signup`;
    let query = await axios.post(url, data)
    return query.data
}

export const logoutUser = async () => {
    const url = `/logout`
    let query = await axios.post(url)
    return query.data
}

export const getUser = async () => {    
    const url = `/user`
    let query = await axios.get(url)
    return query.data

}

