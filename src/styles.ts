export const allProductStyles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    width: { xs: "99%", md: "99.4%" },
  },
  productsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  noResultPicSize: { width: "300px", height: "200px" },
  noResultsText: { color: "gray", fontSize: "20px" },
};

export const cartPageStyles = {
  mainContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    margin:'10px'    
  },
  detailsContainer:{
    width:'40%',
    display:'flex',
    flexDirection:'column',
    padding:'10px',
    height:'fit-content'
  },
  productsContainer:{
    width:'60%',
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap'
  }

}