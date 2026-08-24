window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-2143"] = {
  documentType: "WI",
  documentNumber: "2143",
  documentTitle: "FLIR Lepton Thermal Camera Acceptance Procedures",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-FLIR-Lepton-Thermal-Camera-Acceptance-Procedures-%5bSIN-WI-2143_A%5d-8289551768.aspx?OR=EXCEL-WEB.BODY.NT&CT=1787582458973",
  linkLabel: "Open WI in SharePoint",
  description:
    "Acceptance testing and incoming inspection of the Sinatra FLIR Lepton Thermal Camera.",
  theme: {
    accent: "#0057B8",
    surface: "#ffffff",
    background: "#F0F3F8",
    text: "#2E3C63",
  },
  cards: [
    {
      tag: "Title",
      title: "WI 2143",
      summary: "FLIR Lepton Thermal Camera Acceptance Procedures",
    },
    {
      tag: "Introduction",
      title: "Introduction",
      summary:
        "This work instruction is to be used for acceptance testing and incoming inspection of the Sinatra FLIR Lepton Thermal Camera.",
      media: [
        {
          type: "button",
          src:
            "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-FLIR-Lepton-Thermal-Camera-Acceptance-Procedures-%5bSIN-WI-2143_A%5d-8289551768.aspx?OR=EXCEL-WEB.BODY.NT&CT=1787582458973",
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
        "This work instruction applies to the Sinatra FLIR Lepton Thermal Camera intended to be used with the Sinatra system.",
    },
    {
      tag: "4.1",
      title: "4.1 Dimensional Inspection",
      summary:
        "Test ID: SINAT-0010. Test Name: FLIR Lepton Thermal Camera Dimensional Inspection.\n\nTools and Items Required: Calipers.",
      body:
        "1. Collect FLIR Lepton thermal camera for the Lot Under Test according to S4 AQL4 sampling plan.\n\n2. Using Calipers, measure the length and width of the FLIR Lepton thermal camera. Use the below diagram as reference for the expected dimensions of the camera. A copy of the diagram is also located in the acceptance test record.\n\nNOTE: Do not measure the height of the camera, which would involve placing the calipers onto the camera lens, as this may cause damage to the component.",
    },
    {
      tag: "4.2",
      title: "4.2 Physical Inspection",
      summary:
        "Test ID: SINAT-0020. Test Name: FLIR Lepton Thermal Camera Physical Inspection.\n\nTools and Items Required: None.",
      body:
        "1. Ensure that the FLIR Lepton Engineering Datasheet and FLIR Software Interface Description Document (IDD) demonstrate adherence to the Physical Requirements listed in the procurement specification [SIN-CS-2137].\n\nOnly required if specifications or requirements change and/or there is a new, different component being tested that was not previously tested.",
    },
    {
      tag: "4.3",
      title: "4.3 Biological Review of Design",
      summary:
        "Test ID: SINAT-0030. Test Name: FLIR Lepton Thermal Camera Biological Review of Design.\n\nTools and Items Required: None.",
      body:
        "1. Review Sinatra FLIR Lepton Thermal Camera procurement requirements to confirm presence of ROHS compliance requirement.\n\nReview FLIR Lepton Engineering Datasheet to confirm component is listed as ROHS compliant.\n\nOnly repeat if spec or procurement requirements change.",
    },
    {
      tag: "4.4",
      title: "4.4 Cleanliness and Sterilization Review of Design",
      summary:
        "Test ID: SINAT-0040. Test Name: FLIR Lepton Thermal Camera Cleanliness Review of Design.\n\nTools and Items Required: None.",
      body:
        "1. Review Sinatra FLIR Lepton Thermal Camera procurement requirements to confirm the presence of requirements for cleanliness and free of unnecessary debris.\n\nOnly repeat if spec or procurement requirements change.",
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary:
        "Document the completed inspection in FLIR Lepton Thermal Camera Acceptance Test Record (SIN-FRM-2206). Upon completion, enter the document as a new record (REC type) in the Document Management System.",
    },
  ],
};
