(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e91c1"],{"8bab":function(t,e,r){"use strict";r.r(e);var n=r("7a23"),a=Object(n["h"])("p",null,"Fetching Data From the Database Please Wait....",-1),c=Object(n["k"])("Export "),o={key:0};function i(t,e,r,i,s,u){var b=Object(n["K"])("base-dialog"),d=Object(n["K"])("base-spinner"),l=Object(n["K"])("base-container"),j=Object(n["K"])("font-awesome-icon"),O=Object(n["K"])("generated-tag-metrics-data-list"),g=Object(n["K"])("generated-cdr-metrics-data-list"),p=Object(n["K"])("base-table");return Object(n["C"])(),Object(n["g"])(n["a"],null,[Object(n["l"])(b,{show:!!s.error,onClose:u.handleError},{default:Object(n["U"])((function(){return[Object(n["h"])("p",null,Object(n["N"])(s.error),1)]})),_:1},8,["show","onClose"]),s.isLoading?(Object(n["C"])(),Object(n["e"])(l,{key:0},{default:Object(n["U"])((function(){return[Object(n["l"])(b,{show:s.isLoading},{default:Object(n["U"])((function(){return[Object(n["l"])(d,null,{default:Object(n["U"])((function(){return[a]})),_:1})]})),_:1},8,["show"])]})),_:1})):(Object(n["C"])(),Object(n["e"])(l,{key:1},{default:Object(n["U"])((function(){return[Object(n["h"])("button",{class:"btn btn-primary h-25 p-1 w-100",onClick:e[0]||(e[0]=function(){return u.exportMetrics&&u.exportMetrics.apply(u,arguments)})},[c,Object(n["l"])(j,{icon:"spinner"})]),Object(n["l"])(j,{icon:"coffee"}),Object(n["l"])(p,{theader:"metricsHeader",tableclass:"metrics",metricsHeader:u.metricsGenerated.tableHeader},{default:Object(n["U"])((function(){return["tag"==r.option_metrics?(Object(n["C"])(),Object(n["e"])(O,{key:0,tdata:u.metricsGenerated.tableTagRecords},null,8,["tdata"])):(Object(n["C"])(),Object(n["e"])(g,{key:1,tdata:u.metricsGenerated.tableCdrRecords,optiondata:u.metricsGenerated.outSideTableData},null,8,["tdata","optiondata"]))]})),_:1},8,["metricsHeader"]),"tag"!=r.option_metrics?(Object(n["C"])(),Object(n["g"])("div",o,[Object(n["h"])("p",null,"Date Range: "+Object(n["N"])(u.dateTimeRange),1),Object(n["h"])("p",null,"Grand Total Counts: "+Object(n["N"])(u.grandTotalCounts),1),Object(n["h"])("p",null,"Grand Total Call Duration(HH:MM:SS): "+Object(n["N"])(u.grandTotalDurations),1)])):Object(n["f"])("",!0)]})),_:1}))],64)}var s=r("1da1"),u=(r("96cf"),r("ac1f"),r("841c"),r("5319"),r("5fc3"));function b(t,e,r,a,c,o){return Object(n["C"])(!0),Object(n["g"])(n["a"],null,Object(n["I"])(r.tdata,(function(t,e){return Object(n["C"])(),Object(n["g"])("tr",{key:e},[(Object(n["C"])(!0),Object(n["g"])(n["a"],null,Object(n["I"])(t,(function(t,e){return Object(n["C"])(),Object(n["g"])("td",{key:e},Object(n["N"])(t),1)})),128)),Object(n["h"])("td",null,Object(n["N"])(o.getTotal(t)),1)])})),128)}r("4de4");var d={props:["tdata"],methods:{getTotal:function(t){var e=t.filter((function(t){if("number"===typeof t)return t})).reduce((function(t,e){return t+e}),0);return e}}},l=r("6b0d"),j=r.n(l);const O=j()(d,[["render",b]]);var g=O,p=(r("b0c0"),{key:0}),h={key:1},f={key:2},m={key:3};function C(t,e,r,a,c,o){return Object(n["C"])(!0),Object(n["g"])(n["a"],null,Object(n["I"])(r.tdata,(function(t,e){return Object(n["C"])(),Object(n["g"])("tr",{key:e},[Object(n["h"])("td",null,Object(n["N"])(e+1),1),Object(n["h"])("td",null,Object(n["N"])(t.name),1),Object(n["h"])("td",null,Object(n["N"])(t.extension),1),0!=r.optiondata.callcount_weight?(Object(n["C"])(),Object(n["g"])("td",p,Object(n["N"])(t.total_answered),1)):Object(n["f"])("",!0),0!=r.optiondata.duration_weight?(Object(n["C"])(),Object(n["g"])("td",h,Object(n["N"])(t.total_duration),1)):Object(n["f"])("",!0),0!=r.optiondata.callcount_weight?(Object(n["C"])(),Object(n["g"])("td",f,Object(n["N"])(t.c_percentage)+"%",1)):Object(n["f"])("",!0),0!=r.optiondata.duration_weight?(Object(n["C"])(),Object(n["g"])("td",m,Object(n["N"])(t.d_percentage)+"%",1)):Object(n["f"])("",!0),Object(n["h"])("td",null,Object(n["N"])(t.total_percentage)+"%",1)])})),128)}var _={props:["tdata","optiondata"]};const w=j()(_,[["render",C]]);var k=w,T=r("ad3d"),v={components:{GeneratedTagMetricsDataList:g,GeneratedCdrMetricsDataList:k,BaseContainer:u["a"],FontAwesomeIcon:T["a"]},props:["sort_order","option_metrics"],data:function(){return{error:null,isLoading:!1,appName:this.$store.getters.getAppName}},methods:{generateMetrics:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=window.location.search.substring(1),e.prev=1,t.isLoading=!0,e.next=5,t.$store.dispatch("metrics/generateMetrics",{querystring:r,sort_order:t.sort_order,option_metrics:t.option_metrics});case 5:t.isLoading=!1,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),t.error=e.t0.message;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},exportMetrics:function(){var t;t="tag"==this.option_metrics?this.$store.getters["metrics/getTagExportData"]:this.$store.getters["metrics/getCdrExportData"],window.Jhxlsx.export(t.tableData,t.options)},handleError:function(){this.error=null}},computed:{metricsGenerated:function(){var t;return t="tag"==this.option_metrics?this.$store.getters["metrics/getTagMetricsGeneratedData"]:"callduration"==this.option_metrics||"callcounts"==this.option_metrics||"blended"==this.option_metrics?this.$store.getters["metrics/getCdrMetricsGeneratedData"]:"This Metrics is not available",t},dateTimeRange:function(){return this.$store.getters["metrics/getDateTimeRange"]},grandTotalCounts:function(){return this.$store.getters["metrics/getGrandTotalCounts"]},grandTotalDurations:function(){return this.$store.getters["metrics/getGrandTotalDurations"]},getAutoLogoutStatus:function(){return this.$store.getters["getAutoLogoutStatus"]}},created:function(){this.$store.dispatch("checkIfCurrentLogin"),this.generateMetrics()},watch:{getAutoLogoutStatus:function(t,e){t&&t!==e&&this.$router.replace("/"+this.appName+"/login")}}};const N=j()(v,[["render",i]]);e["default"]=N}}]);
//# sourceMappingURL=chunk-2d0e91c1.dff334ab.js.map