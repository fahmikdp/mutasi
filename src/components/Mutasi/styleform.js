export const textfield = {
  width: "100%",
  mb: 1,
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "grey",
    borderRadius: 3,
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#7349AC",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#7349AC",
  },
};

export const calendar = {
  width: "100%",
  "& .MuiInputBase-root": {
    fontSize: 12,
    height: 40.5,
  },
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    border: "1.5px solid",
    // borderColor: "grey",
    borderRadius: 2,
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "grey",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "1.5px solid #7349AC",
  },
  "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: "grey",
  },
};

export const datePicker = {
  "& .MuiInputBase-root": {
    height: 9,
  },
};
