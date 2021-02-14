input.onButtonPressed(Button.A, function () {
    angle = Math.max(15, angle - 5)
    pins.servoWritePin(AnalogPin.P0, angle)
    led.stopAnimation()
})
input.onButtonPressed(Button.B, function () {
    angle = Math.min(100, angle + 5)
    pins.servoWritePin(AnalogPin.P0, angle)
    led.stopAnimation()
})
let angle = 0
angle = 15
pins.servoWritePin(AnalogPin.P0, angle)
basic.forever(function () {
    basic.showNumber(angle)
})
