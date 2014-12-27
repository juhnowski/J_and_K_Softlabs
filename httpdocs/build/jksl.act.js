function isWebGL() {
  gl = null;
  var canvas = document.createElement( 'canvas' ); 
  try {
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  }
  catch(e) {}
   
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser may not support it.");
  }
}

function JKActionListener() {
  this.list ;
  
  this.init = function(label_id, header_id) {
    document.getElementById(header_id).innerHTML+='<table width=100%><tr><td id="menu_home"><a href="http://jksl.ru">J&K</a></td><td id="menu_1"><a href="http://" onclick="onclick_embedded()">Embedded </a></td><td id="menu_2"><a href="http://" onclick="onclick_enterprise()">Enterprise</a> </td><td id="menu_3"><a href="http://" onclick="onclick_financial()">Financial</a></td><td id="menu_4"><a href="http://" onclick="onclick_games()"> Games </a></td><td id="menu_5"><a href="http://" onclick="onclick_micro()">Micro</a></td><td id="menu_6"><a href="http://" onclick="onclick_media()">Media</a></td><td id="menu_7"><a href="http://" onclick="onclick_network()">Network</a></td><td id="menu_8"><a href="http://" onclick="onclick_philosophy()">Philosophy</a> </td><td id="menu_12"><a href="http://" onclick="onclick_robot()">Robots</a></td><td id="menu_9"><a href="http://" onclick="onclick_rt()">RT</a></td><td id="menu_10"><a href="http://" onclick="onclick_social()">Social</a></td><td id="menu_11"><a href="http://" onclick="onclick_security()">Seсurity</td><td id="menu_2"><a href="http://" onclick="onclick_sensors()">Sensors</a></td><td id="menu_12"><a href="http://" onclick="onclick_downloads()"><b>Downloads</b></a></td><td id="menu_13"><a href="http://jksl.ru/news.html"><b>News</b></a></td><td id="menu_14"> <b>Events</b> </td><td id="menu_15"> <b>Support</b> </td></tr></table>';
    document.getElementById(label_id).innerHTML+= '<table><tr><td id="label_1"><address><a href="location.html">| &nbsp Location  </a></address></td><td id="label_2"><a href="donation.html">| &nbsp Donation</a></td><td id="label_3"><address><a href="mailto:info@jksl.ru">| &nbsp Ru/<b>Eng</b></a></address></td></tr></table>';
  };
  
  this.init_news = function(label_id, header_id) {
    document.getElementById(header_id).innerHTML+='<table width=100%><tr><td id="menu_home"><a href="http://jksl.ru">J&K</a></td><td id="menu_1"><a>Embedded</a></td><td id="menu_2">Enterprise</td><td id="menu_3">Financial</td><td id="menu_4">Games</td><td id="menu_5">Micro</td><td id="menu_6">Media</td><td id="menu_7">Network</td><td id="menu_8">Philosophy</td><td id="menu_12">Robots</td><td id="menu_9">RT</td><td id="menu_10">Social</td><td id="menu_11">Seсurity</td><td id="menu_2">Sensors</td><td id="menu_12"><b>Downloads</b></a></td><td id="menu_13"><a href="http://jksl.ru/news.html"><b>News</b></a></td><td id="menu_14"> <b>Events</b> </td><td id="menu_15"> <b>Support</b> </td></tr></table>';
    document.getElementById(label_id).innerHTML+= '<table><tr><td id="label_1"><address><a href="location.html">| &nbsp Location  </a></address></td><td id="label_2"><a href="donation.html">| &nbsp Donation</a></td><td id="label_3"><address><a href="mailto:info@jksl.ru">| &nbsp Ru/<b>Eng</b></a></address></td></tr></table>';
  };
  
};

function onclick_embedded()
{
    document.getElementById('embedded').innerHTML = '<h2>Embedded</h2><hr><b>In Future:</b>&nbsp Android 4.2 and Ubuntu Mobile - Testing/porting existing apps and bugfixing<hr><b>In Progress:</b> &nbsp Cortex A9 Porting Linux Ubuntu<hr><b>In Progress:</b> &nbsp Portable NoSQL database cluster development<hr><b>Finished:</b> &nbsp Android 4.0 WebApp Client has been developed<hr><b>Finished:</b> &nbsp Android 2.3 system test cases and bugfixing<hr><b>Finished:</b> &nbsp Android 3.2 system test cases and bugfixing<hr><b>Finished:</b> &nbsp Android 3.1 system test cases and bugfixing<hr><b>Finished:</b> &nbsp Android 3.0 system test cases and bugfixing<hr><b>Postponed:</b> &nbsp CodeSYS embedded s/w for 80x86 arch.<hr><b>[...]</b><hr>';

  document.getElementById('embedded').style.visibility = 'visible'; 
  document.getElementById('videos').style.visibility = 'hidden';
  return false;
}

function onclick_enterprise()
{
    document.getElementById('embedded').innerHTML = '<h2>Enterprise</h2><hr><b>In Future:</b>&nbsp Python framework which is support new type of sockets and NoSQL DB<hr><b>In Progress:</b> &nbsp Updating jksl.ru front-end and back-end<hr><b>In Progress:</b> &nbsp Python Driver for Cassandra development<hr><b>Finished:</b> &nbsp Advanced JDBC Driver for Cassandra<hr><b>Finished:</b> &nbsp Advanced JDBC Driver for MongoDB<hr><b>[...]</b><hr>';

  document.getElementById('embedded').style.visibility = 'visible'; 
  document.getElementById('videos').style.visibility = 'hidden';
  return false;
}

function onclick_financial()
{
    document.getElementById('embedded').innerHTML = '<h2>Financial</h2><hr><b>In Future:</b>&nbsp Protomoney bridge web2abs<hr><b>In Progress:</b> &nbsp Protomoney front-end and back-end development<hr><b>In Progress:</b> &nbsp Online framework shop development<hr><b>Finished:</b> &nbsp PayPal plugin for quick integration payments<hr><b>Finished:</b> &nbsp Scope existing payments systems<hr><b>[...]</b><hr>';

  document.getElementById('embedded').style.visibility = 'visible'; 
  document.getElementById('videos').style.visibility = 'hidden';
  return false;
}

function onclick_games()
{
    document.getElementById('embedded').innerHTML = '<h2>Games</h2><hr><b>In Future:</b>&nbsp Game prototype with WebGL and multi media integrations<hr><b>In Progress:</b> &nbsp WebGL investigations<hr><b>[...]</b><hr>';

  document.getElementById('embedded').style.visibility = 'visible'; 
  document.getElementById('videos').style.visibility = 'hidden';
  return false;
}

function onclick_micro()
{
    document.getElementById('embedded').innerHTML = '<h2>Micro Controllers</h2><hr><b>In Future:</b>&nbsp Investigation of ARM based microcontrollers <hr><b>Finished:</b> &nbsp CodeSYS education process done<hr><b>[...]</b><hr>';

  document.getElementById('embedded').style.visibility = 'visible'; 
  document.getElementById('videos').style.visibility = 'hidden';
  return false;
}

function onclick_media()
{
    document.getElementById('embedded').innerHTML = '<h2>Media</h2><hr><b>In Future:</b>&nbsp Video tool for editing video data with metadata<hr><b>In Progress:</b> &nbsp Development new scalable video codec based on H.264<hr><b>Finished:</b>&nbsp Investigation of modern codecs and video conteiners<hr><b>[...]</b><hr>';

  document.getElementById('embedded').style.visibility = 'visible'; 
  document.getElementById('videos').style.visibility = 'hidden';
  return false;
}

function onclick_network()
{
    document.getElementById('embedded').innerHTML = '<h2>Network</h2><hr><b>In Progress:</b> &nbsp New type multithread sockets implementation<hr><b>Finished:</b>&nbsp Prepare requirements for new multithread sockets<hr><b>[...]</b><hr>';

  document.getElementById('embedded').style.visibility = 'visible'; 
  document.getElementById('videos').style.visibility = 'hidden';
  return false;
}

function onclick_philosophy()
{
    document.getElementById('embedded').innerHTML = '<h2>Philosophy and Social Antropology</h2><hr><b>In Progress:</b> &nbsp The theory of IT language-games under construction<hr><b>In Progress:</b> &nbsp Investigation special parts of mathematic - modal logic<hr><b>In Progress:</b> &nbsp Start of organizational activities to build a philosophical laboratory<hr><b>[...]</b><hr>';

  document.getElementById('embedded').style.visibility = 'visible'; 
  document.getElementById('videos').style.visibility = 'hidden';
  return false;
}

function onclick_social()
{
    document.getElementById('embedded').innerHTML = '<h2>Social Antropology</h2><hr><b>In Future:</b>&nbsp Create site for social plugin and social monitoring and imact events<hr><b>In Progress:</b> &nbsp Present company in all general social network<hr><b>Finished:</b>&nbsp Social plugin for quick brand search has been developed<hr><b>[...]</b><hr>';

  document.getElementById('embedded').style.visibility = 'visible'; 
  document.getElementById('videos').style.visibility = 'hidden';
  return false;
}

function onclick_robot()
{
    document.getElementById('embedded').innerHTML = '<h2>Robots</h2><hr><b>Finished:</b>&nbsp Remote Control System <a href="https://sites.google.com/site/juhnowski/remote-control-system" target="_blank">...</a><hr><b>Finished:</b> &nbsp Robotic system level setting <a href="https://sites.google.com/site/juhnowski/robotic-system-level-setting" target="_blank">...</a><hr><b>[...]</b><hr>';

  document.getElementById('embedded').style.visibility = 'visible'; 

  return false;
}

function onclick_rt()
{
    document.getElementById('embedded').innerHTML = '<h2>Real Time OS</h2><hr><b>Finished:</b>&nbsp Scope QNX for future development<hr><b>Finished:</b> &nbsp RealTime Linux patches have been developed for robotic projects<hr><b>[...]</b><hr>';

  document.getElementById('embedded').style.visibility = 'visible'; 
  document.getElementById('videos').style.visibility = 'hidden';
  return false;
}

function onclick_security()
{
    document.getElementById('embedded').innerHTML = '<h2>Security</h2><hr><b>In Progress:</b>&nbsp Create new VPN channel with new developed cipher<hr><b>In Progress:</b>&nbsp Special ciphers development<hr><b>In Progress:</b> &nbsp Workshop for cipher analyze and development<hr><b>Finished:</b> &nbsp Create Network security environment requirements<hr><b>[...]</b><hr>';

  document.getElementById('embedded').style.visibility = 'visible'; 
  document.getElementById('videos').style.visibility = 'hidden';
  return false;
}

function onclick_sensors()
{
    document.getElementById('embedded').innerHTML = '<h2>Sensors</h2><hr><b>Finished:</b>&nbsp x-IMU sensor integration <a href="http://www.x-io.co.uk/products/x-imu/" target="_blank">...</a><hr><b>Finished:</b> &nbsp Phidgets sensor integration<a href="http://www.phidgets.com/" target="_blank">...</a><hr><b>[...]</b><hr>';

  document.getElementById('embedded').style.visibility = 'visible'; 
  document.getElementById('videos').style.visibility = 'hidden';
  return false;
}

function onclick_downloads()
{
  document.getElementById('embedded').innerHTML = '<h2>Downloads</h2><hr></b>&nbsp<hr><b>[...]</b><hr>';
  document.getElementById('embedded').style.visibility = 'visible'; 
  document.getElementById('videos').style.visibility = 'hidden';
  return false;
}

function onclick_support()
{
  document.getElementById('videos').style.visibility = 'hidden';
  document.getElementById('embedded').innerHTML = '<h2>Support</h2><hr></b>&nbsp<hr><b>[...]</b><hr>';
  document.getElementById('embedded').style.visibility = 'visible'; 

  return false;
}

function onclick_news()
{
  document.getElementById('embedded').style.visibility = 'hidden';
  document.getElementById('videos').style.visibility = 'visible';
  return false;
}

