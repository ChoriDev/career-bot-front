import Login from "../components/Login";
import styles from "../css/Enter.module.css";

function Enter() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <Login />
        </div>
      </div>
    </>
  );
}

export default Enter;
