/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from 'vue'
/**
Concentra as requisicoes para a api
*/
export default class Req {
    endpoint: string;
    apiUrl: string;
    v = Vue as any;
    params: any;
    constructor({ endpoint, params }: { endpoint: string; params?: any }) {
        this.apiUrl = "https://www.mocky.io/v2/"
        this.endpoint = endpoint;
        this.params = params || {};
    }

    paramsToString() {
        let link = '';
        for (const key in this.params) {
            if (link != "") {
                link += "&";
            }
            link += key + "=" + this.params[key];
        }
        return link;
    }


    get(opt?: any): Promise<JSON> {
        const options = opt || {};

        // return res;
        return new Promise((resolve, reject) => {
            const res = this.v.http.get(this.apiUrl + this.endpoint + '?' + this.paramsToString(), options);
            this.error(res);
            res.then((r: any) => {
                resolve(JSON.parse(r.bodyText))
            }).catch(reject)
        });
    }

    error(response: Promise<any>) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        response.then((res: Response) => {
            return res;

        }, error => {
            /* 
            Redirecionar para deslogar se houvesse login
            
            this.v.root.route.push({
                path: '/logout'
            }) */
        })
    }
}
