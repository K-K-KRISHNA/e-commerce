export const EachCardStyles = {
  mainContainer: {
    width: "93vw",
    minHeight: "93vh",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    px: { xl: 15, sm: 0 },
    overflow: "hidden",
    backgroundColor: "#f1f3f6",
  },
  activeBorder: {
    border: "solid 2px blue",
  },
  innerCard: {
    height: "fit",
    display: "flex",
    flexDirection: "column",
    alignItems: { xs: "center", md: "flex-start" },
    width: { xs: "90%", md: "300px", xl: "550px" },
    p: { xs: 1, md: 5 },
    order: { xs: 1, md: 2 },
  },
  smallStack: {
    display: { xs: "none", md: "flex" },
    height: { md: "500px", xs: "fit" },
    flexDirection: { sm: "row", md: "column" },
    order: { xs: 2, md: 1 },
    justifyContent: "space-around",
  },
  favIcon: {
    position: "absolute",
    display: "flex",
    flexDirection: "center",
    alignItems: "center",
    top: "40px",
    right: "5px",
    backgroundColor: "white",
    color: "gray",
    borderRadius: "50%",
    boxShadow: "0px 0px 5px 3px rgba(0,0,0,0.25)",
  },
  descriptionCard: {
    width: "40vw",
    display: "flex",
    flexDirection: "column",
  },
  picSize: {
    width: { xs: "150px", xl: "375px", md: "250px" },
    minHeight: { xs: "250px", md: "450px" },
    maxHeight: "500px",
    m: "30px",
    p: { xs: "5px", sm: "15px" },
  },
  smallImage: {
    width: "75px",
    height: "75px",
    cursor: "pointer",
    border: "solid 2px white",
    "&:hover": {
      border: "solid 2px blue",
    },
  },
};
