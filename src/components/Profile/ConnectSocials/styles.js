import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    borderRadius: 15,
    boxShadow: "none",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    "@media (max-width: 1050px)": {
      width: "80%",
    },
    "@media (max-width: 650px)": {
      width: "100%",
    },
  },
  content: {
    paddingBottom: "15px !important",
    paddingTop: 15,
    "@media (max-width: 600px)": {
      padding: "15px 5px",
    },
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 245,
  },
  button: {
    height: 26,
    "&:hover": {
      transform: "scale(1.2)",
    },
    marginLeft: -16,
    marginRight: 20,
    "@media (max-width: 500px)": {
      marginRight: 9,
      marginLeft: -14,
      height: 20,
    },
  },
  fb: {
    fontSize: 31,
    color: "#1877F2",
    marginRight: 19,
    "@media (max-width: 500px)": {
      marginRight: 7,
      fontSize: 24,
    },
  },
  tw: {
    color: "#03A9F4",
    fontSize: 30,
    marginLeft: -3,
    marginRight: 18,
    "@media (max-width: 500px)": {
      marginRight: 6,
      fontSize: 23,
    },
  },
  git: {
    fontSize: 26,
    marginRight: 19,
    "@media (max-width: 500px)": {
      marginRight: 7,
      fontSize: 19,
    },
  },
  text: {
    fontFamily: "Poppins",
    color: "#000",
    "@media (max-width: 500px)": {
      fontSize: 12,
    },
  },
}));

export default useStyles;
