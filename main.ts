let lightson = false
input.onSound(DetectedSound.Loud, function () {
    lightson = !(lightson)
    if (lightson) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
