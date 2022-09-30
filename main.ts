radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        music.ringTone(440)
        led.plot(2, 3)
    }
    if (receivedNumber == 0) {
        music.rest(music.beat(BeatFraction.Sixteenth))
        led.unplot(2, 3)
    }
})
radio.setGroup(1)
radio.setTransmitPower(7)
let 送信数値 = 0
basic.showIcon(IconNames.Square)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        if (送信数値 == 0) {
            radio.sendNumber(1)
            送信数値 = 1
            led.plot(2, 1)
        }
    } else {
        if (送信数値 == 1) {
            radio.sendNumber(0)
            送信数値 = 0
            led.unplot(2, 1)
        }
    }
})
