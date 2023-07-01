/*
#--------------------------------------------------------------------------------
#  File Name : tip.js
#  Author    : The Masked Marauder
#  Date      : 
#  Desc      :
#
#  Copyright (c) Diebold, Incorporated 2001
#  All Rights Reserved
#
#  This software is the property of Diebold, Incorporated.
#  This software and the information contained therein may
#  not be disclosed, used or copied in whole or in part
#  without the express, prior, written conset of Diebold.
#
#  Revision History
#  Who      Date        Description
#  -------  ----------  -------------------------------------------
#  MTS	                Changed init() to tip_init(), Added call to tip_init(), Removed TABLE from tip
#  SRA      01/14/10    DIV no longer follows mouse
#                       Image used to close DIV
#                       Global variable used to make sure only one DIV pops up at a time
#--------------------------------------------------------------------------------
*/

var x;
var y;
var winW;
var winH;
var offX;
var offY;
var ns4 = false;
var ie4 = false;
var moz = false;
var tips = new Array();
var onTip = '';
var DisplayingTip = false;
var IsLocked = false;
var leftOffset = 0; 

function tip_init() {
	if (document.layers) {
		ns4 = true;
	}
	if (document.all) {
		ie4 = true;
	}
	if (ns4 == false && ie4 == false) {
		leftOffset = -1;
		moz = true;
	}

	if (ns4) {
		document.captureEvents(Event.MOUSEMOVE);
	}
}

function makeTip(HostElementId, name, stat, pri, firm, lock, cust, brnch, site, strt, city, st, zip, cntct, eff, late, cntctnm, cntctph, txt, resp, eta, finish, atwst, atwfn, type, dev, mod, snr, custid, cntrtyp, cntrhr, reqeng, FACTSCALLID, CCMFNumber, ActivityNO, SR_Num, cmtddt) {
	/*document.write('<div id="' + name + '" class="tip">\n\t');
    document.write('<table style="width:100%">');
    document.write('<tr style="height:10px; background-color:LightBlue; width:100%">');
    document.write('<td style="width:100%; text-align:right">');
    document.write('<img src="images/close.gif" alt="Close" onclick="handleCloseClick();"/></td></tr></table>');
    document.write('<div style="overflow-x:hidden; overflow-y:auto; height:230px">');
    document.write('<b>Site Nr:</b> ' + site + ' <b>Cust Prod:</b> ' + custid + ' <b>Status:</b> ' + stat + ' <b>Priority:</b> ' + pri + '<br />');
    if (firm == '1') {
	    document.write('<b>FirmAssignment:</b>Yes ');
    }
    if(reqeng != null && reqeng.length > 1){
        document.write('<b>Required Engineer:</b>' + reqeng);
    }
    if (lock == '1') {
	    document.write('<b>UserLocked:</b>Yes');
    }
    if ((firm == '1') || (lock == '1') || (reqeng != null && reqeng.length > 1)) {
	    document.write('<br />');
    }
    document.write('<br /><b>Customer:</b> ' + cust + ', ' + brnch + '<br />');
    document.write('<b>Address:</b> ' + strt + ', ' + city + ', ' + st + ' ' + zip + '<br />');
    document.write('<b>Contact:</b> ' + cntctnm + ' ' + cntctph + '<br /><br />');
    document.write('<b>Contact Date:</b> ' + cntct + ' <b>Effective Date:</b> ' + eff + '<br /><br />');
    document.write('<b>Text:</b> ' + txt.replace(/{/g, "<br />") + '<br />');
    document.write('<b>ETA:</b> ' + eta + ' <b>Resp Time:</b> ' + resp + ' <b>Late Start:</b> ' + late + '<br />');
    document.write('<b>ATW Start:</b> ' + atwst + ' <b>ATW Finish:</b> ' + atwfn + '<br /><br />');
    document.write('<b>Srvc Cd:</b> ' + type + ' <b>Device:</b> ' + dev + ' <b>Model:</b> ' + mod + ' <b>Ser Nr:</b> ' + snr + '<br />');
    document.write('<b>Contract Type:</b> ' + cntrtyp + '<br />');
    document.write('<b>Contract Hrs:</b> ' + cntrhr + '<br />');
    document.write('\n</div>\n');
    document.write('</div>');*/
    var elem = document.createElement('div');
    elem.id = name;
    elem.className = 'tip';

    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    
    var tbody = document.createElement('tbody');
    
    var tr1 = document.createElement('tr');
    tr1.style.height = '10px';
    tr1.style.backgroundColor = 'LightBlue';
    tr1.style.width = '100%';

    var td1 = document.createElement('td');
    td1.style.width = '100%';
    td1.style.textAlign = 'right';

    var img1 = document.createElement('img');
    img1.id = 'img' + name;
    img1.src = 'images/close.gif';
    img1.alt = 'Close';
    
    var div1 = document.createElement('div');
    div1.style.overflowX = 'hidden';
    div1.style.overflowY = 'auto';
    div1.style.height = '230px';

    var innerCaCa = '<b>Site Nr:</b> ' + site + ' <b>Cust Prod:</b> ' + custid + ' <b>Status:</b> ' + stat + ' <b>Priority:</b> ' + pri + '<br />';

    if (firm == '1') {
	    innerCaCa += '<b>FirmAssignment:</b>Yes ';
    }
    if(reqeng != null && reqeng.length > 1){
	    innerCaCa += '<b>Required Engineer:</b>' + reqeng;
    }
    if (lock == '1') {
	    innerCaCa += '<b>UserLocked:</b>Yes';
    }
    if ((firm == '1') || (lock == '1') || (reqeng != null && reqeng.length > 1)) {
	    innerCaCa += '<br />';
    }
    innerCaCa += '<br /><b>FACTSCALLID :</b> ' + FACTSCALLID + '<br />';
    //innerCaCa += '<br /><b>CCMFNumber  :</b> ' + CCMFNumber + '<br />';
    innerCaCa += '<br /><b>Activity #  :</b> ' + ActivityNO + ' <b>SR #:</b> ' + SR_Num +  '<br />';
    innerCaCa += '<br /><b>Customer:</b> ' + cust + ', ' + brnch + '<br />';
    innerCaCa += '<b>Address:</b> ' + strt + ', ' + city + ', ' + st + ' ' + zip + '<br />';
    innerCaCa += '<b>Contact:</b> ' + cntctnm + ' ' + cntctph + '<br /><br />';
    innerCaCa += '<b>Contact Date:</b> ' + cntct + ' <b>Effective Date:</b> ' + eff + ' <b>Late Start:</b> ' + late +  ' <b> Committed Date:</b> ' + cmtddt + '<br />';
    innerCaCa += '<b> ETA:</b> ' + eta + '<br /><br />';
    innerCaCa += '<b>Text:</b> ' + txt.replace(/{/g, "<br />") + '<br />';
    //innerCaCa += '<b>ETA:</b> ' + eta + ' <b>Resp Time:</b> ' + resp + ' <b>Late Start:</b> ' + late + '<br />';
    //innerCaCa += '<b>ATW Start:</b> ' + atwst + ' <b>ATW Finish:</b> ' + atwfn + '<br /><br />';
    innerCaCa += '<b>SR Type:</b> ' + type + ' <b>Device:</b> ' + dev + ' <b>Model:</b> ' + mod + ' <b>Ser Nr:</b> ' + snr + '<br />';
    innerCaCa += '<b>Contract Type:</b> ' + cntrtyp + '<br />';
    innerCaCa += '<b>Contract Hrs:</b> ' + cntrhr + '<br />';
    div1.innerHTML = innerCaCa;
    
    td1.appendChild(img1);
    tr1.appendChild(td1);
    tbody.appendChild(tr1);
    tbl.appendChild(tbody);
    elem.appendChild(tbl);
    elem.appendChild(div1);
    
    document.getElementById(HostElementId).appendChild(elem)    
    document.getElementById('img' + name).onclick = handleCloseClick;
    
	addTipRef(name);
}

function addTipRef(name) {
	if (ns4) {
		tips[name] = eval('document.' + name);
	}
	if (ie4 || moz) {
	    try
	    {
		    tips[name] = document.getElementById(name).style;
		}
		catch(err)
		{
		    alert('err='+err);
		    //ignore error
		}
	}
}

function handleCloseClick(){
    IsLocked = false;
    hideTip();
}
function handleClick(e, name){
    if (IsLocked)
    {
        hideTip();
    }
    IsLocked = true;
    showTip(e,name);
}
function handleMouseOver(e,name){
    if (IsLocked) return;
    showTip(e,name);
}
function handleMouseOut(){
    if (IsLocked) return;
    hideTip();
}

function findPosX(obj)
  {
    if (obj == null) return 0;
    
    var curleft = obj.offsetWidth;
	
    if(obj.offsetParent)
        while(1) 
        {
          curleft += obj.offsetLeft;
          if(!obj.offsetParent)
            break;
          obj = obj.offsetParent;
        }
    else if(obj.x)
        curleft += obj.x;
    
    return curleft + leftOffset;
  }

function findPosY()
{
    var ScrollTop = 0;  //Grab the v-scrollbar position
    
    if( typeof( window.pageYOffset ) == 'number' ){ //Netscape compliant
        ScrollTop = window.pageYOffset;  
    }
    else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ){ //DOM compliant
        ScrollTop = document.body.scrollTop;
    }
    else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ){ //IE6 standards compliant mode
        ScrollTop = document.documentElement.scrollTop;
    }
    
	if (ScrollTop < 10){
		ScrollTop = 100;
	}
	else{
		ScrollTop += 20;
	}
    
    return ScrollTop;
}

function showTip(e, name) {
    if (DisplayingTip) return;  //Only show one DIV at a time
    
    var posx = 0;
    var posy = 0;
    
    DisplayingTip = true;
    
    if (e == null)
        e = window.event;
        
    var obj;
	obj = document.getElementById(name).parentNode;
	
    if (e.pageX || e.pageY) 	{
        posy = (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);//e.pageY;
    }
    else if (e.clientX || e.clientY) 	{    
        posy = (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    }
    
    posx = findPosX(obj);
    posy = findPosY();
    tips[name].left = (posx) + 'px';
	tips[name].top = (posy) + 'px';
	tips[name].visibility = "visible";
	onTip = name;
}

function hideTip() {
    DisplayingTip = false;
    IsLocked = false;
	tips[onTip].visibility = "hidden";
	onTip = null;
}

tip_init();
