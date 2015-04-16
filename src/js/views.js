import $ from 'jquery'
import _ from 'underscore'
import TweenLite from 'gsap'

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
        TweenLite.to(splash.el, .3, {x: '30%'})
    }

    hideMenu() {
        TweenLite.to(splash.el, .3, {x: '0%'})
    }
}

export default new Views