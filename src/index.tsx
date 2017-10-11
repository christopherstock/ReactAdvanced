
    import * as React    from 'react';
    import * as ReactDOM from 'react-dom';
    import * as tl       from './tl';

    // specify the application title
    const APPLICATION_TITLE:string = "React Task List";

    // acclaim debug console and set page title
    console.log(     APPLICATION_TITLE );
    document.title = APPLICATION_TITLE;

    // reference the main container
    let mainContainer:HTMLElement = document.getElementById( "mainContainer" );

    // render the App component into the main container
    ReactDOM.render(
        <tl.App
            title={ APPLICATION_TITLE }
        />,
        mainContainer
    );
