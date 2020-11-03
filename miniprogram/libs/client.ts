import { Variables } from "../interfaces/variables.interface";

const url = 'https://mxb.cc';

export async function query(query: string, variables?: Variables): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
        wx.request({
            url: `${url}/api`,
            data: { query, variables },
            method: 'POST',
            success(res) {
                resolve((res.data as any).data);
            },
            fail(e) {
                reject(e);
            }
        });
    })
}

export async function post(uri: string, data: any, options: any = {}) {
    return new Promise(((resolve, reject) => {
        wx.request({
            ...options,
            url: `${url}${uri}`,
            data,
            method: 'POST',
            success(res) {
                if (res.statusCode >= 400) {
                    return reject(new Error(res.data as any));
                }
                resolve((res.data as any));
            },
            fail(e) {
                reject(e);
            }
        });
    }))
}
