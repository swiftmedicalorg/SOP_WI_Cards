window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-2185"] = {
  documentType: "WI",
  documentNumber: "2185",
  documentTitle: "Battery Acceptance Test Procedures",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-Battery-Acceptance-Test-Procedures-%5bSIN-WI-2185_C%5d-8493465601.aspx?OR=EXCEL-WEB.BODY.NT&CT=1787582464920",
  linkLabel: "Open WI in SharePoint",
  description:
    "Acceptance testing and incoming inspection of the Sinatra battery.",
  theme: {
    accent: "#0057B8",
    surface: "#ffffff",
    background: "#F0F3F8",
    text: "#2E3C63",
  },
  cards: [
    {
      tag: "Title",
      title: "WI 2185",
      summary: "Battery Acceptance Test Procedures",
    },
    {
      tag: "Introduction",
      title: "Introduction",
      summary:
        "This work instruction is to be used for acceptance testing and incoming inspection of the Sinatra battery.",
      media: [
        {
          type: "button",
          src:
            "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-Battery-Acceptance-Test-Procedures-%5bSIN-WI-2185_C%5d-8493465601.aspx?OR=EXCEL-WEB.BODY.NT&CT=1787582464920",
          buttonLabel: "Open WI in SharePoint",
        },
      ],
      sectionButtons: [
        { label: "4.1 Dimensional Inspection", targetTag: "4.1" },
        { label: "4.2 Physical Inspection", targetTag: "4.2" },
        { label: "4.3 Electrical Requirements", targetTag: "4.3" },
        { label: "4.4 Colour and Finish Inspection", targetTag: "4.4" },
        { label: "4.5 Biological Review of Design", targetTag: "4.5" },
        {
          label: "4.6 Cleanliness and Sterilization Review of Design",
          targetTag: "4.6",
        },
      ],
    },
    {
      tag: "Scope",
      title: "1.1 Scope",
      summary:
        "This work instruction applies to the Sinatra battery products intended to be used with the Sinatra system.",
    },
    {
      tag: "4.1",
      title: "4.1 Dimensional Inspection",
      summary:
        "Test ID: SINB-0010. Test Name: Battery Dimensional Inspection.\n\nTools and Items Required: Calipers (EQUIP-001).",
      body:
        "1. Collect batteries for the Lot Under Test according to S4 AQL4 sampling plan.\n\n2. Using calipers, measure the length, width, and height of the battery. The expected value for each dimension can be found in the acceptance test record. Ensure the dimensions match the specifications within the acceptable range outlined in the acceptance test record.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2185/images/4-1-dimensions.png",
          alt: "Battery dimensional inspection diagram",
          caption: "Battery dimensional inspection reference.",
        },
      ],
    },
    {
      tag: "4.2",
      title: "4.2 Physical Inspection",
      summary:
        "Test ID: SINB-0020. Test Name: Battery Physical Inspection.\n\nTools and Items Required: None.",
      body:
        "1. Collect batteries for the Lot Under Test according to S4 AQL4 sampling plan.\n\n2. Visually inspect the battery for damage or inconsistencies in the structure. Ensure the battery is not damaged and that the physical requirements are met.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2185/images/4-2-connector-fit.png",
          alt: "Battery connected to an accepted driverboard",
          caption: "Step 4: Confirm the battery connector fits the driverboard connector.",
        },
      ],
    },
    {
      tag: "4.3",
      title: "4.3 Electrical Requirements",
      summary:
        "Test ID: SINB-0030. Test Name: Battery Electrical Inspection.\n\nTools and Items Required: Multimeter.",
      body:
        "1. Collect batteries for the Lot Under Test according to S4 AQL4 sampling plan.",
    },
    {
      tag: "4.3 Step 2",
      title: "4.3 Electrical Requirements: Connect Battery",
      summary:
        "2. Plug battery into an accepted (passed) driverboard. A list of the serial numbers for passed driverboards can be found in the Sinatra Purchasing and Receiving Log [SIN-REC-2162].",
      media: [
        {
          type: "image",
          src: "./sections/wi-2185/images/4-3-connector-location.png",
          alt: "Battery connector location on driverboard",
          caption: "Connector location and wire orientation.",
        },
      ],
    },
    {
      tag: "4.3 Step 3",
      title: "4.3 Electrical Requirements: Set Multimeter",
      summary:
        "3. Ensure Multimeter is set up correctly (Equip-011). The selector must be set to the V (DC). DC is indicated by the straight line over the V. The red probe should be connected to the voltage (V) terminal. The black probe should be connected to the common ground (COM) terminal.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2185/images/4-3-multimeter-setting.png",
          alt: "Multimeter set to DC voltage",
          caption: "Multimeter selector and probe connections.",
        },
      ],
    },
    {
      tag: "4.3 Step 4",
      title: "4.3 Electrical Requirements: Probe Battery",
      summary:
        "4. Probe voltage and ground of the battery. The red multimeter probe should make contact with the conductive area of the connector next to the red battery wire (positive voltage). The black probe should make contact with the driverboard hole marked with GND (ground).",
      media: [
        {
          type: "image",
          src: "./sections/wi-2185/images/4-3-probe-placement.png",
          alt: "Multimeter probes on the battery and driverboard ground",
          caption: "Probe placement for voltage and ground.",
        },
      ],
    },
    {
      tag: "4.3 Step 5",
      title: "4.3 Electrical Requirements: Read Voltage",
      summary:
        "5. Observe voltage result on Multimeter screen. The expected voltage of the battery will range from 3.7V to 4.2V. This will ensure the battery is not undercharged or overcharged at the time of measurement.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2185/images/4-3-voltage-result.png",
          alt: "Battery voltage result on multimeter",
          caption: "Expected voltage reading is 3.7V to 4.2V.",
        },
      ],
    },
    {
      tag: "4.4",
      title: "4.4 Colour and Finish Inspection",
      summary:
        "Test ID: SINB-0040. Test Name: Battery Colour and Finish Inspection.\n\nTools and Items Required: None.",
      body:
        "1. Collect batteries for the Lot Under Test according to S4 AQL4 sampling plan.\n\n2. Verify that the batteries are free of cracks, distortion, discoloration, or signs of leakage, as required by the procurement specification.",
    },
    {
      tag: "4.5",
      title: "4.5 Biological Review of Design",
      summary:
        "Test ID: SINB-0050. Test Name: Battery Biological Review of Design.\n\nTools and Items Required: None.",
      body:
        "1. Review Sinatra battery procurement requirements to confirm indication of battery use without direct patient interaction.\n\nOnly repeat if spec or procurement requirements change.",
    },
    {
      tag: "4.6",
      title: "4.6 Cleanliness and Sterilization Review of Design",
      summary:
        "Test ID: SINB-0060. Test Name: Battery Cleanliness Review of Design.\n\nTools and Items Required: None.",
      body:
        "1. Review Sinatra battery procurement requirements to confirm the presence of requirements for cleanliness and free of unnecessary debris.\n\nOnly repeat if spec or procurement requirements change.",
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary:
        "Document the completed inspection in a copy of the Battery Acceptance Test Record (SIN-FRM-2206). Upon completion, enter the document as a new record (REC type) in the Document Management System.",
    },
  ],
};
