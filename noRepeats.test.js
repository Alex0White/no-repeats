//const { exportAllDeclaration } = require('@babel/types');
//const { default: test } = require('node:test');
const noRepeats = require('./noRepeats');

test('aab should return 2 for 2 repeats', () => {

    expect(
        noRepeats('aab')
        
    ).toEqual(2)
});


test('aaa should return 0', () => {

    expect(
        noRepeats('aaa')
        
    ).toEqual(0)
});

test('aabb should return 8', () => {

    expect(
        noRepeats('aaa')
        
    ).toEqual(8)
});

test('abcdefa should return 3600', () => {

    expect(
        noRepeats('abcdefa')
        
    ).toEqual(3600)
});

test('abfdefa should return 2640', () => {

    expect(
        noRepeats('abfdefa')
        
    ).toEqual(2640)
});

test('zzzzzzzz should return 0', () => {

    expect(
        noRepeats('zzzzzzzz')
        
    ).toEqual(0)
});


test('a should return 1', () => {

    expect(
        noRepeats('a')
        
    ).toEqual(1)
});

test('aaab should return 0', () => {

    expect(
        noRepeats('aaab')
        
    ).toEqual(0)
});




test('aaabb should return 12', () => {

    expect(
        noRepeats('aaabb')
        
    ).toEqual(12)
});

