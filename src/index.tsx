
    import * as React    from 'react';
    import * as ReactDOM from 'react-dom';
    import * as tl       from './tl';

    /*******************************************************************************************************************
    *   Being invoked when all components of the HTML page are fully loaded.
    *******************************************************************************************************************/
    window.onload = function()
    {
        // specify the application title
        let APPLICATION_TITLE:string = "React Task List";

        // acclaim debug console and set page title
        console.log(     APPLICATION_TITLE );
        document.title = APPLICATION_TITLE;

        // render the App component into the main container
        ReactDOM.render(
            <tl.App
                title={ APPLICATION_TITLE }
            />,
            document.getElementById('mainContainer')
        );
    };

    /*******************************************************************************************************************
    *   Being invoked when all components of the HTML page are fully unloaded.
    *******************************************************************************************************************/
    window.onunload = function()
    {
    };
