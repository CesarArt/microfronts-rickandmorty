export function generateObjectId() {
    const timestamp = Math.floor(Date.now() / 1000).toString(16);
    const machine = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    const pid = Math.floor(Math.random() * 0xFFFF).toString(16).padStart(4, '0');
    const increment = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');

    return (timestamp + machine + pid + increment).padStart(24, '0');
}