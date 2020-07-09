input.onButtonPressed(Button.A, function () {
    if (x < 0) {
        if (x < 0) {
            led.unplot(x, y)
            x += -1
            led.plot(x, y)
        } else {
            led.unplot(x, y)
            y += -1
            x = 0
            led.plot(x, y)
        }
    } else {
        x = 0
        y = 0
        led.plot(x, y)
    }
})
input.onButtonPressed(Button.B, function () {
    if (y <= 4) {
        if (x < 4) {
            led.unplot(x, y)
            x += 1
            led.plot(x, y)
        } else {
            led.unplot(x, y)
            y += 1
            x = 0
            led.plot(x, y)
        }
    } else {
        x = 4
        y = 4
        led.plot(x, y)
    }
})
let x = 0
let y = 0
y = 0
x = 2
led.plot(x, y)
basic.forever(function () {
	
})
