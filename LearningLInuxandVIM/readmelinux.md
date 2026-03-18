

---

#  1. What is Linux (quick idea)

* Linux is an **operating system kernel**
* Used in:

  * Servers 🌐
  * Development 💻
  * Cloud ☁️
* In WSL, you're basically running a Linux environment inside Windows

---

#  2. Basic Linux Concepts

### 📁 File System

* `/` → root (like C:\ in Windows)
* `/home` → your user files
* `/etc` → config files
* `/bin` → system commands

###  Current Directory

* Always know where you are:

```bash
pwd
```

---

#  3. Navigation Commands

### 📂 List files

```bash
ls
ls -l     # detailed view
ls -a     # show hidden files
```

### 📁 Change directory

```bash
cd foldername
cd ..        # go back
cd ~         # go to home
cd /         # root directory
```

---

#  4. File & Folder Management

### 📁 Create folder

```bash
mkdir myfolder
```

###  Create file

```bash
touch file.txt
```

###  Delete

```bash
rm file.txt
rm -r foldername   # delete folder
```

###  Copy

```bash
cp file.txt copy.txt
cp -r folder1 folder2
```

###  Move / Rename

```bash
mv file.txt newname.txt
mv file.txt folder/
```

---

#  5. Viewing Files

```bash
cat file.txt       # show content
less file.txt      # scrollable view
head file.txt      # first lines
tail file.txt      # last lines
```

---

#  6. Search

### Find file

```bash
find . -name "file.txt"
```

### Search inside file

```bash
grep "word" file.txt
```

---

#  7. Permissions (IMPORTANT)

Linux has 3 permissions:

* r = read
* w = write
* x = execute

### Check permissions

```bash
ls -l
```

### Change permissions

```bash
chmod +x file.sh
```

---

#  8. Package Management (Ubuntu in WSL)

Most WSL setups use Ubuntu.

### Update system

```bash
sudo apt update
sudo apt upgrade
```

### Install software

```bash
sudo apt install git
```

---

#  9. Useful Everyday Commands

### Clear terminal

```bash
clear
```

### Check command history

```bash
history
```

### Check running processes

```bash
ps
top
```

---

#  10. Pro Tips (VERY useful)

### ✅ Auto-complete

Press `TAB` to complete commands/files

### ✅ Use arrows

⬆️ to reuse previous commands

### ✅ Combine commands

```bash
mkdir test && cd test
```

---

#  11. Simple Practice (do this now)

Try this in WSL:

```bash
mkdir linux-practice
cd linux-practice
touch file1.txt
echo "Hello Linux" > file1.txt
cat file1.txt
```

---

#  12. Why this matters (for you)

Since you're doing:

* React ⚛️
* Node/Express 🚀
* Backend work

Linux helps with:

* Running servers
* Git workflows
* Deployment
* File management

---

Good question—this is one of the most important things when using WSL 👍

---

#  Access Windows Files from WSL

In WSL, your Windows drives are mounted inside `/mnt`

### 📂 Basic rule:

```
C:\  →  /mnt/c/
D:\  →  /mnt/d/
E:\  →  /mnt/e/
```

---

# 📁 1. Go to your Windows C drive

```bash
cd /mnt/c
ls
```

Now you're inside your Windows C: drive 🎉

---

# 📂 2. Access Desktop, Downloads, etc.

Example (your Windows username matters):

```bash
cd /mnt/c/Users/YourUsername/Desktop
```

 Replace `YourUsername` with your actual Windows username

---

#  Example

```bash
cd /mnt/c/Users/Suman/Desktop
ls
```

You’ll see all your Desktop files inside WSL

---

#  3. Work with Windows files

You can do everything:

### View file

```bash
cat file.txt
```

### Edit with nano

```bash
nano file.txt
```

### Copy file

```bash
cp file.txt /home/your-linux-user/
```

---

#  4. Copy between Windows ↔ WSL

### From Windows → WSL

```bash
cp /mnt/c/Users/Suman/Desktop/file.txt ~/
```

### From WSL → Windows

```bash
cp file.txt /mnt/c/Users/Suman/Desktop/
```

---

#  5. Open Windows folder in VS Code

If you have VS Code installed:

```bash
code .
```

Or open a Windows folder:

```bash
cd /mnt/c/Users/Suman/Desktop/project
code .
```

---

#  6. Open current WSL folder in Windows Explorer

```bash
explorer.exe .
```

This opens the current Linux folder in Windows File Explorer 🤯

---

#  Important Tips (VERY IMPORTANT)

### ❗ 1. Performance tip

* Better to keep your projects in:

```
~/ (Linux home)
```

instead of `/mnt/c`

 Why?

* Faster performance
* Fewer bugs with Node, npm, etc.

---

### ❗ 2. File permissions

Windows and Linux permissions are different
Sometimes files behave weirdly—this is normal in WSL

---

#  Pro workflow (best practice)

👉 Do this:

* Keep code in:

```
/home/your-user/projects
```

👉 Access Windows only when needed:

* Downloads
* Documents
* External files

---

#  Quick Practice

Try this:

```bash
cd ~
mkdir test
cd test
echo "Hello from WSL" > test.txt

cp test.txt /mnt/c/Users/YourUsername/Desktop/
```

Now check your Desktop in Windows 👀

---
Perfect 👍 let’s level you up properly.

I’ll show you a **real developer setup inside WSL** + some **power Linux skills** you’ll actually use in React/Node projects.

---

# 🚀 1. Best WSL Dev Setup (IMPORTANT)

👉 First rule:
**Do NOT code inside `/mnt/c`**
Use Linux home instead:

```bash
cd ~
mkdir projects
cd projects
```

---

## ⚙️ Install Node.js (correct way)

Avoid `apt install nodejs` ❌ (old version)

Use **Node Version Manager (nvm)**:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source ~/.bashrc
```

Then install Node:

```bash
nvm install --lts
node -v
npm -v
```

---

## 🧰 Install useful tools

```bash
sudo apt update
sudo apt install git curl build-essential
```

---

## 🔗 Setup Git

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

---

## 💻 VS Code + WSL

Install extension:
👉 **“WSL” extension in VS Code**

Then from WSL:

```bash
code .
```

Now you're coding directly inside Linux 🔥

---

# 🔥 2. Real Project Workflow

Example:

```bash
cd ~/projects
npx create-react-app myapp
cd myapp
npm start
```

or Vite:

```bash
npm create vite@latest
npm install
npm run dev
```

---

# ⚡ 3. Powerful Linux Features (GAME CHANGERS)

## 🔗 Pipes (`|`) — combine commands

```bash
ls | grep txt
```

👉 Meaning:

* list files
* filter only `.txt`

---

## 🔍 Search like a pro

```bash
grep "hello" file.txt
```

Search in all files:

```bash
grep -r "hello" .
```

---

## 📦 Redirect output

```bash
echo "Hello" > file.txt      # overwrite
echo "World" >> file.txt     # append
```

---

## 🧠 Chain commands

```bash
mkdir project && cd project && npm init -y
```

---

# 🧪 4. Process Management (VERY useful)

See running apps:

```bash
ps aux
```

Live monitor:

```bash
top
```

Kill process:

```bash
kill PID
```

---

# 📡 5. Networking Basics

Check port usage:

```bash
lsof -i :3000
```

Kill port:

```bash
kill -9 PID
```

---

# 🧠 6. Environment Variables

```bash
export NAME=Suman
echo $NAME
```

Permanent:

```bash
nano ~/.bashrc
```

Add:

```bash
export NAME=Suman
```

---

# 🤖 7. Simple Shell Script (automation)

Create script:

```bash
nano script.sh
```

Add:

```bash
#!/bin/bash
echo "Hello Developer"
```

Make executable:

```bash
chmod +x script.sh
./script.sh
```

---

# 🧩 8. WSL + Windows Workflow (REAL USE)

👉 Example:

* Download file in Windows
* Process in Linux
* Send back

```bash
cp /mnt/c/Users/Suman/Downloads/data.json ~/
cat data.json
cp data.json /mnt/c/Users/Suman/Desktop/
```

---

# ⚠️ 9. Common Mistakes (avoid these)

❌ Using Node in Windows + WSL mixed
❌ Saving project in `/mnt/c`
❌ Not using `nvm`
❌ Forgetting `sudo apt update`

---

# 🧠 10. What YOU should practice now

Do this step-by-step:

```bash
cd ~/projects
mkdir test-app
cd test-app
npm init -y
touch index.js
echo "console.log('Hello WSL')" > index.js
node index.js
```

---






