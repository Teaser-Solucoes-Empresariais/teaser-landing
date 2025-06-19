# Etapa 1: Build
FROM node:23-alpine AS builder

WORKDIR /app

# Copia os arquivos de dependência
COPY package.json pnpm-lock.yaml ./

# Instala as dependências (com pnpm)
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copia o restante da aplicação
COPY . .

# Build do Next.js
RUN pnpm build

# Etapa 2: Runtime
FROM node:23-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

# Copia apenas o necessário para o runtime
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

# Instala só as dependências de produção
RUN npm install -g pnpm && pnpm install --prod --frozen-lockfile

EXPOSE 3000

CMD ["pnpm", "start"]
