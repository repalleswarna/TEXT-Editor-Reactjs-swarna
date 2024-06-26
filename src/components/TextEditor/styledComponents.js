import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
  height: 100vh;
`
export const ResponseContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #1b1c22;
  width: 70%;
  height: 80%;
  padding: 20px;
`

export const TextEditorImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
`
export const TextEditorHeading = styled.h1`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  color: #f8fafc;
`
export const TextEditorImage = styled.img`
  width: 80%;
`

export const TextEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 15px;
  width: 60%;
`
export const ButtonsUnorderedList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 5px;
  padding-left: 25px;
  list-style-type: none;
`
export const ButtonList = styled.li``
export const Button = styled.button`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.color};
  background-color: transparent;
  border: none;
  margin-right: 10px;
  cursor: pointer;
`
export const HorizontalLine = styled.hr`
  border: 1px solid #334155;
  width: 100%;
  margin-top: 0px;
`
export const TextAreaInput = styled.textarea`
  font-family: Roboto;
  font-size: 16px;
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
  color: #f8fafc;
  line-height: 1.5;
  background-color: transparent;
  border: none;
  outline: none;
  margin: 15px;
  margin-left: 25px;
  width: 90%;
  height: 100%;
`
