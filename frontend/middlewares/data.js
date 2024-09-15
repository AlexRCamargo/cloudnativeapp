import axios from 'axios';

const server = 'http://${process.env.HOST}:${process.env.PORT}';

axios.defaults.baseURL = server;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export async function getData(ressource) {
    try {
        const { data } = await axios.get (ressource);
        return data;        
    }   catch (error) {
        throw 'Error while getting data: ${error}';        
    }
}
export async function postData(ressource, body) {
    try {
        await axios.post (ressource, body);
        return data;        
    }   catch (error) {
        throw 'Error while getting data: ${error}';        
    }
}
export async function putData(ressource, id, body) {
    try {
        await axios.put ('${ressource}/${id}', body);              
    }   catch (error) {
        throw 'Error while getting data: ${error}';        
    }
}
export async function deleteData(ressource, id) {
    try {
        await axios.delete ('${ressource}/${id}');            
    }   catch (error) {
        throw 'Error while getting data: ${error}';        
    }
}
