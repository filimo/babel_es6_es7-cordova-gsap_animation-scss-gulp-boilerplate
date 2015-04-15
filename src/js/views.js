import $ from 'jquery'
import _ from 'underscore'
require('gsap')


import tmpl from '../html/views.html'

import View from './View'

import splash from './views/splash'

class Views extends View {
    constructor() {
        super(tmpl, {})

        $('body').append(this.$el)

        this.$el.append(splash.$el)
    }

    showMenu() {
        TweenLite.to(spash.el, .3, {x: '30%'})
        return false
    }

    hideMenu() {
        TweenLite.to(spash.el, .3, {x: '0%'})
        return false
    }
}

export default new Views