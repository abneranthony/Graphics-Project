# AP-CSP-graphics-project

A visual scene developed as part of the AP Computer Science Principles curriculum. This project focuses on the fundamentals of 2D systems and object manipulation.

Technical Overview:
This project uses the CodeHS JavaScript Graphics Library to render shapes on a digital canvas. Key programming concepts visualised include:
.
Object repersentation: Creating new Rectangles class with specific dimensions.

Method Utilization: Using .setPosition(), .setColor(), and add() to modify object attributes and render them to the UI.

Coordinate Geometry: Precise placement of elements within a 400x500 grid system.

Future Goals:
This project served as my introduction to Object-Oriented Programming. I am currently transitioning from JavaScript to Java in preparation for CS2 KAP, where I will apply these logic foundations to more complex data structures and backend development.

[Click here to view the live interactive demo on CodeHS!](https://codehs.com/share/id/tell-a-story-24TXyL/run)


*it might take a few seconds to load so please be patient!*


How to run on your own:

1. Copy the code in Final Project.js.
2. Paste it into the CodeHS Sandbox or any JavaScript environment that supports the CodeHS Graphics Library.
3. Press Run.

<details>
<summary><b>Click to view my full project reflections</b></summary>


Program Design, Function, and Purpose;
Identified User: The expected user is an individual looking for a digital visualization or a UI designer testing color.

Design Meeting Needs: The program's design meets the user's needs by using a layered approach; the background is appeared first, followed by foreground elements, ensuring a clear visual pyramid and a cohesive "scene" without overlapping errors.

Procedure Functionality;
What the Procedure Does: The identified procedure (drawScene1) acts as the primary maker for the visual environment.

Contribution: It contributes to the overall functionality by grouping multiple object commands into a single callable block. This makes the code organized and allows the program to initialize the entire UI at once rather than line-by-line in code.

Algorithm Development;
Student-Created Procedure: drawScene1()

Logic Used: This procedure uses sequencing. It executes commands in a specific top-down order: first defining the dimensions of a Rectangle, then setting its position, then its color, and finally using the add() function to push that object into the UI. Without this exact sequence, the object would be positioned incorrectly.

Algorithm Development: Iteration (Loops);
Execution Count: In the current version of the code, there is no loop, so it executes 0 times.

Infinite Loop Modification: To create an infinite loop, I could put the rectangle creation in a while(true) loop. Because the condition true never changes, the program would attempt to create and add rectangles until the browser's memory is done causing the program to crash.

Error and Testing;
Proposed Change: Change rect.setColor("Green"); to rect.setColor(Green); (remove the quotation marks).

Why it results in an Error: This would result in a ReferenceError. In JavaScript, "Green" is a String, but Green without quotes is a variable name. Since no variable named Green has been defined, the program will stop running because it doesn't know what value to assign to the color.

</details>
