"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6260],{6260:(h,l,o)=>{o.r(l),o.d(l,{HomePageModule:()=>f});var u=o(6814),a=o(1929),g=o(95),i=o(2891),e=o(9212),m=o(2389);const d=[{path:"",component:(()=>{var t;class r{constructor(n,s){this.router=n,this.authService=s}ngOnInit(){this.authService.getId().subscribe(n=>{(!n||!n.uid)&&(console.error("Usuario no autenticado. No se puede obtener el ID"),this.router.navigate(["loader"]))})}onEmergencyButtonClick(){this.router.navigate(["photo"])}}return(t=r).\u0275fac=function(n){return new(n||t)(e.Y36(i.F0),e.Y36(m.$))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:8,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["id","container",1,"ion-text-center"],["size","large","color","danger",3,"click"]],template:function(n,s){1&n&&(e.TgZ(0,"ion-header",0),e._UZ(1,"ion-toolbar"),e.qZA(),e.TgZ(2,"ion-content",1)(3,"div",2)(4,"ion-button",3),e.NdJ("click",function(){return s.onEmergencyButtonClick()}),e._uU(5," Emergencia "),e.qZA()()(),e.TgZ(6,"ion-footer",0),e._UZ(7,"ion-toolbar"),e.qZA()),2&n&&(e.Q6J("translucent",!0),e.xp6(2),e.Q6J("fullscreen",!0),e.xp6(4),e.Q6J("translucent",!0))},dependencies:[a.YG,a.W2,a.fr,a.Gu,a.sr],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),r})()}];let p=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.Bz.forChild(d),i.Bz]}),r})(),f=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,g.u5,a.Pc,p]}),r})()}}]);