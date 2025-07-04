// Caminho: src/app/api/chat-webhook/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const n8nWebhookUrl = 'https://n8n.teasersolucoes.com.br/webhook/teaser-landing';

  try {
    const body = await request.json();
    const { sessionId, message } = body;

    if (!sessionId || !message) {
      return NextResponse.json({ message: 'Dados faltando' }, { status: 400 });
    }

    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId,
        message,
      }),
    });

    if (!n8nResponse.ok) {
      const errorText = await n8nResponse.text();
      console.error('API Route: Erro do webhook n8n:', errorText);
      return NextResponse.json({ message: 'Erro ao contatar o n8n' }, { status: 502 });
    }

    // 1. CAPTURA A RESPOSTA JSON DO N8N
    const n8nData = await n8nResponse.json();
    
    console.log('API Route: Resposta recebida do n8n:', n8nData);

    // 2. RETORNA OS DADOS DO N8N PARA O FRONTEND
    return NextResponse.json(n8nData);

  } catch (error) {
    console.error('API Route: Erro interno:', error);
    return NextResponse.json({ message: 'Erro interno no servidor' }, { status: 500 });
  }
}