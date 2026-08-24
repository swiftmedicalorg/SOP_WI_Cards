from pathlib import Path

import fitz


PDF_PATH = next(Path("sections/wi-2141").glob("*.pdf"))
OUTPUT_DIR = Path("sections/wi-2141/images")

# Embedded image order is stable in the supplied PDF and maps to the named steps below.
IMAGE_MANIFEST = {
    (5, 1): "4-1-driver-length.png",
    (6, 1): "4-1-driver-width.png",
    (6, 2): "4-1-driver-thickness.png",
    (7, 1): "4-1-ring-length.png",
    (7, 2): "4-1-ring-width.png",
    (7, 3): "4-1-ring-thickness.png",
    (9, 1): "4-2-micro-usb-port.png",
}


def extract_images():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    document = fitz.open(PDF_PATH)
    for (page_number, image_number), filename in IMAGE_MANIFEST.items():
        page = document[page_number - 1]
        images = page.get_images(full=True)
        if image_number > len(images):
            raise RuntimeError(
                f"Missing image {image_number} on PDF page {page_number}"
            )
        image = document.extract_image(images[image_number - 1][0])
        output_path = OUTPUT_DIR / filename
        output_path.write_bytes(image["image"])
        print(f"Wrote {output_path} ({image['width']}x{image['height']})")


if __name__ == "__main__":
    extract_images()
