# Stage 1: Base stage with Bun image
FROM oven/bun:1 AS base

# Stage 2: Builder stage starts from the base image
FROM base AS builder

# Set the working directory for subsequent instructions
WORKDIR /builder

# Copy package.json and bun-lock.yaml to leverage Docker cache
COPY package.json bun.lock ./

# Install dependencies as per lock file without making updates
RUN bun install --frozen-lockfile

# Copy the rest of the application code
COPY . .

RUN bunx prisma generate

# Build the application and prune development dependencies
RUN bun run build

# Stage 3: Runner stage starts from the base image again
FROM base AS runner

# Set the working directory in the container
WORKDIR /runner

# Create a non-root group and user for running the application securely
RUN addgroup --system --gid 1001 bunjs && \
    adduser --system --uid 1001 --ingroup bunjs bunuser

# Copy installed node_modules and built artifacts from the builder stage
# Copy only the necessary files from builder
COPY --from=builder --chown=bunuser:bunjs /builder/package.json ./
COPY --from=builder --chown=bunuser:bunjs /builder/bun.lockb ./
COPY --from=builder --chown=bunuser:bunjs /builder/dist ./dist
# Install only the dependencies
RUN bun install --production --frozen

# Switch to non-root user
USER bunuser
# Inform Docker that the container is listening on port 3000 at runtime
EXPOSE 3000

# Define the command to run the app
CMD ["bun", "/runner/dist/app.js"]