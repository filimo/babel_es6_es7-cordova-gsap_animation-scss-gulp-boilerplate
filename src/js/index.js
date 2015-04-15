import $ from 'jquery'

import Views from './views'

$.event.props.push('touches')

$(document).on('touchmove', function(ev) {
    ev.preventDefault()
})



