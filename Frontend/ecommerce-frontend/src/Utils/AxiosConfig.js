export const base_url = 'http://localhost:5001/api/'

const getTokenFromLocaStorageUser = localStorage.getItem('User')?JSON.parse(localStorage.getItem('User')):null;
// console.log('here')
export const authConfig = {
    headers:{
        authorization: `Bearer ${
        getTokenFromLocaStorageUser !== null ? getTokenFromLocaStorageUser.token:''
        }`,
        Accept : 'application/json'
    },
}