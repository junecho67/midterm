
document.addEventListener("readystatechange", () => {
    let survey = document.querySelector("#survey");
    let other_diet = survey.querySelector("#other-diet");
    let other_diet_text = survey.querySelector("#other-diet-text");
    other_diet.addEventListener("click", (evt) => {

        other_diet_text.disabled = false;
    })

    survey.querySelectorAll('input[name="dietary restrictions"]').forEach(radio_btn => {
        radio_btn.addEventListener("click", () => {
            if (radio_btn !== other_diet) {
                other_diet_text.disabled = true; // Disable text input if another option is selected
            }
        });
    });


    let other_dietary_goals = survey.querySelector("#other-dietary-goals");
    let other_dietary_goals_text = survey.querySelector("#other-dietary-goals-text");
    other_dietary_goals.addEventListener("click", (evt) => {
        if (other_dietary_goals.checked) {
            other_dietary_goals_text.disabled = false;
        }
        else {
            other_dietary_goals_text.disabled = true;
        }
    })

    survey.querySelector("#no-allergies").addEventListener("click", (evt) => {
        allergies_text.disabled = true;
    })

    let allergies = survey.querySelector("#yes-allergies");
    let allergies_text = survey.querySelector("#yes-allergies-text");
    allergies.addEventListener("click", (evt) => {
        allergies_text.disabled = false;
    })


    let submit_btn = document.querySelector("#submit-btn");
    submit_btn.addEventListener("click", (evt) => {
        evt.preventDefault();
        let diet_error = survey.querySelector("#diet-error");
        let selected_diet = survey.querySelector('input[name="dietary restrictions"]:checked');
        if (selected_diet) {
            if ((selected_diet.value === "other-diet") & (survey.querySelector("#other-diet-text").value === "")) {
                diet_error.innerHTML = "Please enter a diet you want to follow";
            }
            else {
                diet_error.innerHTML = "";
            }
        }
        else {
            diet_error.innerHTML = "Please select a choice";
        }

        let selected_allergy = survey.querySelector('input[name="allergies"]:checked');
        let unwanted_foods_error = survey.querySelector("#unwanted-foods-error");
        if (selected_allergy) {
            if ((selected_allergy.value === "yes-allergies") & (survey.querySelector("#yes-allergies-text").value === "")) {
                unwanted_foods_error.innerHTML = "Please enter any allergies you have";

            }
            else {
                unwanted_foods_error.innerHTML = "";
            }
        }
        else {
            unwanted_foods_error.innerHTML = "Please select a choice";
        }

        let selected_goals = survey.querySelector('input[name="dietary-goals"]:checked');
        let dietary_goals_error = survey.querySelector("#dietary-goals-error");
        if (selected_goals) {
            if (selected_goals.value === "other-dietary-goals" & (survey.querySelector("#other-dietary-goals-text").value === "")) {
                dietary_goals_error.innerHTML = "Please enter a dietary goal";
            }
            else {
                console.log(selected_goals.value);
                dietary_goals_error.innerHTML = "";
            }
        }

        if ((diet_error.innerHTML === "") & (unwanted_foods_error.innerHTML === "")) {
            if (dietary_goals_error.innerHTML === "") {
                window.location.href = "results.html";
            }
        }



    })
})
