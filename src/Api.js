

import axios from "axios";


//https://api.github.com

const endpoints = {
    public: {
        getUser: "https://api.github.com/users/{username}"
    }
}


export const getUserByUsername = (username) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.github.com/users/${username}`).then(result => {
            return resolve(result.data)
        }).catch(err => {
            return reject(err)
        })
    })
}
