from pathlib import Path

from PIL import Image


SOURCE_PATH = next(Path("sections/wi-2185").glob("*.png"))
OUTPUT_DIR = Path("sections/wi-2185/images")

IMAGE_MANIFEST = {
    "4-1-dimensions.png": (770, 2820, 1030, 3055),
    "4-2-connector-fit.png": (815, 3360, 1030, 3545),
    "4-3-connector-location.png": (775, 3960, 990, 4190),
    "4-3-multimeter-setting.png": (785, 4242, 980, 4445),
    "4-3-probe-placement.png": (675, 4615, 1075, 4805),
    "4-3-voltage-result.png": (785, 4940, 980, 5150),
}


def extract_images():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    source = Image.open(SOURCE_PATH)
    for filename, bounds in IMAGE_MANIFEST.items():
        source.crop(bounds).save(OUTPUT_DIR / filename)
        print(f"Wrote {OUTPUT_DIR / filename}")


if __name__ == "__main__":
    extract_images()
