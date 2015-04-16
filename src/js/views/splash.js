import View from './../View'
import tmpl from '../../html/splash.html'

let events = {
    'click button': '_showMenu',
    'click': '_hideMenu'
}

class Splash extends View {
    constructor() {
        super(tmpl, events)
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
