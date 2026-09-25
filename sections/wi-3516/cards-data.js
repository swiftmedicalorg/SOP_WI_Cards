window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-3516"] = {
  documentType: "WI",
  documentNumber: "3516",
  documentTitle: "Work Instruction Re-flashing Ray 1 Boards",
  description: "Re-flashing and re-testing previously assembled Ray 1 devices.",
  theme: {
    accent: "#2D6E9F",
    surface: "#ffffff",
    background: "#EAF4FB",
    text: "#183A52",
  },
  cards: [
    {
      tag: "Introduction",
      title: "WI 3516: Re-flashing Ray 1 Boards",
      summary:
        "This work instruction covers re-flashing previously flashed and assembled Swift Ray 1 devices, then storing and re-testing them before release.",
      body:
        "The process applies to assembled devices requiring re-flashing, including firmware updates or troubleshooting. Re-flashing is a rework activity; follow the applicable Ray 1 Rework Process and board-flashing instructions along with this work instruction.",
      sectionButtons: [
        { label: "Section 7.0: Work Instructions", targetTag: "7.0" },
        { label: "Section 8.0: Storage and Re-testing", targetTag: "8.0" },
      ],
    },
    {
      tag: "7.0",
      title: "7.0 Work Instructions for Re-flashing Devices",
      summary:
        "Re-flashing assembled Swift Ray 1 devices is a rework process. Review and follow the Ray 1 Rework Process (SIN-WI-2880) and the applicable board-flashing procedure (SIN-WI-2213) before starting.",
      body:
        "SIN-WI-2880 defines the required rework activities. Where this procedure refers to SIN-WI-2213, follow its applicable board-flashing instructions.",
    },
    {
      tag: "7.0 Step 1",
      title: "7.0 Step 1: Gather Devices and Set Rework Status",
      summary: "Identify every device and maintain its serial-number traceability.",
      body:
        "Gather the devices to be re-flashed. As each device is gathered, update its status in the Device History Record (DHR) [SIN-DHR-2152] to “Rework.” Record the assigned device serial number and associate it correctly with the board number in the DHR. During re-testing and re-provisioning, retain the same serial number previously assigned to that device.",
    },
    {
      tag: "7.0 Step 2",
      title: "7.0 Step 2: Set Up Firmware Files",
      summary: "Prepare the production laptop using the initial flashing setup procedure.",
      body:
        "Follow Steps 3-12 in the Board-Flashing Procedure for Ray 1 [SIN-WI-2213] to set up the required programs and files on the production laptop. This setup is the same as for first-time board flashing. For a firmware update, verify that the firmware file name contains the intended version number.",
      links: [
        {
          text: "SIN-WI-2213 Board-Flashing Procedure for Ray 1",
          url: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-Board-Flashing-Procedure-for-Ray-1-%5bSIN-WI-2213_B%5d-8373108763.aspx?OR=EXCEL-WEB.BODY.NT&CT=1787582469929",
        },
      ],
    },
    {
      tag: "7.0 Step 3",
      title: "7.0 Step 3: Verify ESD Protection and Open the Device",
      summary: "Verify the wrist strap before exposing internal components.",
      body:
        "Wear and verify the ESD wrist strap according to [QMS-WI-2600] before proceeding. Keep it on whenever you may directly contact internal device components. Use a spudger [SUP-C016] to open the back cover: insert it between the front cover and main body near one of the four protruding wedges. Use gentle force to avoid chips or scratches. Only the driver board needs to be connected for flashing; do not open the front cover. The device may start on or off; it will shut off automatically when re-flashing begins.",
      media: [
        {
          type: "image",
          src: "./sections/wi-3516/images/step-3-back-cover-wedge-1.png",
          alt: "Spudger inserted at a Ray 1 back-cover wedge",
          caption: "Open the back cover near a protruding wedge.",
        },
        {
          type: "image",
          src: "./sections/wi-3516/images/step-3-back-cover-wedge-2.png",
          alt: "Spudger placement at the second back-cover wedge",
          caption: "Use gentle force when releasing the cover.",
        },
      ],
    },
    {
      tag: "7.0 Step 4",
      title: "7.0 Step 4: Re-flash the Device",
      summary:
        "Follow Steps 13-17 in SIN-WI-2213 and confirm the blue LED blinks every three seconds.",
      body:
        "If the expected blink does not occur, a software error (shown in red), a disrupted laptop-to-board connection, an unsuccessful firmware erase, or a board component defect may have interrupted flashing. Restart Steps 13-17 from the beginning and repeat each step in order; do not resume partway through. If Step 17 still does not occur, make three further complete attempts. If flashing remains unsuccessful, label the device “Re-flashing failed,” isolate it in a separate area, and follow Step 8 for disposition.",
      links: [
        {
          text: "SIN-WI-2213 Board-Flashing Procedure for Ray 1",
          url: "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-Board-Flashing-Procedure-for-Ray-1-%5bSIN-WI-2213_B%5d-8373108763.aspx?OR=EXCEL-WEB.BODY.NT&CT=1787582469929",
        },
      ],
    },
    {
      tag: "7.0 Step 5",
      title: "7.0 Step 5: Replace and Inspect the Back Cover",
      summary: "Close the housing and inspect the device exterior for damage or gaps.",
      body:
        "Slide the back cover down onto the rails at the housing spine. Press the snaps into place on both sides, then work around the other side near the charging port. Confirm all snaps are seated, there are no gaps, no scratches or cracks, and the charging port is aligned. If you find an issue, set the device aside, label the damage, and follow Step 8 for disposition.",
      media: [
        {
          type: "image",
          src: "./sections/wi-3516/images/step-4-flash-error-example.png",
          alt: "Ray 1 device held during back-cover handling",
          caption: "Reference image from the re-flashing and cover inspection procedure.",
        },
      ],
    },
    {
      tag: "7.0 Step 6",
      title: "7.0 Step 6: Update Records and Segregate Devices",
      summary: "Document firmware changes and keep devices separated by firmware version.",
      body:
        "If re-flashing updated the firmware, find the device in the DHR [SIN-DHR-2152] and update Column K with the firmware version now on the device. Log the re-flashed device in the Rework Log [QMS-REC-2990], referencing this work instruction. Temporarily keep the device in a separate area so it is not mixed with devices running a different firmware version; Section 8.0 describes storage and re-testing.",
    },
    {
      tag: "7.0 Step 7",
      title: "7.0 Step 7: Repeat for Each Device",
      summary: "Complete the device preparation, flashing, inspection, and recording steps for every device.",
      body: "Repeat Steps 3-6 for each device that requires re-flashing.",
    },
    {
      tag: "7.0 Step 8",
      title: "7.0 Step 8: Update Status and Resolve Exceptions",
      summary: "Move successful devices to Needs QC and obtain a disposition for failures or damage.",
      body:
        "After all devices have been processed, update Column D in the DHR [SIN-DHR-2152] to “Needs QC” for each successfully re-flashed device. Keep unsuccessful or damaged devices in “Rework” status temporarily and inform the Operations Manager and Regulatory team so they can decide the disposition. After that decision, update the DHR status. If a device is quarantined, add it as a new line item in the Quarantine Product Log [QMS-REC-2166]. Add a Rework Log [QMS-REC-2990] line item for each rework action and clearly state the disposition in Column J, “Comment,” including quarantine, another rework, or other action.",
    },
    {
      tag: "8.0",
      title: "8.0 Storage and Re-testing of Re-flashed Devices",
      summary:
        "Every re-flashed device must pass QC again before it can be re-approved for market release.",
      body:
        "Keep devices organized by firmware version and re-flashing date, complete the required retesting and rework records, and restore devices to available inventory only after the required approval.",
    },
    {
      tag: "8.0 Step 1",
      title: "8.0 Step 1: Stage Devices in Pre-QC Inventory",
      summary: "Use the yellow Pre-QC marker and group devices with matching firmware and re-flashing dates.",
      body:
        "Place re-flashed devices in the Pre-QC Inventory section and mark them with a yellow sticker. Group devices only when both the firmware version and re-flashing date match. Clearly label both details on the yellow sticker, if there is room, or on a separate label stored with the group.",
    },
    {
      tag: "8.0 Step 2",
      title: "8.0 Step 2: Re-test and Record Results",
      summary: "Create a dedicated test folder and provision each device with its original serial number.",
      body:
        "In the Device Integrated Test Procedure [SIN-WI-2151] section of the DMS, create a separate folder for re-testing the re-flashed devices. Name the folder with the date in YYYY-MM-DD format, the firmware version currently on the devices, and a brief reason for re-flashing (for example, “Firmware Update” or “Device Error”). Follow the procedure to re-QC the devices and store the test records in that folder. During provisioning, use the SAME serial number previously assigned to the device. If a device fails testing or cannot or will not be re-tested by Operations, record it in the Rework Log [QMS-REC-2990] with the reason and required column information; obtain Operations Manager or Regulatory review and approval with the approval date. Update its DHR [SIN-DHR-2152] status for the planned disposition. Add any quarantined device as a new line item in the Quarantine Product Log [QMS-REC-2166].",
    },
    {
      tag: "8.0 Step 3",
      title: "8.0 Step 3: Move Passed Devices to Post-QC",
      summary: "Mark passed devices green and segregate updated firmware from older versions.",
      body:
        "After a device passes QC again, place it in the Post-QC Inventory section and mark it with a green sticker. Keep devices with updated firmware separate from devices on previous firmware versions and label the current firmware version clearly.",
    },
    {
      tag: "8.0 Step 4",
      title: "8.0 Step 4: Complete Rework Approval and Restore Status",
      summary: "Complete every required Rework Log field and wait for approval before returning devices to Available inventory.",
      body:
        "Enter all devices in the Rework Log [QMS-REC-2990] and complete every column. Column J, “Comment,” may be marked “N/A” when no comment is relevant. Clearly explain why each device was re-flashed. The Operations Manager or Regulatory team must review and approve the entries with the approval date. Once the reworks are approved, update the DHR [SIN-DHR-2152] status of all passed devices to “Available.” A device may return to Available inventory only after its Rework Log entry has been approved.",
    },
  ],
};