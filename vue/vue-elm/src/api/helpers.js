import axios from 'axios'

const baseUrl = 'http://ustbhuangyi.com/sell/';

export function get(url) {
    return function (params={}) {
        return axios.get(baseUrl+url,{
            params
        }).then((res) => {
            const{errno,data} = res.data //后面加 .errno和 .data
            if(errno === 0) {
                return data
            }
        }).catch((e) => {
            console.log(e);
        }) 
    }
}