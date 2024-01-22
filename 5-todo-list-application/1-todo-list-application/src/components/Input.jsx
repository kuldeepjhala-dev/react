import styles from "../modules/input.module.css";
function Input() {
  function addTask() { }

  return (
    <>
      <div className={styles.parentForm}>
        <div className={styles.childForm}>
          <form onSubmit={addTask} autofocus className={styles.parentForm}>
            <input type="text" className={styles.formInput} />
            <button type="submit" className={styles.formButton}>
              Add
            </button>
          </form>
        </div>
      </div>
      <div className={styles.taskParent}></div>
    </>
  );
}

export default Input;
