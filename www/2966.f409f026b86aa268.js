"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2966],{2966:(P,r,c)=>{c.r(r),c.d(r,{ClasesPageModule:()=>A});var d=c(6814),g=c(95),l=c(5548),u=c(4248),p=c(5861),v=c(9431),s=c(6689),C=c(9315);function f(a,t){if(1&a){const n=s.EpF();s.TgZ(0,"div",16),s.NdJ("click",function(){const o=s.CHM(n).$implicit,m=s.oxw(2);return s.KtG(m.showModalAudio(o.id,"https://spacuantico.com/musics/playVimeoApp/"+o.id))}),s.TgZ(1,"div",17),s._UZ(2,"img",18),s.qZA(),s.TgZ(3,"div",19)(4,"span",20),s._UZ(5,"ion-icon",21),s.qZA(),s._uU(6," Reproducir "),s.qZA()()}if(2&a){const n=t.$implicit;s.xp6(2),s.MGl("src","https://spacuantico.com/files/multimedia/",n.imagen,"",s.LSH)}}function Z(a,t){if(1&a&&(s.TgZ(0,"div",13)(1,"div",6)(2,"div",14),s.YNc(3,f,7,1,"div",15),s.qZA()()()),2&a){const n=t.$implicit;s.xp6(3),s.Q6J("ngForOf",n.tracks)}}const h=[{path:"",component:(()=>{var a;class t{constructor(i,e,o){this.apiService=i,this.navCtrl=e,this.modalCtrl=o,this.paramInter=null,this.seccionsAndTrancks=[]}ngOnInit(){this.secionsAndTracks()}secionsAndTracks(){this.apiService.tracksDash("3").subscribe(i=>{this.seccionsAndTrancks=i})}audios(){this.navCtrl.navigateRoot("audios",{animated:!0})}podcast(){this.navCtrl.navigateRoot("podcast",{animated:!0})}grupales(){this.navCtrl.navigateRoot("grupales",{animated:!0})}cuanticas(){this.navCtrl.navigateRoot("camaras-cuanticas",{animated:!0})}dashboard(){this.navCtrl.navigateRoot("dashboard",{animated:!0})}clases(){this.navCtrl.navigateRoot("clases",{animated:!0})}showModalAudio(i,e){var o=this;return(0,p.Z)(function*(){return yield(yield o.modalCtrl.create({component:v.V,componentProps:{id:i,urlVideo:e}})).present()})()}}return(a=t).\u0275fac=function(i){return new(i||a)(s.Y36(C.t),s.Y36(l.SH),s.Y36(l.IN))},a.\u0275cmp=s.Xpm({type:a,selectors:[["app-clases"]],decls:25,vars:2,consts:[[1,"container"],[1,"row","mt-4"],["id","titulo-page",1,"col-sm-7","mt-4"],["class","row mt-5",4,"ngFor","ngForOf"],[1,"ion-no-border",3,"translucent"],[1,"row","row-cols-sm-5"],[1,"col"],[3,"click"],["src","assets/Audios-energeticos.png",1,"img-fluid","img-icon-active","mx-auto"],["src","assets/Podcast.png",1,"img-fluid","img-icon","mx-auto"],["src","assets/Clases.png",1,"img-fluid","img-icon","mx-auto"],["src","assets/Camaras-cuanticas.png",1,"img-fluid","img-icon","mx-auto"],["src","assets/Sesion-grupal.png",1,"img-fluid","img-icon","mx-auto"],[1,"row","mt-5"],[1,"row"],["class"," mt-4 mx-auto col-6",3,"click",4,"ngFor","ngForOf"],[1,"mt-4","mx-auto","col-6",3,"click"],[1,"albun"],[1,"img-fluid","img-albun",3,"src"],[1,"controles"],[1,"icon-play"],["name","play-circle-outline"]],template:function(i,e){1&i&&(s.TgZ(0,"ion-content")(1,"div",0)(2,"div",1)(3,"div",2),s._uU(4," Clases "),s.qZA()(),s.YNc(5,Z,4,1,"div",3),s.qZA()(),s.TgZ(6,"ion-footer",4)(7,"ion-toolbar")(8,"div",0)(9,"div",5)(10,"div",6)(11,"span",7),s.NdJ("click",function(){return e.audios()}),s._UZ(12,"ion-img",8),s.qZA()(),s.TgZ(13,"div",6)(14,"span",7),s.NdJ("click",function(){return e.podcast()}),s._UZ(15,"ion-img",9),s.qZA()(),s.TgZ(16,"div",6)(17,"span",7),s.NdJ("click",function(){return e.clases()}),s._UZ(18,"ion-img",10),s.qZA()(),s.TgZ(19,"div",6)(20,"span",7),s.NdJ("click",function(){return e.cuanticas()}),s._UZ(21,"ion-img",11),s.qZA()(),s.TgZ(22,"div",6)(23,"span",7),s.NdJ("click",function(){return e.grupales()}),s._UZ(24,"ion-img",12),s.qZA()()()()()()),2&i&&(s.xp6(5),s.Q6J("ngForOf",e.seccionsAndTrancks),s.xp6(1),s.Q6J("translucent",!0))},dependencies:[d.sg,l.W2,l.fr,l.gu,l.Xz,l.sr]}),t})()}];let T=(()=>{var a;class t{}return(a=t).\u0275fac=function(i){return new(i||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[u.Bz.forChild(h),u.Bz]}),t})(),A=(()=>{var a;class t{}return(a=t).\u0275fac=function(i){return new(i||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[d.ez,g.u5,l.Pc,T]}),t})()}}]);