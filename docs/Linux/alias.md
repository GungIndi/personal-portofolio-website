---
sidebar_position: 3
---
# Alias

Aliases are like that shortcut when you wanna invite your homie to game. Why type out "Bro ayo kita main game" every time when you can just say "on" or "login" and they instantly get it?. That's exactly aliases in linux.

You can define aliases directly in the .bashrc file or you can define it in ~/.bash_aliases. Here's how you can use it

1. **Make a .bash_aliases file**
```sh
touch ~/.bash_aliases
```

2. **Open in Text Editor**
```sh
vi ~/.bash_aliases
```

3. **Write Aliases**
```sh title='.bash_aliases'
# Example Alias
alias ..="cd .."
alias ...="cd ../.."
alias home="cd ~"
alias see="ls -la"
alias k="kubectl"
alias update="sudo apt update && sudo apt upgrade -y"
```

4. **Apply alias file**
```sh
source ~/.bash_aliases
```
