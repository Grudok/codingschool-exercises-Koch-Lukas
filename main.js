let decrement_count = function () {
    let count = parseInt(document.getElementById("result").innerText);

    if (count > 0){
        count -= 1;
        setcounter(count);
    } else {
        alert("Can not count below 0!");
    }
};

let increment_count = function () {
    let count = parseInt(document.getElementById("result").innerText);
    
    count += 1;
    setcounter(count);
};

let setcounter = function(count){
    localStorage.setItem("result",count);
    document.getElementById("result").innerText = count; 
}

let init_counter = function (count) {

    let decrement = document.getElementById("decrement");
    let increment = document.getElementById("increment");
    
    decrement.addEventListener("click", decrement_count);
    increment.addEventListener("click", increment_count);
    document.getElementById("result").innerText = count;

};

window.addEventListener(
    "load",
    function() {
        let count = localStorage.getItem("result");
        init_counter(count);
    }
);

   



    

    





    


