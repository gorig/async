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

async function downloadInfo(url) {
    let info = await downloadFilePromise(url + '/api/info');
    console.log(info);

    let status = await downloadFilePromise(url + '/api/status');
    console.log(status);

    let vehicle = await downloadFilePromise(url + '/api/vehicle');
    console.log(vehicle);
}

for (let i = 0; i < 10; i++) {
    downloadInfo('http://www.example.com/' + i);
}

/*async function download() {
    for (let i = 0; i < 10; i++) {
        await downloadInfo('http://www.example.com/' + i);
    }
}
download();*/
