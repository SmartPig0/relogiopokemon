var alarmSound = new Audio();
alarmSound.src = './lib/Abertura Pokemon.mp3';

var clockContainer = document.getElementById("clock-container");
var diamesano = document.getElementById("diasemana");


function setAlarm(){
   
  var alarm = new Date();
    var hora = alarm.getHours();
    var minutos = alarm.getMinutes();
    var segundos = alarm.getSeconds();
    var dianumero = alarm.getDay();
    var dia = alarm.getDate();
    var mes = alarm.getMonth();
    var ano = alarm.getFullYear();
    var diadesemana = new Array ('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta');
    var mesdoano = new Array ('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    if(hora<10){
      hora="0"+hora;
  }
  if(minutos<10){
      minutos="0" + minutos;
  }
  if(segundos<10){
      segundos="0" + segundos;
  }
    
    clockContainer.innerHTML = hora + ':' + minutos+':'+segundos;
    diasemana.innerHTML = diadesemana[dianumero]+ ', ' + dia + ' de ' + mesdoano[mes] + ' de '+ ano;
}

function setAlarme(){

  var ms = document.getElementById('alarmTime').valueAsNumber;
   
  var alarm = new Date(ms);
  var alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
  var differenceInMs = alarmTime.getTime() - (new Date()).getTime();

if(isNaN(ms)){
  alert('Horário Inválido!');
  return
}

if(differenceInMs < 0) {
  alert('Este horário já passou!');
  return;
}

alert('Horario definido!');
setTimeout(initAlarm, differenceInMs);

}

function initAlarm(){
  alarmSound.play()
}

function stopAlarm(){
alarmSound.pause();
}

function snoozeButton(){
  alarmSound.pause();
  setTimeout(initAlarm, 36000);
}


setInterval (setAlarm, 1000);



