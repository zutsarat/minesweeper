#!/usr/bin/python3

import eel
import engine
from list import gameSession
import os
#import tkinter as tk

def inputbox(title, message, button_text):
    root = tk.Tk()
    root.title(title)
    root.resizable(False, False)

    label = tk.Label(text=message)
    label.pack()

    text = ''
    def on_return(e=None):
        nonlocal text
        text = textbox.get()
        root.destroy()

    textbox = tk.Entry(width=40)
    textbox.bind('<Return>', on_return)
    textbox.pack()
    textbox.focus_set()

    button = tk.Button(text=button_text, command=on_return)
    button.pack()

    root.mainloop()

    return text

size = 8#int(inputbox("minesweeper", "Введи размер поля:", "Далее"))
eel.init(os.getcwd()+'/web')
@eel.expose
def pyf(x,y):
	eel.front(str(gameSession().first(size,x,y)))
eel.start('main.html?size='+str(size))
