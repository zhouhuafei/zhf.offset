'use strict';

var getDomArray = require('zhf.get-dom-array');

function offset(element) {
    var top = 0;
    var left = 0;
    element = getDomArray(element)[0];
    while (element) {
        top += element.offsetTop;
        left += element.offsetLeft;
        element = element.offsetParent;
    }
    return {
        top: top,
        left: left
    };
}

module.exports = offset;