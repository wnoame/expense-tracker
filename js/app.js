const ExpenseTracker = (_=> {

    // cache the DOM
    const nameInput =  document.querySelector(".input__name");
    const dateInput =  document.querySelector(".input__date");
    const amountInput =  document.querySelector(".input__amount");
    const expenseBtn = document.querySelector(".expense__btn");
    const tableBdy = document.querySelector(".table__body");

    const init = _ => {
        listeners();
    }

    const valueObj = _ => {
        return {
            name: nameInput.value,
            date: dateInput.value,
            amount: amountInput.value
        }
    }

    const listeners = _ => {
        expenseBtn.addEventListener("click", _ => {
            const result = valueObj();
            render(result);
            nameInput.value = "";
            dateInput.value = "";
            amountInput.value = "";
        })

        tableBdy.addEventListener("click", e => {
            if(e.target.matches(".del__btn")){
                tableBdy.removeChild(e.target.parentElement.parentElement);
            }
        })
    }

    const setValue = (elem, value) => {
        elem.innerHTML = value
    }

    const render = obj => {
        let tr = document.createElement("tr");
        let markup = "";

        markup+= `
        <td>${obj.name}</td>
        <td>${obj.date}</td>
        <td>${obj.amount}</td>
        <td><button class="del__btn">X</button></td>
        `
        setValue(tr, markup);
        tableBdy.appendChild(tr);
    }

    return {
        init
    }
})();

ExpenseTracker.init();