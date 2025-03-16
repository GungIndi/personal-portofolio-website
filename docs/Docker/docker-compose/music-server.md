---
sidebar_position: 2
---

# Media Server

**Just for fun**

## Navidrom (Music)
```yaml title='docker-compose.yaml'
services:
  navidrome:
    image: deluan/navidrome:latest
    ports:
      - "4533:4533"
    environment:
      # Optional: put your config options customization here. Examples:
      ND_SCANSCHEDULE: 1h
      ND_LOGLEVEL: info  
      ND_BASEURL: ""
    volumes:
      - "./data:/data"
      - "./music:/music:ro"
```

## Jellyfin (Music, Movies, Books)
```yaml title='docker-compose.yaml'
services:
  jellyfin:
    image: jellyfin/jellyfin
    container_name: jellyfin
    user: "999:987"
    environment:
      - TZ=Asia/Singapore
    volumes:
      - ./jellyfin/config:/config
      - ./jellyfin/cache:/cache
      - ./data/movies:/data/movies:ro
      - ./data/photos:/data/photos:ro
      - ./data/music:/data/music
      - ./data/books:/data/books:ro
    ports:
      - "8096:8096"
      - "8920:8920"
    restart: unless-stopped
```