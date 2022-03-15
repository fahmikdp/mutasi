import _ from "lodash";

export const Umum = [
  " AC ",
  " Ruang Latihan ",
  " Ruang Medis ",
  " Lapangan Latihan ",
  " Ruang Ganti ",
  " Toilet ",
];

export const Konek = [" Wifi"];
export const Terdekat = [" ATM ", " Minimarket "];

// export const passingData = () => {
export const DataFasilitas = [
  { name: "AC", kategori: "Umum" },
  { name: "Ruang Latihan", kategori: "Umum" },
  { name: "Ruang Medis", kategori: "Umum" },
  { name: "Lapangan Latihan", kategori: "Umum" },
  { name: "Ruang Ganti", kategori: "Umum" },
  { name: "Toilet", kategori: "Umum" },
  { name: "Wifi", kategori: "Konek" },
  { name: "Minimarket", kategori: "Terdekat" },
  { name: "ATM", kategori: "Terdekat" },
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
