window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-2428"] = {
  documentType: "WI",
  documentNumber: "2428",
  documentTitle: "Swift Ray 1 BLE Provisioning with NRF Connect Mobile App",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-Sinatra-BLE-Provisioning-with-NRF-Connect-Mobile-App-%5bSIN-WI-2428_A%5d-8342831105.aspx?OR=EXCEL-WEB.BODY.NT&CT=1787582476443",
  linkLabel: "Open WI in SharePoint",
  description:
    "Provision serial numbers on Sinatra devices after assembly using the nRF mobile application.",
  theme: {
    accent: "#0057B8",
    surface: "#ffffff",
    background: "#F0F3F8",
    text: "#2E3C63",
  },
  cards: [
    {
      tag: "Title",
      title: "WI 2428",
      summary: "Swift Ray 1 BLE Provisioning with NRF Connect Mobile App",
    },
    {
      tag: "Introduction",
      title: "Introduction",
      summary:
        "This work instruction is to be used for serial number provisioning Sinatra devices after assembly via the nRF mobile application.",
      media: [
        {
          type: "button",
          src:
            "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-Sinatra-BLE-Provisioning-with-NRF-Connect-Mobile-App-%5bSIN-WI-2428_A%5d-8342831105.aspx?OR=EXCEL-WEB.BODY.NT&CT=1787582476443",
          buttonLabel: "Open WI in SharePoint",
        },
      ],
      sectionButtons: [
        { label: "Steps 1-2: Prepare", targetTag: "Preparation" },
        { label: "Steps 3-5: Connect", targetTag: "Connection" },
        { label: "Steps 6-10: Provision", targetTag: "Provisioning" },
        { label: "Steps 11-12: Complete", targetTag: "Completion" },
      ],
    },
    {
      tag: "Scope",
      title: "1.1 Scope",
      summary:
        "This work instruction applies to all Ray 1 devices that will be functional to take images for both internal and external use.",
    },
    {
      tag: "Preparation",
      title: "Steps 1-2: Prepare the Ray 1 Device",
      summary:
        "1. Follow above steps 1-20 in: Work Instruction: Board-Flashing Procedure for Ray 1 and ensure flashing cable is removed from RAY1 device.\n\n2. Press button to wake up Ray1.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2428/images/step-2-wake-ray1.png",
          alt: "Ray 1 wake button",
          caption: "Step 2: Press button to wake up Ray1.",
        },
      ],
    },
    {
      tag: "Connection",
      title: "Steps 3-5: Enter Provisioning Mode and Connect",
      summary:
        "3. Ray1 will flash blue quickly signifying it is booted in provisioning mode.\n\n4. In the nRF Connect for mobile app, view scanner screen.\n\n5. Connect to RAY1_PROV from the available bluetooth device list.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2428/images/step-3-blue-led.png",
          alt: "Ray 1 blue LED",
          caption: "Step 3: Ray 1 flashing blue in provisioning mode.",
        },
        {
          type: "image",
          src: "./sections/wi-2428/images/step-3-provisioning-mode.png",
          alt: "Ray 1 provisioning mode",
          caption: "Step 3: Ray 1 provisioning mode.",
        },
        {
          type: "image",
          src: "./sections/wi-2428/images/step-4-scanner.png",
          alt: "nRF Connect scanner screen",
          caption: "Step 4: nRF Connect mobile scanner screen.",
        },
        {
          type: "image",
          src: "./sections/wi-2428/images/step-5-bluetooth-device-list.png",
          alt: "Available Bluetooth devices",
          caption: "Step 5: Connect to RAY1_PROV.",
        },
      ],
    },
    {
      tag: "Provisioning",
      title: "Steps 6-7: Wake and Open RAY1_PROV",
      summary:
        "6. If RAY1_PROV does not show up in scan try pressing RAY1_PROV button once to wake up RAY1_PROV device. Ray 1 device should turn on its 4 Blue LEDs once bluetooth is connected signifying device is ready for provisioning command.\n\n7. In the nRF Connect for mobile app, tap client once connected to RAY1_PROV.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2428/images/step-6-connected-leds.png",
          alt: "Ray 1 with four blue LEDs",
          caption: "Step 6: Four blue LEDs indicate the device is ready.",
        },
      ],
    },
    {
      tag: "Provisioning Step 8",
      title: "Step 8: Open Service 124A",
      summary:
        "8. In the nRF Connect for mobile app, under service 124A, tap on the up arrow.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2428/images/step-8-service.png",
          alt: "nRF Connect service 124A",
          caption: "Step 8: Open service 124A.",
        },
      ],
    },
    {
      tag: "Provisioning Step 9",
      title: "Step 9: Write the Serial Number",
      summary:
        "9. Enter the following byte array into the text box (Ex: 99080001020304050607) and tap write.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2428/images/step-9-write-array.png",
          alt: "nRF Connect byte array write field",
          caption: "Step 9: Enter the byte array and tap write.",
        },
      ],
    },
    {
      tag: "Provisioning Step 10",
      title: "Step 10: Confirm Provisioning",
      summary:
        "10. The Ray 1 device will flash its green to signify successful provision. If provisioning is unsuccessful it will flash purple.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2428/images/step-10-provisioning-result.png",
          alt: "Ray 1 provisioning result",
          caption: "Step 10: Green indicates successful provision; purple indicates unsuccessful provision.",
        },
      ],
    },
    {
      tag: "Completion",
      title: "Steps 11-12: Reset and Complete",
      summary:
        "11. A hard reset is now required (hold button for > 10 s). This will change device name (Ex: from RAY1_PROV to RAY1_12345678). To verify this device name change, in the nRF Connect for mobile app, view the new peripheral name.\n\n12. Provisioning is complete and the Ray 1 device can be used as normal.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2428/images/step-11-renamed-peripheral.png",
          alt: "Renamed Ray 1 peripheral",
          caption: "Step 11: Verify the new peripheral name.",
        },
        {
          type: "image",
          src: "./sections/wi-2428/images/step-12-complete.png",
          alt: "Completed Ray 1 provisioning",
          caption: "Step 12: Provisioning is complete.",
        },
      ],
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary: "The Ray 1 serial number has been provisioned and the device can be used as normal.",
    },
  ],
};
