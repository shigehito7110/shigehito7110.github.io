import ConsoleText from "@components/atoms/fonts/consoleText";

const ConsoleOutBox = (props: {arg: string}) => {
  const {arg} = props;

  const Contents: { [index: string]: string[]; } =
  {
    'who': [
      'Name: Shigehito Naito',
      'Like: Movies, Snowbording, Eating, Sleeping',
      'From: Japan',
      'NickName: Shige',
      'Message: welcome to mypage everyone!!I\'m pg and love various technologies'
    ],
    'help': [
      'help: show usage',
      'who: show profile',
      'skills: show proguraming skilsls',
      'portfolio: show portfolios',
      'clear: clear command line'
    ],
    'skills': [
      'loading...',
    ],
    'portfolio': [
      'comming soon...',
    ],
    'else': [
      'command not found',
      'u can see all command type \'help\'',
    ],
    'clear': [
      '',
    ]
  }

  const results: string[] = Contents[arg]

  return (
    <>
      {
        results.map((text) => {
          return (
            <ConsoleText key={text} text={text}/>
          )
        })
      }
    </>
  )
}

export default ConsoleOutBox;
