
    import * as React    from 'react';
    import * as tl       from '../tl';

    /*******************************************************************************************************************
    *   The entire application component.
    *   This is an example for a stateful component.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class App extends React.Component<tl.AppProps, tl.AppState>
    {
        /***************************************************************************************************************
        *   Initializes this component by setting the initial state.
        *
        *   @param props The initial properties being passed in the component tag.
        ***************************************************************************************************************/
        constructor( props:tl.AppProps )
        {
            super( props );

            this.state = {
                taskList: [
/*
                    "Example Task 1",
                    "Example Task 2",
                    "Example Task 3",
                    "Example Task 4",
*/
                ],
            }
        }

        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        render() : JSX.Element
        {
            console.log( "App.render() being invoked" );

            return <div>

                { /* title */ }
                <h1 id="appTitle">{ this.props.title }</h1>

                { /* task input form */ }
                <tl.TaskInput
                    onTaskCreate={ ( newTask:string ) => this.createTask( newTask ) }
                />

                { /* task list */ }
                <tl.TaskList
                    taskList={ this.state.taskList }
                    onTaskDelete={   ( taskIndex:number ) => this.deleteTask(   taskIndex ) }
                    onTaskMoveUp={   ( taskIndex:number ) => this.moveTaskUp(   taskIndex ) }
                    onTaskMoveDown={ ( taskIndex:number ) => this.moveTaskDown( taskIndex ) }
                />

            </div>;
        }

        /***************************************************************************************************************
        *   Creates a new task in the TaskList component.
        *
        *   @param taskName The name of the task to create.
        ***************************************************************************************************************/
        createTask( taskName:string ) : void
        {
            console.log( "App.createTask( " + taskName + " ) being invoked" );

            // copy original array
            let newTaskList = this.state.taskList.slice();
            newTaskList.push( taskName );

            // set new state forcing the component to re-render
            this.setState(
                {
                    taskList: newTaskList,
                }
            )
        }

        /***************************************************************************************************************
        *   Deletes the task with the specified index.
        *
        *   @param taskIndex The index of the task to delete.
        ***************************************************************************************************************/
        deleteTask( taskIndex:number ) : void
        {
            console.log( "App.deleteTask( " + taskIndex + " ) being invoked" );

            // copy original array
            let newTaskList = this.state.taskList.slice();
            newTaskList.splice( taskIndex, 1 );

            // set new state forcing the component to re-render
            this.setState(
                {
                    taskList: newTaskList,
                }
            )
        }

        /***************************************************************************************************************
        *   Moves the task with the specified index up.
        *
        *   @param taskIndex The index of the task to move up.
        ***************************************************************************************************************/
        moveTaskUp( taskIndex:number ) : void
        {
            console.log( "App.moveTaskUp( " + taskIndex + " ) being invoked" );

            if ( taskIndex > 0 )
            {
                // copy original array
                let newTaskList = this.state.taskList.slice();

                let taskToMoveUp   = newTaskList[ taskIndex     ];
                let taskToMoveDown = newTaskList[ taskIndex - 1 ];

                newTaskList[ taskIndex - 1 ] = taskToMoveUp;
                newTaskList[ taskIndex     ] = taskToMoveDown;

                // set new state forcing the component to re-render
                this.setState(
                    {
                        taskList: newTaskList,
                    }
                )
            }
        }

        /***************************************************************************************************************
        *   Moves the task with the specified index down.
        *
        *   @param taskIndex The index of the task to move down.
        ***************************************************************************************************************/
        moveTaskDown( taskIndex:number ) : void
        {
            console.log( "App.moveTaskDown( " + taskIndex + " ) being invoked" );

            if ( taskIndex < this.state.taskList.length - 1 )
            {
                // copy original array
                let newTaskList = this.state.taskList.slice();

                let taskToMoveDown = newTaskList[ taskIndex     ];
                let taskToMoveUp   = newTaskList[ taskIndex + 1 ];

                newTaskList[ taskIndex + 1  ] = taskToMoveDown;
                newTaskList[ taskIndex      ] = taskToMoveUp;

                // set new state forcing the component to re-render
                this.setState(
                    {
                        taskList: newTaskList,
                    }
                )
            }
        }

        /***************************************************************************************************************
        *   Being invoked before this component has been mounted.
        ***************************************************************************************************************/
        componentWillMount() : void
        {
            console.log( "App.componentWillMount() being invoked" );
        }

        /***************************************************************************************************************
        *   Being invoked after this component has been mounted.
        ***************************************************************************************************************/
        componentDidMount() : void
        {
            console.log( "App.componentDidMount() being invoked" );
        }

        /***************************************************************************************************************
        *   Being invoked before this component has been updated.
        *
        *   @param {Object} nextProps   The props to set on updating.
        *   @param {Object} nextState   The state to set on updating.
        *   @param {Object} nextContext The context to set on updating.
        ***************************************************************************************************************/
        componentWillUpdate( nextProps:tl.AppProps, nextState:tl.AppState, nextContext:tl.AppState ) : void
        {
            console.log( "App.componentWillUpdate() being invoked" );
        }

        /***************************************************************************************************************
        *   Being invoked before this component receives props.
        *
        *   @param {Object} nextProps   The props to set on updating.
        *   @param {Object} nextContext The context to set on updating.
        ***************************************************************************************************************/
        componentWillReceiveProps( nextProps:tl.AppProps, nextContext:any ) : void
        {
            console.log( "App.componentWillReceiveProps() being invoked" );
        }

        /***************************************************************************************************************
        *   Being invoked after this component has been updated.
        ***************************************************************************************************************/
        componentDidUpdate() : void
        {
            console.log( "App.componentDidUpdate() being invoked" );
        }

        /***************************************************************************************************************
        *   Being invoked before this component has been unmounted.
        ***************************************************************************************************************/
        componentWillUnmount() : void
        {
            console.log( "App.componentWillUnmount() being invoked" );
        }
    }
