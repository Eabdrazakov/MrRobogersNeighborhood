# MrRobogersNeighborhood

<h3>By Ermek Abdrazakov</h3>

<p>This is a web application of Mr. Roboger's Neighborhood. This web application generates a list of values from 0 up to a user-inputted number with unique substitutions. For any number containing 1, 2, or 3, the application replaces it with "Beep!", "Boop!", or "Won't you be my neighbor?" respectively, adding a playful twist to number sequences.
_[Click](https://github.com/Eabdrazakov/MrRobogersNeighborhood)_

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
Describe: createNumber()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: createNumber(7);
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7]

Test: "It should replace numbers that contain a "1" with "Beep"
Code: createNumber(1)
Expected Output: [0,"Beep"]

Test: "It should replace numbers that contain a "2" with "Boop"
Code: createNumber(2)
Expected Output: [0, "Beep", "Boop"]

Test: "It should replace numbers that contain a "3" with "Won't you be my neighbor?"
Code: createNumber(3)
Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor?]

Test: "test for Hierarchy of Substitutions. The number 12 should be replaced with "Boop!"."
Code: createNumber(12)
Expected Output: [0, 'Beep', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep', 'Beep', 'Boop!']

Test: "test for Hierarchy of Substitutions. The number 13 should be replaced with "Won't you be my neighbor?"."
Code: createNumber(13)
Expected Output: [0, 'Beep', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep', 'Beep', 'Boop!', "Won't you be my neighbor?"]

Test: "test for Hierarchy of Substitutions. The number 123 should be replaced with "Won't you be my neighbor?"."
Code: createNumber(123)
Expected Output: [0, 'Beep', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep', 'Beep', 'Boop!', "Won't you be my neighbor?".........123: "Won't you be my neighbor?"]

Test: "test for number 8"
Code: createNumber(8)
Expected Output: [0, 'Beep', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8]
```






## Known Bugs
* _TBD_

## License

_[MIT](https://en.wikipedia.org/wiki/MIT_License)_


Copyright (c) _2023_ _Ermek Abdrazakov_