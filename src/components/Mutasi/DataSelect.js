const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 2.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const provinsi = [
  { id: 1, name: "Jawa Barat" },
  { id: 2, name: "Jawa Tengah" },
  { id: 3, name: "Jawa Timur" },
  { id: 4, name: "Bali" },
  { id: 5, name: "DKI Jakarta" },
];

export const cabang = [
  { id: 1, name: "Bekasi", idprovinsi: "Jawa Barat" },
  { id: 2, name: "Depok", idprovinsi: "DKI Jakarta" },
  { id: 3, name: "Klender", idprovinsi: "DKI Jakarta" },
  { id: 4, name: "Denpasar", idprovinsi: "Bali" },
  { id: 5, name: "Semarang", idprovinsi: "Jawa Tengah" },
  { id: 6, name: "Kebumen", idprovinsi: "Jawa Tengah" },
  { id: 7, name: "Bandung", idprovinsi: "Jawa Barat" },
];

export const dojo = [
  { id: 1, name: "Terakoya Dojo", idcabang: "Bandung" },
  { id: 2, name: "Intelektika Dojo", idcabang: "Klender" },
  { id: 3, name: "Inkanas Dojo", idcabang: "Bekasi" },
  { id: 4, name: "Aikido Dojo", idcabang: "Denpasar" },
  { id: 5, name: "Amura Dojo", idcabang: "Bekasi" },
  { id: 6, name: "A Dojo", idcabang: "Kebumen" },
  { id: 7, name: "B Dojo", idcabang: "Semarang" },
  { id: 8, name: "C Dojo", idcabang: "Bandung" },
];

// export const pilih = {
//   provinsi: [
//     "DKI Jakarta",
//     "Jawa Barat",
//     "Jawa Tengah",
//     "Jawa Timur",
//     "Bali",
//     "Bekasi",
//   ],
//   cabang: ["Bekasi", "Klender", "Depok", "Jogja", "Bali"],
// };
