document.addEventListener("DOMContentLoaded", () => {
    const survey = document.querySelector("#survey");

    // Enable/disable "Other Diet" text input
    const other_diet = survey.querySelector("#other-diet");
    const other_diet_text = survey.querySelector("#other-diet-text");
    other_diet.addEventListener("click", () => {
        other_diet_text.disabled = false;
    });

    survey.querySelectorAll('input[name="dietary restrictions"]').forEach(radio_btn => {
        radio_btn.addEventListener("click", () => {
            if (radio_btn !== other_diet) {
                other_diet_text.disabled = true;
            }
        });
    });

    // Enable/disable "Other Dietary Goals" text input
    const other_dietary_goals = survey.querySelector("#other-dietary-goals");
    const other_dietary_goals_text = survey.querySelector("#other-dietary-goals-text");
    other_dietary_goals.addEventListener("click", () => {
        other_dietary_goals_text.disabled = !other_dietary_goals.checked;
    });

    // Enable/disable allergies text input
    const allergies = survey.querySelector("#yes-allergies");
    const allergies_text = survey.querySelector("#yes-allergies-text");
    const no_allergies = survey.querySelector("#no-allergies");

    allergies.addEventListener("click", () => {
        allergies_text.disabled = false;
    });

    no_allergies.addEventListener("click", () => {
        allergies_text.disabled = true;
    });

    // Submit button click
    const submit_btn = document.querySelector("#submit-btn");
    submit_btn.addEventListener("click", () => {
        const diet_error = survey.querySelector("#diet-error");
        const unwanted_foods_error = survey.querySelector("#unwanted-foods-error");
        const dietary_goals_error = survey.querySelector("#dietary-goals-error");

        const selected_diet = survey.querySelector('input[name="dietary restrictions"]:checked');
        const selected_allergy = survey.querySelector('input[name="allergies"]:checked');
        const selected_goals = survey.querySelector('input[name="dietary-goals"]:checked');

        diet_error.innerHTML = "";
        unwanted_foods_error.innerHTML = "";
        dietary_goals_error.innerHTML = "";

        // Validate dietary restrictions
        if (selected_diet) {
            if (selected_diet.value === "other-diet" && other_diet_text.value.trim() === "") {
                diet_error.innerHTML = "Please enter a diet you want to follow";
            }
        } else {
            diet_error.innerHTML = "Please select a dietary restriction choice";
        }

        // Validate allergies
        if (selected_allergy) {
            if (selected_allergy.value === "yes-allergies" && allergies_text.value.trim() === "") {
                unwanted_foods_error.innerHTML = "Please enter any allergies you have";
            }
        } else {
            unwanted_foods_error.innerHTML = "Please select a choice for allergies";
        }

        // Validate dietary goals
        if (selected_goals) {
            if (selected_goals.value === "other-dietary-goals" && other_dietary_goals_text.value.trim() === "") {
                dietary_goals_error.innerHTML = "Please enter a dietary goal";
            }
        }

        // Redirect to results.html if all validations pass
        if (diet_error.innerHTML === "" && unwanted_foods_error.innerHTML === "" && dietary_goals_error.innerHTML === "") {
            window.location.href = "results.html";
        }
    });
});
