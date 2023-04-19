## Requirements
- NodeJS (v16.x.x)
- IDE (VS Code)

## Recommended VS Code Extension
- TailwindCSS
- GitLens
- Prettier


## How to clone repository
- If you still don't have the repository run:
```
git clone https://github.com/saisarah/App-con
```
### Delete all merged branches

```bash
# delete merged local branch
git branch --merged| egrep -v "(^\*|master|main|development)" | xargs git branch -d

#delete merge remote branch
git remote prune origin

```

## Setting up and Running the Application
- Once you have cloned the repository
- make you are inside the folder of the application.
- run `npm i` to install dependencies (3rd party library).
- run `npm run dev` to start application.
- this will display the url of the application that you can view on the browser.

## How to stop running the application.
- to stop the application, press `Ctrl+C` in the command line.

## How to make Changes in the Source Code.
- First ensure that you are in the master branch
- run `git pull` to make sure that your master branch is updated
- run `git checkout -b <branch_name>` to create and checkout to a new branch
- Once you are in the new branch you can now start coding and edit your changes you want to make.
- After you are finish editing. run `git add <files_edited>` to add your changes to staging.
- Once you have added all the files you want to include. run `git commit <message>` (Add message to note what changes you made in this commit)
- Then to push your changes in the github. run `git push -u origin <branch_name>`
- On the github create a Pull Request so that the maintainer can view and check your code.
- If your code is accepted you can now go back to master branch by running `git checkout master` then `git pull` to sync your master branch with your codes.
- However if your code still needs revision. Stay in your current branch, then fix the codes and then commit and push your branch.

## Possible Errors if you can't connect to the backend
1. Backend Server is not running
2. MySQL Server is not running
3. The frontend API_URL is not set