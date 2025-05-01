## Git Hidden Folder

There is a hidden folder called `.git` which tells you that our project is a git repo.
  

If we wanted to create a git repo in a new project we create the folder and the initialize that repo using `git init`

```sh

mkdir /workspaces/tmp/new-project

cd /workspaces/tmp/new-project

git init -b main or git init

touch Readme.md

code Readme.md

git status

git add .

# makes changes to readme.md

git commit -m "add readme file"

```

## Cloning

We can clone three ways: HTTPS, SSH, GitHub CLI

Since we are using GitHub Codespaces we'll a create temporary directory in our workspace

```sh

mkdir /workspace/tmp

cd /workspace/tmp

```

### HTTPS

```sh

git clone https://github.com/BlackMamba2707/GHF-Example.git

cd GHF-Example

```

> You'll need to generate a Personal Access Token (PAT)

https://github.com/settings/personal-access-tokens

  
You will use the PAT as your password when you login

- Give it access to Contents for Commits

### SSH
 
```ssh

git@github.com:BlackMamba2707/GHF-Example.git

cd GHF-Example

```

We'll need to create our own SSH rsa key pair

```sh

ssh-keygen -t rsa

```

We can test our connection here:

```

ssh -T git@github.com

```

For WSl users and if you create a non defualt key you might need to add it

```sh

$ eval "$(ssh-agent -s)"

ssh-add ~/.ssh/<your private key>

```

> For windows

```sh

Get-Service -Name ssh-agent | Set-Service -StartupType Manual

Start-Service ssh-agent

```

---

add the ssh key

```sh

ssh-add c:/Users/YOU/.ssh/id_ed25519

```

### Github CLI

Install the CLI


eg. Linux (Ubuntu)

```sh

sudo apt update

sudo apt install gh

```

---

#### For other platforms can take a look to the doc

- https://github.com/cli/cli?tab=readme-ov-file#installation

  
```

gh auth login

gh repo clone BlackMamba2707/GHF-Example

```

## Commits

When we want to commit code we can write git commit which will open up the commit edit message in the editorof choice.

```sh

git commit

```

Set the global editor

```sh

git config --global core.editor emacs

```

Make a commit and commit message without opening an editor

```

git commit -m "add another exclamation"

```
## Branches

List of local branches

```

git branch

```

List of remote branches

```

git branch -a

```

Create a new branch

```

git branch branch-name

```

Checkout the branch

```

git checkout dev

--- or ---

git switch dev

```

Create a new branch and checkout inline

```

git checkout -b branch-name

--- or ---

git switch -c branch-name

```

## Remotes

  

## Stashing

  

## Merging

  

## Add

When we want to stage changes that will be included in the commit

We can use the . to add al possible files.

  
```sh

git add Readme.md

git add .

```

## Reset

Reset allows you to move staged changes to be unstaged

This is useful when you want to revert all files not to be commited

```sh

git add .

git reset

```

> git reset will revert a git add .

## Status  

Git Status shows you what file will o will not be committed
If we want to see less information about the git status we add `-s` at the end.

```sh

git status

git status -s

```

## Gitconfig file

The gitconfig file is what stores your global configuration for git such as email, editor and more.

Showing the contents of our .gitconfig file

```

git config --list

```

When you first install Git on a machine you are suppose to set up your name and email

```sh

git config --global user.name "John Doe"

git config --global user.email johndoe@example.com

```

## Log

git log will show recent git commits to the git tree

```sh

git log

```

If we want to see the logs in a shorter way

```sh

git log --online

```

When we want to push a repo to our remote origin

```

git push

```