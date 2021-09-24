# workdayScheduler

## "Schedule your time with ease."

### The Build, The User Experience. and Personal Comments



#### The Build

The HTML was pretty simple and straightforward, JQuery and vanilla JS for an easy jumbotron, div elements for each of the rows with columns on either side with classes than add up to 12 (per Bootstrap rules) with hours on the left and a save button on the right.  The CSS was already built for us, but I did change the text color to black, as the white was a little tough to read. The script was the only hurdle, and the time was included at the top (in a format that tells the user the current date).
  The colors of the text areas change with a series of if statements, referring to the moment code to determine if the current hour has passed, is in progress, or is yet to come, with corresponding colors.  A listener was put onto the save button so that a storage function would activate upon a click; the value of the text would be trimmed and stored in local storage to be retrieved later.
  To main parts of the last function perform most of the work: a while loop to go through an array of stored items, and a for loop to put them back onto the page for the user to see (the "saved" items from before that the user can manipulate).
  
#### The User Experience 

The user is presented with a clean, intuitive, easy-to-use scheduler with hours that correspond to the average work day (9 am to 6 pm).  The user can input data, save it, and then call it back.  The hours are color-coded so that the user can see if they are late or early to their appointments.  A simple, straightforward app.

#### Personal Comments

This was an enjoyable exercise that used concise code to achieve a clean result.  Not very stressful at all.
