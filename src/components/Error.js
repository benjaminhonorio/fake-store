import React from 'react';

export default function Error({ text }) {
  const linkStyle = {
    backgroundColor: 'initial',
    color: 'blue',
    textDecoration: 'underline',
    padding: '0'
  };
  return (
    <div>
      {text}, please reach out to{' '}
      <a style={linkStyle} href="https://twitter.com/benjaminhonorio">
        me
      </a>
    </div>
  );
}
