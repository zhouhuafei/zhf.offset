const offset = require('../dist/index.min');

test(`获取body的left和top`, () => {
    console.log('left', offset('body').left); // 获取body的left
    console.log('top', offset('body').top); // 获取body的top
    expect(true).toEqual(true);
});
