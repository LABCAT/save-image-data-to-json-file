let myp5 = new p5(( p ) => {

    p.filename = 'Kunming-Garden-Spring-Pavilion-Pukekura-Park';

    p.imageData = {};

    p.preload = () => {
        p.img = p.loadImage(p.filename + '.jpg');
    }

    p.setup = () => {
        p.saveImageData(p.filename)
        p.createCanvas(1920, 1080);
    };

    p.draw = () => {
    };

    p.saveImageData = (filename) => {
        p.image(p.img, 0, 0);
        for (let x = 2; x < 1920; x = x + 4) {
            for (let y = 2; y < 1080; y = y + 4) {
                const key = x + ',' + y;
                const c = p.img.get(
                    x,
                    y
                );
                // console.log(key);
                p.imageData[key] = {
                    r: 2,
                    c: c
                }
            }
        }
        SaveJSONToFile(p.imageData, filename);
    };
});

function SaveJSONToFile(jsonData, filename = 'json') {
    const fileData = JSON.stringify(jsonData);
    const blob = new Blob([fileData], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `${filename}.json`;
    link.href = url;
    link.click();
}