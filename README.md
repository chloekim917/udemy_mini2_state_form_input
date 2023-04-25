Exercise: Using State with Form Inputs
You're working on a text messaging app and your task is to validate the text entered by a user whilst the user is typing.

If the text message entered is valid (for this example: if it's at least 3 characters long), the text "Valid message" should be displayed below the input field. If it's invalid (i.e., shorter than 3 characters), the text "Invalid message" should be displayed.

This image shows how the finished app should look like when an invalid message (i.e., too short) is entered:


And here's the same app with a valid message entered:


To achieve this result, you should store the current message validity (e.g., the string "Invalid" or "Valid") in some state value. That state value must be updated every time the input value changes. You therefore must add a fitting event listener that triggers the code that updates the state.

To derive the proper state value (i.e., whether it should be "Invalid" or "Valid"), you could use this if-condition:

if (value.trim().length < 3) {
  // Todo: Update state to say "Invalid"
} else {
  // Todo: Update state to say "Valid"
}
Of course, you must also output the state value as part of the App component's JSX code so that either "Invalid message" or "Valid message" is displayed.