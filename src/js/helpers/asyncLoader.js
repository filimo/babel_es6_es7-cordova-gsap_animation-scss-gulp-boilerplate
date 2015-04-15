define(function(require){
    var $ = require('jquery'),
        _ = require('underscore')

    var AsyncLoader = function(url){
        this.url = url
    }

    _.extend(AsyncLoader.prototype, {
        _google: null,

        _success: function(dfd) {
            this._google = google
            dfd.resolve(this._google)
        },

        _fail: function(dfd) {
            requirejs.undef(this.url)
            dfd.reject(this)
        },

        _loadAPI: function(dfd) {
            require([this.url],
                this._success.bind(this, dfd),
                this._fail.bind(this, dfd)
            )
            return dfd.promise()
        },
        loadAPI: function() {
            return $.Deferred(function(dfd) {
                this._google?dfd.resolve(this._google): this._loadAPI(dfd)
            }.bind(this)).promise()
        }
    })

    return AsyncLoader
})