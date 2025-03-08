const button = document.querySelector("#generator-button");
const adviceText = document.querySelector("#advice-text");
const adviceId = document.querySelector("#advice-id");

async function generateRandomAdvice() {
	const url = "https://api.adviceslip.com/advice";

	try {
		const response = await fetch(url);
        return await response.json();
	} catch (error) {
		throw new Error("It was not possible to generate a random advice");
	}
}

async function displayAdvice() {
	const advice = await generateRandomAdvice();
	const returnedAdvice = advice.slip.advice;
	const returnedAdviceId = advice.slip.id;

	adviceText.innerText = returnedAdvice;
	adviceId.innerText = returnedAdviceId;
}