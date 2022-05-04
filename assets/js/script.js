const Timer = props => {
  const { initMinute = 0, initSeconds = 10 } = props;
  const [minutes, setMinutes] = React.useState(initMinute);
  const [seconds, setSeconds] = React.useState(initSeconds);

  React.useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) setSeconds(seconds - 1);
      if (seconds === 0) {
        if (minutes === 0) clearInterval(myInterval);
        else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'div',
      { className: 'wrapper' },
      minutes === 0 && seconds === 0
        ? React.createElement(
            React.Fragment,
            null,
            React.createElement(
              'div',
              { className: 'card' },
              React.createElement('img', {
                className: 'cardImg',
                src: 'https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif',
                alt: 'gif',
              }),

              React.createElement(
                'div',
                { className: 'cardBody' },
                React.createElement(
                  'p',
                  null,
                  'You still here for thirty seconds in this code, interesting ',
                  React.createElement(
                    'span',
                    {
                      role: 'img',
                      'aria-label': 'smiling face with sunglasses',
                    },
                    '\uD83D\uDE0E'
                  )
                )
              )
            )
          )
        : React.createElement(
            React.Fragment,
            null,
            React.createElement(
              'h1',
              null,
              minutes < 10 ? `0${minutes}` : minutes,
              ':',
              seconds < 10 ? `0${seconds}` : seconds
            )
          )
    )
  );
};
ReactDOM.render(
  React.createElement(Timer, {
    initMinute: 400,
    initSeconds: 00,
  }),
  document.getElementById('root')
);
