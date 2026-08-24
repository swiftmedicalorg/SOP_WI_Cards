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
    },
    {
      tag: "4.2",
      title: "4.2 Physical Inspection",
      summary:
        "Test ID: SINB-0020. Test Name: Battery Physical Inspection.\n\nTools and Items Required: None.",
      body:
        "1. Collect batteries for the Lot Under Test according to S4 AQL4 sampling plan.\n\n2. Visually inspect the battery for damage or inconsistencies in the structure. Ensure the battery is not damaged and that the physical requirements are met.",
    },
    {
      tag: "4.3",
      title: "4.3 Electrical Requirements",
      summary:
        "Test ID: SINB-0030. Test Name: Battery Electrical Inspection.\n\nTools and Items Required: Multimeter.",
      body:
        "1. Collect batteries for the Lot Under Test according to S4 AQL4 sampling plan.\n\n2. Verify the electrical requirements of the battery using a multimeter and document the readings in the acceptance test record.\n\n3. Verify the battery can be charged using the appropriate connection.\n\n4. Verify the voltage reading is within the acceptable range specified in the acceptance test record.",
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
