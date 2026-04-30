import obj01 from "@/assets/obj-01.jpg";
import obj02 from "@/assets/obj-02.jpg";
import obj03 from "@/assets/obj-03.jpg";
import obj04 from "@/assets/obj-04.jpg";
import obj05 from "@/assets/obj-05.jpg";
import obj06 from "@/assets/obj-06.jpg";
import obj07 from "@/assets/obj-07.jpg";
import obj08 from "@/assets/obj-08.jpg";
import obj09 from "@/assets/obj-09.jpg";
import obj10 from "@/assets/obj-10.jpg";
import studioShelf from "@/assets/studio-shelf.jpg";

export type Work = {
  id: string;
  number: string;       // OBJ.I
  title: string;
  subtitle?: string;
  year: string;
  material: string;
  glaze: string;
  firing: string;
  dimensions: string;
  edition: string;
  status: "AVAILABLE" | "ARCHIVED" | "PRIVATE COLLECTION" | "ON VIEW";
  note: string;
  image: string;
  ratio: "tall" | "wide" | "square";
};

export const works: Work[] = [
  {
    id: "obj-01",
    number: "OBJ.I",
    title: "Eruption",
    subtitle: "vessel with white volcanic glaze",
    year: "2025",
    material: "stoneware, iron-rich body",
    glaze: "crawling white over manganese",
    firing: "1240 °C — single oxidation",
    dimensions: "h 32 × ⌀ 18 cm",
    edition: "unique",
    status: "ON VIEW",
    note: "the glaze was over-applied on purpose. it crawled into something between coral and frost. i kept the drips.",
    image: obj01,
    ratio: "tall",
  },
  {
    id: "obj-02",
    number: "OBJ.II",
    title: "Two Stones, Hollowed",
    subtitle: "paired hand-built vessels",
    year: "2024",
    material: "wild red & dark earthenware",
    glaze: "unglazed, burnished",
    firing: "1060 °C — bisque only",
    dimensions: "h 22 / 26 cm",
    edition: "pair, unique",
    status: "AVAILABLE",
    note: "thumbed open from a single mass. the holes were not planned — the wall collapsed and i decided it was a window.",
    image: obj02,
    ratio: "wide",
  },
  {
    id: "obj-03",
    number: "OBJ.III",
    title: "Wave Bowl",
    subtitle: "stacked rim study",
    year: "2025",
    material: "speckled stoneware",
    glaze: "tenmoku breaking over slip",
    firing: "1260 °C — reduction",
    dimensions: "h 14 × ⌀ 17 cm",
    edition: "unique",
    status: "PRIVATE COLLECTION",
    note: "two coiled rims left visible. a small mark of how it was made.",
    image: obj03,
    ratio: "tall",
  },
  {
    id: "obj-04",
    number: "OBJ.IV",
    title: "Folded",
    subtitle: "porcelain sculpture",
    year: "2025",
    material: "porcelain paper-clay",
    glaze: "matte bone, unfired wash",
    firing: "1220 °C — oxidation",
    dimensions: "h 24 × w 22 cm",
    edition: "unique",
    status: "ARCHIVED",
    note: "made the day after a long sleep. wanted something that looked like cloth before it touches the body.",
    image: obj04,
    ratio: "tall",
  },
  {
    id: "obj-05",
    number: "OBJ.V",
    title: "Pot for Nobody",
    subtitle: "small teapot, hand-painted",
    year: "2024",
    material: "white stoneware",
    glaze: "transparent over cobalt dots",
    firing: "1230 °C — oxidation",
    dimensions: "h 9 × w 14 cm",
    edition: "unique",
    status: "AVAILABLE",
    note: "the spout is a little crooked. i don't think i will ever fix that.",
    image: obj05,
    ratio: "square",
  },
  {
    id: "obj-06",
    number: "OBJ.VI",
    title: "Zu Früh, Zu Kalt, Zu Montag",
    subtitle: "small wall-vase with hand-painted scene",
    year: "2025",
    material: "white stoneware",
    glaze: "matte clear over iron-oxide drawing",
    firing: "1220 °C — oxidation",
    dimensions: "h 13 × w 11 cm",
    edition: "unique",
    status: "AVAILABLE",
    note: "drawn on a monday morning. iron oxide straight from the jar. the figure under the blanket is, of course, me.",
    image: obj06,
    ratio: "tall",
  },
  {
    id: "obj-07",
    number: "OBJ.VII",
    title: "Snow Plate",
    subtitle: "footed dish, speckled white over dark body",
    year: "2025",
    material: "dark stoneware",
    glaze: "snow-white slip, broken speckle",
    firing: "1240 °C — oxidation",
    dimensions: "h 6 × ⌀ 17 cm",
    edition: "unique",
    status: "AVAILABLE",
    note: "i wanted something that looked like the floor of the kiln after a long night.",
    image: obj07,
    ratio: "wide",
  },
  {
    id: "obj-08",
    number: "OBJ.VIII",
    title: "Combed Cup",
    subtitle: "small ash-glazed beaker",
    year: "2025",
    material: "iron-rich stoneware",
    glaze: "thin ash, pooling pale grey",
    firing: "1260 °C — reduction",
    dimensions: "h 8 × ⌀ 11 cm",
    edition: "unique",
    status: "ON VIEW",
    note: "combed with a broken comb. the lines are uneven on purpose, and also by accident.",
    image: obj08,
    ratio: "square",
  },
  {
    id: "obj-09",
    number: "OBJ.IX",
    title: "Two White Forms",
    subtitle: "paired sculptural vessels",
    year: "2026",
    material: "porcelain paper-clay",
    glaze: "unglazed, bisque only",
    firing: "1080 °C — bisque",
    dimensions: "h 31 / 14 cm",
    edition: "pair, unique",
    status: "ON VIEW",
    note: "made together, fired together. one stands tall, the other curls around its own opening.",
    image: obj09,
    ratio: "tall",
  },
  {
    id: "obj-10",
    number: "OBJ.X",
    title: "Net Goblet",
    subtitle: "footed cup with white slip-trail",
    year: "2026",
    material: "black stoneware",
    glaze: "white slip-trail, unglazed body",
    firing: "1230 °C — oxidation",
    dimensions: "h 14 × ⌀ 10 cm",
    edition: "unique",
    status: "AVAILABLE",
    note: "drawn loop by loop straight from the slip bottle. half meditation, half mistake.",
    image: obj10,
    ratio: "tall",
  },
];

export const studioImage = studioShelf;