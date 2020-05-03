

const delay = function (ms) {
    return new Promise((resolve => {
        setTimeout(() => {
            console.log("-------" + ms + "-------")
            resolve()
        }, ms)
    }))
};
async function asyncTodo() {
    //// try {                //// => try обертка для асинхонных функций
    ////                              где надо найти ошибку
    //// } catch (err) { }            перехватываем ошибку
    console.log("started ...");
    try {
        await delay(1000);
        await delay(500);
        let response = await fetch(url); //// => Запихиваем в переменные данные с сервера
        let data = await response.json() //// => конверимруем с json
        await console.log(data)
    } catch (err) {
        console.error(err)
    } finally {
        console.log("-- completed --")
    }
}
asyncTodo(2000).then(()=>{console.log("-- almost comleted --")});
/// => ^  then выполнит функцию после полного вполнения всех