import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:5000/"
  })



export const signNumber = async (number) => {
    try {
        const resp = await api.post('/r',number);
        localStorage.setItem('Authorization',resp.data)
        api.defaults.headers.common.authorization = `Bearer ${resp.data}`
        console.log(resp.data)
        return resp.data
    } catch (error) {
        console.log(error)
    }
}         

export const getQuote = async (data) => {
 
    
    try {
        const resp = await api.post('/quotation',{
            ...data,
            start_date:data.start_date.getTime(),
            end_date:data.end_date.getTime()
        })
        console.log(resp.data)
        return resp.data
    } catch (error) {
        console.log(error)
    }
}