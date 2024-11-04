export const base_url = 'https://nextgen-backend-jet.vercel.app/'

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