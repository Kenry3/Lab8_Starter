// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('if 858-539-3817 is phone number', () => {
    expect(functions.isPhoneNumber('858-539-3817')).toBe(true);
});
test('if 858-539-3227 is phone number', () => {
    expect(functions.isPhoneNumber('858-539-3227')).toBe(true);
});
test('if 88-539 is phone number', () => {
    expect(functions.isPhoneNumber('88-539')).toBe(false);
});
test('if 85833 is phone number', () => {
    expect(functions.isPhoneNumber('85833')).toBe(false);
});
test('if email yay023@gmail.com is valid', () => {
    expect(functions.isEmail('yay@gmail.com')).toBe(true);
});
test('if email yay023@gail.com is valid', () => {
    expect(functions.isEmail('y@gail.com')).toBe(true);
});
test('if email yay023gmail.com is valid', () => {
    expect(functions.isEmail('yay023gmail.com')).toBe(false);
});
test('if email yay023gmail is valid', () => {
    expect(functions.isEmail('yay023gmail')).toBe(false);
});
test('if password is strong', () => {
    expect(functions.isStrongPassword('asdfaA')).toBe(true);
});
test('if password is strong', () => {
    expect(functions.isStrongPassword('aaAA212A')).toBe(true);
});
test('if password is strong', () => {
    expect(functions.isStrongPassword('aa')).toBe(false);
});
test('if password is strong', () => {
    expect(functions.isStrongPassword('1234')).toBe(false);
});
test('if date is valid', () => {
    expect(functions.isDate('12/12/2003')).toBe(true);
});
test('if date is valid', () => {
    expect(functions.isDate('12/12/2203')).toBe(true);
});
test('if date is valid', () => {
    expect(functions.isDate('12/122003')).toBe(false);
});
test('if date is valid', () => {
    expect(functions.isDate('12/12/22003')).toBe(false);
});
test('if hex color is valid', () => {
    expect(functions.isHexColor('FFFFFF')).toBe(true);
});
test('if hex color is valid', () => {
    expect(functions.isHexColor('FAFFFF')).toBe(true);
});
test('if hex color is valid', () => {
    expect(functions.isHexColor('FFFF')).toBe(false);
});
test('if hex color is valid', () => {
    expect(functions.isHexColor('FF23F')).toBe(false);
});