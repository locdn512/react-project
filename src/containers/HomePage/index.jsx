import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';
import Countdown from '../../components/Countdown';

class HomePage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeTodoId: 1,
            todoList: [
                { id: 1, title: 'Khai báo prop bằng contructor -> super props' },
                { id: 2, title: 'Khai báo this.state = {id: 1,array: []}' },
            ],
        };
    }
    handleTodoClick = (todo) => {
        this.setState({ activeTodoId: todo.id });
    };
    handleTodoFormSubmit = (formValues) => {
        console.log('FormSubmit: ', formValues);
        this.setState(
            prevState => {
                const newTodoList = [...prevState.todoList]
                const newTodo = {
                    id: newTodoList.length + 1,
                    title: formValues.value,
                };
                newTodoList.push(newTodo);

                return{
                    todoList: newTodoList,
                };
            }
        )
        
    };
    render() {
        const { todoList, activeTodoId } = this.state;
        return (
            <div className="super_container">
                <TodoList
                    todoList={todoList}
                    activeTodoId={activeTodoId}
                    onActiveItemChange={this.handleTodoClick}
                />

                <TodoForm onSubmit={this.handleTodoFormSubmit} />

                <Countdown seconds={30} />
            </div>
        );
    }
}

HomePage.propTypes = {
};

export default HomePage;