Component({
    properties: {
        src: {
            type: String,
            value: '',
        },
        width: {
            type: String,
            value: '60'
        },
        height: {
            type: String,
            value: '60'
        },
    },
    methods: {
        onTap() {
            wx.navigateTo({
                url: '../../pages/index/index',
            })
        },
    }
})
