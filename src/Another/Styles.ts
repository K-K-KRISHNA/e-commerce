export const styles = {
  mainContainer: {
    width: "70vw",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "100px",
    left: { md: "200px", xs: "50px" },
  },
  innerContainer: {
    width: "260px",
    height: "300px",
    overflow: "hidden",
  },
  picHolder: {
    transition: "2s",
    display: "flex",
    alignItems: "center",
    width: "260px",
    height: "300px",
  },
  dummypicHolder: {
    transition: "2s",
    display: "flex",
    alignItems: "center",
    width: "200px",
    height: "200px",
    opacity: "1",
  },
  dummy: {
    width: "200px",
    height: "200px",
    overflow: "hidden",
    opacity: "0.3",
  },
};
