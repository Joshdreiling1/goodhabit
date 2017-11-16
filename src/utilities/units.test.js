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
    expect(functions.firstName('')).toEqual("Please insert first name")
    expect(functions.firstName('Scott')).toEqual('Scott')
})

test('lastName should return a last name', function() {
    expect(functions.lastName('')).toEqual("Please insert last name")
    expect(functions.lastName('Young')).toEqual('Young')
})

test('username should return a username', function() {
    expect(functions.username('')).toEqual("Please insert username")
    expect(functions.username('scottisyoung')).toEqual('scottisyoung')
})

// test('About should return 50 characters or more', function() {
//     expect(functions.about(['hi'])).toEqual(false)
//     expect(functions.about(['hi how are you I would love to get to know more about who you are as a person'])).toEqual(true)
// })

test('about should return text', function() {
    expect(functions.about('')).toEqual("Please insert something about yourself")
    expect(functions.about('hi how are you')).toEqual('hi how are you')
})