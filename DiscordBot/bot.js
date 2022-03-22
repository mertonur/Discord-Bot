const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix=ayarlar.prefix;
var Guilds1;
var sunucu;
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  const Guilds = client.guilds.cache.map(guild => guild.id);
  const Guilds2 = client.guilds.cache.map(guild => guild.name);
  Guilds1=Guilds[0];
console.log(Guilds[0]);
console.log(Guilds2);
const list = client.guilds.cache.get(Guilds[0]); 

});

client.on('message', msg=> {

    //msg.reply('Pong!');
//const args = message.content.slice(config.prefix.length).trim().split(/ +/g);

const list = client.guilds.cache.get(Guilds1); 
  const command =msg.content.toLowerCase();
  console.log(command);
//mesajın geldiği channel ve mesaj bilgileri
  //const channel = message.channel;
  //channel.send(message.author.toString());


//let isim=msg.guild.id;
let kanalisim=msg.channel.name;

//.find('name','bot-channel');
if (command.startsWith("!şikayet")) {
  var hangiisim=command.substring(9);
  console.log(hangiisim);
  if(hangiisim.startsWith("<")){
  if (hangiisim.includes("!")) {
    hangiisim = hangiisim.split("!")[1].split(">")[0];
  } else {
    hangiisim = hangiisim.split("@")[1].split(">")[0];
  }
  console.log(hangiisim);
  list.members.fetch(hangiisim).then();


var sikayeta=setTimeout(Sikayet,1000)
    function Sikayet(){
  

  var a=list.members.cache.map( members => members);
  //üyeyi isimden ayırt etme
        for (let i=0; i<a.length; i++) {
          if(a[i].id==hangiisim){sikayetedilen=a[i];
          console.log(sikayetedilen.user.username);

          const channel = msg.channel;
          channel.send(msg.author.toString()+" "+sikayetedilen.user.username+" İsimli Kullanıcı Şikayet Edildi (Örnek)");

          }
        }

    }
  }
}

if (command.startsWith("!sil")) {
  var silsayi=command.substring(5);
  if(msg.author.id==""||msg.author.id==""){
    msg.reply(silsayi+" Adet Siliyorum Patron");
  var silecegim=setTimeout(silecegimbot,1000)
  function silecegimbot(){
    msg.channel.bulkDelete(2);
    msg.channel.bulkDelete(silsayi);
}
}
else{
  msg.reply("Silme Yetkiniz Yoktur");
}


}

  if (command.startsWith("-play")&&kanalisim!="bot-channel") {
    msg.reply('');
  //  setTimeOut(() => {
  var opos=setTimeout(YanlisPlay,3000)
      function YanlisPlay(){
          msg.channel.bulkDelete(3);
}}

if (command === 'sa') {
msg.reply('As');
}

if(kanalisim=="💬┊𝐘𝐚𝐫𝐝𝐢𝐦"&&msg.author.username!="KAMIBOT"){
  if(command.includes("yardım")){msg.reply(' Siteye Kayıt için <#692627801433702410> Discord Onayı İçin <#807930041266077727> Kanallarını İnceleyebilirsin');}
  else if(command.includes("nasıl")||command.includes("kayıt")){msg.reply('Siteye Kayıt için <#692627801433702410> Discord Onayı İçin <#807930041266077727> Kanallarını İnceleyebilirsin');}
  if(command.includes("bot")||command.includes("mesaj")||command.includes("kod")){msg.reply("https://haxballplayers.com/discord/ Adresinden Onaylama yapmaya çalışırken KAMIBOT'dan mesaj alamıyorsanız Discord'un gizlilik ayarlarından tüm seçenekleri yeşil yapıp dener misiniz?");}
  else if(command.includes("yazamıyorum")){msg.reply(' Odalarda yazı yazmak için Discord Hesabınızı Entegre Etmeniz Gerekmektedir <#692627801433702410> ve <#807930041266077727> Kanallarını İnceleyebilirsin');}
  if(command.includes("teşekkür")){msg.reply('Ne demek İyi Eğlenceler'); }
}

if(kanalisim=="💬┊𝐂𝐞𝐳𝐚𝐥𝐢𝐥𝐚𝐫"&&msg.author.username!="KAMIBOT"){
  
  if(command.includes("neden")||command.includes("niçin")||command.includes("sebep")||command.includes("kadar")||command.includes("süre")||command.includes("ne")||command.includes("nasıl")){
    sikayetneden(msg.author.id,kanalisim);
  }

}
let adminkami = list.roles.cache.find(r => r.name === "Kamikaze");
let supmodRole = list.roles.cache.find(r => r.name === "Süper Moderatör");
let modRole =list.roles.cache.find(r => r.name === "Moderatör");
let adminkurucu = list.roles.cache.find(r => r.name === "Kurucu");
  
  if(command=="!sicil"&&msg.author.username!="KAMIBOT"&&kanalisim=="💬┊𝐂𝐞𝐳𝐚𝐥𝐢𝐥𝐚𝐫"){
  
    sikayetneden(msg.author.id,kanalisim);
  }
  else if(command.startsWith("!sicil")&&msg.author.username!="KAMIBOT"){

    if((msg.member.roles.cache.find(r => r.name === "Kamikaze"))||(msg.member.roles.cache.find(r => r.name === "Süper Moderatör"))||(msg.member.roles.cache.find(r => r.name === "Moderatör"))||(msg.member.roles.cache.find(r => r.name === "Kurucu"))){
    var hangiisim=command.substring(7);
       
        if(hangiisim.startsWith("<")){
        if (hangiisim.includes("!")) {
          hangiisim = hangiisim.split("!")[1].split(">")[0];
        } else {
          hangiisim = hangiisim.split("@")[1].split(">")[0];
        }
      }
    sikayetneden(hangiisim,kanalisim);
  }
  else{msg.reply("Yetkiniz Bulunmamaktadır.");}
  }



if (!command.startsWith(prefix)) {
  return;
}
 


});









//client.users.cache.get('<id>').send('<message>');
//client.users.get("someID").send("someMessage");
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  if (err) throw err;
});


      function OnayKod(){
    
        //console.log(Guilds1);
       
        const list = client.guilds.cache.get(Guilds1); 
        
      
       //forEach
//verilerdeki tüm üyelerin ismi
        


        


//verideki tüm üyelerin idleri
   //    const tumlist=  list.members.cache.map(members => members.user.id); 
//console.log(tumlist);



//console.log(list.members.fetch({}));  .then(console.log)

const namess=list.members.fetch({ query: 'Kamikaze', limit: 1 }).then();

var onaykodu2=setTimeout(OnayKod2,1000)
//user username  members => members cache.map
      function OnayKod2(){
        var a=list.members.cache.map( members => members);
//üyeyi isimden ayırt etme
      for (let i=0; i<a.length; i++) {
        if(a[i].nickname=='Kamikaze'||a[i].user.username=='Kamikaze'){asil=a[i];}
      }
      //console.log(asil.nickname);
    
//rol verme
      //let Deneme = list.roles.cache.find(r => r.name === "Deneme");
      //asil.roles.add(Deneme).catch(console.error);
      
    //a[1].setNickname("кира");
    //Kamikaze☪ // Mert
    //кира   a[1].setNickname("кира") isim değiştirme ben hariç herkesi değiştirebiliyoruz


      //mesaj gönderme
      //a[1].send("Deneme");
      //console.log(namess);
      }




const tumchan= list.channels.cache.find(channel => channel.name==="bilgiler");
//console.log(tumchan);
//console.log(tumchan.guild.members.cache.map(members => members));

//Kişi Sayısı
//var userCount = list.memberCount;
//console.log(userCount);

      }
      function cezakaldir(){
        con.query("SELECT `user_login`,`Discord2`,TIMESTAMPDIFF(second,DATE_SUB(NOW(), INTERVAL -1 HOUR),`mute`) AS mutesaniye,TIMESTAMPDIFF(second,DATE_SUB(NOW(), INTERVAL -1 HOUR),`ceza`) AS cezasaniye FROM `wp_users` WHERE `dccezali`='1' ", function (err, result, fields) {
          for (let i=0; i<result.length; i++) {

            
            if(result[i].mutesaniye<0&&result[i].cezasaniye<0){
              
              cezakaldir2(result[i].Discord2);
              cezakaldirupdate(result[i].Discord2);

            }


            

          }
         
      });


      }

      function cezakaldir2(id){


        
       
        const list = client.guilds.cache.get(Guilds1); 
        list.members.fetch(id).then();


        var dccezali=setTimeout(dccezalikaldir,1000)
            function dccezalikaldir(){
          
              

          var eskionaylist=list.members.cache.map( members => members);
          //üyeyi isimden ayırt etme
                for (let i=0; i<eskionaylist.length; i++) {
                 
                  if(eskionaylist[i].id==id){
                   
                    eskiuser=eskionaylist[i];
                  
                   
                    let yasakli = list.roles.cache.find(r => r.name === "Yasaklı");
        
                    let muted = list.roles.cache.find(r => r.name === "Muted");     
                   eskiuser.roles.remove(yasakli).catch(console.error);
                    
                    
                   eskiuser.roles.remove(muted).catch(console.error);
                    
                   
                   const cezalilarroom= list.channels.cache.find(channel => channel.name==="📋┊𝐁𝐢𝐥𝐠𝐢𝐥𝐞𝐧𝐝𝐢𝐫𝐦𝐞");
                  
                   cezalilarroom.send("<@"+id+"> Cezanız Bitmiştir");
                   

                  }
                }
                
                }



      }

      function dcbilgilendirme(){

        var kanalisim="📋┊𝐁𝐢𝐥𝐠𝐢𝐥𝐞𝐧𝐝𝐢𝐫𝐦𝐞";
        let mutecezasure="Hesabı Bulunmamakta";
        let cezacezasure="Hesabı Bulunmamakta";
        

        con.query("SELECT `id`,`sikayeteden`,`sikayetedilen`,`gelencezanedeni`,`suphelicezaturu`,`suphelicezasuresi`,`sikayetcicezaturu`,`sikayetcicezasuresi`,`yetkili`,`sonyazilarED`,`sonyazilarEDL`,`rec`,`gelencezanedeni` FROM `asikayetgecmis` WHERE `okundu`= '0' ", function (err, result, fields) {
	     
          if (err) {
            console.log(err);
            return;
        }

        
         for (let i=0; i<result.length; i++) {
           
          dcbilgilendirmeupdate(result[i].id);

          
          user_loginsite1=result[i].sikayeteden;
          user_loginsite2=result[i].sikayetedilen;

          user_loginsite1=user_loginsite1.replace("`", "");
          user_loginsite1=user_loginsite1.replace('"', "");
          user_loginsite1=user_loginsite1.replace("'", "");
          user_loginsite1=user_loginsite1.replace("`", "");
          user_loginsite1=user_loginsite1.replace(",", "");
          user_loginsite1=user_loginsite1.replace("<", "");
          user_loginsite1=user_loginsite1.replace(">", "");
          user_loginsite1=user_loginsite1.replace(";", "");
          user_loginsite1=user_loginsite1.replace("&", "");

          user_loginsite2=user_loginsite2.replace("`", "");
          user_loginsite2=user_loginsite2.replace('"', "");
          user_loginsite2=user_loginsite2.replace("'", "");
          user_loginsite2=user_loginsite2.replace("`", "");
          user_loginsite2=user_loginsite2.replace(",", "");
          user_loginsite2=user_loginsite2.replace("<", "");
          user_loginsite2=user_loginsite2.replace(">", "");
          user_loginsite2=user_loginsite2.replace(";", "");
          user_loginsite2=user_loginsite2.replace("&", "");


          cezasivarmied=0;
          cezasivarmiedl=0;
            sonyazi=result[i].sonyazilarED;
            yetkili=result[i].yetkili;
            rec=result[i].rec;
            gelencezanedeni=result[i].gelencezanedeni;
            
            if(1==1){
              if(result[i].sikayetcicezaturu=="sinirsizban"){cezasivarmied=1;cezacezasureek=-result[i].sikayetcicezasuresi;cezacezasureturu="Sınırsız Ban";dcbilgilendirmeyazi(user_loginsite1,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);dcbilgilendirmecezaupdate(user_loginsite1,"Yasaklı",2);}
              if(result[i].sikayetcicezaturu=="banay"){cezasivarmied=1;cezacezasureek=-result[i].sikayetcicezasuresi;cezacezasureturu=cezacezasureek+"Ay Ban";dcbilgilendirmeyazi(user_loginsite1,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);dcbilgilendirmecezaupdate(user_loginsite1,"Yasaklı",1);}
              if(result[i].sikayetcicezaturu=="muteay"){cezasivarmied=1;cezacezasureek=-result[i].sikayetcicezasuresi;cezacezasureturu=cezacezasureek+" Ay Mute";dcbilgilendirmeyazi(user_loginsite1,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);dcbilgilendirmecezaupdate(user_loginsite1,"Muted",1);}
              if(result[i].sikayetcicezaturu=="banhafta"){cezasivarmied=1;cezacezasureek=-result[i].sikayetcicezasuresi;cezacezasureturu=cezacezasureek+"  Hafta Ban";dcbilgilendirmeyazi(user_loginsite1,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);dcbilgilendirmecezaupdate(user_loginsite1,"Yasaklı",1);}
              if(result[i].sikayetcicezaturu=="mutehafta"){cezasivarmied=1;cezacezasureek=-result[i].sikayetcicezasuresi;cezacezasureturu=cezacezasureek+" Hafta Mute";dcbilgilendirmeyazi(user_loginsite1,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);dcbilgilendirmecezaupdate(user_loginsite1,"Muted",1);}
              if(result[i].sikayetcicezaturu=="bangun"){cezasivarmied=1;cezacezasureek=-result[i].sikayetcicezasuresi;cezacezasureturu=cezacezasureek+"  Gün Ban";dcbilgilendirmeyazi(user_loginsite1,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);dcbilgilendirmecezaupdate(user_loginsite1,"Yasaklı",1);}
              if(result[i].sikayetcicezaturu=="mutegun"){cezasivarmied=1;cezacezasureek=-result[i].sikayetcicezasuresi;cezacezasureturu=cezacezasureek+" Gün Mute";dcbilgilendirmeyazi(user_loginsite1,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);dcbilgilendirmecezaupdate(user_loginsite1,"Muted",1);}
              if(result[i].sikayetcicezaturu=="bansaat"){cezasivarmied=1;cezacezasureek=-result[i].sikayetcicezasuresi;cezacezasureturu=cezacezasureek+" Saat Ban";dcbilgilendirmeyazi(user_loginsite1,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);dcbilgilendirmecezaupdate(user_loginsite1,"Yasaklı",1);}
              if(result[i].sikayetcicezaturu=="mutesaat"){cezasivarmied=1;cezacezasureek=-result[i].sikayetcicezasuresi;cezacezasureturu=cezacezasureek+" Saat Mute";dcbilgilendirmeyazi(user_loginsite1,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);dcbilgilendirmecezaupdate(user_loginsite1,"Muted",1);}
              if(result[i].sikayetcicezaturu=="cezayok"){cezacezasureturu="Ceza Yok";}
            }
         
            if(2==2){
              sonyazi=result[i].sonyazilarEDL;
            yetkili=result[i].yetkili;
            rec=result[i].rec;
            gelencezanedeni=result[i].gelencezanedeni;
              if(result[i].suphelicezaturu=="sinirsizban"){cezasivarmiedl=1;cezacezasureek=-result[i].suphelicezasuresi;cezacezasureturu="Sınırsız Ban";dcbilgilendirmeyazi(user_loginsite2,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);dcbilgilendirmecezaupdate(user_loginsite2,"Yasaklı",2);}
              if(result[i].suphelicezaturu=="banay"){cezasivarmiedl=1;cezacezasureek=-result[i].suphelicezasuresi;cezacezasureturu=cezacezasureek+"Ay Ban";dcbilgilendirmeyazi(user_loginsite2,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);dcbilgilendirmecezaupdate(user_loginsite2,"Yasaklı",1);}
              if(result[i].suphelicezaturu=="muteay"){cezasivarmiedl=1;cezacezasureek=-result[i].suphelicezasuresi;cezacezasureturu=cezacezasureek+" Ay Mute";dcbilgilendirmeyazi(user_loginsite2,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);dcbilgilendirmecezaupdate(user_loginsite2,"Muted",1);}
              if(result[i].suphelicezaturu=="banhafta"){cezasivarmiedl=1;cezacezasureek=-result[i].suphelicezasuresi;cezacezasureturu=cezacezasureek+"  Hafta Ban";dcbilgilendirmeyazi(user_loginsite2,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni);dcbilgilendirmecezaupdate(user_loginsite2,"Yasaklı",1);}
              if(result[i].suphelicezaturu=="mutehafta"){cezasivarmiedl=1;cezacezasureek=-result[i].suphelicezasuresi;cezacezasureturu=cezacezasureek+" Hafta Mute";dcbilgilendirmeyazi(user_loginsite2,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);dcbilgilendirmecezaupdate(user_loginsite2,"Muted",1);}
              if(result[i].suphelicezaturu=="bangun"){cezasivarmiedl=1;cezacezasureek=-result[i].suphelicezasuresi;cezacezasureturu=cezacezasureek+"  Gün Ban";dcbilgilendirmeyazi(user_loginsite2,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);dcbilgilendirmecezaupdate(user_loginsite2,"Yasaklı",1);}
              if(result[i].suphelicezaturu=="mutegun"){cezasivarmiedl=1;cezacezasureek=-result[i].suphelicezasuresi;cezacezasureturu=cezacezasureek+" Gün Mute";dcbilgilendirmeyazi(user_loginsite2,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);dcbilgilendirmecezaupdate(user_loginsite2,"Muted",1);}
              if(result[i].suphelicezaturu=="bansaat"){cezasivarmiedl=1;cezacezasureek=-result[i].suphelicezasuresi;cezacezasureturu=cezacezasureek+" Saat Ban";dcbilgilendirmeyazi(user_loginsite2,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);dcbilgilendirmecezaupdate(user_loginsite2,"Yasaklı",1);}
              if(result[i].suphelicezaturu=="mutesaat"){cezasivarmiedl=1;cezacezasureek=-result[i].suphelicezasuresi;cezacezasureturu=cezacezasureek+" Saat Mute";dcbilgilendirmeyazi(user_loginsite2,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);dcbilgilendirmecezaupdate(user_loginsite2,"Muted",1);}
              if(result[i].suphelicezaturu=="cezayok"){cezacezasureturu="Ceza Yok";}
            
            }
            
         




        }
          
     
      });

      }
      function dcbilgilendirmeupdate(id){

        con.query("UPDATE `asikayetgecmis` SET `okundu`=1 WHERE `id`= '"+id+"'", function (err, result, fields) {
            
          if (err) {
            console.log(err);
            return;
        }



      });

      }

      function cezakaldirupdate(id){

        con.query("UPDATE `wp_users` SET `dccezali`=0 WHERE `Discord2`= '"+id+"'", function (err, result, fields) {
    
      });
      }



      function dcbilgilendirmecezaupdate(isim,tur,sayi){

        con.query("UPDATE `wp_users` SET `dccezali`='"+sayi+"' WHERE `user_login`='"+isim+"'", function (err, result, fields) {
          dcbilgilendirmecezarol(isim,tur);
      });

      }
      function dcbilgilendirmecezarol(isim,tur){
        const list = client.guilds.cache.get(Guilds1); 

        con.query("SELECT `user_login`,`Discord2` FROM `wp_users` WHERE `user_login`='"+isim+"' ", function (err, result, fields) {
	     
          //if (err) throw err;
         
         for (let i=0; i<result.length; i++) {

          user_id=result[i].Discord2;


          list.members.fetch(user_id).then();


          var dccezafunction=setTimeout(dccezafunc,1000)
              function dccezafunc(){
            
          
            var eskionaylist=list.members.cache.map( members => members);
            //üyeyi isimden ayırt etme
                  for (let i=0; i<eskionaylist.length; i++) {
                    if(eskionaylist[i].id==user_id){eskiuser=eskionaylist[i];
                    
                     
                      let yasakli = list.roles.cache.find(r => r.name === "Yasaklı");
          
                      let muted = list.roles.cache.find(r => r.name === "Muted");     
                      if(tur=="Yasaklı"){ eskiuser.roles.add(yasakli).catch(console.error);
                      
                      }
                      if(tur=="Muted"){ eskiuser.roles.add(muted).catch(console.error);
                      
                      }

                    }
                  }
                  
                  }
 


         }

        });

      }

      function dcbilgilendirmeyazi(user_loginsite,mutecezasure,cezacezasure,gelenceza,sonyazi,yetkili,rec,gelencezanedeni,kanalisim){

        const list = client.guilds.cache.get(Guilds1); 
              const cezalilarroom= list.channels.cache.find(channel => channel.name===kanalisim);
           
             
        
                 con.query("SELECT `user_login`,`Discord2`,TIMESTAMPDIFF(second,DATE_SUB(NOW(), INTERVAL -1 HOUR),`mute`) AS mutesaniye,TIMESTAMPDIFF(minute,DATE_SUB(NOW(), INTERVAL -1 HOUR),`mute`) AS mutedakika,TIMESTAMPDIFF(hour,DATE_SUB(NOW(), INTERVAL -1 HOUR),`mute`) AS mutesaat,TIMESTAMPDIFF(day,DATE_SUB(NOW(), INTERVAL -1 HOUR),`mute`) AS mutegun,TIMESTAMPDIFF(second,DATE_SUB(NOW(), INTERVAL -1 HOUR),`ceza`) AS cezasaniye,TIMESTAMPDIFF(minute,DATE_SUB(NOW(), INTERVAL -1 HOUR),`ceza`) AS cezadakika,TIMESTAMPDIFF(hour,DATE_SUB(NOW(), INTERVAL -1 HOUR),`ceza`) AS cezasaat,TIMESTAMPDIFF(day,DATE_SUB(NOW(), INTERVAL -1 HOUR),`ceza`) AS cezagun FROM `wp_users` WHERE `user_login`='"+user_loginsite+"' ", function (err, result, fields) {
               
                   //if (err) throw err;
                  
                  for (let i=0; i<result.length; i++) {
        
                   // sikayetneden2(result[i].user_login,result[i].mutesaniye,result[i].mutedakika,result[i].mutesaat,result[i].mutegun,result[i].cezasaniye,result[i].cezadakika,result[i].cezasaat,result[i].cezagun);
                   user_loginsite=result[i].user_login;
                   if(result[i].mutesaniye<0){mutecezasure="Mute Cezanız Bulunmamaktadır";}
                   else{
                    if(result[i].mutesaniye>0){
                      mutecezasure="Kalan Mute Ceza Süreniz:"+result[i].mutesaniye+" Saniye";
                        if(result[i].mutedakika>0){
                          mutecezasure="Kalan Mute Ceza Süreniz:"+result[i].mutedakika+" Dakika";
                          if(result[i].mutesaat>0){
                            mutecezasure="Kalan Mute Ceza Süreniz:"+result[i].mutesaat+" Saat";
                              if(result[i].mutegun>0){
                                mutecezasure="Kalan Mute Ceza Süreniz:"+result[i].mutegun+" Gün";
                                if(result[i].mutegun>999){
                                  mutecezasure="Kalan Mute Ceza Süreniz:Sınırsız Süre";
                                }
                            
                              }
                            
                            
                          }
                        }
                      
                    }
                   }
        
        
                   if(result[i].cezasaniye<0){cezacezasure="Ban Cezanız Bulunmamaktadır";}
                   else{
                    if(result[i].cezasaniye>0){
                      cezacezasure="Kalan Ban Ceza Süreniz:"+result[i].cezasaniye+" Saniye";
                        if(result[i].cezadakika>0){
                          cezacezasure="Kalan Ban Ceza Süreniz:"+result[i].cezadakika+" Dakika";
                          if(result[i].cezasaat>0){
                            cezacezasure="Kalan Ban Ceza Süreniz:"+result[i].cezasaat+" Saat";
                              if(result[i].cezagun>0){
                                cezacezasure="Kalan Ban Ceza Süreniz:"+result[i].cezagun+" Gün";
                                if(result[i].cezagun>999){
                                  cezacezasure="Kalan Ban Ceza Süreniz:Sınırsız Süre";
                                }
                            
                              }
                            
                            
                          }
                        }
                      
                    }
                   }
                  }
                  
                  




                  const exampleEmbed = new Discord.MessageEmbed()
                  .setColor('#0099ff')
                  .setTitle(user_loginsite)
                  
                  .setAuthor('KAMIBOT', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
                  .setDescription('Cezalarınız:')
                  .setThumbnail('https://haxballplayers.com/wp-content/uploads/2020/12/cropped-Baslksz-1-2.png')
                  .addFields(
                    { name: 'Mute:', value: mutecezasure, inline: true },
                    { name: 'Ban:', value: cezacezasure, inline: true},
                   
                    { name: '\u200B', value: '\u200B' },
                    
                    { name: 'Gelen Ceza', value: gelenceza, inline: false },
                    { name: 'Sohbet Geçmişi', value: sonyazi, inline: false },
                    { name: 'Rec Linki', value: rec, inline: false },
                    { name: 'Yetkili', value: yetkili, inline: false },
                    { name: 'Yetkili Açıklaması', value: gelencezanedeni, inline: false },
                  )
                
                .setTimestamp()
                .setFooter('KAMIBOT', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png');
              
               
                cezalilarroom.send(exampleEmbed);








                });
        
   
      
            }



      function sikayetneden(uyeid,kanalisim){
     

        
        let mutecezasure;
        let cezacezasure;
        let user_loginsite;

         con.query("SELECT `user_login`,`Discord2`,TIMESTAMPDIFF(second,DATE_SUB(NOW(), INTERVAL -1 HOUR),`mute`) AS mutesaniye,TIMESTAMPDIFF(minute,DATE_SUB(NOW(), INTERVAL -1 HOUR),`mute`) AS mutedakika,TIMESTAMPDIFF(hour,DATE_SUB(NOW(), INTERVAL -1 HOUR),`mute`) AS mutesaat,TIMESTAMPDIFF(day,DATE_SUB(NOW(), INTERVAL -1 HOUR),`mute`) AS mutegun,TIMESTAMPDIFF(second,DATE_SUB(NOW(), INTERVAL -1 HOUR),`ceza`) AS cezasaniye,TIMESTAMPDIFF(minute,DATE_SUB(NOW(), INTERVAL -1 HOUR),`ceza`) AS cezadakika,TIMESTAMPDIFF(hour,DATE_SUB(NOW(), INTERVAL -1 HOUR),`ceza`) AS cezasaat,TIMESTAMPDIFF(day,DATE_SUB(NOW(), INTERVAL -1 HOUR),`ceza`) AS cezagun FROM `wp_users` WHERE `Discord2`='"+uyeid+"' ", function (err, result, fields) {
	     
	         //if (err) throw err;
          
          for (let i=0; i<result.length; i++) {

           // sikayetneden2(result[i].user_login,result[i].mutesaniye,result[i].mutedakika,result[i].mutesaat,result[i].mutegun,result[i].cezasaniye,result[i].cezadakika,result[i].cezasaat,result[i].cezagun);
           user_loginsite=result[i].user_login;
           if(result[i].mutesaniye<0){mutecezasure="Mute Cezanız Bulunmamaktadır";}
           else{
            if(result[i].mutesaniye>0){
              mutecezasure="Kalan Mute Ceza Süreniz:"+result[i].mutesaniye+" Saniye";
                if(result[i].mutedakika>0){
                  mutecezasure="Kalan Mute Ceza Süreniz:"+result[i].mutedakika+" Dakika";
                  if(result[i].mutesaat>0){
                    mutecezasure="Kalan Mute Ceza Süreniz:"+result[i].mutesaat+" Saat";
                      if(result[i].mutegun>0){
                        mutecezasure="Kalan Mute Ceza Süreniz:"+result[i].mutegun+" Gün";
                        if(result[i].mutegun>999){
                          mutecezasure="Kalan Mute Ceza Süreniz:Sınırsız Süre";
                        }
                    
                      }
                    
                    
                  }
                }
              
            }
           }


           if(result[i].cezasaniye<0){cezacezasure="Ban Cezanız Bulunmamaktadır";}
           else{
            if(result[i].cezasaniye>0){
              cezacezasure="Kalan Ban Ceza Süreniz:"+result[i].cezasaniye+" Saniye";
                if(result[i].cezadakika>0){
                  cezacezasure="Kalan Ban Ceza Süreniz:"+result[i].cezadakika+" Dakika";
                  if(result[i].cezasaat>0){
                    cezacezasure="Kalan Ban Ceza Süreniz:"+result[i].cezasaat+" Saat";
                      if(result[i].cezagun>0){
                        cezacezasure="Kalan Ban Ceza Süreniz:"+result[i].cezagun+" Gün";
                        if(result[i].cezagun>999){
                          cezacezasure="Kalan Ban Ceza Süreniz:Sınırsız Süre";
                        }
                    
                      }
                    
                    
                  }
                }
              
            }
           }
          }
          
          sikayetneden2(user_loginsite,mutecezasure,cezacezasure,kanalisim);
        });

       

      }
      function sikayetneden2(user_loginsite,mutecezasure,cezacezasure,kanalisim){

        let mutecezasureturu;
        let cezacezasureturu;
        let mutecezasureek;
        let cezacezasureek;
       
        let sonyazi;
        let yetkili;
        let rec;
        let gelencezanedeni;

var cezasivarmi=0;

         con.query("SELECT `sikayeteden`,`sikayetedilen`,`gelencezanedeni`,`suphelicezaturu`,`suphelicezasuresi`,`sikayetcicezaturu`,`sikayetcicezasuresi`,`yetkili`,`sonyazilarED`,`sonyazilarEDL`,`rec`,`gelencezanedeni` FROM `asikayetgecmis` WHERE `sikayeteden`= '"+user_loginsite+"' OR `sikayetedilen`='"+user_loginsite+"' ", function (err, result, fields) {
	     
	         //if (err) throw err;
          
          for (let i=0; i<result.length; i++) {

           // sikayetneden2(result[i].user_login,result[i].mutesaniye,result[i].mutedakika,result[i].mutesaat,result[i].mutegun,result[i].cezasaniye,result[i].cezadakika,result[i].cezasaat,result[i].cezagun);
           
          if(user_loginsite==result[i].sikayeteden){
            sonyazi=result[i].sonyazilarED;
            yetkili=result[i].yetkili;
            rec=result[i].rec;
            gelencezanedeni=result[i].gelencezanedeni;
            
              if(result[i].sikayetcicezaturu=="sinirsizban"){cezasivarmi=1;cezacezasureek=-result[i].sikayetcicezasuresi;cezacezasureturu="Sınırsız Ban";sikayetneden3(user_loginsite,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);}
              if(result[i].sikayetcicezaturu=="banay"){cezasivarmi=1;cezacezasureek=-result[i].sikayetcicezasuresi;cezacezasureturu=cezacezasureek+"Ay Ban";sikayetneden3(user_loginsite,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);}
              if(result[i].sikayetcicezaturu=="muteay"){cezasivarmi=1;cezacezasureek=-result[i].sikayetcicezasuresi;cezacezasureturu=cezacezasureek+" Ay Mute";sikayetneden3(user_loginsite,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);}
              if(result[i].sikayetcicezaturu=="banhafta"){cezasivarmi=1;cezacezasureek=-result[i].sikayetcicezasuresi;cezacezasureturu=cezacezasureek+"  Hafta Ban";sikayetneden3(user_loginsite,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);}
              if(result[i].sikayetcicezaturu=="mutehafta"){cezasivarmi=1;cezacezasureek=-result[i].sikayetcicezasuresi;cezacezasureturu=cezacezasureek+" Hafta Mute";sikayetneden3(user_loginsite,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);}
              if(result[i].sikayetcicezaturu=="bangun"){cezasivarmi=1;cezacezasureek=-result[i].sikayetcicezasuresi;cezacezasureturu=cezacezasureek+"  Gün Ban";sikayetneden3(user_loginsite,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);}
              if(result[i].sikayetcicezaturu=="mutegun"){cezasivarmi=1;cezacezasureek=-result[i].sikayetcicezasuresi;cezacezasureturu=cezacezasureek+" Gün Mute";sikayetneden3(user_loginsite,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);}
              if(result[i].sikayetcicezaturu=="bansaat"){cezasivarmi=1;cezacezasureek=-result[i].sikayetcicezasuresi;cezacezasureturu=cezacezasureek+" Saat Ban";sikayetneden3(user_loginsite,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);}
              if(result[i].sikayetcicezaturu=="mutesaat"){cezasivarmi=1;cezacezasureek=-result[i].sikayetcicezasuresi;cezacezasureturu=cezacezasureek+" Saat Mute";sikayetneden3(user_loginsite,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);}
              if(result[i].sikayetcicezaturu=="cezayok"){cezacezasureturu="Ceza Yok";}
              
          }
          else if(user_loginsite==result[i].sikayetedilen){
            
            sonyazi=result[i].sonyazilarEDL;
            yetkili=result[i].yetkili;
            rec=result[i].rec;
            gelencezanedeni=result[i].gelencezanedeni;
              if(result[i].suphelicezaturu=="sinirsizban"){cezasivarmi=1;cezacezasureek=-result[i].suphelicezasuresi;cezacezasureturu="Sınırsız Ban";sikayetneden3(user_loginsite,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);}
              if(result[i].suphelicezaturu=="banay"){cezasivarmi=1;cezacezasureek=-result[i].suphelicezasuresi;cezacezasureturu=cezacezasureek+"Ay Ban";sikayetneden3(user_loginsite,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);}
              if(result[i].suphelicezaturu=="muteay"){cezasivarmi=1;cezacezasureek=-result[i].suphelicezasuresi;cezacezasureturu=cezacezasureek+" Ay Mute";sikayetneden3(user_loginsite,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);}
              if(result[i].suphelicezaturu=="banhafta"){cezasivarmi=1;cezacezasureek=-result[i].suphelicezasuresi;cezacezasureturu=cezacezasureek+"  Hafta Ban";sikayetneden3(user_loginsite,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni);}
              if(result[i].suphelicezaturu=="mutehafta"){cezasivarmi=1;cezacezasureek=-result[i].suphelicezasuresi;cezacezasureturu=cezacezasureek+" Hafta Mute";sikayetneden3(user_loginsite,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);}
              if(result[i].suphelicezaturu=="bangun"){cezasivarmi=1;cezacezasureek=-result[i].suphelicezasuresi;cezacezasureturu=cezacezasureek+"  Gün Ban";sikayetneden3(user_loginsite,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);}
              if(result[i].suphelicezaturu=="mutegun"){cezasivarmi=1;cezacezasureek=-result[i].suphelicezasuresi;cezacezasureturu=cezacezasureek+" Gün Mute";sikayetneden3(user_loginsite,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);}
              if(result[i].suphelicezaturu=="bansaat"){cezasivarmi=1;cezacezasureek=-result[i].suphelicezasuresi;cezacezasureturu=cezacezasureek+" Saat Ban";sikayetneden3(user_loginsite,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);}
              if(result[i].suphelicezaturu=="mutesaat"){cezasivarmi=1;cezacezasureek=-result[i].suphelicezasuresi;cezacezasureturu=cezacezasureek+" Saat Mute";sikayetneden3(user_loginsite,mutecezasure,cezacezasure,cezacezasureturu,sonyazi,yetkili,rec,gelencezanedeni,kanalisim);}
              if(result[i].suphelicezaturu=="cezayok"){cezacezasureturu="Ceza Yok";}
              
            
          }

           
          }
          
          if(cezasivarmi==0){
            sikayetneden4(user_loginsite,mutecezasure,cezacezasure,kanalisim);
          }

        });

      




      }

      function sikayetneden3(user_loginsite,mutecezasure,cezacezasure,gelenceza,sonyazi,yetkili,rec,gelencezanedeni,kanalisim){

  const list = client.guilds.cache.get(Guilds1); 
        const cezalilarroom= list.channels.cache.find(channel => channel.name===kanalisim);
     
       
       


      
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(user_loginsite)
        
        .setAuthor('KAMIBOT', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
        .setDescription('Cezalarınız:')
        .setThumbnail('https://haxballplayers.com/wp-content/uploads/2020/12/cropped-Baslksz-1-2.png')
        .addFields(
          { name: 'Mute:', value: mutecezasure, inline: true },
          { name: 'Ban:', value: cezacezasure, inline: true},
         
          { name: '\u200B', value: '\u200B' },
          
          { name: 'Gelen Ceza', value: gelenceza, inline: false },
          { name: 'Sohbet Geçmişi', value: sonyazi, inline: false },
          { name: 'Rec Linki', value: rec, inline: false },
          { name: 'Yetkili', value: yetkili, inline: false },
          { name: 'Yetkili Açıklaması', value: gelencezanedeni, inline: false },
        )
      
      .setTimestamp()
      .setFooter('KAMIBOT', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png');
    
     
      cezalilarroom.send(exampleEmbed);




      }



      function sikayetneden4(user_loginsite,mutecezasure,cezacezasure,kanalisim){

        const list = client.guilds.cache.get(Guilds1); 
              const cezalilarroom= list.channels.cache.find(channel => channel.name===kanalisim);
           
             
             
      
      
            
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#0099ff')
              .setTitle(user_loginsite)
              
              .setAuthor('KAMIBOT', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
              .setDescription('Cezalarınız:')
              .setThumbnail('https://haxballplayers.com/wp-content/uploads/2020/12/cropped-Baslksz-1-2.png')
              .addFields(
                { name: 'Mute:', value: mutecezasure, inline: true },
                { name: 'Ban:', value: cezacezasure, inline: true},
               
                { name: '\u200B', value: '\u200B' },
                
                { name: 'Geçmiş', value: "Cezanız Bulunmamaktadır.", inline: false },
             
              )
            
            .setTimestamp()
            .setFooter('KAMIBOT', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png');
          
           
            cezalilarroom.send(exampleEmbed);
      
      
      
      
            }




      var kontrolbaslat=setTimeout(onaybaslat,5000);

      function onaybaslat(){

      var onaykontro=setInterval(onaykontrol,15000);

      function onaykontrol(){


     



        con.query("SELECT * FROM `adiscordonay` WHERE `okundu`=0 ", function (err, result, fields) {
          if (err) throw err;
          
          for (let i=0; i<result.length; i++) {
            onaykontrol2(result[i].ticket,result[i].nick,result[i].eskiid,result[i].discordadi,result[i].onaykodu);
          }
          
        });



      }

    }


 function onaykontrol2(ticket,nick,eskiid,discordadi,onaykodu){

  const list = client.guilds.cache.get(Guilds1); 

console.log(ticket+" "+nick+" "+eskiid+" "+discordadi+" "+onaykodu);



  con.query("UPDATE `adiscordonay` SET `okundu`='1' WHERE `ticket`='"+ticket+"'", function (err, result, fields) {
    if (err) throw err;
  });

  const namess=list.members.fetch({ query: discordadi, limit: 10 }).then();

var onaykodu2=setTimeout(OnayKod2,1000)
//user username  members => members cache.map
      function OnayKod2(){
        var a=list.members.cache.map( members => members);
//üyeyi isimden ayırt etme
      for (let i=0; i<a.length; i++) {
        if(a[i].user.username==discordadi)
        {asil=a[i];
        
          asil.send("HaxballPlayers Discord Onayı İçin "+nick+" Hesabından Gönderilen Onay Kodunuz="+onaykodu);
        
        }
      }
      }




}










var kontrolbaslata=setTimeout(onaybaslata,5000);

function onaybaslata(){
var onaykontroa2=setInterval(onaykontrola2,60000);
var onaykontroa=setInterval(onaykontrola,3000);
function onaykontrola2(){
  dcbilgilendirme();
  cezakaldir();
}
function onaykontrola(){

 
  odabilgi();
  odabilgi2();
  odabilgi3();
  odabilgi4();
  odabilgi5();
  odabilgi6();
  odabilgi7();
  odabilgi8();
  odabilgi9();
  odabilgi10();


  con.query("SELECT * FROM `adiscordonaygecmis` WHERE `okundu`=0 ", function (err, result, fields) {
    if (err) throw err;
    
    for (let i=0; i<result.length; i++) {
      onaykontrol2a(result[i].ticket,result[i].nick,result[i].eskiid,result[i].discordadi,result[i].onaykodu);
    }
    
  });


  con.query("SELECT * FROM `arecistek` WHERE `okundu`=0 ", function (err, result, fields) {
    if (err) throw err;
    
    for (let i=0; i<result.length; i++) {
      reckontrol(result[i].id,result[i].nick,result[i].odaid,result[i].macid,result[i].sure,result[i].sezon);
    }
    
  });




}

}


function reckontrol4(id,control,reclink,nick,odaid,macid,sure,sezon,istekid){

  const list = client.guilds.cache.get(Guilds1); 

  

console.log(istekid);

          list.members.fetch(istekid).then();


var eskio=setTimeout(eskionay,1000)
    function eskionay(){
  

  var eskionaylist=list.members.cache.map( members => members);
  //üyeyi isimden ayırt etme
        for (let i=0; i<eskionaylist.length; i++) {
          if(eskionaylist[i].id==istekid){eskiuser=eskionaylist[i];
          
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Rec Linki')
            .setURL(reclink)
            .setAuthor('KAMIBOT', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
            .setDescription('Bilgiler')
            .setThumbnail('https://haxballplayers.com/wp-content/uploads/2020/12/cropped-sports-logo-generator-for-a-soccer-team-1748y-2931-2-1.png')
            .addFields(
              { name: 'İsim', value: nick},
              { name: 'İstek Zamanı', value: sure},
              { name: 'Rec Linki', value: reclink },
              { name: 'Sezon', value: sezon, inline: true },
              { name: 'Maç id', value: macid , inline: true },
              { name: 'Oda İd', value: odaid , inline: true },
            )
            
            //.setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Gönderim Saati:', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-sports-logo-generator-for-a-soccer-team-1748y-2931-2-1.png');
          
           
            eskiuser.send(exampleEmbed);
          
 
          }
        }

    }

        
      }

function reckontrol3(id,control,reclink,nick,odaid,macid,sure,sezon){

  const list = client.guilds.cache.get(Guilds1); 
var istekid=0;
  con.query("SELECT * FROM `wp_users` WHERE `user_login`='"+nick+"'", function (err, result, fields) {
    if (err) throw err;
    for (let i=0; i<result.length; i++) {
      istekid=result[i].Discord2;
      reckontrol4(id,control,reclink,nick,odaid,macid,sure,sezon,istekid);
    }
  });
  


    }
  



function reckontrol2(id,control,reclink,nick,odaid,macid,sure,sezon){

  const list = client.guilds.cache.get(Guilds1); 

  con.query("UPDATE `arecistek` SET `okundu`='1',`reclink`='"+reclink+"' WHERE `id`='"+id+"'", function (err, result, fields) {
    if (err) throw err;
    reckontrol3(id,control,reclink,nick,odaid,macid,sure,sezon);
  });
  


}



function reckontrol(id,nick,odaid,macid,sure,sezon){

  const list = client.guilds.cache.get(Guilds1); 


  con.query("SELECT * FROM `amackayit` WHERE `id`='"+macid+"' ", function (err, result, fields) {
    if (err) throw err;
    
    for (let i=0; i<result.length; i++) {
      if(result[i].control=="1"){ 
      reckontrol2(id,result[i].control,result[i].reclink,nick,odaid,macid,sure,sezon);
      }
    }
    
  });
  

}












function onaykontrol2a(ticket,nick,eskiid,discordadi,onaykodu){

  const list = client.guilds.cache.get(Guilds1); 

console.log(ticket+" "+nick+" "+eskiid+" "+discordadi+" "+onaykodu+" Geçmiş");



  con.query("UPDATE `adiscordonaygecmis` SET `okundu`='1' WHERE `ticket`='"+ticket+"'", function (err, result, fields) {
    if (err) throw err;
  });

  const namess=list.members.fetch({ query: discordadi, limit: 10 }).then();

var onaykodu2=setTimeout(OnayKod2,1000)
//user username  members => members cache.map
      function OnayKod2(){
        var a=list.members.cache.map( members => members);
//üyeyi isimden ayırt etme
      for (let i=0; i<a.length; i++) {
        if(a[i].user.username==discordadi)
        {asil=a[i];
        
          asil.send("HaxballPlayers Discord Onayınız Gerçekleşmiştir.İyi Eğlenceler Dileriz 🎇-HÜD YÖNETİM-🎇");
          asil.send("Discord Hesabınızın İsmi "+nick+" Olarak Değiştirilmiştir");
          asil.send("Kurallara Uymadığınız Takdirde Site ve Discord Üyeliğiniz Cezadan Ve Yasaklamalardan Etkilecektir");
          asil.send("Herhangi Bir Kuraldışı Hareketi !şikayet @isim Komutu ile Kolayca Şikayet Edebilirsiniz.");
          asil.send("Odalarda !kayıt ile maç kaydını otomatik olarak isteyebilirsin");
          asil.send("Kaliteli Ortamın Keyfini Çıkartın");



          let Askida2 = list.roles.cache.find(r => r.name === "Askıda");
          console.log("Askıda Rolü Varsa Alındı");
          let Onayli2 = list.roles.cache.find(r => r.name === "Onaylı");
          console.log("Onaylı Rolü Verildi");
          let yenifutsalrol = list.roles.cache.find(r => r.name === "Futsal Üye 3.Nesil");
          console.log("Futsal Üye Rolü Verildi");
          asil.roles.add(yenifutsalrol).catch(console.error);
          asil.roles.add(Onayli2).catch(console.error);
          asil.roles.remove(Askida2).catch(console.error);
    if(asil.user.username!="Kamikaze"){
      asil.setNickname(nick);
    }




if(eskiid!="-"){
          list.members.fetch(eskiid).then();


var eskio=setTimeout(eskionay,1000)
    function eskionay(){


 

  var eskionaylist=list.members.cache.map( members => members);
  //üyeyi isimden ayırt etme
        for (let i=0; i<eskionaylist.length; i++) {
          if(eskionaylist[i].id==eskiid&&asil.id!=eskiid){eskiuser=eskionaylist[i];
          
            eskiuser.send("HaxballPlayers Discord Hesabınız Değiştirilmiştir,Bu Hesabınız Askıya Alınmıştır");
            
            const discordonaygecmis= list.channels.cache.find(channel => channel.name==="✅┊𝐃𝐢𝐬𝐜𝐨𝐫𝐝-𝐎𝐧𝐚𝐲𝐥𝐢𝐲𝐚𝐧𝐥𝐚𝐫");
            discordonaygecmis.send("<@"+eskiid+"> Hesabını Değiştirmiştir Bu Hesap Askıya Alınmıştır 🎇");

            let Askida = list.roles.cache.find(r => r.name === "Askıda");
            let Onayli = list.roles.cache.find(r => r.name === "Onaylı");
      eskiuser.roles.add(Askida).catch(console.error);
      eskiuser.roles.remove(Onayli).catch(console.error);
      if(eskiuser.user.username!="Kamikaze"){
        eskiuser.setNickname(nick+" Askıda");
      }      
    



          }
        }





    }
  }

  







let dcid=asil.id;
          onaykontrol3a(ticket,nick,nick,dcid);


        }
      }
      }
}



function onaykontrol3a(ticket,nick,discordadi,dcid){

  const list = client.guilds.cache.get(Guilds1); 

console.log(ticket+" "+nick+" "+discordadi+" "+dcid+" Siteye Kaydet");



  con.query("UPDATE `wp_users` SET `onay`='2', `Discord`='"+discordadi+"' ,`Discord2`='"+dcid+"'  WHERE `user_login`='"+nick+"'", function (err, result, fields) {
    if (err) throw err;
  });


  const discordonaygecmis= list.channels.cache.find(channel => channel.name==="✅┊𝐃𝐢𝐬𝐜𝐨𝐫𝐝-𝐎𝐧𝐚𝐲𝐥𝐢𝐲𝐚𝐧𝐥𝐚𝐫");
  discordonaygecmis.send("<@"+dcid+"> Hesabını Onayladı Aramıza Hoşgeldin 🎉");
  




}

var oda1red="";
var oda1spec="";
var oda1blue="";
var oda1link="";
var oda1redseri="";
var oda1blueseri="";
var oda1sonuç="";
var ilk1=0;

var oda2red="";
var oda2spec="";
var oda2blue="";
var oda2link="";
var oda2redseri="";
var oda2blueseri="";
var oda2sonuç="";
var ilk2=0;

var oda3red="";
var oda3spec="";
var oda3blue="";
var oda3link="";
var oda3redseri="";
var oda3blueseri="";
var oda3sonuç="";
var ilk3=0;

var oda4red="";
var oda4spec="";
var oda4blue="";
var oda4link="";
var oda4redseri="";
var oda4blueseri="";
var oda4sonuç="";
var ilk4=0;

var oda5red="";
var oda5spec="";
var oda5blue="";
var oda5link="";
var oda5redseri="";
var oda5blueseri="";
var oda5sonuç="";
var ilk5=0;

var oda6red="";
var oda6spec="";
var oda6blue="";
var oda6link="";
var oda6redseri="";
var oda6blueseri="";
var oda6sonuç="";
var ilk6=0;

var oda7red="";
var oda7spec="";
var oda7blue="";
var oda7link="";
var oda7redseri="";
var oda7blueseri="";
var oda7sonuç="";
var ilk7=0;

var oda8red="";
var oda8spec="";
var oda8blue="";
var oda8link="";
var oda8redseri="";
var oda8blueseri="";
var oda8sonuç="";
var ilk8=0;

var oda9red="";
var oda9spec="";
var oda9blue="";
var oda9link="";
var oda9redseri="";
var oda9blueseri="";
var oda9sonuç="";
var ilk9=0;

var oda10red="";
var oda10spec="";
var oda10blue="";
var oda10link="";
var oda10redseri="";
var oda10blueseri="";
var oda10sonuç="";
var ilk10=0;

function odabilgi(){
  oda1red="";
  oda1spec="";
   oda1blue="";
   oda1link="";
   oda1redseri="";
   oda1blueseri="";
   oda1sonuç="";
   
  const list = client.guilds.cache.get(Guilds1); 
  
  con.query("SELECT * FROM `HUDFUTSAL-1R`", function (err, result, fields) {
    if (err) throw err;
    
    for (let i=0; i<result.length; i++) {
     
     if(result[i].tur=="red"){oda1red+=result[i].sonuc+"\n";}
     else if(result[i].tur=="blue"){oda1blue+=result[i].sonuc+"\n";}
     else if(result[i].tur=="spec"){oda1spec+=result[i].sonuc+"\n";}

     else if(result[i].tur=="odalinki"){oda1link=result[i].sonuc;}
     else if(result[i].tur=="sonuç"){oda1sonuç=result[i].sonuc;}
     else if(result[i].tur=="redseri"){
                                          oda1redseri=result[i].sonuc;
                                        }
     else if(result[i].tur=="blueseri"){
                                       oda1blueseri=result[i].sonuc;
                                        }
    }
  
    if(oda1red==""||oda1red==null){oda1red="❌";}
    if(oda1spec==""||oda1spec==null){oda1spec="❌";}
    if(oda1blue==""||oda1blue==null){oda1blue="❌";}
    if(oda1link==""||oda1link==null){oda1link="https://haxballplayers.com/";}
    if(oda1redseri==""||oda1redseri==null){oda1redseri="❌";}
    if(oda1blueseri==""||oda1blueseri==null){oda1blueseri="❌";}
    if(oda1sonuç==""||oda1sonuç==null){oda1sonuç="❌";}
    const odakanal1= list.channels.cache.find(channel => channel.name==="🎇ʜᴜᴅ-1🎇");
if(oda1link!=""){
    
  if(ilk1==1){
    
    
    
     

    odakanal1.messages.fetch({ limit: 1 }).then(messages => {
                  let lastMessage = messages.first();
                  
                  const exampleEmbed = new Discord.MessageEmbed()                
                  .setColor('#0099ff')
                  .setTitle('ODA LİNKİ')
                  .setURL(oda1link)
                  .setAuthor('HÜD-1', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
                  .setDescription('Skor:'+oda1sonuç)
                  .setThumbnail('https://haxballplayers.com/wp-content/uploads/2020/12/cropped-Baslksz-1-2.png')
                  .addFields(
                    { name: 'Red Seri', value: oda1redseri, inline: true },
                    { name: 'Blue Seri', value: oda1blueseri, inline: true},
                   
                    { name: '\u200B', value: '\u200B' },
                    { name: 'RED', value: oda1red, inline: true },
                    { name: 'SPEC', value: oda1spec, inline: true },
                  )
                  .addField('BLUE', oda1blue, true)
                  //.setImage('https://i.imgur.com/wSTFkRM.png')
                  .setTimestamp()
                  .setFooter('Son Güncelleme:', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-sports-logo-generator-for-a-soccer-team-1748y-2931-2-1-e1607105204773.png');
                
                  lastMessage.edit(exampleEmbed);



                })
                .catch(console.error);
      
  

  
  }  
else if(ilk1==0){

  odakanal1.bulkDelete(1);

  ilk1=1;
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('ODA Linki')
	.setURL('https://discord.js.org/')
	.setAuthor('HÜD-1', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
  .setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
    { name: 'Regular field title', value: '1' },
    { name: 'Regular field title', value: '2' },
    { name: 'Regular field title', value: '3' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	//.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

 
  odakanal1.send(exampleEmbed);
  }

}

  });


}



function odabilgi2(){
  oda2red="";
  oda2spec="";
   oda2blue="";
   oda2link="";
   oda2redseri="";
   oda2blueseri="";
   oda2sonuç="";
   
  const list = client.guilds.cache.get(Guilds1); 
  
  con.query("SELECT * FROM `HUDFUTSAL-2R`", function (err, result, fields) {
    if (err) throw err;
    
    for (let i=0; i<result.length; i++) {
     
     if(result[i].tur=="red"){oda2red+=result[i].sonuc+"\n";}
     else if(result[i].tur=="blue"){oda2blue+=result[i].sonuc+"\n";}
     else if(result[i].tur=="spec"){oda2spec+=result[i].sonuc+"\n";}

     else if(result[i].tur=="odalinki"){oda2link=result[i].sonuc;}
     else if(result[i].tur=="sonuç"){oda2sonuç=result[i].sonuc;}
     else if(result[i].tur=="redseri"){
                                          oda2redseri=result[i].sonuc;
                                        }
     else if(result[i].tur=="blueseri"){
                                       oda2blueseri=result[i].sonuc;
                                        }
    }
  
    if(oda2red==""||oda2red==null){oda2red="❌";}
    if(oda2spec==""||oda2spec==null){oda2spec="❌";}
    if(oda2blue==""||oda2blue==null){oda2blue="❌";}
    if(oda2link==""||oda2link==null){oda2link="https://haxballplayers.com/";}
    if(oda2redseri==""||oda2redseri==null){oda2redseri="❌";}
    if(oda2blueseri==""||oda2blueseri==null){oda2blueseri="❌";}
    if(oda2sonuç==""||oda2sonuç==null){oda2sonuç="❌";}
    const odakanal2= list.channels.cache.find(channel => channel.name==="🎇ʜᴜᴅ-2🎇");
if(oda2link!=""){
    
  if(ilk2==1){
    
    
    
     

    odakanal2.messages.fetch({ limit: 1 }).then(messages => {
                  let lastMessage = messages.first();
                  
                  const exampleEmbed = new Discord.MessageEmbed()                
                  .setColor('#0099ff')
                  .setTitle('ODA LİNKİ')
                  .setURL(oda2link)
                  .setAuthor('HÜD-2', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
                  .setDescription('Skor:'+oda2sonuç)
                  .setThumbnail('https://haxballplayers.com/wp-content/uploads/2020/12/cropped-Baslksz-1-2.png')
                  .addFields(
                    { name: 'Red Seri', value: oda2redseri, inline: true },
                    { name: 'Blue Seri', value: oda2blueseri, inline: true},
                   
                    { name: '\u200B', value: '\u200B' },
                    { name: 'RED', value: oda2red, inline: true },
                    { name: 'SPEC', value: oda2spec, inline: true },
                  )
                  .addField('BLUE', oda2blue, true)
                  //.setImage('https://i.imgur.com/wSTFkRM.png')
                  .setTimestamp()
                  .setFooter('Son Güncelleme:', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-sports-logo-generator-for-a-soccer-team-1748y-2931-2-1-e1607105204773.png');
                
                  lastMessage.edit(exampleEmbed);



                })
                .catch(console.error);
      
  

  
  }  
else if(ilk2==0){

  odakanal2.bulkDelete(1);

  ilk2=1;
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('ODA Linki')
	.setURL('https://discord.js.org/')
	.setAuthor('HÜD-2', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
  .setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
    { name: 'Regular field title', value: '1' },
    { name: 'Regular field title', value: '2' },
    { name: 'Regular field title', value: '3' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	//.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

 
  odakanal2.send(exampleEmbed);
  }

}

  });


}




function odabilgi3(){
  oda3red="";
  oda3spec="";
   oda3blue="";
   oda3link="";
   oda3redseri="";
   oda3blueseri="";
   oda3sonuç="";
   
  const list = client.guilds.cache.get(Guilds1); 
  
  con.query("SELECT * FROM `HUDFUTSAL-3R`", function (err, result, fields) {
    if (err) throw err;
    
    for (let i=0; i<result.length; i++) {
     
     if(result[i].tur=="red"){oda3red+=result[i].sonuc+"\n";}
     else if(result[i].tur=="blue"){oda3blue+=result[i].sonuc+"\n";}
     else if(result[i].tur=="spec"){oda3spec+=result[i].sonuc+"\n";}

     else if(result[i].tur=="odalinki"){oda3link=result[i].sonuc;}
     else if(result[i].tur=="sonuç"){oda3sonuç=result[i].sonuc;}
     else if(result[i].tur=="redseri"){
                                          oda3redseri=result[i].sonuc;
                                        }
     else if(result[i].tur=="blueseri"){
                                       oda3blueseri=result[i].sonuc;
                                        }
    }
  
    if(oda3red==""||oda3red==null){oda3red="❌";}
    if(oda3spec==""||oda3spec==null){oda3spec="❌";}
    if(oda3blue==""||oda3blue==null){oda3blue="❌";}
    if(oda3link==""||oda3link==null){oda3link="https://haxballplayers.com/";}
    if(oda3redseri==""||oda3redseri==null){oda3redseri="❌";}
    if(oda3blueseri==""||oda3blueseri==null){oda3blueseri="❌";}
    if(oda3sonuç==""||oda3sonuç==null){oda3sonuç="❌";}
    const odakanal3= list.channels.cache.find(channel => channel.name==="🎇ʜᴜᴅ-3🎇");
if(oda3link!=""){
    
  if(ilk3==1){
    
    
    
     

    odakanal3.messages.fetch({ limit: 1 }).then(messages => {
                  let lastMessage = messages.first();
                  
                  const exampleEmbed = new Discord.MessageEmbed()                
                  .setColor('#0099ff')
                  .setTitle('ODA LİNKİ')
                  .setURL(oda3link)
                  .setAuthor('HÜD-3', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
                  .setDescription('Skor:'+oda3sonuç)
                  .setThumbnail('https://haxballplayers.com/wp-content/uploads/2020/12/cropped-Baslksz-1-2.png')
                  .addFields(
                    { name: 'Red Seri', value: oda3redseri, inline: true },
                    { name: 'Blue Seri', value: oda3blueseri, inline: true},
                   
                    { name: '\u200B', value: '\u200B' },
                    { name: 'RED', value: oda3red, inline: true },
                    { name: 'SPEC', value: oda3spec, inline: true },
                  )
                  .addField('BLUE', oda3blue, true)
                  //.setImage('https://i.imgur.com/wSTFkRM.png')
                  .setTimestamp()
                  .setFooter('Son Güncelleme:', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-sports-logo-generator-for-a-soccer-team-1748y-2931-2-1-e1607105204773.png');
                
                  lastMessage.edit(exampleEmbed);



                })
                .catch(console.error);
      
  

  
  }  
else if(ilk3==0){

  odakanal3.bulkDelete(1);

  ilk3=1;
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('ODA Linki')
	.setURL('https://discord.js.org/')
	.setAuthor('HÜD-3', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
  .setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
    { name: 'Regular field title', value: '1' },
    { name: 'Regular field title', value: '2' },
    { name: 'Regular field title', value: '3' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	//.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

 
  odakanal3.send(exampleEmbed);
  }

}

  });


}



function odabilgi4(){
  oda4red="";
  oda4spec="";
   oda4blue="";
   oda4link="";
   oda4redseri="";
   oda4blueseri="";
   oda4sonuç="";
   
  const list = client.guilds.cache.get(Guilds1); 
  
  con.query("SELECT * FROM `HUDFUTSAL-4R`", function (err, result, fields) {
    if (err) throw err;
    
    for (let i=0; i<result.length; i++) {
     
     if(result[i].tur=="red"){oda4red+=result[i].sonuc+"\n";}
     else if(result[i].tur=="blue"){oda4blue+=result[i].sonuc+"\n";}
     else if(result[i].tur=="spec"){oda4spec+=result[i].sonuc+"\n";}

     else if(result[i].tur=="odalinki"){oda4link=result[i].sonuc;}
     else if(result[i].tur=="sonuç"){oda4sonuç=result[i].sonuc;}
     else if(result[i].tur=="redseri"){
                                          oda4redseri=result[i].sonuc;
                                        }
     else if(result[i].tur=="blueseri"){
                                       oda4blueseri=result[i].sonuc;
                                        }
    }
  
    if(oda4red==""||oda4red==null){oda4red="❌";}
    if(oda4spec==""||oda4spec==null){oda4spec="❌";}
    if(oda4blue==""||oda4blue==null){oda4blue="❌";}
    if(oda4link==""||oda4link==null){oda4link="https://haxballplayers.com/";}
    if(oda4redseri==""||oda4redseri==null){oda4redseri="❌";}
    if(oda4blueseri==""||oda4blueseri==null){oda4blueseri="❌";}
    if(oda4sonuç==""||oda4sonuç==null){oda4sonuç="❌";}
    const odakanal4= list.channels.cache.find(channel => channel.name==="🎇ʜᴜᴅ-4🎇");
if(oda4link!=""){
    
  if(ilk4==1){
    
    
    
     

    odakanal4.messages.fetch({ limit: 1 }).then(messages => {
                  let lastMessage = messages.first();
                  
                  const exampleEmbed = new Discord.MessageEmbed()                
                  .setColor('#0099ff')
                  .setTitle('ODA LİNKİ')
                  .setURL(oda4link)
                  .setAuthor('HÜD-4', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
                  .setDescription('Skor:'+oda4sonuç)
                  .setThumbnail('https://haxballplayers.com/wp-content/uploads/2020/12/cropped-Baslksz-1-2.png')
                  .addFields(
                    { name: 'Red Seri', value: oda4redseri, inline: true },
                    { name: 'Blue Seri', value: oda4blueseri, inline: true},
                   
                    { name: '\u200B', value: '\u200B' },
                    { name: 'RED', value: oda4red, inline: true },
                    { name: 'SPEC', value: oda4spec, inline: true },
                  )
                  .addField('BLUE', oda4blue, true)
                  //.setImage('https://i.imgur.com/wSTFkRM.png')
                  .setTimestamp()
                  .setFooter('Son Güncelleme:', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-sports-logo-generator-for-a-soccer-team-1748y-2931-2-1-e1607105204773.png');
                
                  lastMessage.edit(exampleEmbed);



                })
                .catch(console.error);
      
  

  
  }  
else if(ilk4==0){

  odakanal4.bulkDelete(1);

  ilk4=1;
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('ODA Linki')
	.setURL('https://discord.js.org/')
	.setAuthor('HÜD-4', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
  .setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
    { name: 'Regular field title', value: '1' },
    { name: 'Regular field title', value: '2' },
    { name: 'Regular field title', value: '3' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	//.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

 
  odakanal4.send(exampleEmbed);
  }

}

  });


}





function odabilgi5(){
  oda5red="";
  oda5spec="";
   oda5blue="";
   oda5link="";
   oda5redseri="";
   oda5blueseri="";
   oda5sonuç="";
   
  const list = client.guilds.cache.get(Guilds1); 
  
  con.query("SELECT * FROM `HUDFUTSAL-5R`", function (err, result, fields) {
    if (err) throw err;
    
    for (let i=0; i<result.length; i++) {
     
     if(result[i].tur=="red"){oda5red+=result[i].sonuc+"\n";}
     else if(result[i].tur=="blue"){oda5blue+=result[i].sonuc+"\n";}
     else if(result[i].tur=="spec"){oda5spec+=result[i].sonuc+"\n";}

     else if(result[i].tur=="odalinki"){oda5link=result[i].sonuc;}
     else if(result[i].tur=="sonuç"){oda5sonuç=result[i].sonuc;}
     else if(result[i].tur=="redseri"){
                                          oda5redseri=result[i].sonuc;
                                        }
     else if(result[i].tur=="blueseri"){
                                       oda5blueseri=result[i].sonuc;
                                        }
    }
  
    if(oda5red==""||oda5red==null){oda5red="❌";}
    if(oda5spec==""||oda5spec==null){oda5spec="❌";}
    if(oda5blue==""||oda5blue==null){oda5blue="❌";}
    if(oda5link==""||oda5link==null){oda5link="https://haxballplayers.com/";}
    if(oda5redseri==""||oda5redseri==null){oda5redseri="❌";}
    if(oda5blueseri==""||oda5blueseri==null){oda5blueseri="❌";}
    if(oda5sonuç==""||oda5sonuç==null){oda5sonuç="❌";}
    const odakanal5= list.channels.cache.find(channel => channel.name==="🎇ʜᴜᴅ-5🎇");
if(oda5link!=""){
    
  if(ilk5==1){
    
    
    
     

    odakanal5.messages.fetch({ limit: 1 }).then(messages => {
                  let lastMessage = messages.first();
                  
                  const exampleEmbed = new Discord.MessageEmbed()                
                  .setColor('#0099ff')
                  .setTitle('ODA LİNKİ')
                  .setURL(oda5link)
                  .setAuthor('HÜD-5', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
                  .setDescription('Skor:'+oda5sonuç)
                  .setThumbnail('https://haxballplayers.com/wp-content/uploads/2020/12/cropped-Baslksz-1-2.png')
                  .addFields(
                    { name: 'Red Seri', value: oda5redseri, inline: true },
                    { name: 'Blue Seri', value: oda5blueseri, inline: true},
                   
                    { name: '\u200B', value: '\u200B' },
                    { name: 'RED', value: oda5red, inline: true },
                    { name: 'SPEC', value: oda5spec, inline: true },
                  )
                  .addField('BLUE', oda5blue, true)
                  //.setImage('https://i.imgur.com/wSTFkRM.png')
                  .setTimestamp()
                  .setFooter('Son Güncelleme:', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-sports-logo-generator-for-a-soccer-team-1748y-2931-2-1-e1607105204773.png');
                
                  lastMessage.edit(exampleEmbed);



                })
                .catch(console.error);
      
  

  
  }  
else if(ilk5==0){

  odakanal5.bulkDelete(1);

  ilk5=1;
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('ODA Linki')
	.setURL('https://discord.js.org/')
	.setAuthor('HÜD-5', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
  .setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
    { name: 'Regular field title', value: '1' },
    { name: 'Regular field title', value: '2' },
    { name: 'Regular field title', value: '3' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	//.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

 
  odakanal5.send(exampleEmbed);
  }

}

  });


}


function odabilgi6(){
  oda6red="";
  oda6spec="";
   oda6blue="";
   oda6link="";
   oda6redseri="";
   oda6blueseri="";
   oda6sonuç="";
   
  const list = client.guilds.cache.get(Guilds1); 
  
  con.query("SELECT * FROM `HUDFUTSAL-6R`", function (err, result, fields) {
    if (err) throw err;
    
    for (let i=0; i<result.length; i++) {
     
     if(result[i].tur=="red"){oda6red+=result[i].sonuc+"\n";}
     else if(result[i].tur=="blue"){oda6blue+=result[i].sonuc+"\n";}
     else if(result[i].tur=="spec"){oda6spec+=result[i].sonuc+"\n";}

     else if(result[i].tur=="odalinki"){oda6link=result[i].sonuc;}
     else if(result[i].tur=="sonuç"){oda6sonuç=result[i].sonuc;}
     else if(result[i].tur=="redseri"){
                                          oda6redseri=result[i].sonuc;
                                        }
     else if(result[i].tur=="blueseri"){
                                       oda6blueseri=result[i].sonuc;
                                        }
    }
  
    if(oda6red==""||oda6red==null){oda6red="❌";}
    if(oda6spec==""||oda6spec==null){oda6spec="❌";}
    if(oda6blue==""||oda6blue==null){oda6blue="❌";}
    if(oda6link==""||oda6link==null){oda6link="https://haxballplayers.com/";}
    if(oda6redseri==""||oda6redseri==null){oda6redseri="❌";}
    if(oda6blueseri==""||oda6blueseri==null){oda6blueseri="❌";}
    if(oda6sonuç==""||oda6sonuç==null){oda6sonuç="❌";}
    const odakanal6= list.channels.cache.find(channel => channel.name==="🎇ʜᴜᴅ-6🎇");
if(oda6link!=""){
    
  if(ilk6==1){
    
    
    
     

    odakanal6.messages.fetch({ limit: 1 }).then(messages => {
                  let lastMessage = messages.first();
                  
                  const exampleEmbed = new Discord.MessageEmbed()                
                  .setColor('#0099ff')
                  .setTitle('ODA LİNKİ')
                  .setURL(oda6link)
                  .setAuthor('HÜD-6', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
                  .setDescription('Skor:'+oda6sonuç)
                  .setThumbnail('https://haxballplayers.com/wp-content/uploads/2020/12/cropped-Baslksz-1-2.png')
                  .addFields(
                    { name: 'Red Seri', value: oda6redseri, inline: true },
                    { name: 'Blue Seri', value: oda6blueseri, inline: true},
                   
                    { name: '\u200B', value: '\u200B' },
                    { name: 'RED', value: oda6red, inline: true },
                    { name: 'SPEC', value: oda6spec, inline: true },
                  )
                  .addField('BLUE', oda6blue, true)
                  //.setImage('https://i.imgur.com/wSTFkRM.png')
                  .setTimestamp()
                  .setFooter('Son Güncelleme:', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-sports-logo-generator-for-a-soccer-team-1748y-2931-2-1-e1607105204773.png');
                
                  lastMessage.edit(exampleEmbed);



                })
                .catch(console.error);
      
  

  
  }  
else if(ilk6==0){

  odakanal6.bulkDelete(1);

  ilk6=1;
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('ODA Linki')
	.setURL('https://discord.js.org/')
	.setAuthor('HÜD-6', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
  .setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
    { name: 'Regular field title', value: '1' },
    { name: 'Regular field title', value: '2' },
    { name: 'Regular field title', value: '3' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	//.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

 
  odakanal6.send(exampleEmbed);
  }

}

  });


}


function odabilgi7(){
  oda7red="";
  oda7spec="";
   oda7blue="";
   oda7link="";
   oda7redseri="";
   oda7blueseri="";
   oda7sonuç="";
   
  const list = client.guilds.cache.get(Guilds1); 
  
  con.query("SELECT * FROM `HUDFUTSAL-7R`", function (err, result, fields) {
    if (err) throw err;
    
    for (let i=0; i<result.length; i++) {
     
     if(result[i].tur=="red"){oda7red+=result[i].sonuc+"\n";}
     else if(result[i].tur=="blue"){oda7blue+=result[i].sonuc+"\n";}
     else if(result[i].tur=="spec"){oda7spec+=result[i].sonuc+"\n";}

     else if(result[i].tur=="odalinki"){oda7link=result[i].sonuc;}
     else if(result[i].tur=="sonuç"){oda7sonuç=result[i].sonuc;}
     else if(result[i].tur=="redseri"){
                                          oda7redseri=result[i].sonuc;
                                        }
     else if(result[i].tur=="blueseri"){
                                       oda7blueseri=result[i].sonuc;
                                        }
    }
  
    if(oda7red==""||oda7red==null){oda7red="❌";}
    if(oda7spec==""||oda7spec==null){oda7spec="❌";}
    if(oda7blue==""||oda7blue==null){oda7blue="❌";}
    if(oda7link==""||oda7link==null){oda7link="https://haxballplayers.com/";}
    if(oda7redseri==""||oda7redseri==null){oda7redseri="❌";}
    if(oda7blueseri==""||oda7blueseri==null){oda7blueseri="❌";}
    if(oda7sonuç==""||oda7sonuç==null){oda7sonuç="❌";}
    const odakanal7= list.channels.cache.find(channel => channel.name==="🎇ʜᴜᴅ-7🎇");
if(oda7link!=""){
    
  if(ilk7==1){
    
    
    
     

    odakanal7.messages.fetch({ limit: 1 }).then(messages => {
                  let lastMessage = messages.first();
                  
                  const exampleEmbed = new Discord.MessageEmbed()                
                  .setColor('#0099ff')
                  .setTitle('ODA LİNKİ')
                  .setURL(oda7link)
                  .setAuthor('HÜD-7', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
                  .setDescription('Skor:'+oda7sonuç)
                  .setThumbnail('https://haxballplayers.com/wp-content/uploads/2020/12/cropped-Baslksz-1-2.png')
                  .addFields(
                    { name: 'Red Seri', value: oda7redseri, inline: true },
                    { name: 'Blue Seri', value: oda7blueseri, inline: true},
                   
                    { name: '\u200B', value: '\u200B' },
                    { name: 'RED', value: oda7red, inline: true },
                    { name: 'SPEC', value: oda7spec, inline: true },
                  )
                  .addField('BLUE', oda7blue, true)
                  //.setImage('https://i.imgur.com/wSTFkRM.png')
                  .setTimestamp()
                  .setFooter('Son Güncelleme:', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-sports-logo-generator-for-a-soccer-team-1748y-2931-2-1-e1607105204773.png');
                
                  lastMessage.edit(exampleEmbed);



                })
                .catch(console.error);
      
  

  
  }  
else if(ilk7==0){

  odakanal7.bulkDelete(1);

  ilk7=1;
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('ODA Linki')
	.setURL('https://discord.js.org/')
	.setAuthor('HÜD-7', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
  .setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
    { name: 'Regular field title', value: '1' },
    { name: 'Regular field title', value: '2' },
    { name: 'Regular field title', value: '3' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	//.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

 
  odakanal7.send(exampleEmbed);
  }

}

  });


}




function odabilgi8(){
  oda8red="";
  oda8spec="";
   oda8blue="";
   oda8link="";
   oda8redseri="";
   oda8blueseri="";
   oda8sonuç="";
   
  const list = client.guilds.cache.get(Guilds1); 
  
  con.query("SELECT * FROM `HUDFUTSAL-8R`", function (err, result, fields) {
    if (err) throw err;
    
    for (let i=0; i<result.length; i++) {
     
     if(result[i].tur=="red"){oda8red+=result[i].sonuc+"\n";}
     else if(result[i].tur=="blue"){oda8blue+=result[i].sonuc+"\n";}
     else if(result[i].tur=="spec"){oda8spec+=result[i].sonuc+"\n";}

     else if(result[i].tur=="odalinki"){oda8link=result[i].sonuc;}
     else if(result[i].tur=="sonuç"){oda8sonuç=result[i].sonuc;}
     else if(result[i].tur=="redseri"){
                                          oda8redseri=result[i].sonuc;
                                        }
     else if(result[i].tur=="blueseri"){
                                       oda8blueseri=result[i].sonuc;
                                        }
    }
  
    if(oda8red==""||oda8red==null){oda8red="❌";}
    if(oda8spec==""||oda8spec==null){oda8spec="❌";}
    if(oda8blue==""||oda8blue==null){oda8blue="❌";}
    if(oda8link==""||oda8link==null){oda8link="https://haxballplayers.com/";}
    if(oda8redseri==""||oda8redseri==null){oda8redseri="❌";}
    if(oda8blueseri==""||oda8blueseri==null){oda8blueseri="❌";}
    if(oda8sonuç==""||oda8sonuç==null){oda8sonuç="❌";}
    const odakanal8= list.channels.cache.find(channel => channel.name==="🎇ʜᴜᴅ-8🎇");
if(oda8link!=""){
    
  if(ilk8==1){
    
    
    
     

    odakanal8.messages.fetch({ limit: 1 }).then(messages => {
                  let lastMessage = messages.first();
                  
                  const exampleEmbed = new Discord.MessageEmbed()                
                  .setColor('#0099ff')
                  .setTitle('ODA LİNKİ')
                  .setURL(oda8link)
                  .setAuthor('HÜD-8', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
                  .setDescription('Skor:'+oda8sonuç)
                  .setThumbnail('https://haxballplayers.com/wp-content/uploads/2020/12/cropped-Baslksz-1-2.png')
                  .addFields(
                    { name: 'Red Seri', value: oda8redseri, inline: true },
                    { name: 'Blue Seri', value: oda8blueseri, inline: true},
                   
                    { name: '\u200B', value: '\u200B' },
                    { name: 'RED', value: oda8red, inline: true },
                    { name: 'SPEC', value: oda8spec, inline: true },
                  )
                  .addField('BLUE', oda8blue, true)
                  //.setImage('https://i.imgur.com/wSTFkRM.png')
                  .setTimestamp()
                  .setFooter('Son Güncelleme:', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-sports-logo-generator-for-a-soccer-team-1748y-2931-2-1-e1607105204773.png');
                
                  lastMessage.edit(exampleEmbed);



                })
                .catch(console.error);
      
  

  
  }  
else if(ilk8==0){

  odakanal8.bulkDelete(1);

  ilk8=1;
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('ODA Linki')
	.setURL('https://discord.js.org/')
	.setAuthor('HÜD-8', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
  .setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
    { name: 'Regular field title', value: '1' },
    { name: 'Regular field title', value: '2' },
    { name: 'Regular field title', value: '3' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	//.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

 
  odakanal8.send(exampleEmbed);
  }

}

  });


}




function odabilgi9(){
  oda9red="";
  oda9spec="";
   oda9blue="";
   oda9link="";
   oda9redseri="";
   oda9blueseri="";
   oda9sonuç="";
   
  const list = client.guilds.cache.get(Guilds1); 
  
  con.query("SELECT * FROM `HUDFUTSAL-9R`", function (err, result, fields) {
    if (err) throw err;
    
    for (let i=0; i<result.length; i++) {
     
     if(result[i].tur=="red"){oda9red+=result[i].sonuc+"\n";}
     else if(result[i].tur=="blue"){oda9blue+=result[i].sonuc+"\n";}
     else if(result[i].tur=="spec"){oda9spec+=result[i].sonuc+"\n";}

     else if(result[i].tur=="odalinki"){oda9link=result[i].sonuc;}
     else if(result[i].tur=="sonuç"){oda9sonuç=result[i].sonuc;}
     else if(result[i].tur=="redseri"){
                                          oda9redseri=result[i].sonuc;
                                        }
     else if(result[i].tur=="blueseri"){
                                       oda9blueseri=result[i].sonuc;
                                        }
    }
  
    if(oda9red==""||oda9red==null){oda9red="❌";}
    if(oda9spec==""||oda9spec==null){oda9spec="❌";}
    if(oda9blue==""||oda9blue==null){oda9blue="❌";}
    if(oda9link==""||oda9link==null){oda9link="https://haxballplayers.com/";}
    if(oda9redseri==""||oda9redseri==null){oda9redseri="❌";}
    if(oda9blueseri==""||oda9blueseri==null){oda9blueseri="❌";}
    if(oda9sonuç==""||oda9sonuç==null){oda9sonuç="❌";}
    const odakanal9= list.channels.cache.find(channel => channel.name==="🎇ʜᴜᴅ-9🎇");
if(oda9link!=""){
    
  if(ilk9==1){
    
    
    
     

    odakanal9.messages.fetch({ limit: 1 }).then(messages => {
                  let lastMessage = messages.first();
                  
                  const exampleEmbed = new Discord.MessageEmbed()                
                  .setColor('#0099ff')
                  .setTitle('ODA LİNKİ')
                  .setURL(oda9link)
                  .setAuthor('HÜD-9', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
                  .setDescription('Skor:'+oda9sonuç)
                  .setThumbnail('https://haxballplayers.com/wp-content/uploads/2020/12/cropped-Baslksz-1-2.png')
                  .addFields(
                    { name: 'Red Seri', value: oda9redseri, inline: true },
                    { name: 'Blue Seri', value: oda9blueseri, inline: true},
                   
                    { name: '\u200B', value: '\u200B' },
                    { name: 'RED', value: oda9red, inline: true },
                    { name: 'SPEC', value: oda9spec, inline: true },
                  )
                  .addField('BLUE', oda9blue, true)
                  //.setImage('https://i.imgur.com/wSTFkRM.png')
                  .setTimestamp()
                  .setFooter('Son Güncelleme:', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-sports-logo-generator-for-a-soccer-team-1748y-2931-2-1-e1607105204773.png');
                
                  lastMessage.edit(exampleEmbed);



                })
                .catch(console.error);
      
  

  
  }  
else if(ilk9==0){

  odakanal9.bulkDelete(1);

  ilk9=1;
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('ODA Linki')
	.setURL('https://discord.js.org/')
	.setAuthor('HÜD-9', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
  .setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
    { name: 'Regular field title', value: '1' },
    { name: 'Regular field title', value: '2' },
    { name: 'Regular field title', value: '3' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	//.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

 
  odakanal9.send(exampleEmbed);
  }

}

  });


}


function odabilgi10(){
  oda10red="";
  oda10spec="";
   oda10blue="";
   oda10link="";
   oda10redseri="";
   oda10blueseri="";
   oda10sonuç="";
   
  const list = client.guilds.cache.get(Guilds1); 
  
  con.query("SELECT * FROM `HUDFUTSAL-10R`", function (err, result, fields) {
    if (err) throw err;
    
    for (let i=0; i<result.length; i++) {
     
     if(result[i].tur=="red"){oda10red+=result[i].sonuc+"\n";}
     else if(result[i].tur=="blue"){oda10blue+=result[i].sonuc+"\n";}
     else if(result[i].tur=="spec"){oda10spec+=result[i].sonuc+"\n";}

     else if(result[i].tur=="odalinki"){oda10link=result[i].sonuc;}
     else if(result[i].tur=="sonuç"){oda10sonuç=result[i].sonuc;}
     else if(result[i].tur=="redseri"){
                                          oda10redseri=result[i].sonuc;
                                        }
     else if(result[i].tur=="blueseri"){
                                       oda10blueseri=result[i].sonuc;
                                        }
    }
  
    if(oda10red==""||oda10red==null){oda10red="❌";}
    if(oda10spec==""||oda10spec==null){oda10spec="❌";}
    if(oda10blue==""||oda10blue==null){oda10blue="❌";}
    if(oda10link==""||oda10link==null){oda10link="https://haxballplayers.com/";}
    if(oda10redseri==""||oda10redseri==null){oda10redseri="❌";}
    if(oda10blueseri==""||oda10blueseri==null){oda10blueseri="❌";}
    if(oda10sonuç==""||oda10sonuç==null){oda10sonuç="❌";}
    const odakanal10= list.channels.cache.find(channel => channel.name==="🎇ʜᴜᴅ-10🎇");
if(oda10link!=""){
    
  if(ilk10==1){
    
    
    
     

    odakanal10.messages.fetch({ limit: 1 }).then(messages => {
                  let lastMessage = messages.first();
                  
                  const exampleEmbed = new Discord.MessageEmbed()                
                  .setColor('#0099ff')
                  .setTitle('ODA LİNKİ')
                  .setURL(oda10link)
                  .setAuthor('HÜD-10', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
                  .setDescription('Skor:'+oda10sonuç)
                  .setThumbnail('https://haxballplayers.com/wp-content/uploads/2020/12/cropped-Baslksz-1-2.png')
                  .addFields(
                    { name: 'Red Seri', value: oda10redseri, inline: true },
                    { name: 'Blue Seri', value: oda10blueseri, inline: true},
                   
                    { name: '\u200B', value: '\u200B' },
                    { name: 'RED', value: oda10red, inline: true },
                    { name: 'SPEC', value: oda10spec, inline: true },
                  )
                  .addField('BLUE', oda10blue, true)
                  //.setImage('https://i.imgur.com/wSTFkRM.png')
                  .setTimestamp()
                  .setFooter('Son Güncelleme:', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-sports-logo-generator-for-a-soccer-team-1748y-2931-2-1-e1607105204773.png');
                
                  lastMessage.edit(exampleEmbed);



                })
                .catch(console.error);
      
  

  
  }  
else if(ilk10==0){

  odakanal10.bulkDelete(1);

  ilk10=1;
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('ODA Linki')
	.setURL('https://discord.js.org/')
	.setAuthor('HÜD-10', 'https://haxballplayers.com/wp-content/uploads/2020/12/cropped-technology-logo-generator-with-a-labyrinth-graphic-560c-el1.png', 'https://haxballplayers.com/')
  .setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
    { name: 'Regular field title', value: '1' },
    { name: 'Regular field title', value: '2' },
    { name: 'Regular field title', value: '3' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	//.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

 
  odakanal10.send(exampleEmbed);
  }

}

  });


}




client.login('');


