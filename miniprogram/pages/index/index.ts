import { getBanner, getGalleries, getMeta } from "../../clients/mxb.client"

// const app = getApp<IAppOption>()

Page({
    data: {
        meta: {},
        galleries: [] as any[],
        banner: {},
    },
    // 事件处理函数
    // bindViewTap() {
    //     wx.navigateTo({
    //         url: '../logs/logs',
    //     })
    // },
    async onLoad() {
        await this.getBanner();
        await this.getMeta();
        await this.getGalleries();
    },
    async getMeta() {
        const meta = await getMeta();
        this.setData({ meta });
    },
    async getGalleries() {
        const galleries = await getGalleries();
        this.setData({
            galleries: galleries.map(gallery => ({
                title: gallery.title,
                description: gallery.description,
                image: gallery.thumb.publicUrl,
            }))
        });
        console.log(this.data.galleries);
    },
    async getBanner() {
        const banner = await getBanner('homepage');
        this.setData({ banner });
    },
    bindAvatarTap() {
        wx.navigateTo({
            url: '../contact-me/index',
        })
    }
})
