# TestScenario2
Deriv Skill Test - Scenario 2:  Mobile App Automation

-----------------------------------------------------------------------
##       Readme : Calculation Mobile App Automation Skill Test       ##
-----------------------------------------------------------------------

This test suite contains the solution for the Deriv QA Automation Mobile Test Automation Skill Test. 
Developed by Chathuranga Mihindukulasooriya on 06/03/2024.

Please follow the steps below to set up this test framework on your local machine:
Prerequisits : 
- Install nodejs
- Install npm
- Install appium server (latest version)
- install appium doctor `npm install @appium/doctor --location=global`
- check dependencies using `appium-doctor --android`
- install all optional dependencies and update paths.
  - follow the guide provided by `appium-doctor` output
  - usually need to install
    - `ffmpeg` 
      - [ffmpeg](https://github.com/BtbN/FFmpeg-Builds/releases) binaries
      - [Official Site](https://ffmpeg.org/download.html)
    - `bundle-tools`
      - https://github.com/google/bundletool/releases
      - need to add `bin` to `path`
      - if setting up in windows add '.jar' to `PATHEXT` system env variables 
    - `gstreamer` 
      - install runtime from [Official site](https://gstreamer.freedesktop.org/documentation/installing/on-windows.html?gi-language=c)
      - add `bin` to `path` 
    - `mjpeg-consumer`
        - can use npm to install globally `npm i -g mjpeg-consumer`
        - update `NODE_PATH` to the global node modules directory 

1. Start Appium Server by cmd : appium
2. Open the terminal and run [npm update]. This will download all necessary libraries into the test framework.

## Running Tests
- To execute all the test scripts specified in the test_playlist.js file, run [npm test].

## Test Reports
- Test reports are saved in the mochawesome-report folder.

###### Special Notes to Reviewer ######
+ The primary goal in constructing this test framework was to ensure its accessibility for contributions from anyone, facilitating the expansion of the framework without encountering obstacles.
+ The framework is designed with robustness in mind. Reusable methods are consolidated within a common layer, while specific page object details are segregated for easier maintenance.
+ Following my standard coding practices, I've employed detailed comments to articulate the test cases effectively to all stakeholders involved.


### Summery of the Test Script
Test Case 1: Login Page - Authenticate Successfully
  - User is already open the Calculator Application

  Input 01 : - Perform Addition Operation
  Input 02 : - Perform Substraction Operation
  Input 03 : - Perform Multiplication Operation
  Input 04 : - Perform Division Operation
  Input 05 : - Perform Multiple Operations

  Expetced Outcome 01/02/03/04/05 : 
  - Verify the Result

