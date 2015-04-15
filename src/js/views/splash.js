import View from './../View'
import tmpl from '../../html/splash.html'
require('gsap')

let events = {
    'click button': '_showMenu',
    'click': '_hideMenu'
}

class Splash extends View {
    constructor() {
        super(tmpl, events)
    }

    _showMenu() {
        TweenLite.to(this.el, .3, {x: '30%'})
        console.log('click')
        return false
    }

    _hideMenu() {
        TweenLite.to(this.el, .3, {x: '0%'})
        console.log('click')
        return false
    }
}

export default new Splash
