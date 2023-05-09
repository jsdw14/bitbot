input.onButtonPressed(Button.A, function () {
    bitbot.ledRainbow()
    basic.showIcon(IconNames.Happy)
    while (true) {
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
bitbot.select_model(BBModel.XL)
let line = 0
bitbot.ledBrightness(20)
bitbot.setLedColor(0xFF0000)
basic.showIcon(IconNames.Duck)
