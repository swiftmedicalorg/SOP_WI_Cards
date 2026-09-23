window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-ray-1-distribution"] = {
  documentType: "WI",
  documentNumber: "Ray 1 Distribution",
  documentTitle: "Work Instruction - Ray 1 Distribution",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/Work-Instruction--Ray-1-Distribution.aspx",
  linkLabel: "Open WI in SharePoint",
  description: "Distribution process for Ray 1 devices, shipping checks, and Distribution Record updates.",
  theme: {
    accent: "#2D6E9F",
    surface: "#ffffff",
    background: "#EAF4FB",
    text: "#183A52",
  },
  cards: [
    {
      tag: "Title",
      title: "WI - Ray 1 Distribution",
      summary: "Work Instruction - Ray 1 Distribution",
      body: "WI - Ray 1 Distribution\nWork Instruction - Ray 1 Distribution",
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
      tag: "Scope",
      title: "Scope",
      summary:
        "This work instruction applies whenever a Ray 1 device is prepared for shipment, shipped to a customer, internal stakeholder, or demo recipient, and recorded in the Distribution Record.",
      body:
        "This document applies whenever a Ray 1 device is prepared for shipment, shipped to a customer, internal stakeholder, or demo recipient, and recorded in the Distribution Record.\n\nThe process covers shipment preparation, release checks, documentation, record updates, and exception handling.",
    },
    {
      tag: "Standards",
      title: "Applicable Standards",
      summary: "The work instruction aligns with the QMS and relevant device quality requirements.",
      body:
        "Applicable standards and documents include:\n- Quality Management System Regulation (QMSR)\n- 21 CFR Part 820\n- ISO 13485:2016 - Medical devices - Quality management systems - Requirements for regulatory purposes",
    },
    {
      tag: "Reference Docs",
      title: "Reference Documents",
      summary: "Distribution work relies on packaging, labelling, and shipment controls.",
      body:
        "Reference documents include:\n- Work Instruction: Swift Ray 1 Packaging and Labelling\n- Work Instruction: Shipment of Ray 1 Devices\n- Ray 1 Distribution Record",
      media: [
        {
          type: "button",
          src:
            "https://swiftmedical.sharepoint.com/:u:/r/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-Sinatra-Packaging-and-Labelling-[SIN-WI--2351_C]-9377873921.aspx?d=we01967df1a9a4465a1d2ca6159958930&csf=1&web=1&e=23hc1Q",
          caption: "Ray 1 Packaging and Labelling",
          buttonLabel: "Packaging and Labelling",
        },
      ],
    },
    {
      tag: "Training",
      title: "Training Required",
      summary:
        "All personnel responsible for preparing, shipping, or documenting Ray 1 distribution must be trained.",
      body:
        "Yes. All personnel responsible for preparing, shipping, or documenting Ray 1 device distribution must receive training on this work instruction.\n\nTraining ensures consistent handling, release checks, shipping controls, and Distribution Record compliance.",
    },
    {
      tag: "Roles",
      title: "Process Roles",
      summary: "Production Operations is responsible for shipment readiness, documentation, and escalation.",
      body:
        "Production Operations is responsible for:\n- confirming the serial number and release status before shipment\n- ensuring all required documentation is included\n- confirming packages are marked appropriately\n- updating the Distribution Record on the same day as shipment\n- escalating shipment exceptions or discrepancies to the appropriate owner",
    },
    {
      tag: "Process Steps",
      title: "Work Instruction Steps",
      summary: "The distribution process includes confirmation, release checks, shipment, and record updates.",
      body:
        "1. Confirm shipment details\n2. Confirm device release status\n3. Prepare the Ray device for shipment\n4. Ship the Ray device\n5. Update the Distribution Record\n6. Manage shipment exceptions\n\nThe key rule is simple: do not ship a Ray 1 device if it is under quarantine, hold, nonconformance, recall, or any other distribution restriction.",
    },
    {
      tag: "Demo Use",
      title: "Demo Use Only Distribution",
      summary:
        "Devices shipped for demo use require the same release checks and a clear demo-use note in the Distribution Record.",
      body:
        "When a Ray device is sent for demo use, the device must be confirmed for demo shipment purpose and release status before shipment.\n\nThe Distribution Record must be updated the same day and must include a note that the device is for demo use only.\n\nAny shipment exception must be recorded and escalated for required follow-up.",
    },
    {
      tag: "Quiz",
      title: "Release Check Quiz",
      summary: "Before shipment, Ray 1 devices must be confirmed as approved and not restricted.",
      body: "Before shipment, confirm the serial number and release status. A Ray 1 device must not be shipped if it is under quarantine, hold, nonconformance, recall, or any other distribution restriction.",
      question: {
        prompt: "What is required before a Ray 1 device may be shipped?",
        choices: [
          { label: "Only a shipping label", value: "label" },
          { label: "Release status confirmation and no active restrictions", value: "release" },
          { label: "A customer email only", value: "email" },
          { label: "Approval from marketing only", value: "marketing" },
        ],
        correctAnswer: "release",
        correctMessage: "Correct. The device must be approved and free from distribution restrictions before shipment.",
        incorrectMessage: "Review the release-status and exception requirements before shipping a Ray 1 device.",
      },
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
