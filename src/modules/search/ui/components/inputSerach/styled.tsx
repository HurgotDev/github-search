import styled from 'styled-components'

export const InputWrapper = styled.div`
    padding: 16px;
    background: #1f2a48;
    border-radius: 14px;
    display: flex;
    align-items: center;

    & .icon {
        margin-right: 12px;
    }

    & .button {
        border-radius: 8px;
    }
`

export const Input = styled.input`
    border: none;
    outline: none;
    flex: 1;
    height: 100%;
    background: transparent;
    color: #fff;
    font-weight: 500;
`
