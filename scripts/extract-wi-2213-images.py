from pathlib import Path

import fitz


PDF_PATH = next(Path("sections/wi-2213").glob("*.pdf"))
OUTPUT_DIR = Path("sections/wi-2213/images")

# The supplied PDF embeds the workflow figures in page order. Shared branding is excluded.
IMAGE_MANIFEST = {
    (3, 2): "step-2-opening-bag.png",
    (3, 3): "step-3-terminal.png",
    (4, 2): "step-4-nrf-connect.png",
    (4, 3): "step-4-nrf-download.png",
    (5, 2): "step-4-pin-dock.png",
    (6, 2): "step-5-devboard.png",
    (7, 2): "step-5-driverboard-pins.png",
    (8, 2): "step-5-driverboard-holes.png",
    (9, 2): "step-6-connected-devboard.png",
    (9, 3): "step-7-nrf-connect-home.png",
    (9, 4): "step-8-programmer.png",
    (10, 2): "step-9-select-device.png",
    (10, 3): "step-10-add-file.png",
    (11, 2): "step-11-file-selection.png",
    (11, 3): "step-11-firmware-file.png",
    (12, 2): "step-12-softdevice-file.png",
    (12, 3): "step-12-memory-layout.png",
    (13, 2): "step-13-connector-tilt.png",
    (14, 2): "step-14-erase-all.png",
    (14, 3): "step-15-erase-write.png",
    (15, 2): "step-16-reset.png",
    (15, 3): "step-17-blue-led.png",
    (16, 2): "step-18-kapton-tape.png",
    (16, 3): "step-18-sealed-bag.png",
    (17, 2): "step-19-inventory.png",
    (17, 3): "step-20-serial-numbers.png",
}


def extract_images():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    document = fitz.open(PDF_PATH)
    for (page_number, image_number), filename in IMAGE_MANIFEST.items():
        page = document[page_number - 1]
        images = page.get_images(full=True)
        if image_number > len(images):
            raise RuntimeError(f"Missing image {image_number} on page {page_number}")
        image = document.extract_image(images[image_number - 1][0])
        output_path = OUTPUT_DIR / filename
        output_path.write_bytes(image["image"])
        print(f"Wrote {output_path} ({image['width']}x{image['height']})")


if __name__ == "__main__":
    extract_images()
