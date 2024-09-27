# Étape 1 : Build
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --production=false

COPY . .

RUN npm run build

# Étape 2 : Production
FROM node:18-alpine AS runner

ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Exposer le port par défaut de Next.js
EXPOSE 3000

# Démarrer l'application Next.js
CMD ["npm", "start"]