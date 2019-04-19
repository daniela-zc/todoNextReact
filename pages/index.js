import Head from "../components/head";
import Todo from "../components/Todo";
import css from "../static/css/index.css";

export default () => {
  return (
    <div>
      <Head
        title="Nicho | ToDo App"
        description="nicho by SIU toDo app to learn react js"/>
      <div className={css.container}>
        <h1 className={css.title}>Next/React JS ToDo App by Nicho|SIU</h1>
        <Todo />
      </div>
    </div>
  );
};
