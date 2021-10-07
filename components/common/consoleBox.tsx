import styled from 'styled-components';
import PromptMessage from '@components/fonts/promptMessage';
import ConsoleForm from './consoleForm';
import { useState } from 'react';

const ConsoleArea = styled.div`
  width: 70%;
  height: 100%;
  border: 1rem double #000;
  border-radius: 4.8rem;
  height: 40rem;
  margin: 7rem auto 0 auto;
  background-color: white;
  padding: 2rem;
  font-family: 'Press Start 2P', cursive;
  font-weight: 100;
  font-size: 1.5rem;
`

const ConsoleBox = () => {
  const [command, setCommand] = useState('');

  const onKeyPress = (e: any) => {
    if(e.charCode == 13) {
      console.log(command);
      setCommand('');
    }
  }

  return (
    <ConsoleArea>
      <PromptMessage />
      <ConsoleForm
        command={command}
        onKeyPress={onKeyPress}
        onChange={setCommand}
      />
    </ConsoleArea>
  )
}

export default ConsoleBox;
