
export default class RestController{
    
    url;
    constructor(URL){
        this.url = URL;
    }


    post(subUrl, body){
        console.log('POST', subUrl, body)
        return this.fetch(subUrl, {
            method: "POST",
            body: JSON.stringify(body)
        })
    }

    get(subUrl){
        return this.fetch(subUrl, {
            method: "GET"
        })
    }


     async fetch(suburl, option){
        console.log(this.url+suburl);
        const response = await fetch(this.url+suburl, {
            headers: {
                'Content-Type': 'application/json'
            },
            ...option
        });

        if(response.ok){
            console.log(response);
            const res = await response.json();
            console.log("reseive data from server ", res)
            return res;
        } else {
            const res = await response.json();
            console.log("Error reseive data from server ", res.code, res.error);
            return Promise.reject(res.code);
        }
    }

}