async function download(url, filename) {
    if (!url || !filename) {
        throw new Error("url and filename are required");
    }
    await fetch(url, {
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
        },
    })
        .then((response) => response.blob())
        .then((blob) => URL.createObjectURL(blob))
        .then((uril) => {
        let link = document.createElement("a");
        link.href = uril;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}
export default download;
