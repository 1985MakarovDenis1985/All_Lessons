import {createStore} from "./createStore";
import {rootReducer} from "./Redux/rootReducer";
// import {DECREMENT, INCREMENT} from "./Redux/types";
import {increment, decrement} from "./Redux/actions";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const async = document.getElementById("async");
const themeBtn = document.getElementById("btnChangeTheme");

const store = createStore(rootReducer, 0);
window.store = store;


let state = 0;
addBtn.addEventListener("click", () => {
    store.dispatch(increment())
});
removeBtn.addEventListener("click", () => {
    store.dispatch(decrement())

});
async.addEventListener("click", () => {

});

themeBtn.addEventListener("click", () => {
});

store.subscribe(()=>{
    state = store.getState();
    counter.textContent = state
})




