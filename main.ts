function goFan () {
    while (true) {
        angle = angle - 5
        if (angle <= 100) {
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
function fanShake () {
    for (let index = 0; index < 17; index++) {
        angle = angle + 3
        servos.P0.setAngle(angle)
        basic.pause(100)
        angle = angle - 3
        servos.P0.setAngle(angle)
        basic.pause(100)
    }
}
function fanStop () {
    pins.digitalWritePin(DigitalPin.P1, 1)
}
input.onButtonPressed(Button.B, function () {
    start = false
})
function goDip () {
    while (true) {
        angle = angle + 5
        if (angle >= 145) {
            break;
        }
        servos.P0.setAngle(angle)
        basic.pause(200)
    }
    led.stopAnimation()
}
function dipShake () {
    for (let index = 0; index < 20; index++) {
        angle = angle + 10
        servos.P0.setAngle(angle)
        basic.pause(100)
        angle = angle - 10
        servos.P0.setAngle(angle)
        basic.pause(100)
    }
}
function fanStart () {
    pins.digitalWritePin(DigitalPin.P1, 0)
}
let angle = 0
let start = false
start = false
// 70
angle = 100
fanStop()
pins.servoWritePin(AnalogPin.P0, angle)
basic.forever(function () {
    basic.showNumber(angle)
})
basic.forever(function () {
    while (start == true) {
        goDip()
        basic.pause(1000)
        goFan()
        basic.pause(100)
        fanStart()
        basic.pause(3000)
        fanStop()
        basic.pause(1000)
    }
})
