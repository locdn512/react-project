import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TodoList extends PureComponent {
    handleTodoClick = (todo) => {
        const { onActiveItemChange } = this.props;
        if (onActiveItemChange) {
            onActiveItemChange(todo);
        }
    };

    render() {
        const { todoList, activeTodoId } = this.props;
        return (
            <div>
                TodoList: {todoList.length}
                <ul>
                    {
                        todoList.map(
                            todo => {
                                const isActive = todo.id === activeTodoId;
                                return (
                                    <li
                                        key={todo.id}
                                        className={isActive ? 'active' : ''}
                                        style={{ color: isActive ? 'deeppink' : 'black' }}
                                        onClick={() => this.handleTodoClick(todo)}
                                    >
                                        {todo.id}. {todo.title}
                                    </li>
                                );
                            }
                        )
                    }
                </ul>
            </div>
        );

    }
}

TodoList.propTypes = {
    todoList: PropTypes.array,
    activeTodoId: PropTypes.number,
    onActiveItemChange: PropTypes.func,
};
TodoList.defaultProps ={
    todoList: [],
    activeTodoId: -1,
    onActiveItemChange: null,
};

export default TodoList;