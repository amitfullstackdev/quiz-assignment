Fullstack React Quiz
Introduction
The following assignment will be used to test your React + Redux ability. React + Redux are core tools that are utilized everyday here and an sufficient knowledge is necessary.

In order to get a good understanding of where your skills lie, I've designed a simple web application that must utilize React + Redux. The application will be a simple quiz game that asks 10 questions and returns the success percentage afterwards.

It is crucial that Redux is used in the best way possible way in this application, and how it is used will be key to the success of the project.

Design
The web application should be composed of three main components:

Introduction screen
Question screen
Result screen
Introduction Screen
This screen simply states:

"Welcome to the Trivia Challenge!" "You will be presented with 10 True or False Questions" "Can you score 100%?"

...with a button prompting the user to begin the quiz.

Quiz screen
The quiz is a sequence of 10 screens all asking different True or False questions.

You can get quiz questions from the following free API: https://opentdb.com/

Each quiz question screen will look as follows:

Category: Sport (replace with your category name) Question: "Catching a catfish with your barehands is called Noodling? (replace with your question)

...and two buttons for True or False.

Result screen
This screen shows the result out of 10 of right answers that were scored with all the records of each answer.

For example:

....

Results

[+] True: Catching catfish with your barehands is called Noodling. [-] .....

With "+" meaning correct and "-" meaning incorrect.

Your score was 3/10.

This screen should also include a way to play again.

======================================================================================================

Steps to run the application 

1 - Git clone as per the URL
2 - Install all the dependencies using - yarn install
3 - Run the application using - yarn start
