import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['base-border']};
    }


    *::-webkit-scrollbar {
    width: 0.25rem;
    height: 0.5rem;
}

*::-webkit-scrollbar-track {
    background: transparent;
}

*::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 100rem;
}

*::-webkit-scrollbar-thumb:hover {
    background: #555;
}

body{
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
    font: 400 1rem Nunito, sans-serif;
}

`
