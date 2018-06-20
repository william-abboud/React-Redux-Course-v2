import React from 'react';

function Sidebar({ theme }) {
    return (
        <aside className={theme}>
            <p>Foo</p>
        </aside>
    );
}

function Content(props) {
    const { title, isLoggedIn, theme } = props;
    const className = `container ${theme}`;
    if (!isLoggedIn) return null;

    return (
        <div className={className}>
            <h1>{title}</h1>
            {
                Array.isArray(props.children) 
                    ? <div>{props.children}</div>
                    : <span>{props.children}</span>
            }
            <Sidebar theme={theme} />
        </div>
    );
}

export default Content;