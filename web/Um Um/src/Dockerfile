FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Create a new non-root user
RUN addgroup -S nextgroup && adduser -S nextuser -G nextgroup

# Install dependencies with root temporarily to ensure perms
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy application source
COPY . .

# Build the application
RUN npm run build

# Only root should have the flag, but readable by the group
COPY flag /flag
RUN chown root:nextgroup /flag && chmod 440 /flag

# Keep application files owned by root and read-only for nextuser
RUN chown -R root:nextgroup /usr/src/app && chmod -R 755 /usr/src/app

RUN rm ./flag
# Next.js 15 might need write access to .next/cache
RUN mkdir -p /usr/src/app/.next/cache && chown -R nextuser:nextgroup /usr/src/app/.next/cache && chmod -R 770 /usr/src/app/.next/cache

# Expose port (Next.js default is 3000)
EXPOSE 3000

# Switch to non-root user
USER nextuser

# Start the application
CMD ["npm", "start"]
