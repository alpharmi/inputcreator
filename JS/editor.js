var inputImageURLS = [
    "https://raw.githubusercontent.com/alpharmi/inputcreator/main/Assets/Y_Button.png",
    "https://raw.githubusercontent.com/alpharmi/inputcreator/main/Assets/X_Button.png",
    "https://raw.githubusercontent.com/alpharmi/inputcreator/main/Assets/A_Button.png",
    "https://raw.githubusercontent.com/alpharmi/inputcreator/main/Assets/B_Button.png",

    "https://raw.githubusercontent.com/alpharmi/inputcreator/main/Assets/Left_Stick_Click.png",
    "https://raw.githubusercontent.com/alpharmi/inputcreator/main/Assets/Left_Stick_Left.png",
    "https://raw.githubusercontent.com/alpharmi/inputcreator/main/Assets/Left_Stick_Up.png",
    "https://raw.githubusercontent.com/alpharmi/inputcreator/main/Assets/Left_Stick_Right.png",
    "https://raw.githubusercontent.com/alpharmi/inputcreator/main/Assets/Left_Stick_Down.png",

    "https://raw.githubusercontent.com/alpharmi/inputcreator/main/Assets/Right_Stick_Click.png",
    "https://raw.githubusercontent.com/alpharmi/inputcreator/main/Assets/Right_Stick_Left.png",
    "https://raw.githubusercontent.com/alpharmi/inputcreator/main/Assets/Right_Stick_Up.png",
    "https://raw.githubusercontent.com/alpharmi/inputcreator/main/Assets/Right_Stick_Right.png",
    "https://raw.githubusercontent.com/alpharmi/inputcreator/main/Assets/Right_Stick_Down.png",

    "https://raw.githubusercontent.com/alpharmi/inputcreator/main/Assets/Left_Trigger.png",
    "https://raw.githubusercontent.com/alpharmi/inputcreator/main/Assets/Left_Bumper.png",
    "https://raw.githubusercontent.com/alpharmi/inputcreator/main/Assets/Right_Trigger.png",
    "https://raw.githubusercontent.com/alpharmi/inputcreator/main/Assets/Right_Bumper.png"
]

var inputs = document.getElementById("inputs")

inputImageURLS.forEach(function(inputImageURL, index) {
    var input = document.createElement("div")
    input.className = "gridElement"
    inputs.appendChild(input)

    var inputImage = document.createElement("img")
    inputImage.className = "inputImage"
    inputImage.src = inputImageURL
    input.appendChild(inputImage)
})