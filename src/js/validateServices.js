export default class Rules {
    formAddError = (input) => {
        input.classList.add("_err");
        input.nextElementSibling.classList.remove("hidden");
    };

    formRemoveError = (input) => {
        input.classList.remove("_err");
        input.nextElementSibling.classList.add("hidden");
    };

    emailTest = (input) => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
            input.value,
        );
    };

    phoneTest = (input) => {
        return /^\+375\s\((25|29|33|44)\)\s\d{3}-\d{2}-\d{2}$/.test(
            input.value,
        );
    };
}
