(function () {
  const cardSets = window.sopCardSets;

  function documentLink(key) {
    const deck = cardSets[key];
    if (!deck) throw new Error(`Missing Ray navigation card set: ${key}`);
    return {
      label: `${deck.documentType} ${deck.documentNumber} - ${deck.documentTitle}`,
      url: `./index.html?set=${key}`,
    };
  }

  function referenceLink(key, text, label) {
    const deck = cardSets[key];
    const reference = deck.cards.flatMap(function (card) {
      return card.links || [];
    }).find(function (link) {
      return link.text === text;
    });
    if (!reference) throw new Error(`Missing Ray document reference: ${text}`);
    return { label, url: reference.url };
  }

  const sections = [
    {
      key: "ray-pre-production",
      title: "Ray - Pre-Production",
      description: "Component acceptance, board flashing, and BLE provisioning before Ray 1 assembly.",
      documents: [
        "wi-2142", "wi-2143", "wi-2144", "wi-2185",
        "wi-2186", "wi-2213", "wi-2428", "wi-2141",
      ].map(documentLink),
    },
    {
      key: "ray-production",
      title: "Ray Production",
      description: "Ray 1 assembly and production instructions, with the Gorilla Super Glue safety reference.",
      documents: ["wi-2130", "wi-2149", "rec-2215"].map(documentLink),
    },
    {
      key: "ray-post-production",
      title: "Ray Post-Production",
      description: "Ray 1 testing, rework, re-flashing, packaging, shipment, and distribution references after assembly.",
      documents: [
        referenceLink("wi-3520", "SIN-WI-2351_D Packaging and Labelling", "WI 2351 - Packaging and Labelling"),
        { label: "WI 2431" },
        { label: "WI 2836" },
        { label: "WI 2856" },
        referenceLink("wi-3516", "[SIN-WI-2880]", "WI 2880 - Ray 1 Rework Process"),
        referenceLink("wi-3520", "SIN-WI-2937_C Shipment of Ray 1 Devices", "WI 2937 - Shipment of Ray 1 Devices"),
        referenceLink("wi-3516", "[SIN-WI-2151]", "WI 2151 - Device Integrated Test Procedure"),
        documentLink("wi-3520"),
        documentLink("wi-3516"),
      ],
    },
  ];

  const hubLink = { label: "Ray production navigation hub", url: "./index.html?set=ray-production-navigation" };
  const sectionLinks = sections.map(function (section) {
    return { label: section.title, url: `./index.html?set=${section.key}` };
  });
  const theme = {
    accent: "#2457a6",
    surface: "#ffffff",
    background: "#eef3fb",
    text: "#22385f",
  };

  cardSets["ray-production-navigation"] = {
    title: "Ray 1 Production Navigation",
    description: "Choose a production stage using the dropdowns or the section buttons. Open existing learning cards or the linked source document.",
    theme,
    navigationSections: sections,
    cards: [
      {
        tag: "Navigation",
        title: "Explore Ray 1 production",
        summary: "Find the instructions and records for pre-production, production, and post-production. Document revision codes are omitted from this navigation.",
        navigationLinks: sectionLinks,
      },
    ].concat(sections.map(function (section) {
      return {
        tag: section.title,
        title: section.title,
        summary: section.description,
        navigationLinks: [
          { label: "Open section card set", url: `./index.html?set=${section.key}` },
        ].concat(section.documents),
      };
    })),
  };

  sections.forEach(function (section) {
    cardSets[section.key] = {
      title: section.title,
      description: section.description,
      theme,
      navigationSections: sections,
      cards: [
        {
          tag: "Overview",
          title: section.title,
          summary: "Select a document below, or use the dropdowns above to move between production stages.",
          navigationLinks: section.documents,
        },
      ].concat(section.documents.map(function (document) {
        return {
          tag: document.label.split(" - ")[0],
          title: document.label,
          summary: document.url
            ? document.url.startsWith("./index.html?set=")
              ? "Open the learning cards for this document."
              : "Open the referenced work instruction in SharePoint."
            : "The document link has not been supplied yet.",
          navigationLinks: document.url
            ? [{ label: "Open " + document.label.split(" - ")[0], url: document.url }]
            : [],
        };
      }), [
        {
          tag: "Navigation",
          title: "Other Ray production stages",
          summary: "Return to the hub or explore another stage.",
          navigationLinks: [hubLink].concat(sectionLinks.filter(function (link) {
            return link.url !== `./index.html?set=${section.key}`;
          })),
        },
      ]),
    };
  });
})();
