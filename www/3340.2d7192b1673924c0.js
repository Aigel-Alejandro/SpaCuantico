"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3340],{3340:(P,d,c)=>{c.r(d),c.d(d,{AudiosPageModule:()=>_});var l=c(6814),m=c(95),r=c(5548),u=c(4248),p=c(5861),v=c(2867),i=c(6689),A=c(9315);function f(s,a){if(1&s){const o=i.EpF();i.TgZ(0,"div",17),i.NdJ("click",function(){const e=i.CHM(o).$implicit,g=i.oxw(2);return i.KtG(g.showModalAudio(e.id,"https://spacuantico.com/files/multimedia/"+e.archivo))}),i.TgZ(1,"div",18),i._UZ(2,"img",19),i.qZA(),i.TgZ(3,"div",20)(4,"span",21),i._UZ(5,"ion-icon",22),i.qZA(),i._uU(6," Reproducir "),i.qZA()()}if(2&s){const o=a.$implicit;i.xp6(2),i.MGl("src","https://spacuantico.com/files/multimedia/",o.imagen,"",i.LSH)}}function Z(s,a){if(1&s&&(i.TgZ(0,"div",13)(1,"div",6)(2,"div",14),i._uU(3),i.qZA(),i.TgZ(4,"div",15),i.YNc(5,f,7,1,"div",16),i.qZA()()()),2&s){const o=a.$implicit;i.xp6(3),i.AsE(" ",o.titulo," ",o.coleccion," "),i.xp6(2),i.Q6J("ngForOf",o.tracks)}}const h=[{path:"",component:(()=>{var s;class a{constructor(t,n,e){this.apiService=t,this.navCtrl=n,this.modalCtrl=e,this.paramInter=null,this.seccionsAndTrancks=[]}ngOnInit(){this.secionsAndTracks()}secionsAndTracks(){this.apiService.tracksDash("1").subscribe(t=>{this.seccionsAndTrancks=t})}audios(){this.navCtrl.navigateRoot("audios",{animated:!0})}podcast(){this.navCtrl.navigateRoot("podcast",{animated:!0})}grupales(){this.navCtrl.navigateRoot("grupales",{animated:!0})}cuanticas(){this.navCtrl.navigateRoot("camaras-cuanticas",{animated:!0})}dashboard(){this.navCtrl.navigateRoot("dashboard",{animated:!0})}clases(){this.navCtrl.navigateRoot("clases",{animated:!0})}showModalAudio(t,n){var e=this;return(0,p.Z)(function*(){return yield(yield e.modalCtrl.create({component:v.A,componentProps:{id:t,srcaudios:n}})).present()})()}}return(s=a).\u0275fac=function(t){return new(t||s)(i.Y36(A.t),i.Y36(r.SH),i.Y36(r.IN))},s.\u0275cmp=i.Xpm({type:s,selectors:[["app-audios"]],decls:25,vars:2,consts:[[1,"container"],[1,"row","mt-4"],["id","titulo-page",1,"col-sm-7","mt-4"],["class","row mt-5",4,"ngFor","ngForOf"],[1,"ion-no-border",3,"translucent"],[1,"row","row-cols-sm-5"],[1,"col"],[3,"click"],["src","assets/Audios-energeticos.png",1,"img-fluid","img-icon-active","mx-auto"],["src","assets/Podcast.png",1,"img-fluid","img-icon","mx-auto"],["src","assets/Clases.png",1,"img-fluid","img-icon","mx-auto"],["src","assets/Camaras-cuanticas.png",1,"img-fluid","img-icon","mx-auto"],["src","assets/Sesion-grupal.png",1,"img-fluid","img-icon","mx-auto"],[1,"row","mt-5"],[1,"titulo"],[1,"d-flex","justify-content-start","contenedor"],["class","col-5 pointer",3,"click",4,"ngFor","ngForOf"],[1,"col-5","pointer",3,"click"],[1,"albun"],[1,"img-fluid","img-albun",3,"src"],[1,"controles"],[1,"icon-play"],["name","play-circle-outline"]],template:function(t,n){1&t&&(i.TgZ(0,"ion-content")(1,"div",0)(2,"div",1)(3,"div",2),i._uU(4," Audios "),i.qZA()(),i.YNc(5,Z,6,3,"div",3),i.qZA()(),i.TgZ(6,"ion-footer",4)(7,"ion-toolbar")(8,"div",0)(9,"div",5)(10,"div",6)(11,"span",7),i.NdJ("click",function(){return n.audios()}),i._UZ(12,"ion-img",8),i.qZA()(),i.TgZ(13,"div",6)(14,"span",7),i.NdJ("click",function(){return n.podcast()}),i._UZ(15,"ion-img",9),i.qZA()(),i.TgZ(16,"div",6)(17,"span",7),i.NdJ("click",function(){return n.clases()}),i._UZ(18,"ion-img",10),i.qZA()(),i.TgZ(19,"div",6)(20,"span",7),i.NdJ("click",function(){return n.cuanticas()}),i._UZ(21,"ion-img",11),i.qZA()(),i.TgZ(22,"div",6)(23,"span",7),i.NdJ("click",function(){return n.grupales()}),i._UZ(24,"ion-img",12),i.qZA()()()()()()),2&t&&(i.xp6(5),i.Q6J("ngForOf",n.seccionsAndTrancks),i.xp6(1),i.Q6J("translucent",!0))},dependencies:[l.sg,r.W2,r.fr,r.gu,r.Xz,r.sr]}),a})()}];let T=(()=>{var s;class a{}return(s=a).\u0275fac=function(t){return new(t||s)},s.\u0275mod=i.oAB({type:s}),s.\u0275inj=i.cJS({imports:[u.Bz.forChild(h),u.Bz]}),a})(),_=(()=>{var s;class a{}return(s=a).\u0275fac=function(t){return new(t||s)},s.\u0275mod=i.oAB({type:s}),s.\u0275inj=i.cJS({imports:[l.ez,m.u5,r.Pc,T]}),a})()}}]);