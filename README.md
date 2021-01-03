# TMG Website

A [Gatsbyjs](https://www.gatsbyjs.org) based project to render the TMG website. It fetches data from the TMG Trackr database and builds a static site.

To run a development instance:

1. Create a local `.env.development` file by copying `env.example`, then adding authentication credentials for TMG Tracker and a pointer to a media server.

2. Run

    ```bash
    npm install
    ```

    To download the TMG Trackr data set with the credentials in the .env file, and install npm dependencies.

3. Run:

    ``` bash
    npm run develop
    ```

    To start a local development instance.
