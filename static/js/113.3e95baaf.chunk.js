(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1275:function(e,t,a){"use strict";a.r(t);var n=a(19),o=a(20),i=a(33),r=a(22),s=a(21),c=a(0),l=a.n(c),d=a(28),p=a(123),m=a(9),u=a(58),h=a(36),b=a(64),f=a(13),g=a(11),E=a(211),P=a(311),k=a(312),v=a(78),O=function(e,t){var a={};return e.kode_group||(a.kode_group="Kode Group Tidak Boleh Kosong"),e.berat||(a.berat="Berat Tidak Boleh Kosong"),a},j=a(210),y=a.n(j),S=a(159),_=a(214),M=Object(_.createNumberMask)({prefix:"Rp. ",suffix:" ,-",locale:"kr-KO"}),N=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={aktif:!1},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(m.L)()),setTimeout(function(){e.props.isEdit?document.getElementById("berat").focus():document.getElementById("kode_group").focus()},100)}},{key:"render",value:function(){var e=this;return l.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement(P.a,{id:"kode_group",label:"Kode Group",name:"kode_group",options:this.props.datagroup.filter(function(e){return void 0!==e.kode_group}).map(function(e){return{value:e.kode_group,name:e.kode_group+" - "+e.nama_group}}),value:this.props.kode_group,disabled:this.props.isEdit,placeholder:"Silahkan Pilih Kode Group",component:v.f})),l.a.createElement("div",{className:"col-6"},l.a.createElement(P.a,Object.assign({id:"berat",name:"nominal",component:v.e,type:"text"},M,{label:"Nominal",placeholder:"Masukan Nominal"}))),l.a.createElement("div",{className:"col-12"},l.a.createElement(P.a,{id:"poin",name:"poin",component:v.e,type:"text",normalize:S.c,label:"Poin",placeholder:"Masukan Poin",onBlur:function(){return e.setState({aktif:!0})}})),l.a.createElement("div",{className:"col-12 text-right"},"\xa0",l.a.createElement("button",{className:"btn btn-white",onClick:function(){return e.props.dispatch(Object(m.lc)())},type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",l.a.createElement("button",{className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.isLoading,type:"submit"},this.props.isLoading?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?l.a.createElement(y.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(c.Component);N=Object(k.a)({form:"ModalParamterPoint",enableReinitialize:!0,validate:O})(N);var w=Object(u.b)(function(e){if(null!==e.datamaster.ShowModalParameterPoint)return{datagroup:e.datamaster.GetDataGroup,initialValues:{kode_group:e.datamaster.ShowModalParameterPoint.kode_group,nominal:e.datamaster.ShowModalParameterPoint.nominal,poin:e.datamaster.ShowModalParameterPoint.poin}}},null)(N),x=a(213),L=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).state={isEdit:!1,modalDialog:!1,isLoading:!1,type_poin:"GRAM"},o.handleSubmit=o.handleSubmit.bind(Object(i.a)(o)),o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(m.ec)()),Object(f.e)("para-system/key/TIPE_POIN").then(function(t){e.setState({type_poin:"GRAM"===t.data.value?"GRAM":"RP"})})}},{key:"handleSubmit",value:function(e){var t=this;this.setState({isLoading:!0});var a={kode_group:e.kode_group,nominal:e.nominal,poin:e.poin};this.state.isEdit?Object(f.p)("parapoin/edit/"+e.kode_group,a).then(function(){t.props.dispatch(Object(m.lc)())}).then(function(){Object(h.e)("success","Data Berhasil Diedit")}).then(function(){t.props.dispatch(Object(m.ec)())}).then(function(){t.setState({isLoading:!1})}).then(function(){t.props.dispatch(Object(b.d)("ModalParamterPoint"))}).catch(function(e){Object(h.e)("info","Terjadi Kesalahan Saat Menyimpan Data"),t.setState({isLoading:!0})}):Object(f.j)("parapoin/add",a).then(function(){t.props.dispatch(Object(m.lc)())}).then(function(){Object(h.e)("success","Data Berhasil Simpan")}).then(function(){t.props.dispatch(Object(m.ec)())}).then(function(){t.props.dispatch(Object(b.d)("ModalParamterPoint"))}).then(function(){t.setState({isLoading:!1})}).catch(function(n){return Object(g.a)(n,"sales/reactive/by-kode-sales/",e.kode_sales,a,t.props.dispatch,Object(m.ec)(),Object(m.lc)(),"ModalParamterPoint").then(function(){t.setState({isLoading:!1})})})}},{key:"formEditParameterPoint",value:function(e){this.props.dispatch(Object(m.nc)()),this.props.dispatch(Object(m.yb)(e)),this.setState({isEdit:!0})}},{key:"showModalSales",value:function(){this.props.dispatch(Object(m.nc)()),this.props.dispatch(Object(m.yb)(!1)),this.setState({isEdit:!1})}},{key:"render",value:function(){var e=this,t=[{dataField:"kode_group",text:"Kode Group",sort:!0},{dataField:"nominal",text:"GRAM"===this.state.type_poin?"Gram":"Rp",formatter:function(e,t){return e.toLocaleString("ko-KO")||0}},{dataField:"poin",text:"Poin"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(t,a){var n={kode_group:a.kode_group,nominal:a.nominal,poin:a.poin};return l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-12"},l.a.createElement("button",{onClick:function(){return e.formEditParameterPoint(n)},className:"btn btn-primary mr-3"}," ",l.a.createElement("i",{className:"fa fa-edit"}))))}}];return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(d.b,{to:"#"},"Data Master")),l.a.createElement("li",{className:"breadcrumb-item active"},"Parameter Point")),l.a.createElement("h1",{className:"page-header"},"Parameter Point "),l.a.createElement(p.a,null,l.a.createElement(p.c,null,"Parameter Point"),l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement(E.a,{keyField:"kode_group",tambahData:!0,handleClick:function(){return e.showModalSales()},exportCsv:!0,data:this.props.ParameterPoint,columns:t,empty:this.props.ParameterPoint,textEmpty:"Parameter Point Kosong"})),l.a.createElement("br",null),l.a.createElement(x.a,{size:"P",title:this.state.isEdit?"Edit Parameter Point":"Tambah Parameter Point",content:l.a.createElement(w,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,type_poin:this.state.type_poin,onSubmit:function(t){return e.handleSubmit(t)}})})))}}]),a}(l.a.Component);t.default=Object(u.b)(function(e){return{ParameterPoint:e.datamaster.getParameterPoint,hideModal:e.datamaster.modalDialog}},null)(L)}}]);
//# sourceMappingURL=113.3e95baaf.chunk.js.map