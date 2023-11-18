# MrRobogersNeighborhood

<h3>By Ermek Abdrazakov</h3>

<p>This is a web application of Mr. Roboger's Neighborhood. This web application generates a list of values from 0 up to a user-inputted number with unique substitutions. For any number containing 1, 2, or 3, the application replaces it with "Beep!", "Boop!", or "Won't you be my neighbor?" respectively, adding a playful twist to number sequences.
_Click [here](http://127.0.0.1:5501/index.html?creditCardNumber=)_

## Technologies Used
* _HTML_
* _CSS_
* _JavaScript_

## Description

_This wed application created using HTML,CSS and JavaScript technologies._

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top level of the directory._
* _Right-click on `index.html`and select `Open with Live Server`._


## Test

```
##Describe: isStringNumeric()
Test1: "It should return true when input string contains only number"
Code: 
const inputTextTest1 = "4204"
isStringNumeric(inputTextTest1);
Expected Output: true  

Test2: "It should return false when input string contains non numeric symbols"
Code: 
const inputTextTest2 = "42a04"
isStringNumeric(inputTextTest2);
Expected Output: false

Test3: "It should return false when input string is empty"
Code: 
const inputTextTest3 = ""
isStringNumeric(inputTextTest3);
Expected Output: false

Test4: "It should return true when input string contains only numbers and spaces in the beginning and in the end of string"
Code: 
const inputTextTest4 = " 4204 "
isStringNumeric(inputTextTest4);
Expected Output: true

Describe getNumberFromInputString()
Test5: "It should return number from input string"
Code: 
const inputTextTest5 = "43"
getNumberFromInputString(inputTextTest5);
Expected Output: 43

Test6: "It should return null if string contains non numeric symbols"
Code: 
const inputTextTest6 = "43as"
getNumberFromInputString(inputTextTest6);
Expected Output: null

Test7: "It should return number from input string with empty spaces in the begging and ending"
Code: 
const inputTextTest7 = " 432 "
getNumberFromInputString(inputTextTest7);
Expected Output: 432

Test8: "It should return number from input string if input number starts from  0"
Code: 
const inputTextTest8 = "013"
getNumberFromInputString(inputTextTest8);
Expected Output: 13

Test9: "It should return null if string is empty"
Code: 
const inputTextTest9 = ""
getNumberFromInputString(inputTextTest9);
Expected Output: null

Describe creatingStringArray()
Test10: "It should return string array  of values from 0 to the number"
Code: 
const inputNumberTest10 = 3
creatingStringArray (inputNumberTest10);
Expected Output: ["0", "1", "2", "3"]

Test11: "It should return string array  with one value 0 if number is 0"
Code: 
const inputNumberTest11 = 0
creatingStringArray (inputNumberTest11);
Expected Output: ["0"]

Describe substituteArrayElement()
Test12: "It should return string array  with one value 0 if number is 0"
Code: 
const inputArrayTest12 = ["0"]
substituteArrayElement (inputArrayTest12);
Expected Output: ["0"]

Test13: "It should substitute string array  with 'Beep' for numbers that contain a 1"
Code: 
const inputArrayTest13 = ["0", "1"]
substituteArrayElement (inputArrayTest13);
Expected Output: ["0", "Beep!"]

Test14: "It should substitute string array  with 'Boop' for numbers that contain a 2"
Code: 
const inputArrayTest14 = ["0", "1", "2"]
substituteArrayElement (inputArrayTest14);
Expected Output: ["0", "Beep!", "Boop!"]

Test15: "It should substitute string array  with 'Won't you be my neighbor?' for numbers that contain a 3"
Code: 
const inputArrayTest15 = ["0", "1", "2", "3", "4", "5"]
substituteArrayElement (inputArrayTest15);
Expected Output: ["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5"]

Test16: "It should substitute string array from least to most important"
Code: 
const inputArrayTest16 = ["10", "12", "13", "23"]
substituteArrayElement (inputArrayTest16);
Expected Output: ["Beep!", "Boop!", "Won't you be my neighbor?", "Won't you be my neighbor?"]
```






## Known Bugs
* _TBD_

## License

_[MIT](https://en.wikipedia.org/wiki/MIT_License)_


Copyright (c) _2023_ _Ermek Abdrazakov_