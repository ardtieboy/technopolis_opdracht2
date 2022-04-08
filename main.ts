input.onButtonPressed(Button.A, function () {
    teller = 0
})
input.onButtonPressed(Button.B, function () {
    teller += 1
})
let teller = 0
teller = 0
basic.forever(function () {
    basic.showNumber(teller)
})
