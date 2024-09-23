FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN pnpm dlx turbo prune total-dashboard --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app

# First install the dependencies (as they change less often)
COPY --from=builder /app/out/json/ .
RUN pnpm install

# Build the project
COPY --from=builder /app/out/full/ .
RUN pnpm dlx turbo run build --filter=total-dashboard

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/total-dashboard/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/total-dashboard/.next/static ./apps/total-dashboard/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/total-dashboard/public ./apps/total-dashboard/public

EXPOSE 3000

CMD node apps/total-dashboard/server.js