function country() {
    const season = document.getElementById("season").value;
    let country ="";
    if (season==="Winter"){
        country="Норвегия - прекрасный выбор для тех, кто любит зиму!"
    }
    else if (season==="Spring"){
        country="Думаю, Нидерланды Вам в самый раз!"
    }
    else if(season==="Summer"){
        country="Отправляйтесь во Вьетнам, там всегда солнечно и жарко!"
    }
    else if(season==="Autumn"){
        country="Для Вас прекрасной страной будет Канада, скорее отправляйтесь туда!"
    }
    else{
        country="Приезжайте в Россию! Для Вас найдем любой климат."
    }
    document.getElementById("result").textContent=country
}