def on_received_string(receivedString):
    if receivedString == "A":
        basic.show_string("A")
        SuperBit.servo(SuperBit.enServo.S6, 180)
    elif receivedString == "B":
        SuperBit.servo(SuperBit.enServo.S6, 0)
        basic.show_string("B")
    elif receivedString == "C":
        SuperBit.servo(SuperBit.enServo.S1, 0)
        SuperBit.servo(SuperBit.enServo.S3, 120)
        SuperBit.servo(SuperBit.enServo.S5, 80)
    elif receivedString == "D":
        SuperBit.servo(SuperBit.enServo.S1, 0)
        SuperBit.servo(SuperBit.enServo.S3, 90)
        SuperBit.servo(SuperBit.enServo.S5, 80)
    else:
        pass
    if receivedString == "f":
        SuperBit.motor_run_dual(SuperBit.enMotors.M1, 200, SuperBit.enMotors.M2, 100)
        SuperBit.motor_run_dual(SuperBit.enMotors.M3, 100, SuperBit.enMotors.M4, 100)
    elif receivedString == "b":
        SuperBit.motor_run_dual(SuperBit.enMotors.M1, -100, SuperBit.enMotors.M2, -100)
        SuperBit.motor_run_dual(SuperBit.enMotors.M3, -100, SuperBit.enMotors.M4, -100)
    elif receivedString == "r":
        SuperBit.motor_run_dual(SuperBit.enMotors.M1, 0, SuperBit.enMotors.M2, 0)
        SuperBit.motor_run_dual(SuperBit.enMotors.M3, 100, SuperBit.enMotors.M4, 100)
    elif receivedString == "l":
        SuperBit.motor_run_dual(SuperBit.enMotors.M1, 100, SuperBit.enMotors.M2, 100)
        SuperBit.motor_run_dual(SuperBit.enMotors.M3, 0, SuperBit.enMotors.M4, 0)
    elif receivedString == "s":
        SuperBit.motor_stop_all()
    else:
        pass
radio.on_received_string(on_received_string)

radio.set_group(1)
SuperBit.servo(SuperBit.enServo.S1, 0)
SuperBit.servo(SuperBit.enServo.S3, 90)
SuperBit.servo(SuperBit.enServo.S5, 80)
SuperBit.servo(SuperBit.enServo.S6, 0)