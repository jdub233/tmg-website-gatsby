require("dotenv").config({
    path: `./.env.production`,
});

const { spawn } = require('child_process');
const ls = spawn('./bin/fetch-source-json.sh', [process.env.TRACKR_ENDPOINT, process.env.TRACKR_AUTH]);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});