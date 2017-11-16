const functions = require('./units');

describe ('updatePhone:', function() {
    test('phoneNumberFormat() should return correctNumber', function() {

        expect(functions.phoneNumberFormat('5053254145')).toEqual('505-325-4145')
    })
})


// test('validateEmail should return true if email is correct', function() {
//     expect(functions.validateEmail('scottisyoung@gmail.com')).toEqual(true)
//     expect(functions.validateEmail('adsf')).toEqual(false)
// })

test('firstName should return a first name', function() {
    expect(functions.firstName('')).toEqual(false)
    expect(functions.firstName('Scott')).toEqual(true)
})

test('lastName should return a last name', function() {
    expect(functions.lastName('')).toEqual(false)
    expect(functions.lastName('Young')).toEqual(true)
})

test('username should return a username', function() {
    expect(functions.username('')).toEqual(false)
    expect(functions.username('scottisyoung')).toEqual(true)
})

// test('About should return 50 characters or more', function() {
//     expect(functions.about(['hi'])).toEqual(false)
//     expect(functions.about(['hi how are you I would love to get to know more about who you are as a person'])).toEqual(true)
// })

test('about should return text', function() {
    expect(functions.about('')).toEqual(false)
    expect(functions.about('hi how are you')).toEqual(true)
})