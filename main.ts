function goFan () {
    while (true) {
        angle = angle + 5
        if (angle >= 100) {
            break;
        }
        servos.P0.setAngle(angle)
        basic.pause(200)
    }
    led.stopAnimation()
}
input.onButtonPressed(Button.A, function () {
    start = true
})
function fanStop () {
    pins.digitalWritePin(DigitalPin.P1, 0)
}
input.onButtonPressed(Button.B, function () {
    start = false
})
function goDip () {
    while (true) {
        angle = angle - 5
        if (angle <= 15) {
            break;
        }
        servos.P0.setAngle(angle)
        basic.pause(200)
    }
    led.stopAnimation()
}
function fanStart () {
    pins.digitalWritePin(DigitalPin.P1, 1)
}
let angle = 0
let start = false
start = false
angle = 15
pins.servoWritePin(AnalogPin.P0, angle)
basic.forever(function () {
    basic.showNumber(angle)
})
basic.forever(function () {
    while (start == true) {
        goDip()
        basic.pause(200)
        goFan()
        basic.pause(100)
        fanStart()
        basic.pause(5000)
        fanStop()
    }
})
