def on_button_pressed_a():
    bitbot.led_rainbow()
    while(line % 2 == 0):
        while bitbot.read_line(BBLineSensor.LEFT) == 0:
            bitbot.move(BBMotor.LEFT, BBDirection.FORWARD, 20)
            bitbot.move(BBMotor.RIGHT, BBDirection.FORWARD, 5)
        while bitbot.read_line(BBLineSensor.RIGHT) == 0:
            bitbot.move(BBMotor.RIGHT, BBDirection.FORWARD, 20)
            bitbot.move(BBMotor.LEFT, BBDirection.FORWARD, 5)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global line
    line += 1
    bitbot.set_led_color(0xFF0000)
    bitbot.goms(BBDirection.REVERSE, 40, 400)
input.on_button_pressed(Button.B, on_button_pressed_b)

line = 0
bitbot.select_model(BBModel.XL)
line = 0
bitbot.led_brightness(20)
bitbot.set_led_color(0xFF0000)