# mobile_web_project

MILESTONE 1

File list:
  tetris.html
  style.css
  main.js
  controller.js
  display.js
  screenshot.png

Tasks accomplished:
  Implement html and css - <1hr:
    Basic layout and style. 
    Will use LESS for css in the next step
  
  Implement and debug kernel of tetris with basic functions in JavaScripts - ~5hr:
    OS: Ubuntu on Windows 7 hosted virtual machine
    Text editer: Vim
    Web browser: Chrome for Linux
    
  Optimize the web application for iPhone4s with iOS7 - ~4hr:
    Search solutions to connect iPhone to local server on virtual machine. 
    Install Apache on Ubuntu and test connection on Windows host.
    Connect to local host from iPhone Safari using LAN.
    Optimize display setting for iPhone4s with iOS7.
    Will add touch control later.
    
Questions:
  Currently I test the applicaion using Safari and "Add to Home Screen". That makes the application looks like a fullscreen application with the status bar. However, I have not installed Chrome on iPhone.
  Q1:Is iPhone web-based app using Safari kernel to style CSS?
    Do I need to test the applicaion on iOS Chrome? Can I get fullscreen on Chrome?
  
  Q2: The elements in canvas looks blur on iPhone (see screenshot.png). Is that caused by retina display? I know the physical width is 640px but the logical width is 320px with scale=1.0. Can I solve the blur problem by setting scale=0.5 and use 640px as logical width?
  Below is the current meta settings:
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    
    
