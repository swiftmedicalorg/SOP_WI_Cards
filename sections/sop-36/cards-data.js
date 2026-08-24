window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["sop-36"] = {
  documentType: "SOP",
  documentNumber: "36",
  documentTitle: "Device Licensing",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0036-SOP-Device-Licensing-[QMS-SOP-0036_F]-8251577413.aspx",
  linkLabel: "Open SOP in SharePoint",
  theme: {
    accent: "#0057B8",
    surface: "#ffffff",
    background: "#F0F3F8",
    text: "#2E3C63",
  },
  cards: [
    {
      tag: "Title",
      title: "SOP 36",
      summary: "Device Licensing",
    },
    {
      tag: "Button",
      title: "Introduction",
      summary:
        "This procedure provides a system and instructions for the implementation of device licensing activities, QMS, certificate submission and classification activities for Swift in Canada and the US.",
      media: [
        {
          type: "button",
          src:
            "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-0036-SOP-Device-Licensing-[QMS-SOP-0036_F]-8251577413.aspx",
          buttonLabel: "Open SOP in SharePoint",
        },
      ],
    },
    {
      tag: "Scope",
      title: "This applies to ...",
      summary: "Class I and Class II medical devices.\n\nDevices authorized for sale in Canada and the US.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1605176173609-a0067079b419?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwyfHxtZWRpY2FsJTIwZGV2aWNlfGVufDB8fHx8MTY4ODc0MTc1OHww&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Medical devices",
        },
      ],
    },
    {
      tag: "MDEL",
      title: "MDEL",
      summary:
        "The device licensing process in Canada and the USA requires manufacturers, distributors and importers to obtain a Medical Device Establishment License (MDEL) for Class I devices.\n\nIn Canada, manufacturers must receive a MDEL for certain health products defined as a device under the Food and Drugs Act before they can be sold in the Canadian market.",
    },
    {
      tag: "Market",
      title: "Market a Device",
      summary:
        "When Swift seeks to market a new class II (or higher) device within the Canadian market, QA/RA must submit an application to Health Canada using the requisite format established by the Minister.",
      body:
        "QA/RA must provide Health Canada with the identifier of the device and all manufacturers' names and addresses.",
    },
    {
      tag: "Quiz",
      title: "MDEL have which types of classes?",
      summary: "Select all correct answers.",
      question: {
        prompt: "MDEL have which types of classes?",
        choices: [
          { label: "Class I", value: "class-i" },
          { label: "Class II", value: "class-ii" },
          { label: "Class III", value: "class-iii" },
          { label: "Class IV", value: "class-iv" },
        ],
        correctAnswers: ["class-i", "class-ii"],
        correctMessage: "Correct.",
        incorrectMessage: "Review the MDEL requirements and try again.",
      },
    },
    {
      tag: "Health Canada",
      title: "Health Canada Req",
      summary:
        "Swift must also provide Health Canada with a description of the medical conditions, purposes and uses for the device, a list of standards complied with in the manufacture, an attestation by a Swift Medical senior official, and a copy of the device label.",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1566475922470-2740a2d7e17b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwxOXx8Y2FuYWRhfGVufDB8fHx8MTY4ODc0MTc4M3ww&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Canada reference image",
        },
      ],
    },
    {
      tag: "Licenses",
      title: "Licenses",
      summary:
        "Swift must submit an application and supporting documentation to the DLSD, MDB, and TPD for a medical device license. Swift renews the license annually and informs the Minister within 30 days if the device is discontinued.\n\nIn the US, Swift must submit appropriate applications and support materials to register each product or medical device.",
    },
    {
      tag: "Certificate",
      title: "Canadian Certificate",
      summary:
        "Swift is required to submit a QMS to Health Canada within 30 days of its issuance.\n\nFor investigational devices, Swift Medical must maintain all records and information detailed in Section 81 of the Medical Devices Regulation and apply for an investigation testing authorization (ITA).",
      media: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1570610159825-ec5d3823660c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDYwNjl8MHwxfHNlYXJjaHwzfHxjZXJ0aWZpY2F0ZXxlbnwwfHx8fDE2ODg3NDE4MTd8MA&ixlib=rb-4.0.3&q=80&w=1080",
          alt: "Certificate",
        },
      ],
    },
    {
      tag: "CMDR",
      title: "CMDR",
      summary:
        "For CMDR-specific requirements, Swift must maintain and make readily available objective evidence of having fulfilled all requirements unique to CMDR.\n\nChange notifications to Regulatory Agencies must be assessed for their impact on the licenses.",
    },
    {
      tag: "CDRH",
      title: "CDRH Guidance",
      summary:
        "The CDRH guidance documents provide guidance on when to submit a new 510(k) based on each proposed change in design.",
    },
    {
      tag: "Health Canada",
      title: "Health Canada",
      summary:
        "Swift must notify Health Canada if a document change affects the QMS or product and is deemed not to be significant.\n\nProcess monitoring must remain intimately connected with the device licensing process, and the status of licensing must be made available to Management at the Management Quality Review.",
    },
    {
      tag: "Records",
      title: "Quality Records",
      summary:
        "Quality Records must include:\n\nHealth Canada Medical Device License and Renewed Licenses\n\nHealth Canada Establishment License\n\nMDSAP Certification\n\nCMDR Safety and Effectiveness Checklist.",
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary: "You can explore the full SOP and save the link to the page for reference as needed.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/561155f6-3f2b-42fd-b76c-0c947c55f938",
          alt: "Complete",
        },
      ],
    },
  ],
};
