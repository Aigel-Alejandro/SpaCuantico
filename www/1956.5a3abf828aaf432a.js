"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1956],{1956:(A,l,c)=>{c.r(l),c.d(l,{GrupalesPageModule:()=>_});var u=c(6814),m=c(95),r=c(5548),d=c(4248),g=c(5861),v=c(2867),a=c(6689),f=c(9315);function h(s,t){if(1&s){const n=a.EpF();a.TgZ(0,"div",16),a.NdJ("click",function(){const o=a.CHM(n).$implicit,p=a.oxw(2);return a.KtG(p.showModalAudio(o.id,"https://spacuantico.com/files/multimedia/"+o.archivo))}),a.TgZ(1,"div",17),a._UZ(2,"img",18),a.qZA(),a.TgZ(3,"div",19)(4,"span",20),a._UZ(5,"ion-icon",21),a.qZA(),a._uU(6," Reproducir "),a.qZA()()}if(2&s){const n=t.$implicit;a.xp6(2),a.MGl("src","https://spacuantico.com/files/multimedia/",n.imagen,"",a.LSH)}}function Z(s,t){if(1&s&&(a.TgZ(0,"div",13)(1,"div",6)(2,"div",14),a.YNc(3,h,7,1,"div",15),a.qZA()()()),2&s){const n=t.$implicit;a.xp6(3),a.Q6J("ngForOf",n.tracks)}}const T=[{path:"",component:(()=>{var s;class t{constructor(i,e,o){this.apiService=i,this.navCtrl=e,this.modalCtrl=o,this.paramInter=null,this.seccionsAndTrancks=[]}ngOnInit(){this.secionsAndTracks()}secionsAndTracks(){this.apiService.tracksDash("5").subscribe(i=>{this.seccionsAndTrancks=i})}audios(){this.navCtrl.navigateRoot("audios",{animated:!0})}podcast(){this.navCtrl.navigateRoot("podcast",{animated:!0})}grupales(){this.navCtrl.navigateRoot("grupales",{animated:!0})}cuanticas(){this.navCtrl.navigateRoot("camaras-cuanticas",{animated:!0})}clases(){this.navCtrl.navigateRoot("clases",{animated:!0})}dashboard(){this.navCtrl.navigateRoot("dashboard",{animated:!0})}showModalAudio(i,e){var o=this;return(0,g.Z)(function*(){return yield(yield o.modalCtrl.create({component:v.A,componentProps:{id:i,srcaudios:e}})).present()})()}}return(s=t).\u0275fac=function(i){return new(i||s)(a.Y36(f.t),a.Y36(r.SH),a.Y36(r.IN))},s.\u0275cmp=a.Xpm({type:s,selectors:[["app-grupales"]],decls:25,vars:2,consts:[[1,"container"],[1,"row","mt-4"],["id","titulo-page",1,"col-sm-7","mt-4"],["class","row mt-5",4,"ngFor","ngForOf"],[1,"ion-no-border",3,"translucent"],[1,"row","row-cols-sm-5"],[1,"col"],[3,"click"],["src","assets/Audios-energeticos.png",1,"img-fluid","img-icon-active","mx-auto"],["src","assets/Podcast.png",1,"img-fluid","img-icon","mx-auto"],["src","assets/Clases.png",1,"img-fluid","img-icon","mx-auto"],["src","assets/Camaras-cuanticas.png",1,"img-fluid","img-icon","mx-auto"],["src","assets/Sesion-grupal.png",1,"img-fluid","img-icon","mx-auto"],[1,"row","mt-5"],[1,"row"],["class"," mt-4 mx-auto col-6",3,"click",4,"ngFor","ngForOf"],[1,"mt-4","mx-auto","col-6",3,"click"],[1,"albun"],[1,"img-fluid","img-albun",3,"src"],[1,"controles"],[1,"icon-play"],["name","play-circle-outline"]],template:function(i,e){1&i&&(a.TgZ(0,"ion-content")(1,"div",0)(2,"div",1)(3,"div",2),a._uU(4," Sesiones Grupales "),a.qZA()(),a.YNc(5,Z,4,1,"div",3),a.qZA()(),a.TgZ(6,"ion-footer",4)(7,"ion-toolbar")(8,"div",0)(9,"div",5)(10,"div",6)(11,"span",7),a.NdJ("click",function(){return e.audios()}),a._UZ(12,"ion-img",8),a.qZA()(),a.TgZ(13,"div",6)(14,"span",7),a.NdJ("click",function(){return e.podcast()}),a._UZ(15,"ion-img",9),a.qZA()(),a.TgZ(16,"div",6)(17,"span",7),a.NdJ("click",function(){return e.clases()}),a._UZ(18,"ion-img",10),a.qZA()(),a.TgZ(19,"div",6)(20,"span",7),a.NdJ("click",function(){return e.cuanticas()}),a._UZ(21,"ion-img",11),a.qZA()(),a.TgZ(22,"div",6)(23,"span",7),a.NdJ("click",function(){return e.grupales()}),a._UZ(24,"ion-img",12),a.qZA()()()()()()),2&i&&(a.xp6(5),a.Q6J("ngForOf",e.seccionsAndTrancks),a.xp6(1),a.Q6J("translucent",!0))},dependencies:[u.sg,r.W2,r.fr,r.gu,r.Xz,r.sr]}),t})()}];let G=(()=>{var s;class t{}return(s=t).\u0275fac=function(i){return new(i||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[d.Bz.forChild(T),d.Bz]}),t})(),_=(()=>{var s;class t{}return(s=t).\u0275fac=function(i){return new(i||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[u.ez,m.u5,r.Pc,G]}),t})()}}]);