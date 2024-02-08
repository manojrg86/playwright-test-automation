import test, { request } from "@playwright/test";

export default class ApiHelpers{

    constructor(){

    }

    private async newApiContext(){
        let apiContext= await request.newContext({
            baseURL: 'my-baseurl',
            extraHTTPHeaders:{
                'Accept':'applicationjson',
                'Authorization':'token'
            }
        })

        return apiContext;
    }

    public async retireveDataFromApi(){
        let data= await test.step('Get data from Api', async()=>{
            let apiContext= await this.newApiContext();
            let response=await apiContext.get('/endpoint');

            return response.json();
        });
        return data;
    }
}