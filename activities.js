var activities = [
  {  status: 'Enroute', site_number: '002301170',   name: 'FIRST CITIZENS BANK & TRUST COMPANY', activity_number: '1-91275107607',   address: '8105 MALLARD CREEK RD, CHARLOTTE, NC, 28262', Fault: 'DECAL Generated Call, Customer Product ID A233.sev=siteid=002301170 comment=Dispatching for InactivityPleaseupdate the ETA.',   'SR Type': 'FL', 'ATM ID': 'A233' },
  {  status: 'Assigned', site_number: '3863931',   name: 'TRULIANT FEDERAL CREDIT UNION', activity_number: '1-91332752462',   address: '324 N TRADE ST STE 101, Matthews, NC, 28105', Fault: 'Terminal: TFD01022 " Fault: Terminal Software | Transaction| Inactivity Threshold (480 Minutes) Exceeded" Please solveASAP. Examine print quality on back of checks and replaceink if needed.  Check and reset the metrics if needed. Inklast replaced 310.0 days ago. Preventive - 2023-07-0304:35:15 PM -05: TBT1PS12 (1), PSoC CI CANerror Preventive - 2023-07-03 04:35:15 PM -05: TBT1PS1B(1), PSoC CI CCA bus off error ',   'SR Type': 'FL', 'ATM ID': 'TFD01022' },
  {  status: 'Closed', site_number: '906245',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91294003732',   address: '1945 DICKERSON BLVD, MONROE, NC, 28110', Fault: 'DECAL Generated Call, Customer Product ID BAMR.BAMR CashIn not operational2023-07-06 20:53:31.0  0000111720:53:31 DEVICE CCCashInFW STATUS 4 SUPPLY 1 device state:[Total failure, components]; componDECAL Priority cannotbe updated as Activity is already Committed / Enroute/Arrived /Closed / Cancelled statusCall Cancellationrequest received from DECAL. But Call cannot be cancelledas Activity is already in Committed /Enroute /Arrived/Closed statusThe ticket is fixed.DECAL Product Statuscannot be updated as Activity is already Committed /Enroute/Arrived /Closed /Cancelled statusDECAL Effective Date/Timecannot be updated as Activity is already Committed /Enroute/Arrived /Closed /Cancelled statusAtm was up on arrival hada ticket for the ena fault bills jammed in the verticaltransport 1$1 and escrow 6$1, 2$20 remove the money andclean then ran a reset on the ena tested ok then ran thejammed money back through the customer screen which ran tothe stacking cassette tested ok did an withdrawal anddeposited test it was OK spoke with Barbara when I arrivedand Jay when I departure atm is back up in service with nofaults showingTAB (ATM / RECYCLERS); DEPOSIT: CASH / NOTEACCEPTOR; ESCROW / REBUNCHER; ERROR / FAILURE NOTREPRODUCIBLE - CAUSE UNDETERMINABLE; GO TO NEXT OPTION; JAMREMOVAL',   'SR Type': 'FL', 'ATM ID': 'BAMR' },
  {  status: 'Closed', site_number: '3960895',   name: 'BANK OF AMERICA', activity_number: '1-91329660099',   address: '13805 CONLAN CIR, Charlotte, NC, 28277', Fault: 'DECAL Generated Call, Customer Product IDINCD0536.#72066100   CIM01S5 ENA Fatal Error (DBD) Priority:           OB Automatic Create IncidentPreventive- 2023-07-03 03:27:49 PM -05: TBT0SRG2 (1), Retract entrysensor calibrated reduced rangeDECAL Product Status cannotbe updated as Activity is already Committed /Enroute/Arrived /Closed /Cancelled statusDECAL Priority cannot beupdated as Activity is already Committed / Enroute /Arrived/Closed / Cancelled statusDECAL Effective Date/Time cannotbe updated as Activity is already Committed /Enroute/Arrived /Closed /Cancelled statusCall Cancellation requestreceived from DECAL. But Call cannot be cancelled asActivity is already in Committed /Enroute /Arrived /ClosedstatusFault is clearedAtm was up on arrival had a ticketfor the MMA fault bill jammed in the transport 1$50 removethe money and placed it in the cash deposit cassette thenran a reset on the MMA tested ok also had cassette 1 forthe dispenser was empty had to divide the money up fromcassette 2 into 1 which are twenty denomination then ran areset on the dispenser tested OK receipt paper good thendid an penny check deposit tested ok atm is back up inservice with no faults showing at my departureTAB (ATM /RECYCLERS); DEPOSIT: CHECK - CASH ACCEPTOR (CCDM);INPUT-OUTPUT / METAL DETECTION; ERROR / FAILURE NOTREPRODUCIBLE - CAUSE UNDETERMINABLE; GO TO NEXT OPTION; JAMREMOVAL',   'SR Type': 'FL', 'ATM ID': 'INCD0536' },
  {  status: 'Closed', site_number: '002112780',   name: 'BANK OF AMERICA', activity_number: '1-91329735448',   address: '9505 PINEVILLE MATTHEWS RD, PINEVILLE, NC, 28134', Fault: 'DECAL Generated Call, Customer Product IDINCD0380.#72062467   1705 RECEIPT PAPER OUT        Priority:           OB Automatic Create IncidentExamineprint quality on back of checks and replace ink if needed. Check and reset the metrics if needed. Ink last replaced123.0 days ago.Preventive - 2023-07-02 10:13:29 PM -05:MMA03226 (1), Media jam entering DTRDECAL Priority cannotbe updated as Activity is already Committed / Enroute/Arrived /Closed / Cancelled statusFault is clearedDECALProduct Status cannot be updated as Activity is alreadyCommitted /Enroute /Arrived /Closed /Cancelled statusDECALEffective Date/Time cannot be updated as Activity isalready Committed /Enroute /Arrived /Closed /CancelledstatusCall Cancellation request received from DECAL. ButCall cannot be cancelled as Activity is already inCommitted /Enroute /Arrived /Closed statusAtm was up onarrival had a ticket for the receipt printer fault out ofpaper atm had receipt paper on it had to refeed the paperthen ran a reset on the receipt printer tested ok did anpenny check deposit and received a receipt atm is back upin service with all devices healthy at my departureTAB (ATM/ RECYCLERS); PRINTER; UNLISTED SUB-COMPONENTS; ERROR /FAILURE NOT REPRODUCIBLE - CAUSE UNDETERMINABLE; GO TO NEXTOPTION; ADJUSTMENT / REPAIR (NO PARTS)',   'SR Type': 'FL', 'ATM ID': 'INCD0380' },
  {  status: 'Closed', site_number: '000313619',   name: 'BANK OF AMERICA', activity_number: '1-91329737162',   address: '2401 W FRANKLIN BLVD, GASTONIA, NC, 28052', Fault: 'DECAL Generated Call, Customer Product IDINCD0263.#72057547   CIM01S5 ENA Fatal Error (DBD) Priority:           OB Automatic Create IncidentDECALProduct Status cannot be updated as Activity is alreadyCommitted /Enroute /Arrived /Closed /Cancelled statusFaultis clearedDECAL Priority cannot be updated as Activity isalready Committed / Enroute /Arrived /Closed / CancelledstatusDECAL Effective Date/Time cannot be updated asActivity is already Committed /Enroute /Arrived /Closed/Cancelled statusCall Cancellation request received fromDECAL. But Call cannot be cancelled as Activity is alreadyin Committed /Enroute /Arrived /Closed statusAtm was up onarrival had a ticket for the MMA fault bills jammed in theCI 1$5, 1$20 and transport 6$1, 1$5, 2$20 remove the moneyand placed it in the cash deposit cassette then ran a reseton the MMA tested ok did an penny check deposit tested okatm is back up in service with no faults showing at mydepartureTAB (ATM / RECYCLERS); DEPOSIT: CHECK - CASHACCEPTOR (CCDM); INPUT-OUTPUT / METAL DETECTION; ERROR /FAILURE NOT REPRODUCIBLE - CAUSE UNDETERMINABLE; GO TO NEXTOPTION; JAM REMOVAL',   'SR Type': 'FL', 'ATM ID': 'INCD0263' },
  {  status: 'Arrived', site_number: '3849019',   name: 'WELLS FARGO BANK NA', activity_number: '1-91329720270',   address: '1018 DALLAS CHERRYVILLE, DALLAS, NC, 28034', Fault: 'DECAL Generated Call, Customer Product ID 0188F.7579 CASHACCEPTOR ESCROW FAULT  Escrow Fault. ESCROWJAM-X-XXXXXXXXXXXX3290-07/07/23 20:05:22-0-0-0-0-4-0-2-2',   'SR Type': 'FL', 'ATM ID': '0188F' },
  {  status: 'Assigned', site_number: '1225640',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91307340904',   address: '3130 MILTON RD, CHARLOTTE, NC, 28215', Fault: 'DECAL Generated Call, Customer Product ID B2ET.B2ET  CCDM:General hardware error of CCDM2023-07-07 11:52:04.0 00001550 *675*11:52:04 CIN/CHQ ERROR: 0000645A 0000000B00000000 device state: [Total faimembers cards keepgetting stuck. please check asap',   'SR Type': 'FL', 'ATM ID': 'B2ET' },
  {  status: 'Assigned', site_number: '003163240',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91297788750',   address: '4640 OLD PINEVILLE RD, CHARLOTTE, NC, 28204', Fault: 'DECAL Generated Call, Customer Product ID B3CP.B3CP CASHIN: CashIn input tray jam2023-07-07 02:15:07.0 00001039 *836*02:15:07 DEP ERROR: 00006446 0000000300000000 device state: [Total failure, compo',   'SR Type': 'FL', 'ATM ID': 'B3CP' },
  {  status: 'Assigned', site_number: '4226114',   name: 'FIFTH THIRD BANK', activity_number: '1-91330548011',   address: '3098 EASTWAY DR, Charlotte, NC, 28205', Fault: 'DECAL Generated Call, Customer Product ID 5266.RemRes -Cassette 4-ListCassette4Command ',   'SR Type': 'FL', 'ATM ID': '5266' },
  {  status: 'Assigned', site_number: '004172420',   name: 'BANK OF AMERICA', activity_number: '1-91321908406',   address: '6425 ALBEMARLE RD, CHARLOTTE, NC, 28212', Fault: 'DECAL Generated Call, Customer Product IDINCD1208.#72058519   CIM01S5 ENA Fatal Error (DBD) Priority:           OB Automatic Create IncidentExamineprint quality on back of checks and replace ink if needed. Check and reset the metrics if needed. Ink last replaced125.0 days ago.',   'SR Type': 'FL', 'ATM ID': 'INCD1208' },
  {  status: 'Assigned', site_number: '000805267',   name: 'WELLS FARGO BANK NA', activity_number: '1-91329992536',   address: '6101 SOUTH BLVD, CHARLOTTE, NC, 28210', Fault: 'DECAL Generated Call, Customer Product ID 6700D.7572 CASHACCEPTOR DISABLED FAULT  Bin Jammed. Retract BinFullPreventive - 2023-06-29 08:42:43 AM -08: FCC00194 (1),USB-CONNECTION PROBLEM ON MULTIPLE DEVICES CONNECTED TO FIB-HUB',   'SR Type': 'FL', 'ATM ID': '6700D' },
  {  status: 'Assigned', site_number: '3848373',   name: 'WELLS FARGO BANK NA', activity_number: '1-91331277609',   address: '15030 IDLEWILD RD, STALLINGS, NC, 28104', Fault: 'DECAL Generated Call, Customer Product ID 4263P.7506RECEIPT PRINTER DISABLED  Disabled. Comm Error (unable toread) (sc=13) (43247-1-0-TP27) ',   'SR Type': 'FL', 'ATM ID': '4263P' },
  {  status: 'Assigned', site_number: '005273640',   name: 'BANK OF AMERICA', activity_number: '1-91331435546',   address: '5501 JOSH BIRMINGHAM PKWY, CHARLOTTE, NC, 28219', Fault: 'DECAL Generated Call, Customer Product IDINCD2237.#72069759   1716 RECEIPT PRINTER EJECT JAMPriority:           OB Automatic CreateIncident Preventive - 2023-06-28 05:42:30 PM -05: MMA03005(1), Jam in Input Output area ',   'SR Type': 'FL', 'ATM ID': 'INCD2237' },
  {  status: 'Assigned', site_number: '1896353',   name: 'TRULIANT FEDERAL CREDIT UNION', activity_number: '1-91314638943',   address: '4530 PARK RD, CHARLOTTE, NC, 28209', Fault: '[Product ID TFD01007] [Bulk Check Depositor :: Vista DeviceStatus :: Inoperative] [56469] [Automated device resetattempted by eServices to resolve this fault.] [eServicesGenerated]No depository cleaning kit consumed in last 180days. Recommending Deposit Cleaning Kit be used on thisSR.Preventive - 2023-07-03 11:34:22 AM -05: FCC00137 (1),THRESHOLD - CCDM2_BUNDLE_TRANSPORT_PROBLEM[CurrencyAcceptor :: Vista Device Status :: Inoperative] [56289][Automated Terminal reboot attempted by eServices toresolve this fault.]',   'SR Type': 'FL', 'ATM ID': 'TFD01007' },
  {  status: 'Assigned', site_number: '000674143',   name: 'WELLS FARGO BANK NA', activity_number: '1-91332971981',   address: '2803 FREEDOM DR, CHARLOTTE, NC, 28208', Fault: 'DECAL Generated Call, Customer Product ID 0702H.7570 CHECKREADER DISABLED FAULT  Disabled. Bin Missing ',   'SR Type': 'FL', 'ATM ID': '0702H' },
  {  status: 'Assigned', site_number: '004812830',   name: 'TRULIANT FEDERAL CREDIT UNION', activity_number: '1-91296558313',   address: '6051 TYVOLA GLEN CIRCLE, CHARLOTTE, NC, 28217', Fault: '[Product ID TFD01015] [Currency Acceptor :: Hardware ::Error] [300534] [Automated device reset attempted byeServices to resolve this fault.] [eServicesGenerated]Examine print quality on back of checks andreplace ink if needed.  Check and reset the metrics ifneeded. Ink last replaced 272.0 days ago.Preventive -2023-07-04 10:21:13 PM -05: FCC00138 (8), THRESHOLD -CCDM2_BUNDLE_SEPERATION_PROBLEM[Bulk Check Depositor ::Hardware :: Offline] [300530] [eServices automatedintervention not applicable for this fault.][TerminalSoftware :: Application :: Terminal started] [56000][eServices automated intervention not applicable for thisfault.][Terminal Software :: Application :: Vistaapplication is in Service][Bulk Check Depositor :: Hardware:: Operational][Currency Acceptor :: Hardware ::Operational][Mixed Media Depositor :: Hardware ::Operational][Currency Acceptor :: Hardware :: Error][300534] [Automated device reset attempted by eServices toresolve this fault.][Mixed Media Depositor :: Hardware ::Error] [300521mma] [eServices automated intervention notapplicable for this fault.][Bulk Check Depositor ::Hardware :: Offline] [300530] [eServices automatedintervention not applicable for this fault.][Bulk CheckDepositor :: Hardware :: Operational][Currency Acceptor ::Hardware :: Operational][Mixed Media Depositor :: Hardware:: Operational]',   'SR Type': 'FL', 'ATM ID': 'TFD01015' },
  {  status: 'Assigned', site_number: '1221038',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91320788641',   address: '11225 GOLF LINKS DR NORTH, CHARLOTTE, NC, 28277', Fault: 'DECAL Generated Call, Customer Product ID B0PD.B0PD  CashDispenser Error2023-07-07 17:37:49.0  00001029*436*17:37:48 CDM ERROR: 0000643A 00000000 0000FFF2 devicestate: [Total failure, technical servNo depositorycleaning kit consumed in last 180 days. RecommendingDeposit Cleaning Kit be used on this SR.CHERYLRIGGBSEE/CALLED TO ESCALATE THE TICKET DUE TO POORRESPONSE. PHONE# VERIFIED.sent tech Jacob Reynolds anessage in teams  he is aware of ESC ETA is 2300.  calledSECU with update.  7/7/23 20:17 rlBARBARA/HELPDESK, CALLEDTO ESCALATE THE TICKET DUE TO POOR RESPONSE. PHONE# VERIFIED.',   'SR Type': 'FL', 'ATM ID': 'B0PD' },
  {  status: 'Assigned', site_number: '000677245',   name: 'WELLS FARGO BANK NA', activity_number: '1-91326670054',   address: '2610 W SUGAR CREEK RD, CHARLOTTE, NC, 28262', Fault: 'DECAL Generated Call, Customer Product ID 0005J.7572 CASHACCEPTOR DISABLED FAULT  Disabled. JAM:note jam: head ->middle transport unit -> banknote reader -> virtualtransportsensor StClass=000065BC St',   'SR Type': 'FL', 'ATM ID': '0005J' },
  {  status: 'Assigned', site_number: '003481600',   name: 'BANK OZK', activity_number: '1-91323359873',   address: '1225 GASTONIA HWY, BESSEMER CITY, NC, 28016', Fault: '[Product ID NC000416] [Bulk Check Depositor :: Vista DeviceStatus :: Inoperative] [56469] [Automated device resetattempted by eServices to resolve this fault.] [eServicesGenerated]Invalid Effective Date Time received fromCustomer Service Management Application (CSMA) 07/07/202319:05:55  Service Call was generated with defaulteffective date/time as the current site time when the callwas created.Preventive - 2023-07-06 09:02:47 AM -05:PR20P106 (2), Paper roll empty[Mixed Media Depositor ::Vista Device Status :: Inoperative] [56529] [Automateddevice reset attempted by eServices to resolve this fault.]',   'SR Type': 'FL', 'ATM ID': 'NC000416' },
  {  status: 'Assigned', site_number: '003014880',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91319091666',   address: '1935 JAKE ALEXANDER BLVD W, SALISBURY, NC, 28147', Fault: 'DECAL Generated Call, Customer Product ID B2SA.B2SA Receipt printer Error2023-07-07 16:48:38.0  00001036*622*16:48:38 REC ERROR: 00006434 00000000 0000000B devicestate: [Total failure, components]; ',   'SR Type': 'FL', 'ATM ID': 'B2SA' },
  {  status: 'Assigned', site_number: '4175406',   name: 'SELF HELP CREDIT UNION', activity_number: '1-91323310114',   address: '2146 STATESVILLE BLVD, Salisbury, NC, 28147', Fault: 'This is a follow up activity. Associated parent activity#is 1-91314087137 , which was closed incomplete withIncomplete reason as No Access - Lock/Keys/Alarm.Nodepository cleaning kit consumed in last 180 days.Recommending Deposit Cleaning Kit be used on this SR.',   'SR Type': 'FL', 'ATM ID': 'CKY155' },
  {  status: 'Assigned', site_number: '002039780',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91319067206',   address: '317 N SALISBURY AVE, SPENCER, NC, 28159', Fault: 'DECAL Generated Call, Customer Product ID B3SA.B3SA  CCDM:Cheque device jammed2023-07-07 17:00:47.0  00001550*963*17:00:47 CIN/CHQ ERROR: 0000645A 00000008 00000000device state: [Partial failure, te No depository cleaningkit consumed in last 180 days. Recommending DepositCleaning Kit be used on this SR. ',   'SR Type': 'FL', 'ATM ID': 'B3SA' },
  {  status: 'Assigned', site_number: '4261390',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91274430577',   address: '201 MONTGOMERY CROSSING, Biscoe, NC, 27209', Fault: 'DECAL Generated Call, Customer Product IDB4TR.Todd/Network requesting vendor meet 7/7 at 9:00am toprovide access to Brightspeed. Please call toconfirm...FLM_Vendor MeetACDE: Updated Action Requested toAppointment Requested due to analysis of the ticket description.',   'SR Type': 'FL', 'ATM ID': 'B4TR' },
  {  status: 'Assigned', site_number: '007153630',   name: 'THE FIDELITY BANK', activity_number: '1-91314831353',   address: '520 N MAIN ST, BISCOE, NC, 27209', Fault: '[Product ID NC000277] [Currency Acceptor :: Vista DeviceStatus :: Inoperative] [56289] [Automated Terminal rebootattempted by eServices to resolve this fault.] [eServicesGenerated][Cash Dispenser :: Transport :: Inoperative][453371] [eServices automated intervention not applicablefor this fault.]As per emailATM ID :  NC000277Name/Contact: Jobin, JenEmail ID :jennifer.jobin@fidelitybanknc.comFault: The ATMexperienced a hardware malfunction during a withdrawal andis no longer dispensing.',   'SR Type': 'FL', 'ATM ID': 'NC000277' },
  {  status: 'Closed', site_number: '1445974',   name: 'BANK OF AMERICA', activity_number: '1-91329736629',   address: '3401 THE PLAZA, CHARLOTTE, NC, 28205', Fault: 'DECAL Generated Call, Customer Product IDINCD2500.#72065666   1420 CARD READER NOT WORKING  Priority:           OB Automatic Create IncidentExamineprint quality on back of checks and replace ink if needed. Check and reset the metrics if needed. Ink last replaced121.0 days ago.Preventive - 2023-07-05 05:03:58 PM -05:TBT0MS1C (1), Shuttle contents insecure. Chest wasaccessed during a dispense operation.PartHistory:07/04/2023 - 49209542000F (1) - CDRDR,MTZ,TRK1/2/3,RD/WRT,HICO,ICC,STRPDN,SMART,W/EAFP/ASKMR/ENVIR,CONSOLDECAL Priority cannot beupdated as Activity is already Committed / Enroute /Arrived/Closed / Cancelled statusDECAL Product Status cannot beupdated as Activity is already Committed /Enroute /Arrived/Closed /Cancelled statusDECAL Effective Date/Time cannotbe updated as Activity is already Committed /Enroute/Arrived /Closed /Cancelled statusCall Cancellation requestreceived from DECAL. But Call cannot be cancelled asActivity is already in Committed /Enroute /Arrived /ClosedstatusFault is clearedATM out of service upon arrival.  Inspected ATM and found card jammed in reader.  Clearedjammed card.  Reset card reader successfully.   Ran cardcleaning.  Completed operate test multiple times.   Vistashowing card reader passed and healthy.  All devices inVista healthy and  passed.   Completed penny check depositusing card reader.   NFC active.VRU showing all green atdeparture.Check print tested and legible.TAB (ATM /RECYCLERS); CARD READER / CARD HANDLING DEVICE; CARDCAPTURE BIN / CARD STACKER; ERROR / FAILURE NOTREPRODUCIBLE - CAUSE UNDETERMINABLE; GO TO NEXT OPTION; JAMREMOVAL',   'SR Type': 'FL', 'ATM ID': 'INCD2500' },
  {  status: 'Closed', site_number: '000675967',   name: 'BANK OF AMERICA', activity_number: '1-91331015925',   address: '3401 THE PLAZA, CHARLOTTE, NC, 28205', Fault: 'DECAL Generated Call, Customer Product IDINCD0328.#72069088   8512 CASH HANDLER PRESENTER FAPriority:           OB Automatic Create IncidentDECALProduct Status cannot be updated as Activity is alreadyCommitted /Enroute /Arrived /Closed /Cancelled statusDECALEffective Date/Time cannot be updated as Activity isalready Committed /Enroute /Arrived /Closed /CancelledstatusFault is clearedDECAL Priority cannot be updated asActivity is already Committed / Enroute /Arrived /Closed /Cancelled statusCall Cancellation request received fromDECAL. But Call cannot be cancelled as Activity is alreadyin Committed /Enroute /Arrived /Closed statusATM in serviceupon arrival.   Inspected ATM and found jammed wrappingpaper cash vendors use jammed in vertical transport.**photos attached **.  Cleared jam and adjusted notesinside cassettes. Cassette 3 and 4 empty.  Reset dispenserin DSA successfully.   Ran test in Vista successfully. Completed penny deposit check using NFC.   Brought ATM backinto service. VRU showing all green at departure.TAB (ATM /RECYCLERS); DISPENSER - CASH / NOTE; CASSETTE(S) / PURGE /RETRACT BIN(S); CASH PROVIDER / BRANCH OR STORE ERROR /OMISSION OR MISHANDLING; CASSETTE MISHANDLING (FULLYDESCRIBE IN NOTES); JAM REMOVAL',   'SR Type': 'FL', 'ATM ID': 'INCD0328' },
  {  status: 'Closed', site_number: '000674143',   name: 'WELLS FARGO BANK NA', activity_number: '1-91326447191',   address: '2803 FREEDOM DR, CHARLOTTE, NC, 28208', Fault: 'DECAL Generated Call, Customer Product ID 0005Z.7506RECEIPT PRINTER DISABLED  Disabled. Eject timeout (sc=16)(10802-0-0-TP27)DECAL Product Status cannot be updated asActivity is already Committed /Enroute /Arrived /Closed/Cancelled statusCall Cancellation request received fromDECAL. But Call cannot be cancelled as Activity is alreadyin Committed /Enroute /Arrived /Closed statusDECAL Prioritycannot be updated as Activity is already Committed /Enroute /Arrived /Closed / Cancelled statusAutomated callcloseATM in service upon arrival.   ATM unable to providestatements.   Inspected ATM and cleared jammed printer.  Reset failed in diagnostics and in TSOP.   Paper almostout.  Replenished printer paper with Diebold supplies. Rebooted ATM and printer reset was successful.  All faultscleared.  Brought ATM back into service.TAB (ATM /RECYCLERS); PRINTER; TRANSPORT / PAPER PRESENTER; ERROR /FAILURE NOT REPRODUCIBLE - CAUSE UNDETERMINABLE; GO TO NEXTOPTION; JAM REMOVAL',   'SR Type': 'FL', 'ATM ID': '0005Z' },
  {  status: 'Enroute', site_number: '002916340',   name: 'BANK OF AMERICA', activity_number: '1-91332841595',   address: '1733 GOLD HILL RD, FORT MILL, SC, 29715', Fault: 'DECAL Generated Call, Customer Product IDISCD3100.#72072871   CDMRM46 Dispenser User Error (Priority:           OB Automatic Create IncidentRedundantactivity 1-91332841946 / 3062504000 on service request1-15YH7RU6 has been identified and included in thisrequest. Problem reported: DECAL Generated Call, CustomerProduct ID ISCD3100.#72072887   CIMRM46 Cash DepositorFatal E Priority:           OB Automatic Create Incident',   'SR Type': 'FL', 'ATM ID': 'ISCD3100' },
  {  status: 'Assigned', site_number: '004255180',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91302004130',   address: '111 BRAWLEY SCHOOL RD, MOORESVILLE, NC, 28115', Fault: 'DECAL Generated Call, Customer Product ID B0MV.BR reportedATM is not dispensing cashSLM_Dispenser faultNo depositorycleaning kit consumed in last 180 days. RecommendingDeposit Cleaning Kit be used on this SR.Redundant activity1-91304479529 / 3054278000 on service request 1-15XZYK39has been identified and included in this request. Problemreported: DECAL Generated Call, Customer Product IDB0MV.Todd/UC requesting Diebold to check equipment, callfrom site & troubleshoot with NW.FLM_Miscellaneous ServiceRequestBARBARA/HELPDESK, CALLED TO ESCALATE THE TICKET DUETO POOR RESPONSE. PHONE# VERIFIED.',   'SR Type': 'FL', 'ATM ID': 'B0MV' },
  {  status: 'Assigned', site_number: '003758720',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91256944830',   address: '238 AIRPORT RD, ROCKINGHAM, NC, 28379', Fault: 'DECAL Generated Call, Customer Product ID B3RH.B3RH CashIn Not Operational2023-07-05 16:39:31.0  00001039*341*16:39:31 DEP ERROR: 00006446 00000001 00000000 devicestate: [Total failure, components];',   'SR Type': 'FL', 'ATM ID': 'B3RH' },
  {  status: 'Assigned', site_number: '003187400',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91278353772',   address: '220 ALONZO RD, OAKBORO, NC, 28129', Fault: 'DECAL Generated Call, Customer Product ID B4AL.B4AL ChequeIn not operational2023-07-06 12:39:15.0  0000111712:39:15 DEVICE CCChequeFW STATUS 4 SUPPLY 1 device state:[Partial failure, technical servi No depository cleaningkit consumed in last 180 days. Recommending DepositCleaning Kit be used on this SR. ',   'SR Type': 'FL', 'ATM ID': 'B4AL' },
  {  status: 'Arrived', site_number: '1917613',   name: 'TRULIANT FEDERAL CREDIT UNION', activity_number: '1-91324013303',   address: '9706 GILEAD RD, HUNTERSVILLE, NC, 28078', Fault: '[Product ID TFD01009] [Bulk Check Depositor :: Vista DeviceStatus :: Inoperative] [56469] [eServicesGenerated]Preventive - 2023-06-30 03:37:25 AM -05: FCC00137(2), THRESHOLD - CCDM2_BUNDLE_TRANSPORT_PROBLEM',   'SR Type': 'FL', 'ATM ID': 'TFD01009' },
  {  status: 'Assigned', site_number: '4236693',   name: 'FIRST NATIONAL BANK OF PENNSYLVANIA', activity_number: '1-91286978874',   address: '14208 STATESVILLE RD, Huntersville, NC, 28078', Fault: '[Product ID NC900002] [Currency Acceptor :: Hardware ::Error] [300534] [Automated device reset attempted byeServices to resolve this fault.] [eServicesGenerated]**OVKW Opteview process bypassed by AllConnectData Engine (ACDE) due to problem description.  Call movedto Field Service resourcePreventive - 2023-06-29 08:58:19AM -05: AFD1CA05 (1), Motor mux failurePreventive -2023-07-03 03:36:58 PM -05: ENA0ES10 (2), Escrow MovementFault[Currency Acceptor :: Vista Device Status ::Inoperative] [56289] [Automated Terminal reboot attemptedby eServices to resolve this fault.][Currency Acceptor ::Hardware :: Operational]',   'SR Type': 'FL', 'ATM ID': 'NC900002' },
  {  status: 'Assigned', site_number: '4199687',   name: 'U S BANK NATIONAL ASSOCIATION', activity_number: '1-91319993301',   address: '5806 HIGHLAND SHOPPES DR, Charlotte, NC, 28269', Fault: 'DECAL Generated Call, Customer Product ID SVE22287.OBAutomatic Create Incident                                                                       1738 | IDM DOC JAM ORBIN FULL ',   'SR Type': 'FL', 'ATM ID': 'SVE22287' },
  {  status: 'Assigned', site_number: '005436500',   name: 'FIRST HORIZON BANK', activity_number: '1-91307745713',   address: '100 S ENOCHVILLE AVE, KANNAPOLIS, NC, 28081', Fault: '[Product ID FH8980] [Bulk Check Depositor :: Vista DeviceStatus :: Inoperative] [56469] [Automated device resetattempted by eServices to resolve this fault.] [eServicesGenerated]No depository cleaning kit consumed in last 180days. Recommending Deposit Cleaning Kit be used on thisSR.Redundant activity 1-91307833313 / 3055360000 on servicerequest 1-15Y2BR1Y has been identified and included in thisrequest. Problem reported: [Product ID FH8980] [CurrencyAcceptor :: Vista Device Status :: Inoperative] [56289][eServices automated intervention not applicable for thisfault.] [eServices Generated]',   'SR Type': 'FL', 'ATM ID': 'FH8980' },
  {  status: 'Assigned', site_number: '003207000',   name: 'STATE EMPLOYEES CREDIT UNION', activity_number: '1-91323891160',   address: '234 E MAIN ST, ROCKWELL, NC, 28138', Fault: 'DECAL Generated Call, Customer Product ID B1GU.B1GU Journal/Receipt printer Error2023-07-07 19:32:42.0 00001033 *555*19:32:42 JRN/REC ERROR: 00006434 0000004000000000 device state: [Total failure, c ',   'SR Type': 'FL', 'ATM ID': 'B1GU' },
  {  status: 'Closed', site_number: '007137500',   name: 'FOUNDERS FEDERAL CREDIT UNION', activity_number: '1-91329976484',   address: '9881 CHARLOTTE HWY, FORT MILL, SC, 29715', Fault: '[Product ID CKKS856] [Currency Acceptor :: Hardware ::Error] [300534] [Automated device reset attempted byeServices to resolve this fault.] [eServicesGenerated]**OVKW Opteview process bypassed by AllConnectData Engine (ACDE) due to problem description.  Call movedto Field Service resourcePreventive - 2023-06-30 06:06:03PM -05: FCC00137 (1), THRESHOLD -CCDM2_BUNDLE_TRANSPORT_PROBLEM[Check Depositor :: Check ::Jam] [473061] [Automated device reset attempted byeServices to resolve this fault.][Currency Acceptor ::Hardware :: In Position][Bulk Check Depositor :: Hardware:: In Position][Mixed Media Depositor :: Hardware ::Operational][Check Depositor :: Check ::Operational][Currency Acceptor :: Vista Device Status ::Operational][Bulk Check Depositor :: Vista Device Status ::Operational]Tech: Joseph Wanczyk Work Performed: Cleared 11$20 bills from CI and Trans, tested operation with success,in service with no issuesCleared 11 $20 bills from CI andTrans, tested operation with success, in service with no issues',   'SR Type': 'FL', 'ATM ID': 'CKKS856' },
  {  status: 'Closed', site_number: '4199688',   name: 'U S BANK NATIONAL ASSOCIATION', activity_number: '1-91310048429',   address: '1811 MATTHEWS TOWNSHIP PKWY, Matthews, NC, 28105', Fault: 'DECAL Generated Call, Customer Product ID SVE22285.OBAutomatic Create Incident                                                                       XFS CDM TP INOPNodepository cleaning kit consumed in last 180 days.Recommending Deposit Cleaning Kit be used on this SR.Tech:Joseph Wanczyk Work Performed: No issues on arrival testedokNo issues on arrival tested ok',   'SR Type': 'FL', 'ATM ID': 'SVE22285' },
  {  status: 'Committed', site_number: '4176181',   name: 'FAMILY TRUST FEDERAL CREDIT UNION', activity_number: '1-91323148934',   address: '2700 CELANESE RD, Rock Hill, SC, 29732', Fault: '[Product ID Z11006] [Currency Acceptor :: Vista DeviceStatus :: Inoperative] [56289] [Automated Terminal rebootattempted by eServices to resolve this fault.] [eServicesGenerated]**OVKW Opteview process bypassed by AllConnectData Engine (ACDE) due to problem description.  Call movedto Field Service resourceNo depository cleaning kitconsumed in last 180 days. Recommending Deposit CleaningKit be used on this SR.ETA/FINISH Date and Time receivedfrom CLICK is earlier than Contact D/T on theActivity.ETA/FINISH Date and Time received from CLICK isearlier than Contact D/T on the Activity.',   'SR Type': 'FL', 'ATM ID': '55431006' },
];
var activitiesTimestamp = '2023-07-08 11:59:22 AM';
