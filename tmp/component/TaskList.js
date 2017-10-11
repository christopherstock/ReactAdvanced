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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/*******************************************************************************************************************
*   Represents the TaskList component.
*   This is an example for a stateless component.
*
*   @author  Christopher Stock
*   @version 1.0
*******************************************************************************************************************/
var TaskList = /** @class */ (function (_super) {
    __extends(TaskList, _super);
    function TaskList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /***************************************************************************************************************
    *   Being invoked every time this component renders.
    *
    *   @return {JSXTransformer} The rendered JSX.
    ***************************************************************************************************************/
    TaskList.prototype.render = function () {
        console.log("TaskList.render() being invoked");
        // animate main container height later
        document.getElementById("mainContainer").style.height = (150 + (this.props.taskList.length * 55)) + "px";
        return <ul id="taskList">

                {this.createTaskListItems()}

            </ul>;
    };
    /***************************************************************************************************************
    *   Creates and returns all items of the task list.
    *
    *   @return {JSXTransformer[]} The rendered JSX elements.
    ***************************************************************************************************************/
    TaskList.prototype.createTaskListItems = function () {
        var _this = this;
        var items = [];
        var _loop_1 = function (index) {
            items.push(<li key={index}>

                        <div>

                            
                            {this_1.props.taskList[index]}

                            
                            <button onClick={function () { _this.props.onTaskDelete(index); }} className="button">
                                &#10006;
                            </button>

                            
                            <button onClick={function () { _this.props.onTaskMoveDown(index); }} disabled={index === this_1.props.taskList.length - 1} className="button">
                                &#9660;
                            </button>

                            
                            <button onClick={function () { _this.props.onTaskMoveUp(index); }} disabled={index === 0} className="button">
                                &#9650;
                            </button>

                        </div>

                    </li>);
        };
        var this_1 = this;
        // browse all task list items
        for (var index = 0; index < this.props.taskList.length; ++index) {
            _loop_1(index);
        }
        return items;
    };
    return TaskList;
}(React.Component));
exports.TaskList = TaskList;
//# sourceMappingURL=TaskList.js.map