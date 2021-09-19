import React, {Component} from 'react'
import PropTypes from "prop-types"

import Task from './Task'

// Componente tareas para listar tareas
 class Tasks extends Component {
     render() {
        return this.props.tasks.map(task => 
        <Task
            task={task}
            key={task.id}
            deleteTask={this.props.deleteTask}
            checkDone={this.props.checkDone}
        />)
     }
 }

 Task.PropTypes = {
    tasks: PropTypes.array.isRequired
 }

 export default Tasks