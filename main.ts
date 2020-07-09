input.onButtonPressed(Button.A, function () {
    if (x >= 0) {
        led.unplot(x, y)
        x += -1
        led.plot(x, y)
    } else {
        x = 4
        led.plot(x, y)
    }
})
let x = 0
let y = 0
y = 0
x = 4
led.plot(x, y)
basic.forever(function () {
	
})
