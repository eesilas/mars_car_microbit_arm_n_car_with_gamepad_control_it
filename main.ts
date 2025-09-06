radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        basic.showString("A")
        SuperBit.Servo(SuperBit.enServo.S6, 180)
    } else if (receivedString == "B") {
        SuperBit.Servo(SuperBit.enServo.S6, 0)
        basic.showString("B")
    } else if (receivedString == "C") {
        SuperBit.Servo(SuperBit.enServo.S1, 0)
        SuperBit.Servo(SuperBit.enServo.S3, 120)
        SuperBit.Servo(SuperBit.enServo.S5, 80)
    } else if (receivedString == "D") {
        SuperBit.Servo(SuperBit.enServo.S1, 0)
        SuperBit.Servo(SuperBit.enServo.S3, 90)
        SuperBit.Servo(SuperBit.enServo.S5, 80)
    } else {
    	
    }
    if (receivedString == "f") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        75,
        SuperBit.enMotors.M2,
        75
        )
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M3,
        75,
        SuperBit.enMotors.M4,
        75
        )
    } else if (receivedString == "b") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -75,
        SuperBit.enMotors.M2,
        -75
        )
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M3,
        -75,
        SuperBit.enMotors.M4,
        -75
        )
    } else if (receivedString == "r") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -75,
        SuperBit.enMotors.M2,
        -75
        )
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M3,
        -30,
        SuperBit.enMotors.M4,
        -30
        )
    } else if (receivedString == "l") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -30,
        SuperBit.enMotors.M2,
        -30
        )
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M3,
        -75,
        SuperBit.enMotors.M4,
        -75
        )
    } else if (receivedString == "s") {
        SuperBit.MotorStopAll()
    } else if (receivedString == "x") {
        SuperBit.MotorStopAll()
    } else if (receivedString == "y") {
        SuperBit.MotorStopAll()
    } else {
    	
    }
})
radio.setGroup(1)
SuperBit.Servo(SuperBit.enServo.S1, 0)
SuperBit.Servo(SuperBit.enServo.S3, 90)
SuperBit.Servo(SuperBit.enServo.S5, 80)
SuperBit.Servo(SuperBit.enServo.S6, 0)
