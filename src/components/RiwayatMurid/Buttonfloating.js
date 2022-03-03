export const SaveButton = {
  transition: " 1ms smooth",
  marginTop: 0,
  marginBottom: 1.5,
  boxShadow: "none",
  textTransform: "none",
  fontSize: 15,
  letterSpacing: "1px",
  width: "95%",
  padding: "8px 70px",
  lineHeight: 1.5,
  backgroundColor: "#249EA0",
  fontFamily: [
    "Roboto",
    "poppins",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
  ].join(","),
  "&:hover": {
    backgroundColor: "#25B8BB",
    padding: "9px 71px",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#249EA0",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
};
