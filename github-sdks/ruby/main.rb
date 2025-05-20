require 'octokit'
client = Octokit::Client.new(access_token: ENV['GH_TOKEN'])

# Create the new branch
client.create_ref(
"BlackMamba2707/GHF-Example", 
"heads/sdks", 
"22babe0841e9bd763dc5e8c23c8f48ec49b652d6"
)