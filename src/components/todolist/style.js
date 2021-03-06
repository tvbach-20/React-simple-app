import { createStyles, makeStyles } from "@material-ui/styles";

const styles = makeStyles(() =>
  createStyles({
    todoApp: {
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: "-50px",
      marginLeft: "-50px",
    },
    title: {
      position: "absolute",
      top: "-155px",
      width: "100%",
      fontSize: "100px",
      fontWeight: "100",
      color: "rgba(175, 47, 47, 0.15)",
    },
    groupForm: {
      marginTop: "20px",
    },
    listTodos: {
      margin: "30px",
    },
    todos: {
      padding: "10px",
      listStyle: "none",
    },
    checked: {
      textDecorationStyle: "line-through",
    }
  })
)

export default styles;
