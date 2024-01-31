import http from 'http';
import { Octokit }  from "@octokit/rest";
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Octokit.js
// https://github.com/octokit/core.js#readme
  const auth = process.env.GH_AUTH
  const octokit = new Octokit({
    auth: auth
  });

  let workflowId = "84435048"
  octokit.request(`GET /repos/{owner}/{repo}/actions/runs`, {
    owner: 'kyledeanreinford',
    repo: 'doraproject',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }).then(({data}) => {
    let buildCount = data.workflow_runs.length
    res.end(`
      Build: green,
      Velocity: ${buildCount},
      Volatility: TODO,
      Release Count: 
      workflow ID: ${data.workflow_runs[0].id}
      `
    )});
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});