function goFan () {
    while (true) {
        angle = angle + 5
        if (angle == 30) {
            basic.pause(2000)
            drip()
        }
        if (angle >= 105) {
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
    pins.digitalWritePin(DigitalPin.P1, 1)
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
function drip () {
    for (let index = 0; index < 17; index++) {
        angle = angle + 5
        servos.P0.setAngle(angle)
        basic.pause(150)
        angle = angle - 5
        servos.P0.setAngle(angle)
        basic.pause(150)
    }
}
function fanStart () {
    pins.digitalWritePin(DigitalPin.P1, 0)
}
let angle = 0
let start = false
start = false
angle = 15
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
        basic.pause(100)
    }
})
