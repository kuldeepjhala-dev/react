import styles from "../modules/input.module.css";
function Input() {
  function addTask() {}

  return (
    <div className={styles.parentForm}>
      <div className={styles.childForm}>
        <form onSubmit={addTask} autofocus>
          <input type="text" className={styles.formInput} />
          <button type="submit" className={styles.formButton}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Input;
