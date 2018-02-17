# Kahoot Smasher converted to Node.js
This project can be used as the Kahoot-Smasher backend to a server, it will join a kahoot game with the number of bots specified. Because it is intended to be used as a backend I have implemented very little GUI and tried to make it as simple as possible to connect to a server backend.

# Requirements
<ul>
  <li>You need <a href="https://nodejs.org/en/">Node.js</a>, any recent version should do</li>
  <li><i>Some</i> knowledge of your platform's terminal</li>
  <li>A web browser on the local machine for testing</li>
  <li>Some proxy software like <a href="https://www.nginx.com/">Nginx</a> for redirecting web traffic to the right place if you want to use this remotely</li>
</ul>

# Setup
<ol>
  <li>Clone this repository into any folder in your machine and navigate inside the first directory</li>
  <li>If you haven't already, open the terminal or powershell here</li>
  <li>Run the command: </li>
  <code>node start</code>
</ol>

Now navigate to the URL <code>http://localhost:3000</code> on the local machine, there should be some output if the server is running without any errors

# Usage

To start the smashing go to the URL:
<code>http://localhost/start/kahoot-id/number-of-smashers/</code>

You can also use a proxy to redirect to this address so if you want to use an external machine or host a website with this functionality you can just forward to this address based on the request.


To stop the smashing go to the URL:
<code>http://localhost/stop/</code>
