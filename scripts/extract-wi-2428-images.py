from pathlib import Path

import fitz


PDF_PATH = next(Path("sections/wi-2428").glob("*.pdf"))
OUTPUT_DIR = Path("sections/wi-2428/images")

IMAGE_MANIFEST = {
    (4, 1): "step-1-nrf-connect-app.png",
    (5, 1): "step-1-app-screen.png",
    (6, 1): "step-2-wake-ray1.png",
    (7, 1): "step-3-blue-led.png",
    (7, 2): "step-3-provisioning-mode.png",
    (8, 1): "step-4-scanner.png",
    (9, 1): "step-5-bluetooth-device-list.png",
    (10, 1): "step-6-connected-leds.png",
    (11, 1): "step-8-service.png",
    (12, 1): "step-9-write-array.png",
    (13, 1): "step-10-provisioning-result.png",
    (14, 1): "step-11-renamed-peripheral.png",
    (15, 1): "step-12-complete.png",
}


def extract_images():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    document = fitz.open(PDF_PATH)
    for (page_number, image_number), filename in IMAGE_MANIFEST.items():
        images = document[page_number - 1].get_images(full=True)
        if image_number > len(images):
            raise RuntimeError(f"Missing image {image_number} on page {page_number}")
        image = document.extract_image(images[image_number - 1][0])
        output_path = OUTPUT_DIR / filename
        output_path.write_bytes(image["image"])
        print(f"Wrote {output_path} ({image['width']}x{image['height']})")


if __name__ == "__main__":
    extract_images()
