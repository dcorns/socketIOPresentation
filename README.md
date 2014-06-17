socketIOPresentation
====================
Firewall Setup: Make sure port 3000 is set to allow traffic on public

This is a reveal presentation allowing allowing a master page to control the flow of slides on all the other clients using the index page.

It can be used for any presentation by changing or adding section elements. The amount of sections and fragment classes in the index.html and master.html must be of equal number for it to work right. While reveal includes a presenter's notes function I chose to put the notes in master.html so that as I changed each slide in the master containing the notes, it would also change the index.html page containing the presentation.

This app can be used to just project the slides, or audience participants can log into port 3000 on the host machine to bring up the slides on their own computer. They can then look through the slides, but each time the presenter updates the slides, all the client slides will sync up with the master page.

index.html and master.html are stored in /app/views
images and other resourses are stored in /public

To start the presentation: node server