---
title: Spicetify Analytics
description: API documentation for the Spicetify Analytics Server, tracking active users across themes with real-time stats via WebSocket and HTTP endpoints.
layout: doc
---

# Spicetify Analytics

Welcome to the **Spicetify Analytics Server** API documentation. This service
tracks active users across various themes and provides real-time statistics via
WebSocket and HTTP endpoints.

## ⚙️ Environment Variables

| Variable    | Description                                                   | Default | Example                  |
| ----------- | ------------------------------------------------------------- | ------- | ------------------------ |
| `REDIS_URL` | Redis connection string                                       | —       | `redis://localhost:6379` |
| `ADMIN_KEY` | Admin key used for admin methods                              | —       | `super-secret-admin-key` |
| `API_KEY`   | API key for authenticating with external lyrics API endpoints | —       | `your-lyrics-api-key`    |
| `PORT`      | (Optional) Server port                                        | `8080`  | `8080`                   |

## Server Setup

The server uses:

- **Express** for HTTP endpoints.
- **Socket.IO** for real-time WebSocket connections.
- **Redis** for user counts and historical tracking.
- **CORS** for cross-origin requests.

CORS is configured for the following origins:

- `https://xpui.app.spotify.com`
- `https://lyrics.lucid.sanooj.is-a.dev`
- `https://lucid.sanooj.is-a.dev`
- `https://spicetify.projects.sanooj.uk`
- `http://localhost:8787`

## Themes

Analytics are tracked per theme:

| Key                | Redis Key              | Name             |
| ------------------ | ---------------------- | ---------------- |
| `theme`            | `lucid_theme:users`    | Lucid Theme      |
| `lyrics_extension` | `lucid_lyrics:users`   | Lyrics Extension |
| `glassify_theme`   | `glassify_theme:users` | Glassify Theme   |

Each theme tracks:

- Current active users
- Weekly average users
- Weekly unique users

## WebSocket Namespaces

The API exposes two Socket.IO namespaces:

### 1. Public Namespace

- **Namespace:** `/ws/public`
- **Purpose:** Broadcast current stats and weekly averages
- **Events:**

  - `userStats` - Sends current active users and weekly average.

```ts
publicNamespace.on("connection", (socket) => {
    socket.emit("userStats", { current, weeklyAvg });
});
```

### 2. Private Namespace

- **Namespace:** `/ws/users`
- **Purpose:** Track individual user connections
- **Handshake Auth Fields:**

  - `type` - Analytics type (`theme`, `lyrics_extension`, `glassify_theme`)
  - `userId` - Optional unique user ID
- **Behavior:**

  - Increments users on connection
  - Decrements users on disconnect
  - Logs activity in Redis

```ts
privateNamespace.on("connection", (socket) => {
    const userType = socket.handshake.auth?.type ?? "lyrics_extension";
    const userId = socket.handshake.auth?.userId;
    incrementUsers(userType);
    logUserActivity(userType, userId);
});
```

## HTTP Endpoints

### `GET /`

Returns a welcome page.

### `GET /ping`

Health check endpoint.

```json
"pong!"
```

### `GET /users/count`

Returns:

- `current` - Current active users per theme
- `weeklyAvg` - Weekly average users per theme

**Example Response:**

```json
{
    "current": {
        "theme": 12,
        "lyrics_extension": 8,
        "glassify_theme": 5
    },
    "weeklyAvg": {
        "theme": 14.3,
        "lyrics_extension": 9.7,
        "glassify_theme": 6.1
    }
}
```

### `GET /users/weekly-unique`

Returns weekly unique user counts per theme.

**Example Response:**

```json
{
    "weeklyUniqueAvg": {
        "theme": 50,
        "lyrics_extension": 42,
        "glassify_theme": 30
    }
}
```

## Redis / Users Tracking

The server uses Redis to store:

- Current user counts per theme
- Daily and historical activity logs
- Weekly unique users (via sets)

**Key Structure:**

- `lucid_activity:{type}` - Sorted set with timestamps
- `lucid_activity:{type}:daily:{YYYY-MM-DD}` - Daily count
- `lucid_activity:{type}:unique:{YYYY-MM-DD}` - Daily unique users set

## Broadcasting Stats

- Broadcasts to `/ws/public` every 5 seconds.
- Includes `current` users, `weeklyAvg`, and `timestamp`.

## 📦 Running the Server

```bash
deno task start
```

> Ensure Redis A Server is running and all required environment variables are
> set.
