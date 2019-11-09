import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, Todo, removeTodo } from '../actions';
import { storeState } from '../reducers/index';

interface AppProps {
  todos: Todo[];
  // fetchTodos(): any;
  // removeTodo(id: number): any;
  // fetchTodos: typeof fetchTodos; //gives type error, saying Promise etc..
  fetchTodos: Function;
  removeTodo: typeof removeTodo;
}

interface AppState {
  loading: boolean;
}


// class App extends Component<AppProps> {
// state: AppState = {
//   loading: false,

// }
class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      loading: false
    }
  } //better way

  componentDidUpdate(prevProps: AppProps, prevState: AppState) {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ loading: false })
    }
  }

  onButtonClick = (): void => {
    this.props.fetchTodos()
    this.setState({ loading: true })
  }

  renderList(): JSX.Element[] {
    console.log(this.state)
    return this.props.todos.map((todo: Todo) => (
      <div key={todo.id}>
        <div>
          {todo.title}
        </div>
        <button onClick={() => this.props.removeTodo(todo.id)}>Delete</button>
      </div>
    ))
  }
  render() {

    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.loading ? <div>Loading....</div> : null}
        {(this.props.todos && this.renderList())}
      </div>
    );
  }
}

const mapState = (state: storeState): { todos: Todo[] } => ({
  todos: state.todos
})

export default connect(mapState, { fetchTodos, removeTodo })(App);