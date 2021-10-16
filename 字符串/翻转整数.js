/**
 *  输入123  ---- 321   120---21
 */
    //极值
const MAX = 2147483647;
const MIN = -2147483648;

const reverse = (x) => {
    if (typeof x !== "number") return;

    const rest = x > 0 ? String(x).split('').reverse().join()
        : String(x).slice(1).split('').reverse().join();

    const result = rest > 0 ? parseInt(rest, 10) : 0 - parseInt(rest, 10);

    if (result >= MIN && result <= MAX) return result;
    return 0;
};

//根据 123 %10 取模 3 （12）  然后  取 2   留下（1）  321
const reverse2 = (x) => {
    let int = Math.abs(x)
    let num = 0

    while (int !== 0) {
        //取num的最后一位开始拼新数
        num = (int % 10) + (num * 10);
        // 去掉末尾数
        int = Math.floor(int / 10)
    }

    if (num <= MIN && num >= MAX) return 0;

    if (x > 0) return num;
    return num * -1;


}