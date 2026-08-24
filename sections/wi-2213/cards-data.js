window.sopCardSets = window.sopCardSets || {};

window.sopCardSets["wi-2213"] = {
  documentType: "WI",
  documentNumber: "2213",
  documentTitle: "Board-Flashing Procedure for Ray 1",
  documentUrl:
    "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-Board-Flashing-Procedure-for-Ray-1-%5bSIN-WI-2213_B%5d-8373108763.aspx?OR=EXCEL-WEB.BODY.NT&CT=1787582469929",
  linkLabel: "Open WI in SharePoint",
  description:
    "Flash Ray 1 driver boards with firmware upon acceptance testing and prior assembly.",
  theme: {
    accent: "#0057B8",
    surface: "#ffffff",
    background: "#F0F3F8",
    text: "#2E3C63",
  },
  cards: [
    {
      tag: "Title",
      title: "WI 2213",
      summary: "Board-Flashing Procedure for Ray 1",
    },
    {
      tag: "Introduction",
      title: "Introduction",
      summary:
        "The purpose of this document is to identify the steps for flashing the Ray 1 driver boards with firmware upon acceptance testing and prior assembly.",
      media: [
        {
          type: "button",
          src:
            "https://swiftmedical.sharepoint.com/sites/DocumentManagementSystemSpace/SitePages/DMS-Work-Instruction-Board-Flashing-Procedure-for-Ray-1-%5bSIN-WI-2213_B%5d-8373108763.aspx?OR=EXCEL-WEB.BODY.NT&CT=1787582469929",
          buttonLabel: "Open WI in SharePoint",
        },
      ],
      sectionButtons: [
        { label: "Steps 1-5: Prepare", targetTag: "Preparation" },
        { label: "Steps 6-12: Configure", targetTag: "Configuration" },
        { label: "Steps 13-18: Flash and Package", targetTag: "Flashing" },
        { label: "Steps 19-20: Record", targetTag: "Recording" },
      ],
    },
    {
      tag: "Scope",
      title: "Preparation",
      summary:
        "Reference: Equipment Log [QMS-REC-0106], Supplies & Tool Log and Inventory [QMS-REC-2239], and Sinatra inventory [SIN-REC-2381_A].",
      body:
        "Tools and Items Required:\n1. ESD Wrist Wrap [SUP-C007]\n2. USB A to micro USB cable [SUP-C022]\n3. Devboard with connector cable (5-colour) [SUP-C021]\n4. Designated Laptop for Operation / Assembly [EQUIP-017A]\n5. Kapton tape [SUP-C017]\n\nNote: Please follow instructions carefully to prevent harm to product, equipment, and user.",
    },
    {
      tag: "Preparation",
      title: "Steps 1-2: Select and Open the Board Package",
      summary:
        "1. From the box labeled “Unflashed PCBs” in the Post QC locker, take out one package containing both the Sinatra ring board and Sinatra driver board. From the Sinatra section of the White sliding closet, get the devboard [SUP-C021] and USB cable (micro B) [SUP-C022] from the components compartment.\n\n2. Don ESD Wrist Wraps when handling driverboard. Cut open the package carefully with scissors to remove the DRIVER BOARD ONLY. Leave the section of the package with the ring board sealed and closed; it does not need to be opened for this process.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2213/images/step-2-opening-bag.png",
          alt: "Opening the driver board bag",
          caption: "Figure 1: Opening bag for driver board (not for ring board).",
        },
      ],
    },
    {
      tag: "Preparation Step 3",
      title: "Step 3: Set Up the Dev Environment",
      summary:
        "3. Set up a Dev environment on a production computer. Skip to step 4 if the production laptop is already setup and ready to flash firmware. Open Terminal (Found in Finder→ Applications→ Utilities).",
      body:
        "Install Homebrew by pasting the following lines in the terminal:\n/bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)\"\n\nAfter Homebrew is installed, paste the following lines in terminal:\nbrew tap osx-cross/arm\nbrew install arm-gcc-bin cmake\nbrew install homebrew/cask-drivers/segger-jlink\n\nIf you run into issues, check the correct version of Xcode and its Command Line Tools. M1 laptops may require manually installing the segger-jlink driver. If MacOS version is > 12.2.1, Python 2 may be required; the tested supported version is Python2.7.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2213/images/step-3-terminal.png",
          alt: "Terminal icon on MacOS",
          caption: "Figure 2: Terminal icon found on MacOS.",
        },
      ],
    },
    {
      tag: "Preparation Step 4",
      title: "Step 4: Download nRF Connect for Desktop",
      summary:
        "4. Download the nRF Connect for Desktop App. Skip this step if the production laptop already has the app installed. Download the nRF Connect app and choose the appropriate version for the machine. Once downloaded, launch the application and download the “Programmer”.",
      body: "OPTIONAL - Tip: Pin the nRF Connect for Desktop app to Dock.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2213/images/step-4-nrf-connect.png",
          alt: "nRF Connect for Desktop",
          caption: "Figure 3: nRF Connect website for download.",
        },
        {
          type: "image",
          src: "./sections/wi-2213/images/step-4-nrf-download.png",
          alt: "nRF Connect download screen",
          caption: "Figure 4: nRF download screen.",
        },
        {
          type: "image",
          src: "./sections/wi-2213/images/step-4-pin-dock.png",
          alt: "Pinning nRF Connect to the dock",
          caption: "Figure 5: Pinning nRF app to dock.",
        },
      ],
    },
    {
      tag: "Preparation Step 5",
      title: "Step 5: Set Up the nRF52 Devboard",
      summary:
        "5. Set up nRF52 Devboard [SUP-C021]. Skip this step if you already have a devboard that is setup.",
      body:
        "Verify the devboard is provided with pre-connected wires for flashing. If not, connect the wires manually to the devboard with connector pins to the driverboard connection holes:\n\nGND DETECT → GND\nRESET → RST\nSWD CLK → SWDClock\nSWD IO → SWDIO\nVTG → 2V8",
      media: [
        {
          type: "image",
          src: "./sections/wi-2213/images/step-5-devboard.png",
          alt: "nRF52-DK devboard with pre-connected wires",
          caption: "Figure 6: nRF52-DK Devboard - Wires Pre-Connected.",
        },
        {
          type: "image",
          src: "./sections/wi-2213/images/step-5-driverboard-pins.png",
          alt: "nRF52 devboard connector pins",
          caption: "Figure 6: nRF52 Dev Board text next to connector pins.",
        },
        {
          type: "image",
          src: "./sections/wi-2213/images/step-5-driverboard-holes.png",
          alt: "Sinatra driverboard connection holes",
          caption: "Figure 7: Sinatra Driverboard text next to connection holes.",
        },
      ],
    },
    {
      tag: "Configuration",
      title: "Steps 6-8: Connect the Devboard and Open Programmer",
      summary:
        "6. Log in to Production Laptop (EQUIP-17A), and plug in the devboard [SUP-C021] by inserting the micro USB [SUP-C022] on the side of the dev board and inserting the USB into the Production laptop. A USB-A to USB-C adapter may be necessary. If connected correctly, the LED will be on.\n\n7. Open program nRF app. Connect for Desktop.\n\n8. Open the programmer app once the nRF is open.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2213/images/step-6-connected-devboard.png",
          alt: "Connected nRF devboard",
          caption: "Figure 8: Connected devboard.",
        },
        {
          type: "image",
          src: "./sections/wi-2213/images/step-7-nrf-connect-home.png",
          alt: "nRF Connect home screen",
          caption: "Figure 9: nRF home screen to programmer app.",
        },
        {
          type: "image",
          src: "./sections/wi-2213/images/step-8-programmer.png",
          alt: "nRF programmer app",
          caption: "nRF programmer app.",
        },
      ],
    },
    {
      tag: "Configuration Step 9",
      title: "Steps 9-10: Select the Device and Add a File",
      summary:
        "9. Click on SELECT DEVICE (Top left) and click on the nRF52 DK to select. The nRF52 DK will not be displayed if the dev board is not connected to the computer.\n\n10. Once the device is connected, click Add file.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2213/images/step-9-select-device.png",
          alt: "Select device screen",
          caption: "Figure 10: Select device screen to select the dev board.",
        },
        {
          type: "image",
          src: "./sections/wi-2213/images/step-10-add-file.png",
          alt: "Adding a file to the nRF52 devboard",
          caption: "Figure 11: Adding file to nRF52 dev board.",
        },
      ],
    },
    {
      tag: "Configuration Step 11",
      title: "Steps 11-12: Add the Firmware Files",
      summary:
        "11. After selecting add file, two locations should be listed as follows:\n\na) ops/ops-firmware/sinatra-firmware/build/sinatra-fw-1.5.0.hex\n\nb) ops/ops-firmware/sinatra-firmware/extern/nrf_softdevice/s112_nrf52_6.1.0_softdevice.hex\n\n12. After the files are added, the file memory layout should look like Figure 14.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2213/images/step-11-file-selection.png",
          alt: "Firmware file selection",
          caption: "Figure 13: Firmware file selection.",
        },
        {
          type: "image",
          src: "./sections/wi-2213/images/step-11-firmware-file.png",
          alt: "Firmware file path",
          caption: "Firmware file location.",
        },
        {
          type: "image",
          src: "./sections/wi-2213/images/step-12-softdevice-file.png",
          alt: "Softdevice file path",
          caption: "Softdevice file location.",
        },
        {
          type: "image",
          src: "./sections/wi-2213/images/step-12-memory-layout.png",
          alt: "File memory layout",
          caption: "Figure 14: File memory layout after files are added.",
        },
      ],
    },
    {
      tag: "Flashing",
      title: "Steps 13-14: Connect the Driverboard and Erase All",
      summary:
        "13. Connect the devboard to the driver board using the connector with 5 multicoloured wires, ensuring attached plastic is facing OUTWARD. Push down and TILT the connector GENTLY. Ensure the cable is inserted with driverboard facing up.\n\n14. In the nRF Connect for Desktop app, click Erase All. This erases the current memory of the Ray 1.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2213/images/step-13-connector-tilt.png",
          alt: "Tilting the connector into the driverboard",
          caption: "Figure 15: See tilting of the connector.",
        },
        {
          type: "image",
          src: "./sections/wi-2213/images/step-14-erase-all.png",
          alt: "Erase all in nRF programmer",
          caption: "Figure 16: Erase all in nRF programmer app.",
        },
      ],
    },
    {
      tag: "Flashing Step 15",
      title: "Steps 15-17: Write, Reset, and Confirm Flashing",
      summary:
        "15. Once log shows “Device is loaded and ready for further operation”. Click Erase & Write. This will flash the updated firmware onto the connected Ray 1.\n\n16. In the nRF Connect for Desktop app, click Reset. This will boot the Ray1 device.\n\n17. The Sinatra device should start flashing from the blue LED once every three seconds. If you do not see the flashing, repeat flashing steps 13-16, verify the wires are connected correctly using Table 1, or hard reset the Sinatra device by pressing the power button for at least 10 seconds.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2213/images/step-15-erase-write.png",
          alt: "Erase and write firmware",
          caption: "Figure 17: Screen capture for ERASE & Write.",
        },
        {
          type: "image",
          src: "./sections/wi-2213/images/step-16-reset.png",
          alt: "Resetting the Sinatra device",
          caption: "Figure 18: Resetting the Sinatra device.",
        },
        {
          type: "image",
          src: "./sections/wi-2213/images/step-17-blue-led.png",
          alt: "Blue LED flashing on the Sinatra device",
          caption: "Figure 19: Sinatra device flashing from blue LED.",
        },
      ],
    },
    {
      tag: "Flashing Step 18",
      title: "Step 18: Reseal and Store the Driverboard",
      summary:
        "18. Remove the connector from the driver board, and place the flashed driver board back into its packaging, sealing it with Kapton tape (SUP-C017) to indicate that it has been successfully flashed with firmware. Place the bag in the Post QC locker in the appropriate “Flashed PCB” location denoted by a green sticker.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2213/images/step-18-kapton-tape.png",
          alt: "Kapton tape for resealing",
          caption: "Figure 20: Kapton Tape (SUP-C017) for resealing.",
        },
        {
          type: "image",
          src: "./sections/wi-2213/images/step-18-sealed-bag.png",
          alt: "Sealed driver board bag",
          caption: "Figure 21: Sealed driver board bag with Kapton tape.",
        },
      ],
    },
    {
      tag: "Recording",
      title: "Steps 19-20: Record Inventory Information",
      summary:
        "19. In the document Sinatra Inventory [SIN-REC-2381_A], navigate to the tab “Status(210803-Present)” page, and fill out the required information in a new row. In column “A”, copy the preceding Full SN and paste to the new row. You shall see an automatically generated code.\n\nFill out the columns: SN (serial number) of the Ray 1 device, Status (should be in Prod), Driver (should be same as SN), Ringboard SN (should be same as SN), HW Version (Hardware), and FW (Firmware) that was flashing on to the Sinatra Device.\n\n20. If flashing multiple boards, refer back to Steps and repeat steps 6-19.",
      media: [
        {
          type: "image",
          src: "./sections/wi-2213/images/step-19-inventory.png",
          alt: "Sinatra inventory record",
          caption: "Figure 22: Inventory record fields.",
        },
        {
          type: "image",
          src: "./sections/wi-2213/images/step-20-serial-numbers.png",
          alt: "Board serial numbers",
          caption: "SN, Driver, and Ringboard SN formatted on the boards.",
        },
      ],
    },
    {
      tag: "Complete",
      title: "Complete!",
      summary: "The Ray 1 driver board has been flashed and recorded for production use.",
    },
  ],
};
