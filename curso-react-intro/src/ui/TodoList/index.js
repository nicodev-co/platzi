import './TodoList.css';

function TodoList(props) {
  const renderFunc = props.children || props.render;
  return (
    <section>
      {props.loading && props.onLoading()}
      {props.error && props.onError()}
      {!props.loading && !props.totalTodos && props.onEmptyTodos()}

      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchText)}
      {!props.loading && props.searchedTodos.map(renderFunc)}
    </section>
  );
}

export { TodoList };
