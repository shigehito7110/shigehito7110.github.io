import styled from 'styled-components';

const StyledForm = styled.input`
  margin: 1rem 0;
  border: none;
  outline: none;
  font-family: 'Press Start 2P', cursive;
  font-size: 1rem;
`

const ConsoleForm = (props: {command: string, onKeyPress: (value: any) => void, onChange: (value: string) => void}) => {
  const { command, onKeyPress, onChange } = props;

  return (
    <>
      <label>$ </label>
      <StyledForm
        autoFocus
        type='text'
        value={command}
        onChange={e => onChange(e.target.value)}
        onKeyPress={e => onKeyPress(e)}
      />
    </>
  )
}

export default ConsoleForm;
