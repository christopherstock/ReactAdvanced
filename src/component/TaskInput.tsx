
    import * as React    from 'react';
    import * as tl       from '../tl';

    /*******************************************************************************************************************
    *   Represents the input component that lets the user create new tasks.
    *   This is an example for a stateful and controlled component.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class TaskInput extends React.Component<tl.TaskInputProps, tl.TaskInputState>
    {
        /***************************************************************************************************************
        *   Initializes this component by setting the initial state.
        *
        *   @param props The initial properties being passed in the component tag.
        ***************************************************************************************************************/
        constructor( props:tl.TaskInputProps )
        {
            super( props );

            this.state = {
                inputError: false,
                inputText:  "",
            }
        }

        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        render() : JSX.Element
        {
            console.log( "TaskInput.render() being invoked" );

            return <form onSubmit={ ( event:React.FormEvent<any> ) => { this.onFormSubmit( event ); } }>

                { /* new task input */ }
                <input
                    id="newTask"
                    type="text"
                    maxLength={ 50 }
                    className={ this.state.inputError ? "input error" : "input" }
                    value={     this.state.inputText }
                    onChange={  ( event ) => { this.onInputChange( event ); } }
                />

                <br />

                { /* new task button */ }
                <input
                    id="submitButton"
                    type="submit"
                    value="Create Task"
                    className="button"
                />

            </form>;
        }

        /***************************************************************************************************************
        *   Being invoked when the input field value changes.
        *
        *   @param event The event when the input field value changes.
        ***************************************************************************************************************/
        onInputChange( event:React.ChangeEvent<any> ) : void
        {
            console.log( "TaskInput.onInputChange being invoked" );

            this.setState(
                {
                    inputError: false,
                    inputText:  event.target.value,
                }
            );
        }

        /***************************************************************************************************************
        *   Being invoked when the form is submitted.
        *
        *   @param event The form submission event.
        ***************************************************************************************************************/
        onFormSubmit( event:React.FormEvent<any> ) : void
        {
            console.log( "TaskInput.onFormSubmit being invoked" );

            // suppress page reload
            event.preventDefault();

            // trim entered text
            let enteredText = this.state.inputText.trim();

            // check entered text
            console.log( "Trimmed text in the box is [" + enteredText + "]" );
            if ( enteredText.length === 0 )
            {
                console.log( "Empty text input detected." );

                // set error state
                this.setState(
                    {
                        inputError: true,
                        inputText:  "",
                    }
                );
            }
            else
            {
                // clear error state
                this.setState(
                    {
                        inputError: false,
                        inputText:  "",
                    }
                );

                // invoke parent listener
                this.props.onTaskCreate( enteredText );
            }
        };
    }
