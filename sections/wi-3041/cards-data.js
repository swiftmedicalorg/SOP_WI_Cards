window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-3041"] = {
  documentType: "WI",
  documentNumber: "3041",
  documentTitle: "Work Instruction - CDW iPhone RMAs",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/Work-Instruction---iPhone-RMAs.aspx",
  linkLabel: "Open WI in SharePoint",
  theme: {
    accent: "#275d8c",
    surface: "#ffffff",
    background: "#eef6fd",
    text: "#173b61",
  },
  cards: [
    {
      tag: "Title",
      title: "WI 3041",
      summary: "Work Instruction - CDW iPhone RMAs",
    },
    {
      tag: "Introduction",
      title: "Introduction",
      summary:
        "This work instruction outlines the steps taken when there is an iPhone return/replacement submitted through Halo.",
    },
    {
      tag: "Button",
      title: "Open WI in SharePoint",
      summary: "Open the complete CDW iPhone RMA work instruction.",
      media: [
        {
          type: "button",
          src:
            "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/Work-Instruction---iPhone-RMAs.aspx",
          buttonLabel: "Open WI in SharePoint",
        },
      ],
    },
    {
      tag: "Step 1",
      title: "Step 1: Ticket",
      summary:
        "Client submits an RMA ticket through Halo indicating the issue they are having with their iPhone. The ticket provides details of the issue, including the serial number of the device.",
      media: [
        {
          type: "image",
          src: "https://cdn1.7taps.com/Production/18397/90ebc93a-6b74-431b-a57c-65bdb727b99f",
          alt: "RMA ticket form",
        },
      ],
    },
    {
      tag: "Step 2",
      title: "Step 2: Triage",
      summary:
        "ProdOps triages the Halo ticket to see whether it is something we can assist with. If a solution is not found, ProdOps directs the ticket to IT for MDM issues or to CDW for hardware issues, and assigns it to the correct location.",
      body:
        "If assigned to CDW, provide the device serial number, AppleCare+ plan number from the iPhone folder of the Operations SharePoint page, order number from Rubi, and the details the client provided about the issue. Contact Account Executive Chirag at chirag.trivedi@cdw.ca directly through Halo.",
    },
    {
      tag: "Step 3",
      title: "Step 3: Swift Investigates",
      summary:
        "If assigned to IT, IT investigates and directs the client on how to log into the Swift MDM configuration. The ticket is marked assigned to IT in Halo and marked solved if a solution is found.",
      body:
        "If assigned to CDW, ProdOps assists the client with shipping the iPhone to CDW. The ticket is marked awaiting device shipment. The issue is either solved by IT or the iPhone is shipped to CDW for investigation.",
    },
    {
      tag: "Step 4",
      title: "Step 4: CDW Investigates",
      summary:
        "If assigned to CDW, CDW investigates the hardware issue, provides Swift Medical with a timeline, and contacts Apple to facilitate repair or replacement of the device.",
      body:
        "The ticket is marked with Vendor. CDW determines the issue type and provides a timeline for the solution.",
    },
    {
      tag: "Step 5",
      title: "Step 5: Swift Informs Clients",
      summary:
        "ProdOps provides the client with a status update and estimated timeline. The client is informed of the timelines.",
    },
    {
      tag: "Step 6",
      title: "Step 6: CDW Communication",
      summary:
        "CDW provides an update on the solution as long as it is covered by the AppleCare+ warranty. ProdOps is informed of what happened with the device and what solution will be provided.",
    },
    {
      tag: "Step 7",
      title: "Step 7: Shipment",
      summary:
        "ProdOps assists with facilitating shipment of the iPhone from CDW to the client, which is not covered by CDW. If the client is in Canada, CDW can ship directly to the customer.",
      body:
        "If the client is in the USA or internationally, CDW ships the iPhone to the Toronto office for ProdOps to ship from the office. The ticket is marked in transit, and ProdOps ensures the repaired or replaced device is shipped to the client.",
    },
    {
      tag: "Step 8-9",
      title: "Step 8-9: Track and Resolve",
      summary:
        "8. ProdOps provides the client with tracking information. The client has the tracking information.\n\n9. Once the iPhone is received by the client, the Halo ticket is marked solved.",
      body: "Success Criteria: The ticket is solved.",
    },
  ],
};
