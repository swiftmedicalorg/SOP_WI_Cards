window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-2141"] = {
  documentType: "WI",
  documentNumber: "2141",
  documentTitle: "Main Board and Ring Board (PCB) Acceptance Procedures",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-Main-Board-and-Ring-Board-(PCB)-Acceptance-Procedures-%5bSIN-WI--2719_C%5d-8630042625.aspx?OR=EXCEL-WEB.BODY.NT&CT=1787582542358",
  linkLabel: "Open WI in SharePoint",
  description:
    "Acceptance testing and incoming inspection for the Sinatra Main Board and Ring Board (PCB).",
  theme: {
    accent: "#0057B8",
    surface: "#ffffff",
    background: "#F0F3F8",
    text: "#2E3C63",
  },
  cards: [
    {
      tag: "Title",
      title: "WI 2141",
      summary: "Main Board and Ring Board (PCB) Acceptance Procedures",
    },
    {
      tag: "Introduction",
      title: "Introduction",
      summary:
        "The Sinatra PCB is a component in the Sinatra device and incoming lots must undergo acceptance testing before moving the component into production. This work instruction is to be used for acceptance testing and incoming inspection of the Sinatra Main Board and Ring Board (PCB).",
      sectionButtons: [
        { label: "4.1 Dimensional Inspection", targetTag: "4.1" },
        {
          label: "4.2 Physical Inspection (Including Colour and Finish)",
          targetTag: "4.2",
        },
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
        "This work instruction applies to the acceptance of the Sinatra Driver Board and Ring Board intended to be used with the Sinatra (Ray 1) system. This work instruction is only valid for the Printed Circuit Boards (PCB) that are on version 0.1.4.",
    },
    {
      tag: "References",
      title: "2. Applicable and Reference Documents",
      summary:
        "Applicable standard: ANSI/ASQ Z1.4-2003 (EXT-STD-0075).\n\nReference documents: Sinatra Main Board and Ring Board (PCB) Procurement Specification (SIN-CS-2135); Sinatra PCB Drawing - Driver Board (Driverboard_Assembly_Drawing_v0.1.4.pdf); Sinatra PCB Drawing - Ring Board (Ringboard_Assembly_Drawing_v0.1.4.pdf); Device Integrated Verification and Validation Plan (SIN-PLN-2125); Sinatra Master Component Acceptance Test Record (SIN-FRM-2206).",
    },
    {
      tag: "Training",
      title: "3. Training Required",
      summary:
        "YES - all persons performing acceptance testing on the Sinatra PCBs are to be trained prior to carrying out these procedures.",
    },
    {
      tag: "Work Instructions",
      title: "4. Work Instructions",
      summary:
        "Complete the work instructions below and document in a copy of Sinatra Master Component Acceptance Test Record (SIN-FRM-2206) under the PCB tab. Upon completion, enter the document as a new record (REC type) in the Document Management System.",
      body:
        "Inspection of the incoming Sinatra Driver Board and Ring Board (PCB) shall be performed prior to production. For each lot, an inspection lot shall be sampled throughout the received lot as per the Device Integrated Verification and Validation plan (SIN-PLN-2125).",
    },
    {
      tag: "4.1",
      title: "4.1 Dimensional Inspection",
      summary:
        "Test ID: SINP-0010. Test Name: Main Board and Ring Board (PCB) Dimensional Inspection.\n\nTraceability: PCB-DIM-0010, PCB-DIM-0020, PCB-DIM-0030, PCB-DIM-0040.\n\nTools and Items Required: Caliper (EQUIP-001).",
      body: "1. Collect PCBs for the Lot Under Test according to General - Inspection level I - AQL Level 4.0 sampling plan.",
    },
    {
      tag: "4.1 Driver Board",
      title: "4.1 Driver Board: Length Measurement",
      summary:
        "2. Using the calipers, measure the length of each driver board sample. The expected range of dimensions for each are listed in SIN-FRM-2206 for PCBs.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2141/images/4-1-driver-length.png",
          alt: "Driver board length measurement",
          caption: "Length measurement",
        },
      ],
    },
    {
      tag: "4.1 Driver Width",
      title: "4.1 Driver Board: Width Measurement",
      summary:
        "2. Using the calipers, measure the width of each driver board sample. The expected range of dimensions for each are listed in SIN-FRM-2206 for PCBs.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2141/images/4-1-driver-width.png",
          alt: "Driver board width measurement",
          caption: "Width measurement",
        },
      ],
    },
    {
      tag: "4.1 Driver Thickness",
      title: "4.1 Driver Board: Thickness Measurement",
      summary:
        "2. Using the calipers, measure the thickness of each driver board sample. The expected range of dimensions for each are listed in SIN-FRM-2206 for PCBs.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2141/images/4-1-driver-thickness.png",
          alt: "Driver board thickness measurement",
          caption: "Thickness measurement",
        },
      ],
    },
    {
      tag: "4.1 Ring Board",
      title: "4.1 Ring Board: Length Measurement",
      summary:
        "3. Using the calipers, measure the length of each ring board sample. The expected range of dimensions for each are listed in SIN-FRM-2206 for PCBs.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2141/images/4-1-ring-length.png",
          alt: "Ring board length measurement",
          caption: "Length measurement",
        },
      ],
    },
    {
      tag: "4.1 Ring Width",
      title: "4.1 Ring Board: Width Measurement",
      summary:
        "3. Using the calipers, measure the width of each ring board sample. The expected range of dimensions for each are listed in SIN-FRM-2206 for PCBs.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2141/images/4-1-ring-width.png",
          alt: "Ring board width measurement",
          caption: "Width measurement",
        },
      ],
    },
    {
      tag: "4.1 Ring Thickness",
      title: "4.1 Ring Board: Thickness Measurement",
      summary:
        "3. Using the calipers, measure the thickness of each ring board sample. The expected range of dimensions for each are listed in SIN-FRM-2206 for PCBs.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2141/images/4-1-ring-thickness.png",
          alt: "Ring board thickness measurement",
          caption: "Thickness measurement",
        },
      ],
    },
    {
      tag: "4.2",
      title: "4.2 Physical Inspection (Including Colour and Finish)",
      summary:
        "Test ID: SINP-0020. Test Name: Main Board and Ring Board (PCB) Physical Inspection.\n\nTraceability: PCB-PHY-0010, PCB-PHY-0020, PCB-PHY-0030, PCB-PHY-0040, PCB-PHY-0050, PCB-PHY-0060, PCB-PHY-0070, PCB-PHY-0080, PCB-PHY-0090, PCB-PHY-0120, PCB-CFR-0010, PCB-CFR-0020, PCB-CFR-0030.\n\nTools and Items Required: Micro-USB connector cable.",
      body:
        "1. Collect PCBs for the Lot Under Test according to General - Inspection level I - AQL Level 4.0 sampling plan.\n\n2. Ensure the PCBs adhere to the Physical Requirements outlined in SIN-CS-2135. The colour and finish information will be found in the document. Ensure the colour and finish match through visual inspection and other physical requirements match.\n\n3. Inspect the overall form of the PCBs, ensuring there is no damage found. No burrs should be present on the edge of the PCBs (should be smooth). No cracks should be present on the PCBs. The PCBs should not be bent.\n\n4. Refer to the PCB assembly drawings and ensure that the samples match. Visually inspect to see if any components are missing on the PCBs. IE: The component is present in the BOM but not present on the board. Refer to the assembly drawings for what components should be present. Look for any exposed pads on the board which may be a component that has not been placed on the board.\n\n5. Acquire a cable with a micro-USB connector.",
    },
    {
      tag: "4.2 Step 6",
      title: "4.2 Physical Inspection: Micro-USB Port",
      summary:
        "6. Plug in the micro-USB cable fully into the driver board to ensure that there are no metal artifacts or debris blocking the port. Check the inside of the port if there are any difficulties with plugging in the cable.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2141/images/4-2-micro-usb-port.png",
          alt: "Micro-USB cable connected to driver board",
          caption: "Micro-USB port inspection",
        },
      ],
    },
    {
      tag: "4.3",
      title: "4.3 Biological Review of Design",
      summary:
        "Test ID: SINP-0030. Test Name: Main Board and Ring Board (PCB) Biological Review of Design.\n\nTraceability: PCB-BIO-0010.\n\nTools and Items Required: N/A - visual inspection and reviewing documentation.",
      body:
        "1. Review Sinatra Main Board and Ring Board (PCB) procurement specifications (SIN-WI-2135) to confirm that the PCBs meet biological requirements.\n\nOnly repeat if spec or procurement requirements change.",
    },
    {
      tag: "4.4",
      title: "4.4 Cleanliness and Sterilization Review of Design",
      summary:
        "Test ID: SINP-0040. Test Name: Main Board and Ring Board (PCB) Cleanliness Review of Design.\n\nTraceability: PCB-CSR-0010, PCB-CSR-0020.\n\nTools and Items Required: N/A - visual inspection and reviewing documentation.",
      body:
        "1. Review Sinatra Main Board and Ring Board (PCB) procurement specification (SIN-WI-2135) to confirm presence of requirements for cleanliness and free of unnecessary debris.\n\nOnly repeat if spec or procurement requirements change.",
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary:
        "Document the completed inspection in SIN-FRM-2206 under the PCB tab and enter it as a new REC type record in the Document Management System.",
    },
  ],
};
