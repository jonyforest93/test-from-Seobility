const submitForm = async (formData, form) => {
    try {
        const response = await fetch("http://localhost:9090/api/registration", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.status === "success") {
            const msg = document.querySelector(".succsess-res");
            msg.querySelector("p").innerText = data.msg;
            msg.classList.remove("hidden");

            setTimeout(() => {
                document.querySelector(".succsess-res").classList.add("hidden");
            }, 3000);

            form.reset();
        } else if (data.status === "error") {
            const msg = document.querySelector(".error-res");

            msg.querySelector("p").innerText = `${
                Object.keys(data.fields)[0]
            }: wrong data in ${Object.keys(data.fields)[0]} input`;
            msg.classList.remove("hidden");

            setTimeout(() => {
                document.querySelector(".error-res").classList.add("hidden");
            }, 3000);
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
};

export default submitForm;
