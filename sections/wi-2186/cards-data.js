window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-2186"] = {
  documentType: "WI",
  documentNumber: "2186",
  documentTitle: "PORON Foam Acceptance Test Procedures",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-PORON-Foam-Acceptance-Test-Procedures-%5bSIN-WI-2186_A%5d-8289551773.aspx?OR=EXCEL-WEB.BODY.NT&CT=1787582466665",
  linkLabel: "Open WI in SharePoint",
  description:
    "Acceptance testing and incoming inspection of Sinatra PORON Foam.",
  theme: {
    accent: "#0057B8",
    surface: "#ffffff",
    background: "#F0F3F8",
    text: "#2E3C63",
  },
  cards: [
    {
      tag: "Title",
      title: "WI 2186",
      summary: "PORON Foam Acceptance Test Procedures",
    },
    {
      tag: "Introduction",
      title: "Introduction",
      summary:
        "This work instruction is to be used for acceptance testing and incoming inspection of the Sinatra PORON Foam.",
      media: [
        {
          type: "button",
          src:
            "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-PORON-Foam-Acceptance-Test-Procedures-%5bSIN-WI-2186_A%5d-8289551773.aspx?OR=EXCEL-WEB.BODY.NT&CT=1787582466665",
          buttonLabel: "Open WI in SharePoint",
        },
      ],
      sectionButtons: [
        { label: "4.1 Dimensional Inspection", targetTag: "4.1" },
        { label: "4.2 Physical Inspection", targetTag: "4.2" },
        { label: "4.3 Other Inspections", targetTag: "4.3" },
      ],
    },
    {
      tag: "Scope",
      title: "1.1 Scope",
      summary:
        "This work instruction applies to the PORON Foam parts intended to be used with the Sinatra system.",
    },
    {
      tag: "4.1",
      title: "4.1 Dimensional Inspection",
      summary:
        "Test ID: SINP-0010. Test Name: PORON Foam Dimensional Inspection.\n\nTools and Items Required: Calipers.",
      body:
        "1. Collect PORON Foam samples for the Lot Under Test according to S4 AQL4 sampling plan.\n\n4. Refer to PORON Foam Drawing [SIN-DWG-2056] to check expected dimensions.\n\n5. Confirm the outer length and width match specified dimensions within tolerance of +/- 0.25mm, and record measured dimensions at right.\n\n6. Confirm the interior 'window' area matches specified dimensions within tolerance of +/- 0.25mm, and record measured dimensions at right.\n\n7. Confirm the thickness matches the specified dimensions within tolerance of +/- 0.17mm.\n\nNote: specified tolerance here is 15% on 1.14mm part nominal thickness.",
    },
    {
      tag: "4.2",
      title: "4.2 Physical Inspection",
      summary:
        "Test ID: SINP-0020. Test Name: PORON Foam Physical Inspection.\n\nTools and Items Required: Lepton sample part.",
      body:
        "1. Collect PORON Foams for the Lot Under Test according to S4 AQL4 sampling plan.\n\n2. Visually inspect PORON parts. Ensure PORON foam is not ripped. Ensure the shape visually matches the PORON Foam Drawing.\n\n3. Confirm the cutout 'notch' appears as per the PORON Foam Drawing.\n\n4. Confirm parts have adhesive with intact liner on the correct side to adhere to the case front.",
    },
    {
      tag: "4.3",
      title: "4.3 Other Inspections",
      summary:
        "Review of other requirements listed in the Procurement Specifications (Physical, Colour/Finish, Biological, Cleanliness) should be repeated only if there is a change in requirements/specifications for the component or if a new vendor is being used as a source.",
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary:
        "Record the passed and failed parts, the Lot Under Test, and the sample size. Upon completion, enter the document as a new record (SIN-FRM-2206) in the Document Management System.",
    },
  ],
};
