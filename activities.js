var activities = [
  {  status: 'Enroute', site_number: '1380248',   name: 'BANK OF AMERICA', activity_number: '1-91423385222',   address: '7714 REA RD, CHARLOTTE, NC, 28277', Fault: 'DECAL Generated Call, Customer Product IDINCD2444.#72208918   1716 RECEIPT PRINTER EJECT JAMPriority:           OB Automatic Create Incident',   'SR Type': 'FL', 'ATM ID': 'INCD2444' },
  {  status: 'Assigned', site_number: '1225640',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91409810868',   address: '3130 MILTON RD, CHARLOTTE, NC, 28215', Fault: 'DECAL Generated Call, Customer Product ID B2ET.B2ET CASHIN: Maximum cash in retracts reached2023-07-1118:43:36.0  00001039 *860*18:43:36 DEP ERROR: 0000644600000023 00000000 device state: [Total faiEscalated thisactivity from FL to TR. Threshold exceeded, 3 FL activitiesin 7 days(1-91358566107,1-91344697605,1-91307340904).Returned to FLand moved per FSS',   'SR Type': 'FL', 'ATM ID': 'B2ET' },
  {  status: 'Closed', site_number: '004172420',   name: 'BANK OF AMERICA', activity_number: '1-91412734547',   address: '6425 ALBEMARLE RD, CHARLOTTE, NC, 28212', Fault: 'This is a follow up activity. Associated parent activity#is 1-91409463480 , which was closed incomplete withIncomplete reason as End of Shift.Examine print quality onback of checks and replace ink if needed.  Check and resetthe metrics if needed. Ink last replaced 129.0 daysago.Preventive - 2023-07-08 07:34:21 PM -05: MMA03886 (1),hardware unit in error state: head -> alignmentunitPreventive - 2023-07-08 07:44:21 PM -05: MMA01170 (1),communication error: unknown communication errorCs1694ATMup in service.  Dispenser down missing reject bin db13. Sensor switch had come knock off.  Photo attached.  Put theswitch back on.  Test OK.  Air dusted Dispenser andcassettes.   Still good ink on the back of checks.  ATM upin service.  Did a withdrawal and a cash depositTAB (ATM /RECYCLERS); DISPENSER - CASH / NOTE; CASSETTE(S) / PURGE /RETRACT BIN(S); CASH PROVIDER / BRANCH OR STORE ERROR /OMISSION OR MISHANDLING; OTHER - ADD DETAIL IN NOTES;OTHER: PROVIDE FULL DETAILS',   'SR Type': 'FL', 'ATM ID': 'INCD1208' },
  {  status: 'Closed', site_number: '1380248',   name: 'BANK OF AMERICA', activity_number: '1-91416962142',   address: '7714 REA RD, CHARLOTTE, NC, 28277', Fault: 'DECAL Generated Call, Customer Product IDINCD2444.#72183505   CIM01S5 ENA Fatal Error (DBD) Priority:           OB Automatic CreateIncidentCs2007DECAL Priority cannot be updated as Activityis already Committed / Enroute /Arrived /Closed / CancelledstatusDECAL Product Status cannot be updated as Activity isalready Committed /Enroute /Arrived /Closed /CancelledstatusFault is clearedDECAL Effective Date/Time cannot beupdated as Activity is already Committed /Enroute /Arrived/Closed /Cancelled statusCall Cancellation request receivedfrom DECAL. But Call cannot be cancelled as Activity isalready in Committed /Enroute /Arrived /Closed statusATM upin service.  Mma tp10. Found check jammed going to bin. Photo attached.  Amount 80.00 Fabiola Gonzalez.  Put thecheck in the bin.   There also was some bills jammed in bin2.   Cleaned mma. Test OK.  ATM up in service.  Did awithdrawal and a cash depositTAB (ATM / RECYCLERS);DEPOSIT: CHECK - CASH ACCEPTOR (CCDM); CASSETTE(S); ERROR /FAILURE NOT REPRODUCIBLE - CAUSE UNDETERMINABLE; GO TO NEXTOPTION; JAM REMOVAL',   'SR Type': 'FL', 'ATM ID': 'INCD2444' },
  {  status: 'Closed', site_number: '000805267',   name: 'WELLS FARGO BANK NA', activity_number: '1-91416996284',   address: '6101 SOUTH BLVD, CHARLOTTE, NC, 28210', Fault: 'DECAL Generated Call, Customer Product ID 0749K.7572 CASHACCEPTOR DISABLED FAULT  Bin Jammed. JAM:note jam: head ->middle transport unit -> banknote reader -> virtualtransportsensor StClass=000065BCPreventive - 2023-07-0310:48:28 AM -08: ACE00036 (1), SAFE UNIT MISALIGNED (RM4VWF)Automated call closeDECAL Priority cannot be updated asActivity is already Committed / Enroute /Arrived /Closed /Cancelled statusDECAL Product Status cannot be updated asActivity is already Committed /Enroute /Arrived /Closed/Cancelled statusCall Cancellation request received fromDECAL. But Call cannot be cancelled as Activity is alreadyin Committed /Enroute /Arrived /Closed statusATM up inservice.  Cash vendor put Cassette 1 in slot 2 and Cassette2 in slot 1.    Photo attached.  Moved Cassettes to thecorrect slots.   Air dusted recycler. Test OK.  ATM up inservice.  Did a withdrawal and a cash depositTAB (ATM /RECYCLERS); BANKNOTE RECYCLER; CASSETTE(S); CASH PROVIDER /BRANCH OR STORE ERROR / OMISSION OR MISHANDLING;CASSETTE(S) NOT SEATED PROPERLY OR UNDOCKED; OTHER: PROVIDEFULL DETAILS',   'SR Type': 'FL', 'ATM ID': '0749K' },
  {  status: 'Closed', site_number: '1418484',   name: 'BANK OF AMERICA', activity_number: '1-91419189109',   address: '1431 CENTRAL AVE, CHARLOTTE, NC, 28205', Fault: 'DECAL Generated Call, Customer Product IDINCD0514.#72199032   CF Check Depository Fatal NextPriority:           OB Automatic Create IncidentExamineprint quality on back of checks and replace ink if needed. Check and reset the metrics if needed. Ink last replaced300.0 days ago.No depository cleaning kit consumed in last180 days. Recommending Deposit Cleaning Kit be used on thisSR.Cs1837ATM up in service.  Mma 00.  Found 55*1s, 3*5s,1*1s in the input.  Did a mma cleaning.  Still good ink onthe back of checks.   Ran the bills to the cash bin exceptfor 1*5s that was taped together photo attached.  2*1sthat had sticking stuff on bill. Open safe and put thebills in the cash bin.  ATM up in service.  Did awithdrawal and a cash deposit withoutTAB (ATM / RECYCLERS);DEPOSIT: CHECK - CASH ACCEPTOR (CCDM); INPUT-OUTPUT / METALDETECTION; END USER / OPERATOR - ERROR / MISHANDLING /ABUSE; TAPED MEDIA INSERTED; JAM REMOVAL',   'SR Type': 'FL', 'ATM ID': 'INCD0514' },
  {  status: 'Closed', site_number: '001418136',   name: 'WELLS FARGO BANK NA', activity_number: '1-91417003591',   address: '4111 N TRYON ST, CHARLOTTE, NC, 28213', Fault: 'DECAL Generated Call, Customer Product ID 0392H.7506RECEIPT PRINTER DISABLED  Disabled. Presenter JAM (sc=05)(68074-1-0-TP27)ATM up in service.  No faults onscoreboard.  Printer test OK.  ATM up in serviceAutomatedcall closeDECAL Product Status cannot be updated asActivity is already Committed /Enroute /Arrived /Closed/Cancelled statusDECAL Priority cannot be updated asActivity is already Committed / Enroute /Arrived /Closed /Cancelled statusCall Cancellation request received fromDECAL. But Call cannot be cancelled as Activity is alreadyin Committed /Enroute /Arrived /Closed statusTAB (ATM /RECYCLERS); PRINTER; UNLISTED SUB-COMPONENTS; EQUIPMENT UPAND OPERATIONAL - NO ERRORS FOUND; GO TO NEXT OPTION; NOPROBLEM FOUND - NO ACTION TAKEN',   'SR Type': 'FL', 'ATM ID': '0392H' },
  {  status: 'Closed', site_number: '4186225',   name: 'BANK OF AMERICA', activity_number: '1-91422501215',   address: '5801 S BLVD, Charlotte, NC, 28217', Fault: 'DECAL Generated Call, Customer Product IDINCD1077.#72205801   CT2F cassette 2 fatal         Priority:           OB Automatic CreateIncidentCHRONIC_LTC: This unit is now a long term chronic.This  activity is 5 or greater TR/FL call in a rolling 30days.Part History:07/10/2023 - 49253929011B (1) - BANKNOTEREADER MOVE TCM0107/10/2023 - 49253929012C (1) - BANKNOTEREADER MOVE SB0107/10/2023 - 49253929010B (1) - MASTERCONTROLLERPreventive - 2023-07-10 02:41:37 PM -05:MMA01170 (1), communication error: unknown communicationerrorPreventive - 2023-07-11 10:17:10 AM -05: TBT0GT13(1), Gate failed to closeCs0268ATM up in service.  Cashvendor had been on site to add cash.   They put on the 20sin cassette 3.  Poorly loaded.  Photo attached.   Adjustedmoney. Air dusted Dispenser and cassettes.   Cassette 2"20s" empty.    ATM up in service.   Did a withdrawal anda cash deposit.  Billing manager review photo attachedCVERRORFault is clearedDECAL Effective Date/Time cannot beupdated as Activity is already Committed /Enroute /Arrived/Closed /Cancelled statusDECAL Product Status cannot beupdated as Activity is already Committed /Enroute /Arrived/Closed /Cancelled statusDECAL Priority cannot be updatedas Activity is already Committed / Enroute /Arrived /Closed/ Cancelled statusCall Cancellation request received fromDECAL. But Call cannot be cancelled as Activity is alreadyin Committed /Enroute /Arrived /Closed statusTAB (ATM /RECYCLERS); DISPENSER - CASH / NOTE; CASSETTE(S) / PURGE /RETRACT BIN(S); CASH PROVIDER / BRANCH OR STORE ERROR /OMISSION OR MISHANDLING; OTHER - ADD DETAIL IN NOTES;OTHER: PROVIDE FULL DETAILS',   'SR Type': 'FL', 'ATM ID': 'INCD1077' },
  {  status: 'Enroute', site_number: '1197620',   name: 'BANK OF AMERICA', activity_number: '1-91422328852',   address: '5501 JOSH BIRMINGHAM PKWY, CHARLOTTE, NC, 28219', Fault: 'DECAL Generated Call, Customer Product IDINCD2333.#72206772   1530 PRESENTOR SENSOR FAILURE Priority:           OB Automatic Create IncidentNodepository cleaning kit consumed in last 180 days.Recommending Deposit Cleaning Kit be used on thisSR.Preventive - 2023-07-04 01:01:30 PM -05: TBT0SH1F (1),Media found at shuttle after items taken, this is not abank customer errorPreventive - 2023-07-04 10:57:51 AM-05: TBT0CM17 (1), Cam failed to reach stackdumpPreventive - 2023-07-10 07:01:20 PM -05: TBT0SH1J (1),Shuttle failed to leave HomePreventive - 2023-07-1103:03:50 PM -05: TBT0SRG2 (1), Retract entry sensorcalibrated reduced rangePreventive - 2023-07-11 03:01:43PM -05: TBT0TP12 (1), Vertical transport jam',   'SR Type': 'FL', 'ATM ID': 'INCD2333' },
  {  status: 'Assigned', site_number: '004812830',   name: 'TRULIANT FEDERAL CREDIT UNION', activity_number: '1-91424639385',   address: '6051 TYVOLA GLEN CIRCLE, CHARLOTTE, NC, 28217', Fault: 'ATM is out of service. CV was onsite earlier.PartHistory:07/10/2023 - 01750064638 (1) - Ribbon CCDM, bk,PU0507/10/2023 - 11066659000B (1) - Kit CleaningMMAPreventive - 2023-07-10 12:31:04 AM -05: FCC22026 (2), DIRTY_SENSOR_IO',   'SR Type': 'FL', 'ATM ID': 'TFD01015' },
  {  status: 'Assigned', site_number: '004812830',   name: 'TRULIANT FEDERAL CREDIT UNION', activity_number: '1-91425432043',   address: '6051 TYVOLA GLEN CIRCLE, CHARLOTTE, NC, 28217', Fault: '[Product ID TFD01015] [Terminal Software :: ProlongedMaintenance :: Maintenance exceeds expected length of time][prolonged-maintenance] [eServices automated interventionnot applicable for this fault.] [eServices Generated] PartHistory:07/10/2023 - 01750064638 (1) - Ribbon CCDM, bk,PU0507/10/2023 - 11066659000B (1) - Kit Cleaning MMA ',   'SR Type': 'FL', 'ATM ID': 'TFD01015' },
  {  status: 'Assigned', site_number: '3847872',   name: 'WELLS FARGO BANK NA', activity_number: '1-91417003772',   address: '5641 HOVIS RD, CHARLOTTE, NC, 28216', Fault: 'DECAL Generated Call, Customer Product ID 0672P.7572 CASHACCEPTOR DISABLED FAULT  Bin Jammed. Bin Jammed. 1997(2000) - 62173 - 1073;0;184;123;25;15;577',   'SR Type': 'FL', 'ATM ID': '0672P' },
  {  status: 'Assigned', site_number: '000679068',   name: 'WELLS FARGO BANK NA', activity_number: '1-91416638428',   address: '1527 W MOREHEAD ST, CHARLOTTE, NC, 28208', Fault: 'DECAL Generated Call, Customer Product ID 0908D.FOIP_REARMREARM ATM - CALL ASG FROM SITE FLM  - SRC request rearm.',   'SR Type': 'FL', 'ATM ID': '0908D' },
  {  status: 'Enroute', site_number: '004255180',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91400004313',   address: '111 BRAWLEY SCHOOL RD, MOORESVILLE, NC, 28115', Fault: 'DECAL Generated Call, Customer Product ID B0MV.DO NOTCANCELLED TKT--Todd/Network needs Diebold to check modem &make sure equipment is working and connecting properly tothe alarm line. YOU MUST CALLPart History:07/08/2023 -11066657000B (1) - Kit Cleaning ENA07/09/2023 -49221701000E (1) - KIT,CD RDR,DIP,W/SC,RAILS,ENVIR07/09/2023 - 49275967000A (1) -KIT,UPGRADE,DIP,PROTECTION,PLATE07/09/2023 - 49221699000F(1) - ASD,MDL,DIP CD RDR,ENVIRFELICIA CALLED TO ESCALATETHE TICKET DUE TO POOR RESPONSE. PHONE# VERIFIED.',   'SR Type': 'TR', 'ATM ID': 'B0MV' },
  {  status: 'Assigned', site_number: '005701640',   name: 'SOUTH STATE BANK NATIONAL ASSOCIATION', activity_number: '1-91407357185',   address: '6525 MORRISON BLVD STE 110, CHARLOTTE, NC, 28211', Fault: 'Do not cancel. Do not remote in. Terminal is Open andWounded with a hardware fault of "Dispenser Presenter BillJam Or Sensor Failure" since 7/12/2023 9:18:00 Lastwithdrawal transaction completed 07/11/2023 17:57:27.Please send onsite physical technician to resolve thisissue.  Cash Dispenser :: Vista Device Status :: Fatal fault received with 3091024000 # Banjollu/OPTEVIEW. CHANGETO FL AND REASSIGN    AN ',   'SR Type': 'FL', 'ATM ID': 'NC000889' },
  {  status: 'Assigned', site_number: '000529511',   name: 'FIFTH THIRD BANK', activity_number: '1-91420391654',   address: '4411 HWY 24 27, MIDLAND, NC, 28107', Fault: 'DECAL Generated Call, Customer Product ID4149.Dispenser-Fatal ErroListCommand Redundant activity1-91418118939 / 3090463000 on service request 1-15ZVZJZJhas been identified and included in this request. Problemreported: DECAL Generated Call, Customer Product ID4149.Depository-Transport CHANGE  TO FL AND REASSIGN  AN ',   'SR Type': 'FL', 'ATM ID': '4149' },
  {  status: 'Closed', site_number: '906245',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91410580839',   address: '1945 DICKERSON BLVD, MONROE, NC, 28110', Fault: 'DECAL Generated Call, Customer Product ID BAMR.BAMR CASHIN: Maximum cash in retracts reached2023-07-1119:17:06.0  00001039 *479*19:17:05 DEP ERROR: 0000644600000023 00000000 device state: [Total faiDECAL EffectiveDate/Time cannot be updated as Activity is alreadyCommitted /Enroute /Arrived /Closed /Cancelled statusDECALProduct Status cannot be updated as Activity is alreadyCommitted /Enroute /Arrived /Closed /Cancelled statusDECALPriority cannot be updated as Activity is already Committed/ Enroute /Arrived /Closed / Cancelled statusThe ticket isfixed.Call Cancellation request received from DECAL. ButCall cannot be cancelled as Activity is already inCommitted /Enroute /Arrived /Closed statusDECAL Prioritycannot be updated as Activity is already Committed /Enroute /Arrived /Closed / Cancelled statusCallCancellation request received from DECAL. But Call cannotbe cancelled as Activity is already in Committed /Enroute/Arrived /Closed statusDECAL Effective Date/Time cannot beupdated as Activity is already Committed /Enroute /Arrived/Closed /Cancelled statusDECAL Product Status cannot beupdated as Activity is already Committed /Enroute /Arrived/Closed /Cancelled statusThe ticket is fixed.Atm was up onarrival had a ticket for the ena fault bills jammed in theCI 2$1 and retract bin 18$1 remove the money and clean thenran a reset on the ena tested ok then ran the jammed moneyback through the customer screen which ran to the stackingcassette tested ok did an withdrawal and deposited test itwas OK spoke with Arnelia when I arrived and Thomas when Ideparture atm is back up in service with no faultsshowingTAB (ATM / RECYCLERS); DEPOSIT: CASH / NOTEACCEPTOR; CASH IN-OUT / BILL VALIDATOR; ERROR / FAILURE NOTREPRODUCIBLE - CAUSE UNDETERMINABLE; GO TO NEXT OPTION; JAMREMOVAL',   'SR Type': 'FL', 'ATM ID': 'BAMR' },
  {  status: 'Closed', site_number: '002426920',   name: 'WELLS FARGO BANK NA', activity_number: '1-91417692457',   address: '10630 PROVIDENCE RD, CHARLOTTE, NC, 28277', Fault: 'DECAL Generated Call, Customer Product ID 0567J.7570 CHECKREADER DISABLED FAULT  Disabled. Media is jammed in CDSEFC=(CK1 0 TP 03) StClass=0x30314B43 StCode=0x33305054Atmwas up on arrival had a ticket for the check deposit faultno check found jammed in the check deposit had to run adiagnostic test on the check deposit tested ok then calledASG to send a acknowledge atm is back up in service at mydepartureTAB (ATM / RECYCLERS); DEPOSIT: CHECK ACCEPTOR;UNLISTED SUB-COMPONENTS; ERROR / FAILURE NOT REPRODUCIBLE -CAUSE UNDETERMINABLE; GO TO NEXT OPTION; REBOOT / RESET',   'SR Type': 'FL', 'ATM ID': '0567J' },
  {  status: 'Closed', site_number: '3847782',   name: 'WELLS FARGO BANK NA', activity_number: '1-91403944889',   address: '704 N CANNON BLVD, KANNAPOLIS, NC, 28083', Fault: 'DECAL Generated Call, Customer Product ID6999K.FOIPMEET_SES PROVIDE ACCESS TO Meet 7/12 at 0930with Securitas to work on the alarms, SES141198A003000006.01. Please call ASG to confirm themeet.ACDE: Updated Action Requested to AppointmentRequested due to analysis of the ticket description.ACDEidentified keyword reassignment, moved to holding fileFS0-WELLS_INFOONLYAtm was up on arrival had a ticket for avendor meeting with securitas to work on the alarm systemgave access to the safe Atm is back up in service with nofaults showing at my departure billable for managerreviewTAB (ATM / RECYCLERS); OTHER SERVICES(KEYS/COMBOS/MEETS/LOST DEP...); ACCESS TO SITE / MEET;CUSTOMER REQUESTED; GO TO NEXT OPTION; PROVIDE ACCESS',   'SR Type': 'FL', 'ATM ID': '6999K' },
  {  status: 'Closed', site_number: '4200340',   name: 'BANK OF AMERICA', activity_number: '1-91421022420',   address: '4051 HARRIS SQUARE DR, Harrisburg, NC, 28075', Fault: 'DECAL Generated Call, Customer Product IDINCD1073.#72203409   CIM01S5 ENA Fatal Error (DBD) Priority:undecided  OB Automatic Create IncidentExamineprint quality on back of checks and replace ink if needed. Check and reset the metrics if needed. Ink last replaced212.0 days ago.Atm was up on arrival had a ticket for theMMA fault cash vendor left the door open for the retractbin had to close then ran a reset on the MMA tested ok didan penny check deposit tested ok atm is back up in servicewith all devices healthy at my departure billable formanager review see attached pictureDECAL Priority cannot beupdated as Activity is already Committed / Enroute /Arrived/Closed / Cancelled statusFault is clearedDECAL ProductStatus cannot be updated as Activity is already Committed/Enroute /Arrived /Closed /Cancelled statusDECAL EffectiveDate/Time cannot be updated as Activity is alreadyCommitted /Enroute /Arrived /Closed /Cancelled statusCallCancellation request received from DECAL. But Call cannotbe cancelled as Activity is already in Committed /Enroute/Arrived /Closed statusTAB (ATM / RECYCLERS); DEPOSIT:CHECK - CASH ACCEPTOR (CCDM); CASSETTE(S); CASH PROVIDER /BRANCH OR STORE ERROR / OMISSION OR MISHANDLING; CASSETTEDOOR NOT CLOSED; ADJUSTMENT / REPAIR (NO PARTS)',   'SR Type': 'FL', 'ATM ID': 'INCD1073' },
  {  status: 'Arrived', site_number: '001211648',   name: 'FIFTH THIRD BANK', activity_number: '1-91304903697',   address: '4240 OLD MONROE RD, INDIAN TRAIL, NC, 28079', Fault: 'Meet requestProvide access for Whittenbach techBrandon	410-274-0491**OVKW Opteview process bypassed byAllConnect Data Engine (ACDE) due to problem description. Call moved to Field Service resourcePartHistory:07/06/2023 - 11066657000B (1) - Kit CleaningENAACDE: Updated Action Requested to Appointment Requesteddue to analysis of the ticket description.',   'SR Type': 'FL', 'ATM ID': '4182' },
  {  status: 'Assigned', site_number: '000186734',   name: 'FIFTH THIRD BANK', activity_number: '1-91422557728',   address: '201 N CHARLOTTE AVE, MONROE, NC, 28110', Fault: 'DECAL Generated Call, Customer Product ID 4187.Acommunication failATM status is inactive, open, dispatchingSLM.**OVKW Opteview process bypassed by AllConnect DataEngine (ACDE) due to problem description.  Call moved toField Service resource',   'SR Type': 'FL', 'ATM ID': '4187' },
  {  status: 'Assigned', site_number: '007153630',   name: 'THE FIDELITY BANK', activity_number: '1-91412871178',   address: '520 N MAIN ST, BISCOE, NC, 27209', Fault: 'As per do not reply emailNC000277 Not Dispensing',   'SR Type': 'FL', 'ATM ID': 'NC000277' },
  {  status: 'Assigned', site_number: '006819950',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91408645582',   address: '10910 ARDREY KELL RD, CHARLOTTE, NC, 28277', Fault: 'DECAL Generated Call, Customer Product ID B0AK.B0AK CASHIN: Maximum cash in retracts reached2023-07-1117:47:59.0  00001039 *099*17:47:59 DEP ERROR: 0000644600000023 00000000 device state: [Total fai',   'SR Type': 'FL', 'ATM ID': 'B0AK' },
  {  status: 'Assigned', site_number: '3901903',   name: 'PUBLIX SUPERMARKETS INCORPORATED', activity_number: '1-91399766448',   address: '1735 HECKLE BLVD, ROCK HILL, SC, 29732', Fault: 'DECAL Generated Call, Customer Product ID A148271.Thres:Dispenser ProblemPER NATURE OF CALL SWITCH TI FL.',   'SR Type': 'FL', 'ATM ID': 'A148271' },
  {  status: 'Closed', site_number: '002922820',   name: 'WELLS FARGO BANK NA', activity_number: '1-91359866227',   address: '475 RIVER HWY, MOORESVILLE, NC, 28115', Fault: 'DECAL Generated Call, Customer Product ID0296U.FOIPMEET_SES PROVIDE ACCESS TO Meet 7/12 at 0900with Securitas to work on the Camera, SES143750A001000003.01.01. Please call ASG to confirm themeet.ACDE: Updated Action Requested to AppointmentRequested due to analysis of the ticket description.ACDEidentified keyword reassignment, moved to holding fileFS0-WELLS_INFOONLYINFO Only, 7/10/2023 08:06:00 localtime\FOIPMEET_SES PROVIDE ACCESS TO Meet 7/12 at 0900 withSecuritas to work on the Camera, SES143750A001000003.01.01. Please call ASG to confirm themeet.\Confirmed with ASG for 7/12/2023 09:00:00 localtime\locked to Hollis Kieran\justin.morganProvided accessto site for vendor. Made sure no faults and atm in serviceon depart.TAB (ATM / RECYCLERS); OTHER SERVICES(KEYS/COMBOS/MEETS/LOST DEP...); ACCESS TO SITE / MEET;CUSTOMER REQUESTED; GO TO NEXT OPTION; PROVIDE ACCESS',   'SR Type': 'FL', 'ATM ID': '0296U' },
  {  status: 'Closed', site_number: '002426920',   name: 'WELLS FARGO BANK NA', activity_number: '1-91421514101',   address: '10630 PROVIDENCE RD, CHARLOTTE, NC, 28277', Fault: 'DECAL Generated Call, Customer Product ID 0567J.7570 CHECKREADER DISABLED FAULT  Disabled. Media is jammed in CDSEFC=(CK1 0 TP 03) StClass=0x30314B43StCode=0x33305054DECAL Product Status cannot be updated asActivity is already Committed /Enroute /Arrived /Closed/Cancelled statusCall Cancellation request received fromDECAL. But Call cannot be cancelled as Activity is alreadyin Committed /Enroute /Arrived /Closed statusDECAL Prioritycannot be updated as Activity is already Committed /Enroute /Arrived /Closed / Cancelled statusAutomated callcloseOn arrival atm in service with checkd depositorinoperable. Entered diagnostics and followed jam clearprocedure. No jam was found. Confirmed and cleared faultasg assistance. Atm back in service with no faults.TAB (ATM/ RECYCLERS); DEPOSIT: CHECK ACCEPTOR; ESCROW / REBUNCHER;ERROR / FAILURE NOT REPRODUCIBLE - CAUSE UNDETERMINABLE; GOTO NEXT OPTION; REBOOT / RESET',   'SR Type': 'FL', 'ATM ID': '0567J' },
  {  status: 'Enroute', site_number: '002922820',   name: 'WELLS FARGO BANK NA', activity_number: '1-91421883244',   address: '475 RIVER HWY, MOORESVILLE, NC, 28115', Fault: 'DECAL Generated Call, Customer Product ID 0296U.7521DISPENSER DISABLED - CANNOT DISPENSE CASH  Disabled.Dispenser Disabled - HEAD or SAFE UNIT RACKED OUT - Scode <3303>',   'SR Type': 'FL', 'ATM ID': '0296U' },
  {  status: 'Assigned', site_number: '4231192',   name: 'FIFTH THIRD BANK', activity_number: '1-91418119303',   address: '19212 W CATAWBA AVE, Cornelius, NC, 28031', Fault: 'DECAL Generated Call, Customer Product ID 5255.DepositoryFaulted -Redundant activity 1-91408918560 / 3087610000 onservice request 1-15ZQICXG has been identified and includedin this request. Problem reported: DECAL Generated Call,Customer Product ID 5255.Depository-Transportchnge to fland reassign     an',   'SR Type': 'FL', 'ATM ID': '5255' },
  {  status: 'Closed', site_number: '003299040',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91412310200',   address: '421-C E VIRGINIA AVE, BESSEMER CITY, NC, 28016', Fault: 'DECAL Generated Call, Customer Product ID B2KM.B2KM CASHIN: CashIn input tray jam2023-07-11 20:50:05.0 00001039 *567*20:50:05 DEP ERROR: 00006446 0000000300000000 device state: [Total failure, compoDECAL ProductStatus cannot be updated as Activity is already Committed/Enroute /Arrived /Closed /Cancelled statusDECAL Prioritycannot be updated as Activity is already Committed /Enroute /Arrived /Closed / Cancelled statusDECAL EffectiveDate/Time cannot be updated as Activity is alreadyCommitted /Enroute /Arrived /Closed /Cancelled statusTheticket is fixed.Call Cancellation request received fromDECAL. But Call cannot be cancelled as Activity is alreadyin Committed /Enroute /Arrived /Closed statusSpoke tonetwork. Atm in service. Depositor hardware error cashinfatal. Osd ENA service required. Checked ena found22-1notes and 4-50notes in CI. Found 5-5notes and 3-1notesin esc. Removed. Dusted and cleaned ena. Check retractfound 2-1notes removed place bin1. Clr counters. BroughtAtm back in service no faults. Cs 44 20/20 spoke tonetwork.TAB (ATM / RECYCLERS); DEPOSIT: CASH / NOTEACCEPTOR; CASH IN-OUT / BILL VALIDATOR; ENVIRONMENTALEFFECTS - WEATHER / DUST / DEBRIS / PESTS / FOREIGNSUBSTANCE ETC.; OTHER - ADD DETAIL IN NOTES; JAM REMOVAL',   'SR Type': 'FL', 'ATM ID': 'B2KM' },
  {  status: 'Closed', site_number: '1907579',   name: 'BANK OF AMERICA', activity_number: '1-91416935160',   address: '2401 W FRANKLIN BLVD, GASTONIA, NC, 28052', Fault: 'DECAL Generated Call, Customer Product IDINCD0524.#72181371   1518 BILLS NOT SEEN AT EXIT SEPriority:           OB Automatic Create IncidentPreventive- 2023-07-11 04:37:11 PM -05: TBT0SH12 (3), Shuttle failedto move to homePreventive - 2023-07-11 04:35:13 PM -05:TBT0PS1B (1), PSoC CI CCA bus off errorVru check. Atm inservice. Dsa dispenser TBT0SH12. Checked dispenser good.Power off on dispenser. Same error. Reset good. Brought Atmback in service no faults. Vru clear. Cs 3243TAB (ATM /RECYCLERS); DISPENSER - CASH / NOTE; CLAMP / CARRIAGE /SHUTTLE; ERROR / FAILURE NOT REPRODUCIBLE - CAUSEUNDETERMINABLE; GO TO NEXT OPTION; REBOOT / RESET',   'SR Type': 'FL', 'ATM ID': 'INCD0524' },
  {  status: 'Closed', site_number: '000313619',   name: 'BANK OF AMERICA', activity_number: '1-91416799979',   address: '2401 W FRANKLIN BLVD, GASTONIA, NC, 28052', Fault: 'DECAL Generated Call, Customer Product IDINCD0263.#72182952   1518 BILLS NOT SEEN AT EXIT SEPriority:           OB Automatic Create IncidentVru check.Atm in service. Reboot. Atm out of service. Dsa dispenserTBT0SH1J. Checked shuttle and tracks. Cleaned tracks.Reset. Same error. Rechecked all cassettes good. Sensorsgood. Fault service. Dispenser failed. Opening 2nd lineticket. Spoke to network. Cs 4940Spoke to Mike from ANSTAB(ATM / RECYCLERS); DISPENSER - CASH / NOTE; CLAMP /CARRIAGE / SHUTTLE; OTHER EXTERNAL CAUSE NOT LISTED(DEBRIEF DETAILS); GO TO NEXT OPTION; OTHER: PROVIDE FULL DETAILS',   'SR Type': 'FL', 'ATM ID': 'INCD0263' },
  {  status: 'Closed', site_number: '3848317',   name: 'WELLS FARGO BANK NA', activity_number: '1-91417006677',   address: '110 E FRANKLIN AVE, GASTONIA, NC, 28052', Fault: 'DECAL Generated Call, Customer Product ID 0653T.7579 CASHACCEPTOR ESCROW FAULT  Escrow Fault. ESCROWJAM-Z-XXXXXXXXXXXX5669-07/11/2320:12:44-50-0-11-0-4-0-2-1DECAL Priority cannot be updatedas Activity is already Committed / Enroute /Arrived /Closed/ Cancelled statusDECAL Product Status cannot be updated asActivity is already Committed /Enroute /Arrived /Closed/Cancelled statusCall Cancellation request received fromDECAL. But Call cannot be cancelled as Activity is alreadyin Committed /Enroute /Arrived /Closed statusAutomated callcloseCash currently unavailable and deposits not accepted.Diagnostic cash acceptor esc jam. Printed receipt. Randiagnostic. Hardware error. Tsop error recycler 3509.Checked head an safe. Dusted. Reset. Firmware clr error.Checked recycler 4-5notes found in light transport. Removedplaced in rejectbin and rubber-banded with other media.Reset. Fatal motor over current error. Checked recyclerfound 4-1notes removed placed in rejectbin. Removed28-1notes from esc. Placed in safe. Removed safe jam.Reset. Check allinbin removed jam and moved qrt of media torejectbin. Brought Atm back in service. Cs 2356. Atm rightnext to it 065m the atm door won’t stay shutTAB (ATM /RECYCLERS); DEPOSIT: CASH / NOTE ACCEPTOR; ESCROW /REBUNCHER; ERROR / FAILURE NOT REPRODUCIBLE - CAUSEUNDETERMINABLE; GO TO NEXT OPTION; JAM REMOVAL',   'SR Type': 'FL', 'ATM ID': '0653T' },
  {  status: 'Arrived', site_number: '005048050',   name: 'FIRST HORIZON BANK', activity_number: '1-91421205143',   address: '804 S NEW HOPE RD, GASTONIA, NC, 28054', Fault: '[Product ID FH8965] [Mixed Media Depositor :: Vista DeviceStatus :: Inoperative] [56529] [Automated device resetattempted by eServices to resolve this fault.] [eServicesGenerated]No depository cleaning kit consumed in last 180days. Recommending Deposit Cleaning Kit be used on thisSR.Examine print quality on back of checks and replace inkif needed.  Check and reset the metrics if needed. Ink lastreplaced 322.0 days ago.Customer Service ManagementApplication (CSMA) has requested for cancellation of thisactivity. The activity was not cancelled as it was alreadyCommitted or Enroute or Arrived.',   'SR Type': 'FL', 'ATM ID': 'FH8965' },
  {  status: 'Assigned', site_number: '3848317',   name: 'WELLS FARGO BANK NA', activity_number: '1-91423396172',   address: '110 E FRANKLIN AVE, GASTONIA, NC, 28052', Fault: 'DECAL Generated Call, Customer Product ID 0653T.7521DISPENSER DISABLED - CANNOT DISPENSE CASH  Disabled.CDispenser::GetErrorCodeDescription   Shutter: 1 (notclosed) Cash Tray: 0 (empty) Transport Pat',   'SR Type': 'FL', 'ATM ID': '0653T' },
  {  status: 'Assigned', site_number: '1296818',   name: 'BANK OF AMERICA', activity_number: '1-91424810504',   address: '355 S NEW HOPE RD, GASTONIA, NC, 28054', Fault: 'DECAL Generated Call, Customer Product IDINCD2433.#72211115   1705 RECEIPT PAPER OUT        Priority:           OB Automatic Create IncidentExamineprint quality on back of checks and replace ink if needed. Check and reset the metrics if needed. Ink last replaced132.0 days ago.Preventive - 2023-07-02 08:01:14 PM -05:MMA03875 (1), hardware unit in error state: head -> CCDMinput-output tray -> separator -> input slot drive',   'SR Type': 'FL', 'ATM ID': 'INCD2433' },
  {  status: 'Assigned', site_number: '3857479',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91403407059',   address: '141 W 8TH AVE, Gastonia, NC, 28052', Fault: 'This is a follow up activity. Associated parent activity#is 1-91397794873 , which was closed incomplete withIncomplete reason as Site not available.3825 Westgate laneblvd Charlotte NC Correct Adress PER tech Knight',   'SR Type': 'FL', 'ATM ID': 'B4GH' },
  {  status: 'Closed', site_number: '003452140',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91415339504',   address: '1011 N 2ND ST, ALBEMARLE, NC, 28001', Fault: 'DECAL Generated Call, Customer Product ID B5AL.B5AL CashIn not operational2023-07-12 00:14:08.0  0000111700:14:08 DEVICE CCCashInFW STATUS 4 SUPPLY 1 device state:[Partial failure, technical serviceTech: Greg Ralph WorkPerformed: Upon arrival the atm was not accepting cashdeposits.  I inspected the Ena but did not find anyphysical jams.  I cleaned and tested it to ensure that itwas working correctly.Upon arrival the atm was notaccepting cash deposits.  I inspected the Ena but did notfind any physical jams.  I cleaned and tested it to ensurethat it was working correctly.',   'SR Type': 'FL', 'ATM ID': 'B5AL' },
  {  status: 'Closed', site_number: '4087072',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91420755509',   address: '245 ROWAN TECH RD, SALISBURY, NC, 28144', Fault: 'DECAL Generated Call, Customer Product ID B7SA.B7SA  CashDispenser Error2023-07-12 09:49:49.0  00001029*559*09:49:49 CDM ERROR: 0000643A 00000000 0000FECE devicestate: [Total failure, technical servNo depositorycleaning kit consumed in last 180 days. RecommendingDeposit Cleaning Kit be used on this SR.DECAL Prioritycannot be updated as Activity is already Committed /Enroute /Arrived /Closed / Cancelled statusThe ticket isfixed.DECAL Effective Date/Time cannot be updated asActivity is already Committed /Enroute /Arrived /Closed/Cancelled statusDECAL Product Status cannot be updated asActivity is already Committed /Enroute /Arrived /Closed/Cancelled statusCall Cancellation request received fromDECAL. But Call cannot be cancelled as Activity is alreadyin Committed /Enroute /Arrived /Closed statusTech: GregRalph Work Performed: Upon arrival the atm was notdispensing cash.  I inspected the dispenser and found thatthe divert bin was out. I reinserted it,  cleaned andtested.Upon arrival the atm was not dispensing cash.  Iinspected the dispenser and found that the divert bin wasout. I reinserted it,  cleaned and tested.',   'SR Type': 'FL', 'ATM ID': 'B7SA' },
  {  status: 'Arrived', site_number: '1411469',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91421960060',   address: '850 HARRISON RD STE 2, SALISBURY, NC, 28147', Fault: 'DECAL Generated Call, Customer Product ID BDSA.BDSA  CashDispenser Error2023-07-12 10:42:47.0  00001029*052*10:42:47 CDM ERROR: 0000643A 00000000 0000FECE devicestate: [Total failure, technical serv',   'SR Type': 'FL', 'ATM ID': 'BDSA' },
  {  status: 'Arrived', site_number: '3864873',   name: 'BANK OF AMERICA', activity_number: '1-91421352907',   address: '1000 LOWES BLVD, Mooresville, NC, 28117', Fault: 'DECAL Generated Call, Customer Product IDINCD2374.#72205181   1507 CASH DISPENSER REJECT BINPriority:undecided  OB Automatic Create IncidentNodepository cleaning kit consumed in last 180 days.Recommending Deposit Cleaning Kit be used on thisSR.Redundant activity 1-91421353087 / 3091566000 on servicerequest 1-15ZXWVGZ has been identified and included in thisrequest. Problem reported: DECAL Generated Call, CustomerProduct ID INCD2374.#72205551   1420 CARD READER NOTWORKING   Priority:           OB Automatic Create Incident',   'SR Type': 'FL', 'ATM ID': 'INCD2374' },
  {  status: 'Assigned', site_number: '000671305',   name: 'FIFTH THIRD BANK', activity_number: '1-91419873104',   address: '4725 HWY 49 S, HARRISBURG, NC, 28075', Fault: 'DECAL Generated Call, Customer Product ID 4135.Receiptprinter issuHenry from Brinks called in to report thatReceipt Printer is not working. Dispatching FLM.Customerrequested FL – First Line. No First Line entitlementavailable. **OVKW Opteview process bypassed by AllConnectData Engine (ACDE) due to problem description.  Call movedto Field Service resource ',   'SR Type': 'FL', 'ATM ID': '4135' },
  {  status: 'Closed', site_number: '005688750',   name: 'FAMILY TRUST FEDERAL CREDIT UNION', activity_number: '1-91410442814',   address: '1219 HWY 55 E, CLOVER, SC, 29710', Fault: '[Product ID Z11311] [Cash Dispenser :: Vista Device Status:: Fatal] [56369H] [Automated Terminal reboot attempted byeServices to resolve this fault.] [eServicesGenerated]**OVRA This eServices call has been identified asa repeated call for the same module within 24 hours byACDE.  Original completed call is 1-91407049494 on servicerequest 1-15ZPEAPU.Customer Service Management Application(CSMA) has requested for cancellation of this activity. Theactivity was not cancelled as it was already Committed orEnroute or Arrived.Tech: Joseph Wanczyk Work Performed:Unit is passing and then failing in multiple resets andtests, was in service on departure, requested for a TR techto diagnose further.Unit is passing and then failing inmultiple resets and tests, was in service on departure,requested for a TR tech to diagnose further.',   'SR Type': 'FL', 'ATM ID': 'Z11311' },
  {  status: 'Closed', site_number: '4241589',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91414931023',   address: '527 WINECOFF SCHOOL RD, Concord, NC, 28027', Fault: 'DECAL Generated Call, Customer Product ID B8KA.B8KA CashIn Not Operational2023-07-11 23:53:23.0  00001039*370*23:53:23 DEP ERROR: 00006446 00000001 00000000 devicestate: [Partial failure, technicalTech: Joseph WanczykWork Performed: Cleared 20 $1, 11 $5, 3 $10, 5 $20 billsfrom CI, ran operational test successfully, inserviceCleared 20 $1, 11 $5, 3 $10, 5 $20 bills from CI,ran operational test successfully, in service',   'SR Type': 'FL', 'ATM ID': 'B8KA' },
  {  status: 'Closed', site_number: '4280552',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91413114475',   address: '4430 THE PLAZA, Charlotte, NC, 28215', Fault: 'DECAL Generated Call, Customer Product ID B6CT.B6CT CashIn not operational2023-07-11 21:54:28.0  0000111721:54:28 DEVICE CCCashInFW STATUS 4 SUPPLY 1 device state:[Total failure, components]; componTech: Joseph WanczykWork Performed: No faults on arrival, reset successful, inserviceNo faults on arrival, reset successful, in service',   'SR Type': 'FL', 'ATM ID': 'B6CT' },
  {  status: 'Committed', site_number: '002085750',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91416385226',   address: '2800 W SUGAR CREEK RD, CHARLOTTE, NC, 28262', Fault: 'DECAL Generated Call, Customer Product ID B2UC.B2UC CashIn not operational2023-07-12 05:23:31.0  0000111705:23:31 DEVICE CCCashInFW STATUS 4 SUPPLY 1 device state:[Total failure, components]; compon',   'SR Type': 'FL', 'ATM ID': 'B2UC' },
  {  status: 'Assigned', site_number: '3848181',   name: 'WELLS FARGO BANK NA', activity_number: '1-91420332033',   address: '2910 S BLVD, Charlotte, NC, 28209', Fault: 'Email. Code: NNTE: $0.00CustomerPO# TR02556178-142202MG06000047 CorrigoWO#  142202MG06000047Customer Product ID:NA      CustomerPriority: URGENTProblem Description: Unlisted Area > BankEquipment > Night DropCustomer - DoorNight drop oncustomer side, door keeps getting stuck. Need assistance.Thank you.Michelle.Duarte@wellsfargo.com; ',   'SR Type': 'TR', 'ATM ID': '' },
  {  status: 'Assigned', site_number: '4167350',   name: 'WALGREENS DRUG STORE', activity_number: '1-91422080631',   address: '544 PROVIDENCE RD, CHARLOTTE, NC, 28207', Fault: 'CODE:A Email.PO# 250621218Store#: 19654NTE$3000.00Priority: 	P30 (30 days) - No OTFault: DRIVE-THRU/ PHARMACY DRIVE THRU / LANE 2 / RECOMMISSION / Is the lanecurrently decommissioned or needs repair?: Decommissioned /How long has the lane been out of service and which laneneeds to be recommissioned?: lane 2 / What is driving therequest for the recommission?: rscm / Does the drive thruuse a Bavis or Diebold unit?: Diebold Tube / Counting thewindow lane, how many lanes are there?: 2 / Counting thewindow lane, how many lanes are currently used?: 1 / Whattype of drive thru window does the store have?: SecurityWindow (Uses drawer and intercom) / Is this work orderbeing created to prep/repair a covid testing site?: No /Wanted to see if we could recommission lane 2. if not,would like to have it properly decommissioned. ',   'SR Type': 'TR', 'ATM ID': 'Lane 1' },
  {  status: 'Open', site_number: '004931600',   name: 'TD BANK NATIONAL ASSOCIATION', activity_number: '1-91425927163',   address: '4100 POSTAL WAY, MYRTLE BEACH, SC, 29579', Fault: '[Product ID TW04A783] [Receipt Printer :: Paper :: Jam][452022] [eServices automated intervention not applicablefor this fault.] [eServices Generated] ACDE EnrichmentInformation --------------------------- Service Insight(12.07.23 12:25) Desc: There was a paper jam - EFC:T311004CE04C0005 - Data: There was a paper jam. - Position:TP31R - Category: OUT_OF_SERVICE - Usecase: NONE - ',   'SR Type': 'FL', 'ATM ID': '' },
];
var activitiesTimestamp = '2023-07-12 12:27:15 PM';
