function giveMeCat() {
    return 'cat'
}

test('giveMeCat returns the string of cat', () => {
    expect(giveMeCat()).toBe('cat')
})
// expect is a built-in Jest function, returns an object that can be used with matchers
// toBe is a matcher that tests for exact equality

test('object assignment', () => {
    const data = { one: 1 };
    data.two = 2;
    expect(data).toEqual({ one: 1, two: 2 })
})