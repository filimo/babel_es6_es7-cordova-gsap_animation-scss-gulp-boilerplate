import $ from 'jquery'
import _ from 'underscore'
import views from './../../views'

export default class View {
    constructor(tmpl, events) {
        this.setTemplate(tmpl)
        this.setEvents(events)
    }

    setEvents(events) {
        _.each(events, (fn, key) => {
            var rule = key.match(/^(\S+)\s*(.*)$/)
            this.$el.on(rule[1], rule[2], this[fn].bind(this))
        })
    }

    setTemplate(tmpl) {
        this.$el = $(_.template(tmpl)({}))
        this.el = this.$el[0]
    }

    get views() {
        return views
    }
}