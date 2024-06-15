export const SignUpStyles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
  },
  logoHeading: {
    color: "#0000000",
    fontWeight: "bold",
    textDecoration: "none",
  },
  firstContainer: {
    width: "93%",
    paddingTop: "10px",
    height: { xs: "2%", sm: "10%" },
  },
  secondContainer: {
    width: "80%",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: { sm: "space-around" },
    alignItems: "center",

    margin: 0,
  },
  first: {
    display: "flex",
    flexDirection: "column",
    width: { xs: "90%", sm: "50%" },
    height: "80%",

    marginTop: { xs: "50px", sm: "100px" },
  },
  secondHeading: {
    color: "#0000000",
    fontWeight: "bold",

    fontSize: { xs: "22px", sm: "40px" },
    lineHeight: { xs: "opx", sm: "75px" },
    marginTop: { xs: "20px", sm: "0px" },
  },
  secondParagraph: {
    fontSize: { xs: "20px", sm: "28px" },
    fontWeight: "600",
    lineHeight: { xs: "opx", sm: "45px" },
  },
  secondInnerContainer: {
    display: "flex",
    height: "90%",
    width: "100%",
    justifyContent: "space-between",
  },
  innerPara: {
    fontSize: { xs: "14px", sm: "18px" },
    marginTop: { xs: "20px", sm: "30px" },
    width: { xs: "90%", sm: "50%" },
    marginBottom: { xs: "30px" },
  },
  image: {
    height: "90%",
    width: "40%",
    display: { xs: "none", sm: "flex" },
  },
  second: {
    height: "90%",
    display: "flex",
    flexDirection: "column",

    width: { xs: "90%", sm: "40%" },
    padding: 0,
    marginBottom: { xs: 0, sm: 6 },
  },
  span: {
    color: "#4D47C3",
    fontWeight: "bold",
  },
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    width: { xs: "100%", sm: "350px" },

    padding: { xs: "0px", sm: "10px" },
  },
  signHeader: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "20px",
    display: { xs: "none", sm: "flex" },
  },
  inputContent1: {
    backgroundColor: "#F0EFFF",
    height: "50px",
    "&:hover": { border: "1px solid #4D47C3" },
    border: "none",
    outline: "none",
    borderRadius: "8px",
    marginBottom: "20px",
    color: "#4D47C3",
    "::placeholder": {
      color: "#4D47C3",
    },
    paddingLeft: "10px",
    fontSize: "16px",
  },
  inputContent2: {
    backgroundColor: "#F0EFFF",
    width: "70%",
    color: "#4D47C3",
    border: "none",
    outline: "none",
    borderRadius: "8px",
    fontSize: "16px",
    "::placeholder": {
      color: "#4D47C3",
    },
  },

  passwordContainer: {
    backgroundColor: "#F0EFFF",
    height: "50px",
    border: "none",
    outline: "none",
    borderRadius: "8px",

    "&:hover": { border: "1px solid #4D47C3" },
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  forget: {
    color: "#B0B0B0",
    fontSize: "14px",
    textAlign: "right",
    marginBottom: "10px",
  },
  invisible: { height: "22px", width: "22px", color: "#4D47C3" },
  button: {
    backgroundColor: "#4D47C3",
    textTransform: "none",
    height: "50px",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#4D47C3",
    },
    marginBottom: "30px",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  continue: {
    color: "#B5B5B5",
    fontSize: "16px",
    marginBottom: "20px",
  },
  icon: {
    height: "40px",
    width: "40px",
  },
  icons: {
    display: "flex",
    justifyContent: "space-around",
    width: { xs: "70%", sm: "50%" },
  },
};
