Component({
    properties: {
        title: {
            type: String,
            value: '',
        },
        content: {
            type: String,
            value: '',
        },
        type: {
            type: String,
            value: 'simple',
        },
        button: {
            type: String,
            value: '',
        }
    },
    methods: {
        onTap(e) {
            this.triggerEvent('buttontap', e, { bubbles: true });
        },
    }
})
