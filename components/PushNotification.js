import axios from 'axios';
const generatePushToken = (to, title, body, data) => {
    axios({
        url: 'https://exp.host/--/api/v2/push/send',
        method:'post',
        headers:{
            "Accept":"application/json", 
            "Accept-Encoding":"gzip, deflate",
            "Content-Type":"application/json"
        },
        data:{
            "to":to,
            "title":title,
            "body": body,
            "data": data
        }
    }).then(response => {
        console.log(response); 
    }).catch(error => {
        console.log(error);
    })
}

export default generatePushToken;