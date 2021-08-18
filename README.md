# Hand Sign Interpreter
The app was is made using CodeSandBox and is based on ReactJS. It helps the user to know the meaning of a few Hand sign Emojis with ease.
## Working
1. The user can pass input in two ways, either by entering the hand sign in the input box or by clicking one of the symbols.
1. If the user enters a hand sign in the input box, the app calls userInputHandler function and passes the event along with it.
1. In the function userInputHandler the input is read by the app and the respective value in searched in the object dictionary. If the match is found the corresponding meaning is set and is displayed to the user using useState. If the value is not found the meaning is set to not found.
1. If the user clicks on one of the hand sign the app calls signClickHandler function and passes the variable sign along with it.
1. In the signClickHandler function the the corresponding meaning to the sign is set to meaning and is displayed to the user.  