import React from "react";

const Header = (props) => {
    const { text } = props;
    const headerStyle = {
        fontSize: '32px',
        textAlign: 'center',
    }

    return (
        <h1 style={headerStyle}>
            {text}
        </h1>
    );
}

export default Header;