import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  AppContainer,
  ResponseContainer,
  TextEditorImageContainer,
  TextEditorHeading,
  TextEditorImage,
  TextEditorContainer,
  ButtonsUnorderedList,
  ButtonList,
  Button,
  HorizontalLine,
  TextAreaInput,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    textInput: '',
    isBoldActive: false,
    isItalicActive: false,
    isUnderlineActive: false,
  }

  onChangeText = event => {
    this.setState({textInput: event.target.value})
  }

  handleBoldClick = () => {
    this.setState(prevState => ({
      isBoldActive: !prevState.isBoldActive,
    }))
  }

  handleItalicClick = () => {
    this.setState(prevState => ({
      isItalicActive: !prevState.isItalicActive,
    }))
  }

  handleUnderlineClick = () => {
    this.setState(prevState => ({
      isUnderlineActive: !prevState.isUnderlineActive,
    }))
  }

  render() {
    const {
      textInput,
      isBoldActive,
      isItalicActive,
      isUnderlineActive,
    } = this.state
    return (
      <AppContainer>
        <ResponseContainer>
          <TextEditorImageContainer>
            <TextEditorHeading>Text Editor</TextEditorHeading>
            <TextEditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextEditorImageContainer>
          <TextEditorContainer>
            <ButtonsUnorderedList>
              <ButtonList>
                <Button
                  data-testid="bold"
                  onClick={this.handleBoldClick}
                  color={isBoldActive ? '#faff00' : '#f1f5f9'}
                >
                  <VscBold size={25} />
                </Button>
              </ButtonList>
              <ButtonList>
                <Button
                  data-testid="italic"
                  onClick={this.handleItalicClick}
                  color={isItalicActive ? '#faff00' : '#f1f5f9'}
                >
                  <GoItalic size={25} />
                </Button>
              </ButtonList>
              <ButtonList>
                <Button
                  data-testid="underline"
                  onClick={this.handleUnderlineClick}
                  color={isUnderlineActive ? '#faff00' : '#f1f5f9'}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ButtonList>
            </ButtonsUnorderedList>
            <HorizontalLine />
            <TextAreaInput
              id="textEditor"
              type="text"
              value={textInput}
              onChange={this.onChangeText}
              fontWeight={isBoldActive ? 'bold' : 'normal'}
              fontStyle={isItalicActive ? 'italic' : 'normal'}
              textDecoration={isUnderlineActive ? 'underline' : 'normal'}
              row="30"
            />
          </TextEditorContainer>
        </ResponseContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
