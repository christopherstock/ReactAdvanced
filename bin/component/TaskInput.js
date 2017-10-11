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
*   Represents the input component that lets the user create new tasks.
*   This is an example for a stateful and controlled component.
*
*   @author  Christopher Stock
*   @version 1.0
*******************************************************************************************************************/
var TaskInput = /** @class */ (function (_super) {
    __extends(TaskInput, _super);
    /***************************************************************************************************************
    *   Initializes this component by setting the initial state.
    *
    *   @param {Object} props The initial properties being passed in the component tag.
    ***************************************************************************************************************/
    function TaskInput(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            inputError: false,
            inputText: ""
        };
        return _this;
    }
    /***************************************************************************************************************
    *   Being invoked every time this component renders.
    *
    *   @return JSX.Element The rendered JSX.
    ***************************************************************************************************************/
    TaskInput.prototype.render = function () {
        var _this = this;
        console.log("TaskInput.render() being invoked");
        return React.createElement("form", { onSubmit: function (event) { _this.onFormSubmit(event); } },
            React.createElement("input", { id: "newTask", type: "text", maxLength: 50, className: this.state.inputError ? "input error" : "input", value: this.state.inputText, onChange: function (event) { _this.onInputChange(event); } }),
            React.createElement("br", null),
            React.createElement("input", { id: "submitButton", type: "submit", value: "Create Task", className: "button" }));
    };
    /***************************************************************************************************************
    *   Being invoked when the input field value changes.
    *
    *   @param {Event} event The event when the input field value changes.
    ***************************************************************************************************************/
    TaskInput.prototype.onInputChange = function (event) {
        console.log("TaskInput.onInputChange being invoked");
        this.setState({
            inputError: false,
            inputText: event.target.value
        });
    };
    /***************************************************************************************************************
    *   Being invoked when the form is submitted.
    *
    *   @param {Event} event The form submission event.
    ***************************************************************************************************************/
    TaskInput.prototype.onFormSubmit = function (event) {
        console.log("TaskInput.onFormSubmit being invoked");
        // suppress page reload
        event.preventDefault();
        // trim entered text
        var enteredText = this.state.inputText.trim();
        // check entered text
        console.log("Trimmed text in the box is [" + enteredText + "]");
        if (enteredText.length === 0) {
            console.log("Empty text input detected.");
            // set error state
            this.setState({
                inputError: true,
                inputText: ""
            });
        }
        else {
            // clear error state
            this.setState({
                inputError: false,
                inputText: ""
            });
            // invoke parent listener
            this.props.onTaskCreate(enteredText);
        }
    };
    ;
    return TaskInput;
}(React.Component));
exports.TaskInput = TaskInput;
//# sourceMappingURL=TaskInput.js.map