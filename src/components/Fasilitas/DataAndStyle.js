import _ from "lodash";

// export const passingData = () => {
export const DataFasilitas = [
  { id: 1, name: "AC", kategori: "Umum" },
  { id: 2, name: "Ruang Latihan", kategori: "Umum" },
  { id: 3, name: "Ruang Medis", kategori: "Umum" },
  { id: 4, name: "Lapangan Latihan", kategori: "Umum" },
  { id: 5, name: "Ruang Ganti", kategori: "Umum" },
  { id: 6, name: "Toilet", kategori: "Umum" },
  { id: 7, name: "Wifi", kategori: "Konektivitas" },
  { id: 8, name: "Minimarket", kategori: "Terdekat" },
  { id: 9, name: "ATM", kategori: "Terdekat" },
];
// let output = _.groupBy(DataFasilitas, "kategori");
// console.log(output);
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
