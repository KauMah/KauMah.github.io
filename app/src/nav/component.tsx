import React from 'react';

const styles = {
    activeButton: {
        outline: 0,
        backgroundColor: 'rgba(255, 255, 255, .2)'
    },
    navButton: {
        outline: 0,
        backgroundColor: 'rgba(255, 255, 255, .2'
    },
    buttonText: {
        fontSize: 12,
        letterSpacing: 1,
        color: '#444',
        fontWeight: 700
    },
    titleText: {
        fontWeight: 700,
        height: '40px',
        padding: '5px 15px',
        fontSize: '18px'
    }
}

interface ButtonProps {
    name: string,
    link: string,
    // active: boolean
}

interface Props {
    buttons: Array<ButtonProps>
}

const NavButton: React.FunctionComponent<ButtonProps> = ({name, link}: ButtonProps) => {
    return (
        <li style={ styles.navButton }>
            <a style={ styles.buttonText }href={ link }>{ name.toUpperCase() }</a>
        </li>
    )
}

const NavBar: React.FunctionComponent<Props> = (buttons: Props) => {
    return (
        <div>
            <a className={'navbar-brand'}>
                <h1>Kaushik Mahadevan</h1>
            </a>

        </div>
    )
}

export default NavBar;