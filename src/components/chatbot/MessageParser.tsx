import React from 'react';

const MessageParser = ({ children, actions }: { children: React.ReactNode, actions: any }) => {
  const parse = (message: string) => {
    // Aqui chamamos a ação para lidar com a mensagem
    actions.handleUserMessage(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;