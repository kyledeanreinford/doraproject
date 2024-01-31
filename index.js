import http from 'http';
import { Octokit }  from "@octokit/rest";
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Octokit.js
// https://github.com/octokit/core.js#readme
  const octokit = new Octokit({
    auth: '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'
  });

  octokit.request('GET /repos/{owner}/{repo}/actions/workflows', {
    owner: 'kyledeanreinford',
    repo: 'doraproject',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }).then(({data}) => {

    let testVal = "TODO"
    res.end(`
      Build: green,
      Velocity: 1,
      Volatility: 2,
      Release Count: 
      Raw Output: ${testVal}
      foo: ${data}
      `
    )});
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});