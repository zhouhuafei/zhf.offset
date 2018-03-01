const getDomArray = require('zhf.get-dom-array');

function offset(element) {
    let top = 0;
    let left = 0;
    element = getDomArray(element)[0];
    while (element) {
        top += element.offsetTop;
        left += element.offsetLeft;
        element = element.offsetParent;
    }
    return {
        top: top,
        left: left,
    };
}

module.exports = offset;
