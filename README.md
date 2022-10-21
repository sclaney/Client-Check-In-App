# Client-Check-In-App
An app that will take a Google Forms response and send it to the relevant clinician that their client has checked in.

---------------

Relational Psych was looking for an applicaiton that would let their clients sign in when they arrived at the waiting room for a session with their clinician, and have that clinician get a notification alerting them to their client's arrival. 

I built this using Google Apps Script since it was free and more customizable.

The application works as a Google Form displayed on an iPad in the waiting room. The user selects the name of their clinician and then submits their answer.

The application then takes that submitted name and pulls in data from a spreadhseet that acts as the database. It compares the submitted name to the names in the spreadsheet, and when it finds a match, it then looks up the corresponding email address in the spreadsheet and sends a simple email to that user.

As you may see from the commented out code, this originally was also able to send a text notification by using the email version of each clinician's phone number, but it sadly wasn't reliable so we had to switch to email.
