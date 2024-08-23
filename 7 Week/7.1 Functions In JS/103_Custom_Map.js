function main() {
    const array = [2, 4, 6, 2, 7, 8];
    function customMap(input, fun) {
        let arr = []
        for (let num of input) {
            arr.push(fun(num))
        }
        return arr
    }
    function square(num) {
        return num * num
    }

    function cube(num) {
        return num * num * num
    }
    console.log(customMap(array, square));
    return customMap;
}
main()