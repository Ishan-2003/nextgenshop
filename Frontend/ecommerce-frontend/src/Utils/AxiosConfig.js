export const base_url = 'http://localhost:5000/api/'

const getTokenFromLocaStorageUser = localStorage.getItem('User')?JSON.parse(localStorage.getItem('User')):null;

export const authConfig = {
    headers:{
        authorization: `Bearer ${
        getTokenFromLocaStorageUser !== null ? getTokenFromLocaStorageUser.token:''
        }`,
        Accept : 'application/json'
    },
}