"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5297],{5297:(_,d,r)=>{r.r(d),r.d(d,{DashboardPageModule:()=>b});var l=r(6814),m=r(95),c=r(5548),u=r(4248),p=r(5861),h=r(2867),a=r(6689),v=r(9315);function f(i,n){if(1&i){const s=a.EpF();a.TgZ(0,"div",17),a.NdJ("click",function(){const e=a.CHM(s).$implicit,g=a.oxw(2);return a.KtG(g.showModalAudio(e.id,"https://spacuantico.com/files/multimedia/"+e.archivo))}),a.TgZ(1,"div",18),a._UZ(2,"img",19),a.qZA(),a.TgZ(3,"div",20)(4,"span",21),a._UZ(5,"ion-icon",22),a.qZA(),a._uU(6," Reproducir "),a.qZA()()}if(2&i){const s=n.$implicit;a.xp6(2),a.MGl("src","https://spacuantico.com/files/multimedia/",s.imagen,"",a.LSH)}}function Z(i,n){if(1&i&&(a.TgZ(0,"div",13)(1,"div",6)(2,"div",14),a._uU(3),a.qZA(),a.TgZ(4,"div",15),a.YNc(5,f,7,1,"div",16),a.qZA()()()),2&i){const s=n.$implicit;a.xp6(3),a.AsE(" ",s.titulo," ",s.coleccion," "),a.xp6(2),a.Q6J("ngForOf",s.tracks)}}const T=[{path:"",component:(()=>{var i;class n{constructor(o,t,e){this.apiService=o,this.navCtrl=t,this.modalCtrl=e,this.paramInter=null,this.seccionsAndTrancks=[],this.audio={}}ngOnInit(){this.secionsAndTracks()}secionsAndTracks(){this.apiService.tracksDash("").subscribe(o=>{this.seccionsAndTrancks=o})}audios(){this.navCtrl.navigateRoot("audios",{animated:!0})}podcast(){this.navCtrl.navigateRoot("podcast",{animated:!0})}grupales(){this.navCtrl.navigateRoot("grupales",{animated:!0})}dashboard(){this.navCtrl.navigateRoot("dashboard",{animated:!0})}showModalAudio(o,t){var e=this;return(0,p.Z)(function*(){return yield(yield e.modalCtrl.create({component:h.A,componentProps:{id:o,srcaudios:t}})).present()})()}}return(i=n).\u0275fac=function(o){return new(o||i)(a.Y36(v.t),a.Y36(c.SH),a.Y36(c.IN))},i.\u0275cmp=a.Xpm({type:i,selectors:[["app-dashboard"]],decls:25,vars:2,consts:[[1,"container"],[1,"row","mt-4"],["id","titulo-page",1,"col-sm-7"],["class","row mt-5",4,"ngFor","ngForOf"],[1,"ion-no-border",3,"translucent"],[1,"row","row-cols-sm-5"],[1,"col"],[3,"click"],["src","assets/Audios-energeticos.png",1,"img-fluid","img-icon","mx-auto"],["src","assets/Podcast.png",1,"img-fluid","img-icon","mx-auto"],["src","assets/Clases.png",1,"img-fluid","img-icon","mx-auto"],["src","assets/Camaras-cuanticas.png",1,"img-fluid","img-icon","mx-auto"],["src","assets/Sesion-grupal.png",1,"img-fluid","img-icon","mx-auto"],[1,"row","mt-5"],[1,"titulo"],[1,"d-flex","justify-content-start","contenedor"],["class","col-5 pointer",3,"click",4,"ngFor","ngForOf"],[1,"col-5","pointer",3,"click"],[1,"albun"],[1,"img-fluid","img-albun",3,"src"],[1,"controles"],[1,"icon-play"],["name","play-circle-outline"]],template:function(o,t){1&o&&(a.TgZ(0,"ion-content")(1,"div",0)(2,"div",1)(3,"div",2),a._uU(4," Men\xfa "),a.qZA()(),a.YNc(5,Z,6,3,"div",3),a.qZA()(),a.TgZ(6,"ion-footer",4)(7,"ion-toolbar")(8,"div",0)(9,"div",5)(10,"div",6)(11,"span",7),a.NdJ("click",function(){return t.audios()}),a._UZ(12,"ion-img",8),a.qZA()(),a.TgZ(13,"div",6)(14,"span",7),a.NdJ("click",function(){return t.podcast()}),a._UZ(15,"ion-img",9),a.qZA()(),a.TgZ(16,"div",6)(17,"span",7),a.NdJ("click",function(){return t.dashboard()}),a._UZ(18,"ion-img",10),a.qZA()(),a.TgZ(19,"div",6)(20,"span",7),a.NdJ("click",function(){return t.grupales()}),a._UZ(21,"ion-img",11),a.qZA()(),a.TgZ(22,"div",6)(23,"span",7),a.NdJ("click",function(){return t.dashboard()}),a._UZ(24,"ion-img",12),a.qZA()()()()()()),2&o&&(a.xp6(5),a.Q6J("ngForOf",t.seccionsAndTrancks),a.xp6(1),a.Q6J("translucent",!0))},dependencies:[l.sg,c.W2,c.fr,c.gu,c.Xz,c.sr]}),n})()}];let A=(()=>{var i;class n{}return(i=n).\u0275fac=function(o){return new(o||i)},i.\u0275mod=a.oAB({type:i}),i.\u0275inj=a.cJS({imports:[u.Bz.forChild(T),u.Bz]}),n})(),b=(()=>{var i;class n{}return(i=n).\u0275fac=function(o){return new(o||i)},i.\u0275mod=a.oAB({type:i}),i.\u0275inj=a.cJS({imports:[l.ez,m.u5,c.Pc,A]}),n})()}}]);