<!DOCTYPE html>
<html>
  <head>
    <title>Current Date and Time</title>
    <script>
      function displayDateTime() {
        var dateTime = new Date();
        document.getElementById("datetime").innerHTML = dateTime.toLocaleString();
      }
    </script>
  </head>
  <body>
    <h1>Current Date and Time</h1>
    <button onclick="displayDateTime()">Click to display current date and time</button>
    <p id="datetime"></p>
  </body>
</html>
