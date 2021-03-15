# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* 
...
When the user presses the one button the App reads the onClick event handler of the button, which routes to the file actions/index.js reads the "addOne" function. This directs the program to read the case of ADD_ONE, this returns the spread state value with state.total adding on one.

* TotalDisplay shows the total plus 1.
