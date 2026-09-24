window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-3520"] = {
  documentType: "WI",
  documentNumber: "3520",
  documentTitle: "Work Instruction - Ray 1 Distribution",
  documentCode: "GR-3520",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/Work-Instruction--Ray-1-Distribution.aspx",
  linkLabel: "Open WI in SharePoint",
  description: "Ray 1 distribution steps for standard and demo-use shipments.",
  theme: {
    accent: "#2D6E9F",
    surface: "#ffffff",
    background: "#EAF4FB",
    text: "#183A52",
  },
  cards: [
    {
      tag: "Title",
      title: "WI 3520",
      summary: "Work Instruction - Ray 1 Distribution",
      body: "WI 3520\nWork Instruction - Ray 1 Distribution\nGR-3520",
    },
    {
      tag: "Introduction",
      title: "Introduction",
      summary:
        "This work instruction defines the required process for distributing Ray 1 devices and updating the Distribution Record after each device is shipped.",
      body:
        "This work instruction applies whenever a Ray 1 device is prepared for shipment, shipped to a customer, internal stakeholder, or demo recipient, and recorded in the Distribution Record.\n\nOpen the complete work instruction in SharePoint.",
      media: [
        {
          type: "button",
          src:
            "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/Work-Instruction--Ray-1-Distribution.aspx",
          caption: "Open WI in SharePoint",
          buttonLabel: "Open WI in SharePoint",
        },
      ],
    },
    {
      tag: "6.0 Step 1",
      title: "6.0 Step 1: Confirm Shipment Details",
      summary: "Confirm the device and recipient details before shipment.",
      body: "Confirm the Ray 1 device serial number, recipient, shipping address, shipment purpose, and required shipment documentation before the device is shipped.",
    },
    {
      tag: "6.0 Step 2",
      title: "6.0 Step 2: Confirm Device Release Status",
      summary: "Only approved and released devices may be shipped.",
      body: "Before shipment, confirm the serial number/device is approved and released for distribution and is not under quarantine, hold, nonconformance, recall, or any other distribution restriction. Do not ship the device if any restriction applies.",
    },
    {
      tag: "6.0 Step 3",
      title: "6.0 Step 3: Prepare the Ray Device",
      summary: "Prepare the device and shipment materials using the applicable packaging and labelling requirements.",
      body: "Prepare the Ray 1 device and required shipment materials in accordance with the applicable packaging and labelling work instruction. Ensure all required documentation is included and package markings are appropriate before shipment.",
      links: [
        {
          text: "SIN-WI-2351_D Packaging and Labelling",
          url: "https://swiftmedical.sharepoint.com/:u:/r/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-Sinatra-Packaging-and-Labelling-[SIN-WI--2351_C]-9377873921.aspx?d=we01967df1a9a4465a1d2ca6159958930&csf=1&web=1&e=23hc1Q",
        },
      ],
    },
    {
      tag: "6.0 Step 4",
      title: "6.0 Step 4: Ship the Ray Device",
      summary: "Ship to the confirmed recipient and address using the approved shipment method.",
      body: "Ship the Ray 1 device to the confirmed recipient and address using the approved shipment method. Retain shipment details needed to complete the Distribution Record.",
      links: [
        {
          text: "SIN-WI-2937_C Shipment of Ray 1 Devices",
          url: "https://swiftmedical.sharepoint.com/:u:/r/sites/DocumentManagementSystemSpace/SitePages/[SIN-WI-2937_A]-Work-Instruction--Shipment-of-Ray-1-Devices.aspx?d=w4241be3896d149beb446331417ae59ba&csf=1&web=1&e=tqYkBz",
        },
      ],
    },
    {
      tag: "6.0 Step 5",
      title: "6.0 Step 5: Update the Distribution Record",
      summary: "Update the Distribution Record on the same day as shipment.",
      body: "Record the shipped device serial number, recipient, shipment date, shipment purpose, and any required shipment details in the Ray 1 Distribution Record on the same day as shipment.",
    },
    {
      tag: "6.0 Step 6",
      title: "6.0 Step 6: Manage Shipment Exceptions",
      summary: "Document and escalate shipment problems or discrepancies.",
      body: "If a shipment is lost, damaged, returned to sender, sent to the wrong recipient, cancelled after shipment preparation, or if there is any discrepancy between the device shipped and the serial number recorded, update the Distribution Record with the known information and escalate the issue to the appropriate owner for assessment and required follow-up.",
    },
    {
      tag: "6.1 Step 1",
      title: "6.1 Step 1: Confirm Demo Shipment Purpose",
      summary: "Confirm that the Ray 1 device is being shipped for demo use only.",
      body: "Confirm the Ray 1 device is being shipped for demo use only before shipment preparation is completed.",
    },
    {
      tag: "6.1 Step 2",
      title: "6.1 Step 2: Confirm Device Release Status",
      summary: "Demo devices must meet the same release and restriction checks before shipment.",
      body: "Before shipment, confirm the serial number/device is approved and released for distribution and is not under quarantine, hold, nonconformance, recall, or any other distribution restriction. Do not ship the device if any restriction applies.",
    },
    {
      tag: "6.1 Step 3",
      title: "6.1 Step 3: Update the Distribution Record",
      summary: "Record demo shipment details on the same day as shipment.",
      body: "Update the Ray 1 Distribution Record on the same day as shipment. Record the shipped device serial number, demo recipient, shipment date, shipment purpose, and any required shipment details. Include a note that the device is for demo use only.",
    },
    {
      tag: "6.1 Step 4",
      title: "6.1 Step 4: Manage Shipment Exceptions",
      summary: "Document and escalate exceptions affecting demo shipments.",
      body: "If a demo shipment is lost, damaged, returned to sender, sent to the wrong recipient, cancelled after shipment preparation, or if there is any discrepancy between the device shipped and the serial number recorded, update the Distribution Record with the known information and escalate the issue to the appropriate owner for assessment and required follow-up.",
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary: "You can review the full WI and save the SharePoint link for reference as needed.",
      body: "Complete the Ray 1 Distribution learning set and review the full work instruction as needed.",
      media: [
        {
          type: "image",
          src: "./sections/shared/images/complete.png",
          alt: "Ray 1 Distribution completion illustration",
          caption: "Completion",
        },
      ],
    },
  ],
};
