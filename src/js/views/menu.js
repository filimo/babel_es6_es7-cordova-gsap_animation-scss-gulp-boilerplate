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
        this.views().showMenu()
        return false
    }

    _hideMenu() {
        this.views().showMenu()
        return false
    }
}

export default new Splash
