"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
/*******************************************************************************************************************
*   The entire application component.
*   This is an example for a stateful component.
*
*   TODO styles https://medium.com/@aghh1504/4-four-ways-to-style-react-components-ac6f323da822
*
*   @author  Christopher Stock
*   @version 1.0
*******************************************************************************************************************/
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    /***************************************************************************************************************
    *   Initializes this component by setting the initial state.
    *
    *   @param {Object} props The initial properties being passed in the component tag.
    ***************************************************************************************************************/
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            taskList: []
        };
        return _this;
    }
    /***************************************************************************************************************
    *   Being invoked every time this component renders.
    *
    *   @return JSX.Element The rendered JSX.
    ***************************************************************************************************************/
    App.prototype.render = function () {
        var _this = this;
        console.log("App.render() being invoked");
        return React.createElement("div", null,
            React.createElement("h1", { id: "appTitle" }, this.props.title),
            React.createElement(TaskInput, { onTaskCreate: function (newTask) { return _this.createTask(newTask); } }),
            React.createElement(TaskList, { taskList: this.state.taskList, onTaskDelete: function (taskIndex) { return _this.deleteTask(taskIndex); }, onTaskMoveUp: function (taskIndex) { return _this.moveTaskUp(taskIndex); }, onTaskMoveDown: function (taskIndex) { return _this.moveTaskDown(taskIndex); } }));
    };
    /***************************************************************************************************************
    *   Creates a new task in the TaskList component.
    *
    *   @param {string} taskName The name of the task to create.
    ***************************************************************************************************************/
    App.prototype.createTask = function (taskName) {
        console.log("App.createTask( " + taskName + " ) being invoked");
        // copy original array
        var newTaskList = this.state.taskList.slice();
        newTaskList.push(taskName);
        // set new state forcing the component to re-render
        this.setState({
            taskList: newTaskList
        });
    };
    /***************************************************************************************************************
    *   Deletes the task with the specified index.
    *
    *   @param {number} taskIndex The index of the task to delete.
    ***************************************************************************************************************/
    App.prototype.deleteTask = function (taskIndex) {
        console.log("App.deleteTask( " + taskIndex + " ) being invoked");
        // copy original array
        var newTaskList = this.state.taskList.slice();
        newTaskList.splice(taskIndex, 1);
        // set new state forcing the component to re-render
        this.setState({
            taskList: newTaskList
        });
    };
    /***************************************************************************************************************
    *   Moves the task with the specified index up.
    *
    *   @param {number} taskIndex The index of the task to move up.
    ***************************************************************************************************************/
    App.prototype.moveTaskUp = function (taskIndex) {
        console.log("App.moveTaskUp( " + taskIndex + " ) being invoked");
        if (taskIndex > 0) {
            // copy original array
            var newTaskList = this.state.taskList.slice();
            var taskToMoveUp = newTaskList[taskIndex];
            var taskToMoveDown = newTaskList[taskIndex - 1];
            newTaskList[taskIndex - 1] = taskToMoveUp;
            newTaskList[taskIndex] = taskToMoveDown;
            // set new state forcing the component to re-render
            this.setState({
                taskList: newTaskList
            });
        }
    };
    /***************************************************************************************************************
    *   Moves the task with the specified index down.
    *
    *   @param {number} taskIndex The index of the task to move down.
    ***************************************************************************************************************/
    App.prototype.moveTaskDown = function (taskIndex) {
        console.log("App.moveTaskDown( " + taskIndex + " ) being invoked");
        if (taskIndex < this.state.taskList.length - 1) {
            // copy original array
            var newTaskList = this.state.taskList.slice();
            var taskToMoveDown = newTaskList[taskIndex];
            var taskToMoveUp = newTaskList[taskIndex + 1];
            newTaskList[taskIndex + 1] = taskToMoveDown;
            newTaskList[taskIndex] = taskToMoveUp;
            // set new state forcing the component to re-render
            this.setState({
                taskList: newTaskList
            });
        }
    };
    /***************************************************************************************************************
    *   Being invoked before this component has been mounted.
    ***************************************************************************************************************/
    App.prototype.componentWillMount = function () {
        console.log("App.componentWillMount() being invoked");
    };
    /***************************************************************************************************************
    *   Being invoked after this component has been mounted.
    ***************************************************************************************************************/
    App.prototype.componentDidMount = function () {
        console.log("App.componentDidMount() being invoked");
    };
    /***************************************************************************************************************
    *   Being invoked before this component has been unmounted.
    *
    *   @param {Object} nextProps   The props to set on updating.
    *   @param {Object} nextState   The state to set on updating.
    *   @param {Object} nextContext The context to set on updating.
    ***************************************************************************************************************/
    App.prototype.componentWillUpdate = function (nextProps, nextState, nextContext) {
        console.log("App.componentWillUpdate() being invoked");
    };
    /***************************************************************************************************************
    *   Being invoked before this component receives props.
    *
    *   @param {Object} nextProps   The props to set on updating.
    *   @param {Object} nextContext The context to set on updating.
    ***************************************************************************************************************/
    App.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        console.log("App.componentWillReceiveProps() being invoked");
    };
    /***************************************************************************************************************
    *   Being invoked after this component has been updated.
    ***************************************************************************************************************/
    App.prototype.componentDidUpdate = function () {
        console.log("App.componentDidUpdate() being invoked");
    };
    /***************************************************************************************************************
    *   Being invoked before this component has been unmounted.
    ***************************************************************************************************************/
    App.prototype.componentWillUnmount = function () {
        console.log("App.componentWillUnmount() being invoked");
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=App.js.map