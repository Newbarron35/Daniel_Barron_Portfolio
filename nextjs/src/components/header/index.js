"use client"

const Header = (props) => {
    const {color, title} = props;

    return (
        <header style={{background: color}}>
            <h1>{title}</h1>
        </header>
    )
}

export default Header;