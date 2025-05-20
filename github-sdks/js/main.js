const { Octokit, App } = require("octokit");

const octokit = new Octokit({
    auth: process.env.GH_TOKEN
  })
  
octokit.request('POST /repos/{owner}/{repo}/git/refs', {
    owner: 'BlackMamba2707',
    repo: 'GHF-Example',
    ref: 'refs/heads/sdksjs',
    sha: '22babe0841e9bd763dc5e8c23c8f48ec49b652d6',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })