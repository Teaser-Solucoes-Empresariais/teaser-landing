// src/components/chatbot/config.ts
import React from 'react';
import { createChatBotMessage, Config } from 'react-chatbot-kit';
import { FaRobot } from 'react-icons/fa';
import { IoPaperPlane } from 'react-icons/io5';

// Avatar personalizado do bot
const BotAvatar = () => (
  <div style={{
    backgroundColor: '#6366F1',
    width: 40, height: 40,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <FaRobot color="#FFF" size={22}/>
  </div>
);

// Botão de envio customizado
const SendButton = (props: any) => (
  <button
    {...props}
    style={{
      backgroundColor: '#6366F1',
      width: 44, height: 44,
      borderRadius: '50%',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    }}
    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#4F46E5'}
    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#6366F1'}
  >
    <IoPaperPlane color="#FFF" size={20}/>
  </button>
);


const config: Config = {
  botName: 'Teaser Assistant',
  initialMessages: [
    createChatBotMessage('Olá! Como posso te ajudar?')
  ],
  textInputPlaceholder: 'Digite sua mensagem…',
  customComponents: {
    botAvatar: props => <BotAvatar {...props} />,
    // remove header
    header: () => null,
    // remove avatar padrão do usuário
    userAvatar: () => <></>,
    sendButton: props => <SendButton {...props} />
  },
  customStyles: {
    chatContainer: {
      background: '#F8FAFC',
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      border: '1px solid #E5E7EB',
      borderRadius: 12
    },
    chatPanel: {
      width: '410px',
      maxWidth: '90vw',
      height: '480px',
      borderRadius: 12
    },
    botMessageBox: {
      backgroundColor: '#6366F1',
      color: '#FFF',
      borderRadius: '12px 12px 12px 0px'
    },
    userMessageBox: {
      backgroundColor: '#E5E7EB',
      color: '#111827',
      borderRadius: '12px 12px 0px 12px',
      alignSelf: 'flex-end'
    },
    messagesContainer: {
      padding: '16px'
    },
    inputForm: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 16px',
      borderTop: '1px solid #E5E7EB',
      background: 'transparent'
    },
    textInput: {
      flex: 1,
      border: 'none',
      backgroundColor: '#FFF',
      borderRadius: 999,
      padding: '10px 16px',
      marginRight: 8,
      fontSize: 15,
      color: '#111827',
      boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)'
    }
  }
};

export default config;
