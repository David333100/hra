input.onGesture(Gesture.ScreenUp, function () {
    kontrola_pre_pozastavenie_hry("abc", false)
})
input.onGesture(Gesture.ScreenDown, function () {
    kontrola_pre_pozastavenie_hry("abc", true)
})
input.onGesture(Gesture.TiltRight, function () {
	
})
function kontrola_pre_pozastavenie_hry (text: string, bool: boolean) {
    if (false) {
        game.pause()
    } else {
        game.resume()
    }
}
input.onGesture(Gesture.TiltLeft, function () {
	
})
basic.showString("Hru je nutne si nastavit")
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showString("Tuto akciu mozno urobit pomocou...")
basic.forever(function () {
	
})
loops.everyInterval(100, function () {
    if (game.isPaused()) {
    	
    }
})
