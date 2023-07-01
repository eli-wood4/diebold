//
//  Copyright (c) Diebold 2007.
//  All Rights Reserved.
//
//  This software contains proprietary, trade secret information
//  and is the property of Diebold.  This software and the
//  information contained therein may not be disclosed, used or
//  copied in whole or in part without the express, prior, written
//  consent of Diebold.
//
//  @author Diebold
//
//  Workfile: teamname.js
//  Item: 
//  Revision: 1.0
//  Date: 27-NOV-2007 11:45:00
//
//  DESCRIPTION: 
//       teamname.js
//               - Javascript local client code referenced in EngineerClientTop.aspx page
//               - Local functions used to allow "onchange" functionality when selecting the Team/Branch/TeamName 
//
//  MODIFICATION HISTORY:  gfb, 11/27/07, initial
//   
// 

var postTeamName = '';
var postBranch = '';
var postTeam = '';

//var teamname;
//var branch;
//var team;

function TrimString(sInString) {
    if (sInString) {
        sInString = sInString.replace(/^\s+/g, "");// strip leading
        return sInString.replace(/\s+$/g, "");// strip trailing
    }
}

// Populates the team selected with the branches from the team list
function populateTeam(defaultTeam) {
    if (postTeam != '') {
        defaultTeam = postTeam;
    }

    var selObj = document.getElementById('Team');
    var teamLineArray = team.split('|');  // Split into lines
    for (var loop = 0; loop < teamLineArray.length; loop++) {
        lineArray = teamLineArray[loop].split(':');
        teamNum = TrimString(lineArray[0]);
        teamDesc = TrimString(lineArray[1]);
        if (teamNum != '' && teamNum != null) {
            selObj.options[loop] = new Option(teamDesc, teamNum);
        }
        if (teamNum == defaultTeam) {
            selObj.selectedIndex = loop;
        }
    }
}

function populateBranch(defaultBranch) {
    if (postBranch != '') {
        defaultBranch = postBranch;
    }

    var selObj = document.getElementById('Branch');

    try {
        // Empty options just in case new drop down is shorter
        if (selObj.type == 'select-one') {
            //for (var i = 0; i < selObj.options.length; i++) {
            //    selObj.options[i] = null;
            //}
            selObj.options.length = 0;
        }
    }
    catch (err)
    { alert(err); }


    // Populate the drop down with teamnames from the selected branch
    var branchLineArray = branch.split("|");  // Split into lines
    var optionCntr = 0;
    for (var loop = 0; loop < branchLineArray.length; loop++) {
        lineArray = branchLineArray[loop].split(":");
        teamNum = TrimString(lineArray[0]);
        branchNum = TrimString(lineArray[1]);

        if (document.getElementById('Team').value == teamNum && branchNum != '') {
            selObj.options[optionCntr] = new Option(branchNum, branchNum);

            // See if it's selected from a previous post
            if (branchNum == defaultBranch) {
                selObj.selectedIndex = optionCntr;
            }

            optionCntr++
        }
    }
}

function populateTeamName(defaultTeamName) {
    if (postTeamName != '') {
        defaultTeamName = postTeamName;
    }

    var selObj = document.getElementById('Teamname');

    try {
        // Empty options just in case new drop down is shorter
        if (selObj.type == 'select-one') {
            //for (var i = 0; i < selObj.options.length; i++) {
            //    selObj.options[i] = null;
            //}
            selObj.options.length = 0;
        }
    } catch (err) {
        alert(err);
    }

    // Populate the drop down with teamnames from the selected branch
    var teamnameLineArray = teamname.split("|");  // Split into lines
    var optionCntr = 0;
    var arrTeamName = [];
    for (var loop = 0; loop < teamnameLineArray.length; loop++) {
        lineArray = teamnameLineArray[loop].split(":");
        branchNum = TrimString(lineArray[0]);
        teamName = TrimString(lineArray[1]);

        if (document.getElementById('Branch').value == branchNum && branchNum != '') {
            if (arrTeamName.indexOf(teamName) == -1) {
                arrTeamName.push(teamName)

                selObj.options[optionCntr] = new Option(teamName, teamName);
                //var teamNameArray = teamName.split("-");
                // See if it's selected from a previous post
                if (TrimString(teamName) == defaultTeamName) {
                    selObj.selectedIndex = optionCntr;
                }

                optionCntr++
            }
        }
    }
}

function initTeam(defbranch, defteamname) {
    // Determine default Team from the Branch
    var defteam = '';
    var branchLineArray = branch.split("|");  // Split into lines
    for (var loop = 0; loop < branchLineArray.length; loop++) {
        lineArray = branchLineArray[loop].split(":");
        teamNum = TrimString(lineArray[0]);
        branchNum = TrimString(lineArray[1]);

        if (branchNum == defbranch) {
            defteam = teamNum;
        }
    }

    populateTeam(defteam);
    populateBranch(defbranch);
    populateTeamName(defteamname);
}
