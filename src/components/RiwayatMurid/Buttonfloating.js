export const SaveButton = {
  transition: " 1ms smooth",
  marginTop: 0,
  marginBottom: 1.5,
  boxShadow: "none",
  textTransform: "none",
  fontSize: 15,
  fontWeight: 200,
  letterSpacing: "1px",
  width: "95%",
  padding: "8px 70px",
  lineHeight: 1.5,
  backgroundColor: "#F78104",
  fontFamily: [
    "Roboto",
    "poppins",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
  ].join(","),
  "&:hover": {
    backgroundColor: "#F78104",
    padding: "9px 71px",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#F78104",
    borderColor: "#F78104",
  },
  "&:focus": {
    boxShadow: "#F78104",
  },
};
