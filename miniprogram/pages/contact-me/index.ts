import { getBanner, getMeta, sendMessage } from "../../clients/mxb.client"

// const app = getApp<IAppOption>()

Page({
    data: {
        meta: {},
        banner: {},
        name: '',
        email: '',
        message: '',
        loading: false,
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
    async onSubmit(e) {
        const value = e.detail.value;
        if (!value.name || !value.email || !value.message) {
            return wx.showToast({ title: '请先填写表单', icon: "none" });
        }
        if (this.data.loading) {
            return;
        }

        try {
            this.setData({ loading: true });
            await sendMessage(value.name, value.email, value.message);
            wx.showToast({ title: '发送成功' });
            this.setData({ name: '', email: '', message: '', loading: false });
        } catch (e) {
            console.log(e);
            wx.showToast({ title: '发送失败', icon: "none" });
            this.setData({ loading: false });
        }
    }
})
