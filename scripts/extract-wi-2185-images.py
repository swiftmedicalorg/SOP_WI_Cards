from pathlib import Path

from PIL import Image


SOURCE_PATH = next(Path("sections/wi-2185").glob("*.png"))
OUTPUT_DIR = Path("sections/wi-2185/images")

IMAGE_MANIFEST = {
    "4-1-dimensions.png": (750, 2820, 1100, 3220),
    "4-2-connector-fit.png": (760, 3500, 1100, 3900),
    "4-3-connector-location.png": (760, 3970, 1100, 4300),
    "4-3-multimeter-setting.png": (760, 4280, 1100, 4680),
    "4-3-probe-placement.png": (730, 4630, 1100, 5010),
    "4-3-voltage-result.png": (760, 4960, 1100, 5350),
}


def extract_images():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    source = Image.open(SOURCE_PATH)
    for filename, bounds in IMAGE_MANIFEST.items():
        source.crop(bounds).save(OUTPUT_DIR / filename)
        print(f"Wrote {OUTPUT_DIR / filename}")


if __name__ == "__main__":
    extract_images()
