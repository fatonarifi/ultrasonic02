let R = 0
let strip = false
basic.showIcon(IconNames.Ghost)
let strip2 = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
let B = 255
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 30 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        strip = Math.randomBoolean()
        if (strip == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            basic.pause(800)
        }
        if (strip == false) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(800)
        }
    } else {
        let G = 0
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        R += 1
        B += -1
        strip2.showColor(neopixel.rgb(R, G, B))
    }
})
