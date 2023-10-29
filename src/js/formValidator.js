import Inputmask from "inputmask";
import Rules from "./validateServices";

const validateRules = new Rules();

document.addEventListener("DOMContentLoaded", function () {
    Inputmask({ mask: "+375 (99) 999-99-99" }).mask(
        document.getElementById("phone"),
    );

    const form = document.querySelector(".form");

    const validatedForm = (form) => {
        let error = 0;
        const inputsReq = form.querySelectorAll("._req");

        inputsReq.forEach((input) => {
            validateRules.formRemoveError(input);
            if (input.classList.contains("_email")) {
                if (!validateRules.emailTest(input)) {
                    validateRules.formAddError(input);
                    error++;
                }
            } else if (input.classList.contains("_phone")) {
                if (!validateRules.phoneTest(input)) {
                    validateRules.formAddError(input);
                    error++;
                }
            } else if (!input.value) {
                validateRules.formAddError(input);
                error++;
            }
        });

        return error;
    };

    const formSend = (e) => {
        e.preventDefault();

        const error = validatedForm(form);

        if (error === 0) {
            const formData = new FormData(form);
        }
    };

    form.addEventListener("submit", formSend);
});
