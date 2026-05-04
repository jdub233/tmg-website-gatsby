# TMG Website — System Overview

## Repos in this system

| Repo | Purpose |
|---|---|
| `jdub233/tmg-website-gatsby` | Gatsby 5 / React 18 frontend. Fetches JSON from FileMaker at build time, compiles to static files, deployed to S3. |
| `jdub233/superfluid-images` | AWS SAM app: CloudFront CDN, Lambda@Edge (URI rewrite + on-demand resize), S3 storage, DynamoDB GUID-to-filename map, Upload API. |
| `jdub233/superfluid-uploader-frontend` | React/Vite uploader embedded in FileMaker as a web viewer. Gets pre-signed URLs from superfluid-images, uploads directly to S3. |

FileMaker is an external system (hosted by a partner) and is not a repo.

---

## System Overview

This diagram shows the three repos as black boxes with labeled flows between them. It intentionally omits internal AWS component detail — see the Miro board for the full internal architecture of `superfluid-images`.

```mermaid
%%{init: {"flowchart": {"rankSpacing": 150, "nodeSpacing": 100}} }%%
flowchart LR
    FM(["FileMaker Data Source (external)"])
    Browser(["End User Browser"])

    subgraph GATSBY["jdub233/tmg-website-gatsby"]
        BUILD["Gatsby Build — React + SCSS to static files"]
    end

    subgraph SUF["jdub233/superfluid-uploader-frontend"]
        UPUI["Uploader UI — React/Vite — embedded in FileMaker"]
    end

    subgraph SFIMG["jdub233/superfluid-images"]
        MEDIA["AWS SAM — CloudFront + Lambda@Edge + S3 + DynamoDB + Upload API"]
    end

    FM -->|"FileMaker REST API — JSON at build time"| BUILD
    FM -->|"Embedded web viewer — asset GUID + API key"| UPUI
    BUILD -->|"Compiled static files — deployed to S3 + CloudFront"| Browser
    UPUI -->|"1. GET pre-signed URL  2. PUT file to S3"| SFIMG
    SFIMG -->|"Media files via CloudFront CDN"| Browser
```

**Reading the diagram:**

- The left-to-right layout reflects two parallel paths: *content* (Gatsby build) and *media* (Superfluid upload and serve).
- FileMaker drives both paths: it is the data source for the Gatsby build and the authoring environment for media uploads.
- The browser receives static HTML/JS/CSS from one origin and media files from a separate CDN origin (`trackr-media.tangiblemedia.org`).
- `superfluid-uploader-frontend` only participates in the write (upload) path — it is not involved in serving media to end users.

---

## Further detail

- **Per-repo internal diagrams:** See `docs/architecture.md` in `superfluid-images` and `superfluid-uploader-frontend`.
