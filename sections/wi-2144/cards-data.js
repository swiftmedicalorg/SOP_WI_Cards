window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-2144"] = {
  documentType: "WI",
  documentNumber: "2144",
  documentTitle: "USB Charge Cable Acceptance Test Procedures",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-USB-Charge-Cable-Acceptance-Test-Procedures-%5bSIN-WI-2144_A%5d-8289551779.aspx?OR=EXCEL-WEB.BODY.NT&CT=1787582460915",
  linkLabel: "Open WI in SharePoint",
  description:
    "Acceptance testing and incoming inspection of the Sinatra USB Charge Cable.",
  theme: {
    accent: "#0057B8",
    surface: "#ffffff",
    background: "#F0F3F8",
    text: "#2E3C63",
  },
  cards: [
    {
      tag: "Title",
      title: "WI 2144",
      summary: "USB Charge Cable Acceptance Test Procedures",
    },
    {
      tag: "Introduction",
      title: "Introduction",
      summary:
        "This work instruction is to be used for acceptance testing and incoming inspection of the Sinatra USB Charge Cable.",
      media: [
        {
          type: "button",
          src:
            "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-USB-Charge-Cable-Acceptance-Test-Procedures-%5bSIN-WI-2144_A%5d-8289551779.aspx?OR=EXCEL-WEB.BODY.NT&CT=1787582460915",
          buttonLabel: "Open WI in SharePoint",
        },
      ],
      sectionButtons: [
        { label: "4.1 Functionality Inspection", targetTag: "4.1" },
        { label: "4.2 Physical Inspection", targetTag: "4.2" },
        { label: "4.3 Colour and Finish Inspection", targetTag: "4.3" },
        { label: "4.4 Biological Review of Design", targetTag: "4.4" },
        {
          label: "4.5 Cleanliness and Sterilization Review of Design",
          targetTag: "4.5",
        },
      ],
    },
    {
      tag: "Scope",
      title: "1.1 Scope",
      summary:
        "This work instruction applies to the Sinatra USB Charge Cable products intended to be used with the Sinatra system.",
    },
    {
      tag: "4.1",
      title: "4.1 Functionality Inspection",
      summary:
        "Test ID: SINB-0010. Test Name: USB Charge Cable Functionality Inspection.\n\nTools and Items Required: Multimeter.",
      body:
        "1. Collect USB Charge Cables for the Lot Under Test according to the S4 AQL4 sampling plan.\n\n2. Perform a voltage reading of a discharged battery. Start off with a dead/discharged battery (0%). With a multimeter, take a voltage reading and verify the reading is between 3.0V-3.7V.\n\n3. Use the USB charge cable to charge a battery for at least 2 hours, or until the battery is fully charged. Verify that after charging, the battery voltage reading is appropriate. Take readings of the devices exactly after 2 hours. Repeat step 2 every 10 mins until the battery is fully charged (i.e. 100%). The battery should be charged in approximately 2 hours. A fully charged battery should have a voltage reading of 4.1 - 4.2 V.",
    },
    {
      tag: "4.2",
      title: "4.2 Physical Inspection",
      summary:
        "Test ID: SINB-0020. Test Name: USB Charge Cable Physical Inspection.\n\nTools and Items Required: N/A.",
      body:
        "1. Collect USB Charge Cables for the Lot Under Test according to S4 AQL4 sampling plan.\n\n2. Review the Physical Requirements in the USB cable procurement specification to ensure the requirements are met.",
    },
    {
      tag: "4.3",
      title: "4.3 Colour and Finish Inspection",
      summary:
        "Test ID: SINB-0040. Test Name: USB Charge Cable Colour and Finish Inspection.\n\nTools and Items Required: None.",
      body:
        "1. Collect USB charge cables for the Lot Under Test according to the S4 AQL4 sampling plan.\n\n2. Verify that the USB charge cables are white in colour with a grey Swift logo, as per the requirements outlined in the procurement specification.",
    },
    {
      tag: "4.4",
      title: "4.4 Biological Review of Design",
      summary:
        "Test ID: SINB-0050. Test Name: USB Charge Cable Biological Review of Design.\n\nTools and Items Required: None.",
      body:
        "1. Review Sinatra USB Charge Cable procurement requirements to confirm indication of cable use for battery charging only, without direct patient interaction.\n\nOnly repeat if spec or procurement requirements change.",
    },
    {
      tag: "4.5",
      title: "4.5 Cleanliness and Sterilization Review of Design",
      summary:
        "Test ID: SINB-0060. Test Name: USB Charge Cable Cleanliness Review of Design.\n\nTools and Items Required: None.",
      body:
        "1. Review Sinatra USB Charge Cable procurement requirements to confirm the presence of requirements for cleanliness and free of unnecessary debris.\n\nOnly repeat if spec or procurement requirements change.",
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary:
        "Document the completed inspection in a copy of USB Charge Cable Acceptance Test Record (SIN-FRM-2206). Upon completion, enter the document as a new record (REC type) in the Document Management System.",
    },
  ],
};
