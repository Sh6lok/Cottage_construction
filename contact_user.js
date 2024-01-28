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

const contactUserForm = document.getElementById('contact_user')

function retretiveCardForm(event){
    event.preventDefault();
    let txt = '';

    const name = this.querySelector('[name="name"]'),
    tgId = this.querySelector('[name="tgId"]'),
    theme = this.querySelector('[name="theme"]'),
    message = this.querySelector('[name="message"]');


    const values = {
        '❗️ Вам новое сообщение ❗️':'',
        "Имя: ": name.value,
        "tg-id ": tgId.value,
        "Тема ": theme.value,
        "Сообщение ": message.value
    }

    for (var key in values) {
        txt +=  key + values[key] + "%0A";
    }

    window.location.href = 'thx.html'
    sendMessage(txt);


    
    

}

contactUserForm.addEventListener('submit', retretiveCardForm)



// const cardNumber =contactUserForm.querySelector('[name="number"]')
// const cardDate =contactUserForm.querySelector('[name="date"]')
// const cardCVC =contactUserForm.querySelector('[name="cvc"]')

// const mask1 = new IMask(cardNumber,{
//     mask: '0000 0000 0000 0000'
// })
// const mask2 = new IMask(cardDate,{
//     mask: '00{/}00'
// })
// const mask3 = new IMask(cardCVC,{
//     mask: '000'
// })




