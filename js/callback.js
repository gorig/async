function downloadFile(url, resultCallback) {
    setTimeout(() => {
        resultCallback(url);
    }, 1000);
}

function downloadInfo(url, completionCallback) {
    downloadFile(url + '/api/info', (info) => {
        console.log(info);
        downloadFile(url + '/api/status', (status) => {
            console.log(status);
            downloadFile(url + '/api/vehicle', (vehicle) => {
                console.log(vehicle);
                if (completionCallback) completionCallback();
            })
        })
    });
}

for (let i = 0; i < 10; i++) {
    downloadInfo('http://www.example.com/' + i);
}

/*function download(i) {
    downloadInfo('http://www.example.com/' + i, () => {
        if (i < 10) {
            download(i+1);
        }
    });
}
download(0);
*/