import React from 'react';
import { useState } from 'react';
import { data, IItem } from './data';
import './styles.css';

type Theme = 'light' | 'dark';

export const ThemeContext = React.createContext('light');

export function App() {
    const [currentTheme, setCurrentTheme] = useState<Theme>('light');

    function changeTheme() {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    }

    const className = `app app_${currentTheme}`;
    return (
        <div className={className}>
            <button onClick={changeTheme}>Toggle theme</button>
            <List theme={currentTheme} data={data} />
        </div>
    );
}

function List(props: { theme: Theme; data: IItem[] }) {
    return (
        <ThemeContext.Provider value={props.theme}>
            <div>
                {data.map((item) => (
                    <ListItem
                        theme={props.theme}
                        caption={item.name}
                        key={item.id}
                    />
                ))}
            </div>
        </ThemeContext.Provider>
    );
}

function ListItem(props: { theme: Theme; caption: string }) {
    const className = `listItem listItem_${props.theme}`;
    return <div className={className}>{props.caption}</div>;
}
