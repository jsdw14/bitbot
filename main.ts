input.onButtonPressed(Button.A, function () {
    bitbot.ledRainbow()
    while (line % 2 == 0) {
        while (bitbot.readLine(BBLineSensor.Left) == 0) {
            bitbot.move(BBMotor.Left, BBDirection.Forward, 20)
            bitbot.move(BBMotor.Right, BBDirection.Forward, 5)
        }
        while (bitbot.readLine(BBLineSensor.Right) == 0) {
            bitbot.move(BBMotor.Right, BBDirection.Forward, 20)
            bitbot.move(BBMotor.Left, BBDirection.Forward, 5)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    line += 1
})
input.onButtonPressed(Button.B, function () {
    line += 1
    bitbot.setLedColor(0xFF0000)
    bitbot.goms(BBDirection.Reverse, 40, 400)
})
let line = 0
bitbot.select_model(BBModel.XL)
line = 0
bitbot.ledBrightness(20)
bitbot.setLedColor(0xFF0000)
basic.forever(function () {
    basic.showNumber(line)
})
