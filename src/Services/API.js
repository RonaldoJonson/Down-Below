import axios from 'axios';

export default class SimpleRestAPI { 
    constructor(base_URL){
        this.BASE_URL = 'https://38d60yu5yl.execute-api.us-east-2.amazonaws.com/test/v1';
    }

    GetData(params, callback){
        this.SendRequest(
            "get",
            params === ""? this.BASE_URL : this.BASE_URL + params,
            callback
        );
    }

    PostData(params, body, callback){
        this.SendRequest(
            "POST",
            params === ""? this.BASE_URL : this.BASE_URL + params,
            callback,
            body,
        );
    }

    PutData(params, body, callback){
        this.SendRequest(
            "put",
            params === ""? this.BASE_URL : this.BASE_URL + params,
            callback,
            body,
        );
    }

    DeleteData(params, callback){
        this.SendRequest(
            "delete",
            params === ""? this.BASE_URL : this.BASE_URL + params,
            callback,
        );
    }

    async SendRequest(method, url, callback, body){       
        axios.request({
            method: method,
            data: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "Authorization": "Bearer " + localStorage.getItem("token"),
            },
            url: url
        }) 
        .then(response => {
            console.log(response);
            callback({
                status: response.status,
                data: response.data,
            });
        })
        .catch(err => {
            console.log(err);
            callback({
                status: err.status,
                data: err,
            });
        });
    }
}