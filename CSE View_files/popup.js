var whnd;
var t;

function popup(objectType, objectKey, strStart, strFinish, strArrive, strStatus, strATW, strOpen) {
    switch(objectType) {
        case 'Task':
            whnd = window.open("Task/Task.aspx?CallID=" + objectKey, 'Task',"width=680,height=580,scrollbars=yes,resizable=yes,status=0");
            if (whnd != null)
                whnd.opener = self;
            whnd.focus();
            break;

        case 'Start':
            whnd = window.open("ChangeETA/ChangeETA.aspx?CallID=" + objectKey + "&Start=" + strStart + "&Finish=" + strFinish + "&Arrive=" + strArrive + "&Status=" + strStatus + "&ATW=" + strATW, 'NA',"width=490,height=280,scrollbars=auto,resizable=yes,status=0");
            if (whnd != null)
                whnd.opener = self;
            whnd.focus();
            break;

        case 'Finish':
            whnd = window.open("Duration/Duration.aspx?CallID=" + objectKey + "&Start=" + strStart + "&Finish=" + strFinish + "&Arrive=" + strArrive + "&Status=" + strStatus, 'NA',"width=490,height=280,scrollbars=auto,resizable=yes,status=0");
            if (whnd != null)
                whnd.opener = self;
            whnd.focus();
            break;

        case 'Take':
            whnd = window.open("TakeCall/TakeCall.aspx?CallID=" + objectKey + "&Start=" + strStart + "&Finish=" + strFinish + "&IsOpen=" + strOpen, 'NA',"width=490,height=280,scrollbars=auto,resizable=yes,status=0");
            if (whnd != null)
                whnd.opener = self;
            whnd.focus();
            break;

        case 'Uncommit':
            whnd = window.open("UnCommit/UnCommit.aspx?CallID=" + objectKey + "&UrgCd=" + strStart, 'NA',"width=490,height=280,scrollbars=auto,resizable=yes,status=0");
            if (whnd != null)
                whnd.opener = self;
            whnd.focus();
            break;
            
        case 'Site':
        case 'Dev':
            whnd = window.open("HotSite/HotSiteBB.aspx?SiteNr=" + objectKey + "&IsChronic=" + strStart + "&SerNr=" + strFinish + "&Device=" + strArrive, 'NA',"width=725,height=330,scrollbars=auto,resizable=yes,status=0");
            if (whnd != null)
                whnd.opener = self;
            whnd.focus();
            break;
            
    }
}
