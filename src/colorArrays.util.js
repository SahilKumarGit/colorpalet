const calculate = (type) => {
    const arr = [];
    //deg
    for (let i = 0; i < 360; i++) {
        // palet
        const temp = [];
        let s = 100;
        let l = 100;
        for (let j = 0; j < 20; j++) {
            temp.push(type === 'hsl' ? `hsl(${i}deg ${s}% ${l}%)` : HSLToRGB(i, s, l));
            l -= 5;
        }
        arr.push(temp);
    }

    return arr;
}

export function HSLToRGB(h, s, l) {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
    }

    return "#" +
        Math.floor((r + m) * 255).toString(16).padStart(2, '0') +
        Math.floor((g + m) * 255).toString(16).padStart(2, '0') +
        Math.floor((b + m) * 255).toString(16).padStart(2, '0');
}


export default calculate