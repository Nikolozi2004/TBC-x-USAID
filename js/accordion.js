// Accordion

document.querySelectorAll(".accordion-question").forEach(accordionQuestion => {
    accordionQuestion.addEventListener("click", () => {
        const activeAccordionQuestion = document.querySelector(".accordion-question.active");

        if (activeAccordionQuestion && activeAccordionQuestion !== accordionQuestion) {
            activeAccordionQuestion.classList.toggle("active");
            activeAccordionQuestion.querySelector(".accordion-arrow").classList.remove("arrow-active");
            activeAccordionQuestion.nextElementSibling.style.maxHeight = 0;
        }

        accordionQuestion.classList.toggle("active");
        accordionQuestion.querySelector(".accordion-arrow").classList.toggle("arrow-active");
        const accordionAnswer = accordionQuestion.nextElementSibling;
        accordionAnswer.style.maxHeight = accordionQuestion.classList.contains("active") ? `${accordionAnswer.scrollHeight}px` : 0;
    });
});
