input.onGesture(Gesture.ScreenUp, function () {
    funkcie_mas_dobru_polohu("abc", true)
})
input.onGesture(Gesture.ScreenDown, function () {
    funkcie_mas_dobru_polohu("abc", false)
})
input.onGesture(Gesture.TiltRight, function () {
	
})
radio.onReceivedValue(function (name, value) {
	
})
function funkcie_mas_dobru_polohu (text: string, bool: boolean) {
    if (bool == false) {
        game.pause()
    } else {
        game.resume()
    }
}
input.onGesture(Gesture.TiltLeft, function () {
	
})
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.House)
    basic.clearScreen()
}
loops.everyInterval(10, function () {
    if (game.isRunning()) {
        if (input.isGesture(Gesture.Shake) || input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.TiltRight)) {
        	
        } else {
        	
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        basic.pause(5000)
    }
    while (!(input.isGesture(Gesture.Shake))) {
        basic.showString("Hru je nutne si nastavit")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showString("Tuto akciu mozno urobit pomocou...")
    }
    while (input.isGesture(Gesture.Shake)) {
        basic.clearScreen()
        basic.pause(5000)
    }
})
