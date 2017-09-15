function downloadFile(url, resultCallback) {
    setTimeout(() => {
        resultCallback(url);
    }, 1000);
}

function downloadFilePromise(url) {
    return new Promise((resolve) => {
        downloadFile(url, (result) => {
            resolve(result);
        })
    });
}

function downloadInfo(url) {
    return downloadFilePromise(url + '/api/info').then((info) => {
        console.log(info);
        return downloadFilePromise(url + '/api/status');
    }).then((status) => {
        console.log(status);
        return downloadFilePromise(url + '/api/vehicle');
    }).then((vehicle) => {
        console.log(vehicle);
    });
}

for (let i = 0; i < 10; i++) {
    downloadInfo('http://www.example.com/' + i);
}

/*function download(i) {
    downloadInfo('http://www.example.com/' + i).then((result) => {
        if (i < 10) {
            download(i + 1);
        }
    });
}
download(0);
*/