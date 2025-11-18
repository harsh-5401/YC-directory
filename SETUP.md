# Environment Setup Guide

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

### Sanity Configuration
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-14
SANITY_WRITE_TOKEN=your_write_token_here
```

**How to get your Sanity credentials:**
1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Copy the Project ID
4. Go to API settings to create a write token

### NextAuth Configuration
```env
AUTH_SECRET=your_auth_secret_here
AUTH_GITHUB_ID=your_github_oauth_id
AUTH_GITHUB_SECRET=your_github_oauth_secret
```

**How to get GitHub OAuth credentials:**
1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create a new OAuth App
3. Copy the Client ID and Client Secret

**Generate AUTH_SECRET:**
```bash
openssl rand -base64 32
```

### Optional: Sentry Configuration
```env
SENTRY_AUTH_TOKEN=your_sentry_auth_token
```

## Fixes Applied

### 1. Fixed `defineLive` Import Error
- **Issue**: `defineLive` is not exported from 'next-sanity'
- **Solution**: Changed import from `'next-sanity'` to `'next-sanity/live'`
- **File**: `sanity/lib/live.ts`

### 2. Fixed Write Token Error
- **Issue**: Application crashed when `SANITY_WRITE_TOKEN` was missing
- **Solution**: Changed from throwing error to console warning at module load
- **File**: `sanity/lib/write-client.ts`
- **Note**: Write operations will still fail without the token, but the app will start

## Next Steps

1. Create `.env.local` file with your actual credentials
2. Restart the development server
3. The app should now run without errors

