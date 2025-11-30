# Multi-stage Dockerfile for stable Next.js (14.x) on Node 20 LTS
# Dependencies stage
FROM node:20-alpine AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat

# Copy only package manifests (supports npm; project currently uses pnpm but we generate lock via npm)
COPY package.json ./
# If a package-lock.json existed copy it; otherwise npm will create it
COPY package-lock.json* ./

RUN npm install --no-audit --no-fund

# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Runtime stage
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Copy necessary build artifacts
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
