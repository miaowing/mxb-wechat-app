import { getBanner, getMeta } from "../../clients/mxb.client"

// const app = getApp<IAppOption>()

Page({
    data: {
        meta: {},
        banner: {},
    },
    async onLoad() {
        await this.getBanner();
        await this.getMeta();
    },
    async getMeta() {
        const meta = await getMeta();
        this.setData({ meta });
    },
    async getBanner() {
        const banner = await getBanner('contact-me');
        this.setData({ banner });
    },
})
