window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-2142"] = {
  documentType: "WI",
  documentNumber: "2142",
  documentTitle: "FFC Conductor Cable Acceptance Procedures",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-FFC-Conductor-Cable-Acceptance-Procedures-%5bSIN-WI-2142_A%5d-8289551761.aspx?OR=EXCEL-WEB.BODY.NT&CT=1787582456084",
  linkLabel: "Open WI in SharePoint",
  description:
    "Acceptance testing and incoming inspection of the Sinatra FCC Conductor Cable.",
  theme: {
    accent: "#0057B8",
    surface: "#ffffff",
    background: "#F0F3F8",
    text: "#2E3C63",
  },
  cards: [
    {
      tag: "Title",
      title: "WI 2142",
      summary: "FFC Conductor Cable Acceptance Procedures",
    },
    {
      tag: "Introduction",
      title: "Introduction",
      summary:
        "This work instruction is to be used for acceptance testing and incoming inspection of the Sinatra FCC Conductor Cable.",
      media: [
        {
          type: "button",
          src:
            "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-FFC-Conductor-Cable-Acceptance-Procedures-%5bSIN-WI-2142_A%5d-8289551761.aspx?OR=EXCEL-WEB.BODY.NT&CT=1787582456084",
          buttonLabel: "Open WI in SharePoint",
        },
      ],
      sectionButtons: [
        { label: "4.1 Dimensional Inspection", targetTag: "4.1" },
        { label: "4.2 Physical Inspection", targetTag: "4.2" },
        { label: "4.3 Biological Review of Design", targetTag: "4.3" },
        {
          label: "4.4 Cleanliness and Sterilization Review of Design",
          targetTag: "4.4",
        },
      ],
    },
    {
      tag: "Scope",
      title: "1.1 Scope",
      summary:
        "This work instruction applies to the Sinatra FCC Conductor Cable intended to be used with the Sinatra system.",
    },
    {
      tag: "4.1",
      title: "4.1 Dimensional Inspection",
      summary:
        "Test ID: SINF-0010. Test Name: FCC Conductor Cable Dimensional Inspection.\n\nTools and Items Required: Calipers.",
      body:
        "1. Collect FFC conductor cables for the Lot Under Test according to S4 AQL4 sampling plan.\n\n2. Measure cable dimensions (length, width, thickness) with the calipers. The expected value for each dimension can be found in the procurement specification (SIN-CS-2139). Ensure dimensions match with specifications within the acceptable range outlined in the acceptance test record.",
    },
    {
      tag: "4.2",
      title: "4.2 Physical Inspection",
      summary:
        "Test ID: SINF-0020. Test Name: FFC Conductor Cable Physical Inspection.\n\nTools and Items Required: None.",
      body:
        "1. Collect FCC conductor cables for the Lot Under Test according to S4 AQL4 sampling plan.\n\n2. Visually inspect cable to ensure that there are no visible damage or inconsistencies in the structure. Ensure cable is not kinked.\n\nEnsure cable is flat and not bent by more than 90 degrees.\n\nNo shorts between cable positions.",
    },
    {
      tag: "4.3",
      title: "4.3 Biological Review of Design",
      summary:
        "Test ID: SINF-0030. Test Name: FCC Conductor Cable Biological Review of Design.\n\nTools and Items Required: None.",
      body:
        "1. Review Sinatra FCC Conductor Cable procurement requirements to confirm presence of requirement for lack of direct contact with patient (cable is enclosed in device).\n\nOnly repeat if spec or procurement requirements change.",
    },
    {
      tag: "4.4",
      title: "4.4 Cleanliness and Sterilization Review of Design",
      summary:
        "Test ID: SINF-0040. Test Name: FCC Conductor Cable Cleanliness Review of Design.\n\nTools and Items Required: None.",
      body:
        "1. Review Sinatra FCC Conductor Cable procurement requirements to confirm presence of requirement for cleanliness and free of unnecessary debris.\n\nOnly repeat if spec or procurement requirements change.",
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary:
        "Document the completed inspection in a copy of Sinatra FCC Conductor Cable Acceptance Test Record (SIN-FRM-2206). Upon completion, enter the document as a new record (REC type) in the Document Management System.",
    },
  ],
};
