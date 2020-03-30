import axios from 'axios'
export function request(config){
        const instance = axios.create({
            baseURL:'http://localhost:3001/api',
        })

    instance.interceptors.request.use(config=>{
    
        return config
    }),err=>{
        return err
    }

    instance.interceptors.response.use(res=>{
        return res
    },err=>{
        return err
    })


    return instance(config)
}
