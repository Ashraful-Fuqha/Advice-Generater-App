const text_advice = document.querySelector('#Advice')
const num_advice = document.querySelector('#Advice_num')
const generate_btn = document.querySelector('#dice')

const advice_fetch = async () =>{
    const API_Request = new Request('https://api.adviceslip.com/advice')

    const fetch_Response =  await fetch(API_Request);

    const reponse_text = await fetch_Response.text()

    const advice = JSON.parse(reponse_text)

    console.log(advice)

    populate_id(advice)
    populate_advice(advice)
}

function populate_id(obj){
    num_advice.textContent = obj.slip.id
}

function populate_advice(obj){
    text_advice.textContent = obj.slip.advice
}

dice.addEventListener('click' , advice_fetch);