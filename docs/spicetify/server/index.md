---
title: Lyrics API Server
titleTemplate: Backend Projects by Sanooj
---

# Spicetify Server

This service powers lyrics fetching and caching for Spicetify extensions.\
It is built with **Hono** (Deno), **Redis** for caching, and integrates with an
external API for lyrics retrieval.

## 🚀 Features

- Serves lyrics via `/api/lyrics/:id`
- Uses **Redis caching** to reduce API calls
- Provides **admin endpoints** for cache management

## ⚙️ Environment Variables

| Variable    | Description                                                                  |
| ----------- | ---------------------------------------------------------------------------- |
| `REDIS_URL` | Redis connection string                                                      |
| `ADMIN_KEY` | Admin key used for admin methods                                             |
| `API_KEY`   | API key for authenticating with external API URL of the lyrics API endpoints |
| `PORT`      | (Optional) Server port (default: `8080`)                                     |

## 📡 API Endpoints

### **1. Get Lyrics**

```http
GET /api/lyrics/:id
```

**Params:**

- `id` → Spotify track ID

**Headers (optional for client use):**

- `Spotify-Token: <token>`

**Response (200):**

```json
{
  "lyrics": [...],
  "status": 200
}
```

**Errors:**

- `404` → Lyrics not found
- `502` → Failed to parse API response
- `504` → Request timed out
- `500` → Internal server error

### **2. Delete Cached Lyrics (Admin)**

```http
DELETE /admin/lyrics/:id
```

**Headers:**

- `Admin-Key: <your_admin_key>`

**Response:**

```json
{
  "success": true,
  "message": "Lyrics 12345 cache cleared"
}
```

### **3. Flush Entire Cache (Admin)**

```http
DELETE /admin/lyrics
```

**Headers:**

- `Admin-Key: <your_admin_key>`

**Response:**

```json
{
  "success": true,
  "message": "All lyrics cache cleared"
}
```

## 🗄️ Caching Strategy

- Lyrics are cached in **Redis** with a TTL of **14 days**.
- Key format:

  ```
  lyrics:<id>
  ```
- Responses are stored as JSON (`{ lyrics, status }`).

## 🌍 Static File Serving

- `/` → Serves `./public/index.html`
- `/*` → Serves other files from `./public`
- `404` → Custom error page at `./public/404.html`

## 🛠️ Development Notes

- Built on [Hono](https://hono.dev/) for routing and middleware
- CORS is configured to allow `*` origins with `Authorization` and
  `Spotify-Token` headers

## 📦 Running the Server

```bash
deno task start
```

> Ensure Redis A Server is running and all required environment variables are
> set.
