Great choice—**Neovim** is one of those tools that feels hard at first but becomes insanely powerful once it “clicks.” I’ll walk you through it step-by-step like a practical guide 👇

---

# 🚀 1. What is Neovim?

**Neovim** is a modern, faster, extensible version of Vim.

👉 Key idea:

* You don’t use a mouse
* You control everything with the keyboard
* It’s **modal** (this is the most important concept)

---

# 🧠 2. The MOST IMPORTANT concept → Modes

Neovim has modes. If you understand this, you’re already halfway there.

### 🔹 Normal Mode (default)

* For navigation & commands
* Press `Esc` to come here anytime

### 🔹 Insert Mode

* For typing text

```bash
i   # insert before cursor
a   # insert after cursor
```

### 🔹 Visual Mode

* For selecting text

```bash
v
```

---

# 🎮 3. First time opening

```bash
nvim file.txt
```

---

# ✍️ 4. Basic Editing

### Enter insert mode

```bash
i
```

### Exit insert mode

```bash
Esc
```

---

# 💾 Save & Quit (VERY IMPORTANT)

In normal mode:

```bash
:w     # save
:q     # quit
:wq    # save + quit
:q!    # force quit
```

---

# 🧭 5. Movement (core power)

Forget arrow keys ❌
Use these:

```bash
h → left
l → right
j → down
k → up
```

---

### Jump faster

```bash
0   # start of line
$   # end of line
gg  # top of file
G   # bottom of file
```

---

# ✂️ 6. Copy, Cut, Paste

### Delete (cut)

```bash
dd      # delete line
d$      # delete to end
```

### Copy (yank)

```bash
yy      # copy line
```

### Paste

```bash
p
```

---

# 🔍 7. Search

```bash
/word
```

* `n` → next
* `N` → previous

---

# ↩️ 8. Undo / Redo

```bash
u        # undo
Ctrl + r # redo
```

---

# 🧪 9. Practice This (important)

Open file:

```bash
nvim test.txt
```

Then try:

1. Press `i` → type something
2. Press `Esc`
3. Move using `hjkl`
4. Press `dd`
5. Press `u`
6. Save with `:wq`

---

# ⚙️ 10. Basic Config (make it better)

Open config:

```bash
nvim ~/.config/nvim/init.vim
```

Add:

```vim
set number
set relativenumber
set tabstop=2
set shiftwidth=2
set expandtab
```

Save and restart Neovim

---

# 🔌 11. Plugins (this is where Neovim becomes 🔥)

You’ll eventually want:

* File explorer
* Autocomplete
* Syntax highlighting

Popular plugin manager:

👉 **lazy.nvim**

If you want, I can set up a **full modern Neovim config for React/Node dev** 👀

---

# 🧠 12. Mental Model (this helps a LOT)

Think like this:

👉 “I’m not typing text, I’m giving commands”

Example:

```bash
d + d  = delete line
y + y  = copy line
```

---

# ⚡ 13. Beginner Cheat Sheet

| Action      | Key    |
| ----------- | ------ |
| Insert      | `i`    |
| Exit insert | `Esc`  |
| Save        | `:w`   |
| Quit        | `:q`   |
| Move        | `hjkl` |
| Delete line | `dd`   |
| Copy line   | `yy`   |
| Paste       | `p`    |

---

Perfect—let’s turn your Neovim into a **modern coding IDE** inside WSL 🔥
I’ll give you a **clean, beginner-friendly setup** (no confusion, no mess).

---

# 🚀 1. Install Neovim (latest)

```bash
sudo apt update
sudo apt install neovim
```

Check:

```bash
nvim --version
```

---

# 📁 2. Create Neovim config folder

```bash
mkdir -p ~/.config/nvim
nvim ~/.config/nvim/init.lua
```

👉 We’ll use **Lua config** (modern way, better than `init.vim`)

---

# 🔌 3. Install Plugin Manager

We’ll use **lazy.nvim**

Run this:

```bash
git clone https://github.com/folke/lazy.nvim.git ~/.local/share/nvim/lazy/lazy.nvim
```

---

# 🧠 4. Add BASIC config (copy this)

Paste this inside `init.lua`:

```lua
-- Bootstrap lazy.nvim
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
vim.opt.rtp:prepend(lazypath)

require("lazy").setup({
  -- File explorer
  {
    "nvim-tree/nvim-tree.lua",
    dependencies = {"nvim-tree/nvim-web-devicons"},
    config = function()
      require("nvim-tree").setup()
      vim.keymap.set("n", "<C-n>", ":NvimTreeToggle<CR>")
    end
  },

  -- Fuzzy finder
  {
    "nvim-telescope/telescope.nvim",
    dependencies = {"nvim-lua/plenary.nvim"},
    config = function()
      local builtin = require("telescope.builtin")
      vim.keymap.set("n", "<C-p>", builtin.find_files)
      vim.keymap.set("n", "<C-f>", builtin.live_grep)
    end
  },

  -- Syntax highlighting
  {
    "nvim-treesitter/nvim-treesitter",
    build = ":TSUpdate",
    config = function()
      require("nvim-treesitter.configs").setup({
        highlight = { enable = true }
      })
    end
  },

  -- LSP (autocomplete + intelligence)
  {
    "neovim/nvim-lspconfig"
  }
})

-- Basic settings
vim.opt.number = true
vim.opt.relativenumber = true
vim.opt.tabstop = 2
vim.opt.shiftwidth = 2
vim.opt.expandtab = true
```

---

# ⚡ 5. Start Neovim

```bash
nvim
```

👉 It will automatically install plugins 🎉

---

# 🎮 6. Your New Superpowers

## 📁 File Explorer

```bash
Ctrl + n
```

---

## 🔍 Search files

```bash
Ctrl + p
```

---

## 🔎 Search text in project

```bash
Ctrl + f
```

---

# 🧠 7. LSP (autocomplete)

Right now basic LSP is installed, but no language server yet.

For JavaScript / React:

```bash
npm install -g typescript typescript-language-server
```

---

# ⚙️ Add this to your config (LSP setup)

Add at bottom of `init.lua`:

```lua
local lspconfig = require("lspconfig")

lspconfig.tsserver.setup({})
```

---

# 🔥 8. Recommended Dev Workflow

```bash
cd ~/projects/myapp
nvim .
```

Then:

* `Ctrl + n` → open file tree
* navigate files
* press `Enter` to open
* start coding

---

# 🧠 9. Essential Neovim Habits

👉 Always:

* `Esc` → go to normal mode
* Use `:w` often
* Use `Ctrl + p` instead of browsing folders

---

# ⚠️ 10. Common beginner mistakes

❌ Using mouse
❌ Staying in insert mode too long
❌ Not learning movement (`hjkl`, `gg`, `$`)
❌ Not using search

---

# 🧪 11. Practice Task (do this)

```bash
cd ~/projects
mkdir nvim-test
cd nvim-test
nvim .
```

Then:

* Open file tree (`Ctrl+n`)
* Create a file
* Write code
* Search with `Ctrl+p`

---

# 🚀 Next Level (I highly recommend)

If you want, I can upgrade this into:

### 🔥 PRO Neovim Setup

* Auto-completion menu (like VS Code)
* Git integration
* Status bar
* Themes
* Auto formatting

### 🧠 Advanced Skills

* Text objects (edit FAST)
* Macros (automation)
* Custom keybindings

---
