import React from "react";

const Header = (props) => {
    const { text } = props;
    const headerStyle = {
        fontSize: '32px',
        textAlign: 'center',
    }

    return (
        <h1 className="text-3xl font-bold underline">
            {text}
        </h1>
    );
}

export default Header;