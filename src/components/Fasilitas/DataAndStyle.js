import _ from "lodash";

// export const passingData = () => {
export const DataFasilitas = [
  { id: 1, name: "AC", kategori: "Umum", icon: "MapsHomeWorkIcon" },
  {
    id: 2,
    name: "Ruang Latihan",
    kategori: "Umum",
    icon: "MapsHomeWorkIcon",
  },
  { id: 3, name: "Ruang Medis", kategori: "Umum", icon: "MapsHomeWorkIcon" },
  {
    id: 4,
    name: "Lapangan Latihan",
    kategori: "Umum",
    icon: "MapsHomeWorkIcon",
  },
  { id: 5, name: "Ruang Ganti", kategori: "Umum", icon: "MapsHomeWorkIcon" },
  { id: 6, name: "Toilet", kategori: "Umum", icon: "MapsHomeWorkIcon" },
  {
    id: 7,
    name: "Wifi",
    kategori: "Konektivitas",
    icon: "CellWifiOutlinedIcon",
  },
  {
    id: 8,
    name: "Minimarket",
    kategori: "Terdekat",
    icon: "StorefrontOutlinedIcon",
  },
  {
    id: 9,
    name: "ATM",
    kategori: "Terdekat",
    icon: "StorefrontOutlinedIcon",
  },
];
let output = _.groupBy(DataFasilitas, "kategori");
console.log(output);
// };

export const checkboxStyle = {
  color: "#7349AC",
  marginLeft: -2,
  "& svg": {
    width: 20,
    height: 20,
    color: "#7349AC",
  },
};
