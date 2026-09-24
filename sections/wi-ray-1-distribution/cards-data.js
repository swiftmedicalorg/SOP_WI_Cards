window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-ray-1-distribution"] = {
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
        "This work instruction defines the required process for distributing Ray 1 devices and updating the Distribution Record after each device is shipped.\n\nOpen the complete work instruction in SharePoint.",
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
      tag: "6.0 Work Instruction",
      title: "6.0 Work Instruction",
      summary: "Complete the six distribution steps before and after shipping a Ray 1 device.",
      body:
        "1. Confirm shipment details: verify the device serial number, recipient, shipping address, shipment purpose, and required documentation.\n\n2. Confirm device release status: verify that the device is approved and released for distribution and is not under quarantine, hold, nonconformance, recall, or another restriction. Do not ship if any restriction applies.\n\n3. Prepare the Ray device for shipment: follow the applicable packaging and labelling work instruction, include required documentation, and confirm package markings.\n\n4. Ship the Ray device: send it to the confirmed recipient and address using the approved shipment method, retaining details for the Distribution Record.\n\n5. Update the Distribution Record: record the serial number, recipient, shipment date, shipment purpose, and required shipment details on the same day as shipment.\n\n6. Manage shipment exceptions: document known information and escalate lost, damaged, returned, misdirected, cancelled, or discrepant shipments.",
    },
    {
      tag: "6.1 Demo Use Only Distribution",
      title: "6.1 Demo Use Only Distribution",
      summary: "Demo shipments require purpose confirmation, release checks, same-day record updates, and exception handling.",
      body:
        "1. Confirm demo shipment purpose before shipment preparation.\n\n2. Confirm device release status and do not ship if the device is under quarantine, hold, nonconformance, recall, or another distribution restriction.\n\n3. Update the Distribution Record on the same day as shipment with the device serial number, demo recipient, shipment date, shipment purpose, required shipment details, and a note that the device is for demo use only.\n\n4. For lost, damaged, returned, misdirected, cancelled, or discrepant demo shipments, update the Distribution Record with known information and escalate for assessment and follow-up.",
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
