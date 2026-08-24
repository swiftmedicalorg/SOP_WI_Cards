window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["sop-2665"] = {
  documentType: "SOP",
  documentNumber: "2665",
  documentTitle: "Deidentified Structured Dataset Preparation for Disclosure",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-2665-SOP-Deidentified-Structured-Dataset-Preparation-for-Disclosure-[QMS-SOP-2665_A]-8854601753.aspx",
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
      title: "SOP 2665",
      summary: "Deidentified Structured Dataset Preparation for Disclosure",
    },
    {
      tag: "Button",
      title: "Introduction",
      summary:
        "This section provides an overview of the document, outlining its purpose in guiding the preparation and transformation activities for structured datasets at Swift Medical.",
      media: [
        {
          type: "button",
          src:
            "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/SOPs/DMS-2665-SOP-Deidentified-Structured-Dataset-Preparation-for-Disclosure-[QMS-SOP-2665_A]-8854601753.aspx",
          buttonLabel: "Click to open SOP",
        },
      ],
    },
    {
      tag: "Dataset Creation",
      title: "Anonymized Dataset Creation",
      summary:
        "Describes the key steps involved in creating an anonymized dataset, including dataset collection, preprocessing, and anonymization techniques such as pseudonymization, generalization, perturbation, and aggregation.",
    },
    {
      tag: "Dataset Collection",
      title: "Dataset Collection",
      summary:
        "Outlines the initial steps in creating an anonymized dataset, emphasizing the identification of privacy and ethical standards, extraction of raw data, and recording metadata information.",
    },
    {
      tag: "Preprocessing",
      title: "Dataset Preprocessing",
      summary:
        "Explores the cleaning of raw data, conducting exploratory data analysis, and documenting preprocessing steps and decisions made during this phase to enhance the quality of the dataset.",
    },
    {
      tag: "Anonymization",
      title: "Dataset Anonymization",
      summary:
        "Details the classification of dataset attributes, risk assessment for reidentification, and specific procedures for suppressing Direct Identifiers (DIs) and Quasi-Identifiers (QIs) to achieve pseudonymization or full anonymization.",
    },
    {
      tag: "Time-Varying Attributes",
      title: "Full Anonymization with Time-Varying Attributes",
      summary:
        "Expands on the steps required for achieving (k, P)-anonymity when dealing with both static and time-varying attributes, including the formation of groups and subgroups based on k-anonymity and time series patterns.",
    },
    {
      tag: "Independent Review",
      title: "Independent Review",
      summary:
        "Highlights the importance of an independent reviewer who must audit and validate the anonymized dataset, ensuring it meets the acceptable risk of reidentification, using distance measures like Euclidean distance or Cosine Similarity.",
    },
    {
      tag: "Disclosure",
      title: "Dataset Disclosure Process",
      summary:
        "Outlines the post-anonymization steps, including authorization, documentation, and secure transmission of the anonymized dataset, with an emphasis on compliance with legal and ethical standards.",
    },
    {
      tag: "Authorization",
      title: "Authorization and Documentation",
      summary:
        "Emphasizes the need for obtaining necessary approvals, creating comprehensive documentation, and clearly defining the scope and purpose of dataset disclosure to comply with legal and ethical standards.",
    },
    {
      tag: "Security",
      title: "Secure Transmission, Monitoring, and Auditing",
      summary:
        "Focuses on the secure transmission of anonymized datasets using encryption and access controls, along with implementing monitoring mechanisms and periodic audits to ensure compliance with legal disclosure policies and data protection regulations.",
    },
    {
      tag: "Review",
      title: "Review and Revision",
      summary:
        "Concludes by emphasizing the importance of periodically reviewing and updating the Standard Operating Procedure (SOP) to incorporate changes in technology, regulations, or organizational requirements.",
    },
  ],
};
