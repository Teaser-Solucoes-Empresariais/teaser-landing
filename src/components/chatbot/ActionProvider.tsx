// Caminho: src/components/chatbot/ActionProvider.tsx

import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const ActionProvider = ({ createChatBotMessage, setState, children }: any) => {
  const handleUserMessage = async (message: string) => {
    let sessionId = localStorage.getItem('chatbot_session_id');
    if (!sessionId) {
      sessionId = uuidv4();
      localStorage.setItem('chatbot_session_id', sessionId);
    }

    const apiUrl = '/api/chat-webhook';

    try {
      // 1. AGUARDA A RESPOSTA DA NOSSA API
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: sessionId,
          message: message,
        }),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar mensagem para o servidor.');
      }

      // 2. EXTRAI A RESPOSTA JSON (que veio do n8n)
      const apiData = await response.json();

      // Certifica que existe uma resposta e ela não está vazia
      if (apiData && apiData.output) {
        // 3. USA A MENSAGEM DO N8N PARA CRIAR A RESPOSTA DO BOT
        const botMessage = createChatBotMessage(apiData.output);
        addMessageToState(botMessage);
      } else {
        // Fallback caso o n8n não retorne a propriedade "output"
        console.warn("n8n não retornou uma propriedade 'output'.", apiData);
        const fallbackMessage = createChatBotMessage("Recebido, mas sem resposta do assistente.");
        addMessageToState(fallbackMessage);
      }

    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      const errorMessage = createChatBotMessage("Ops, algo deu errado. Tente de novo.");
      addMessageToState(errorMessage);
    }
  };

  const addMessageToState = (message: any) => {
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleUserMessage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;