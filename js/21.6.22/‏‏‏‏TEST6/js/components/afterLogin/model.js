export async function getMoreUsers(belowRole) {

    var requestOptions = {
        method: 'GET',
              };
      
     return fetch(`https://mira-webschool-80ba75.appdrag.site/api/auth/getMoreUsers?belowRole=${belowRole}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            // console.log(result);
            return result;
        })
        .catch(() => {
            return false})
}