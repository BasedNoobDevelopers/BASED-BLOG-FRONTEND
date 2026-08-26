# Stage 1: Base image
FROM node:20-alpine AS base
WORKDIR /app
COPY package.json package-lock.json* ./
# COPY /public ./
# COPY /src ./
# COPY /Styles ./
RUN npm ci

# Stage 2: Development environment
FROM base AS development
ENV NODE_ENV=development
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# # Stage 3: Build for production
# FROM base AS builder
# COPY . .
# RUN npm run build

# # Stage 4: Production runner
# FROM node:20-alpine AS production
# WORKDIR /app
# ENV NODE_ENV=production

# # Safely copy necessary files from builder
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/.next/static ./.next/static

# EXPOSE 3000
# ENV PORT=3000
# ENV HOSTNAME="0.0.0.0"

# CMD ["node", "server.js"]
