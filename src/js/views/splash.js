import $ from 'jquery'
import _ from 'underscore'

import View from './../View'
import tmpl from '../../html/splash.html'

let events = {
    'click .test': '_showMenu',
    'click .async': '_async',
    'click': '_hideMenu'
}

class Splash extends View {
    constructor() {
        super(tmpl, events)
    }

    _promise() {
        return new Promise((resolve, reject) => {
            _.delay(() => {
                resolve(this)
            }, 2000)
        }).then(() => {
            return this
        })
    }

    async _async() {
        let val2 = await $.getJSON('http://freegeoip.net/json/google.com')
        console.log(val2)
        let val1 = await this._promise()
        console.log(val1)
        console.log(1)
        return false
    }

    _showMenu() {
        this.views.showMenu()
        return false
    }

    _hideMenu() {
        this.views.hideMenu()
        return false
    }
}

export default new Splash
