(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,function(e,t,a){e.exports={root:"AdditionalInfo_root__2aaQu",block:"AdditionalInfo_block__1xftk",bold:"AdditionalInfo_bold__25LCB"}},function(e,t,a){e.exports={root:"WeatherData_root__37VSo",container:"WeatherData_container__12aJI",grow:"WeatherData_grow__1yHHx",button:"WeatherData_button__3Xp7w",bold:"WeatherData_bold__1bpPb",arrow:"WeatherData_arrow__3rG0t",tempBlock:"WeatherData_tempBlock__2YXMW",temp:"WeatherData_temp__2QNvn",feelsLike:"WeatherData_feelsLike__3YADP",description:"WeatherData_description__3T6RN"}},function(e,t,a){e.exports={root:"Search_root__1oRKk",wrapper:"Search_wrapper__3yVEZ",search:"Search_search__13jAz",searchButton:"Search_searchButton__2WfLI",suggestRoot:"Search_suggestRoot__CAzR_",block:"Search_block__MX6da",active:"Search_active__1S9hK",border:"Search_border__M0Ql0"}},,function(e,t,a){e.exports={root:"AirPollution_root__tkDIT",wrapper:"AirPollution_wrapper__6MVCP",visible:"AirPollution_visible__2MNxh",block:"AirPollution_block__1XccE",name:"AirPollution_name__dKbVk",safe:"AirPollution_safe__2UuTV"}},function(e,t,a){e.exports={root:"WeatherForecast_root__2Byr0",block:"WeatherForecast_block__1AMez",temp:"WeatherForecast_temp__2d9V-",span:"WeatherForecast_span__3v_cC",description:"WeatherForecast_description__3BdqN"}},function(e,t,a){e.exports={root:"Danger_root__31es5",block:"Danger_block__1Mr8W",button:"Danger_button__2iDvf"}},,,function(e,t,a){e.exports={ldsDefault:"Loader_ldsDefault__1tolW",wrapper:"Loader_wrapper__1Rubh"}},function(e,t,a){},,function(e,t,a){e.exports={background:"Background_background__f1Idv"}},function(e,t,a){e.exports={error:"Error_error__2TuXh"}},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(15),s=a.n(r),o=(a(14),a(12)),i=a(2),l=function(e){switch(e){case"12":case"1":case"2":return"winter";case"3":case"4":case"5":return"spring";case"6":case"7":case"8":return"summer";case"9":case"10":case"11":default:return"fall"}},u=a(13),d=a.n(u),j=a(0),b=function(){return Object(j.jsx)("div",{className:d.a.wrapper,children:Object(j.jsxs)("div",{className:d.a.ldsDefault,children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})})},h=a(16),v=a.n(h),O=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),o=s[0],u=s[1],d=(new Date).getMonth().toString(),h=Object(n.useMemo)((function(){return l(d)}),[d]),O=new Image;return O.onload=function(){u("https://source.unsplash.com/1920x1080/?".concat(h,",forest")),c(!1)},O.src="https://source.unsplash.com/1920x1080/?".concat(h,",forest"),Object(j.jsxs)(j.Fragment,{children:[a&&Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:v.a.background,style:{backgroundImage:"url(".concat(o,")")}})]})},p=a(3),f=c.a.createContext({}),_=a(7),m=a.n(_),x=function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return"".concat(t,"/").concat(a,"/").concat(n)},g=a(9),w=a.n(g),N=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],k=function(e){var t=new Date(1e3*e.dt);return N[t.getDay()]},y=function(){var e=Object(n.useContext)(f).weatherData,t=Object(n.useMemo)((function(){return null===e||void 0===e?void 0:e.daily.slice(0,3)}),[e]);return(null===e||void 0===e?void 0:e.daily)?Object(j.jsx)("div",{className:w.a.root,children:null===t||void 0===t?void 0:t.map((function(e){return Object(j.jsxs)("div",{className:w.a.block,children:[Object(j.jsx)("span",{className:w.a.span,children:k(e).substr(0,3)}),Object(j.jsx)("div",{className:w.a.description,children:Object(j.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:"icon"})}),Object(j.jsx)("div",{className:w.a.temp,children:Math.round(e.temp.day)})]},e.dt)}))}):Object(j.jsx)("div",{children:"404. Something went wrong!"})},S=a(4),D=a.n(S),W=function(){var e,t,a,c,r=Object(n.useContext)(f).weatherData;return Object(j.jsxs)("div",{className:D.a.root,children:[Object(j.jsxs)("div",{className:D.a.block,children:[" ",Object(j.jsx)("span",{className:D.a.bold,children:"Humidity"})," ",null===r||void 0===r||null===(e=r.current)||void 0===e?void 0:e.humidity,"%"]}),Object(j.jsxs)("div",{className:D.a.block,children:[Object(j.jsx)("span",{className:D.a.bold,children:"UVI"})," ",null===r||void 0===r||null===(t=r.current)||void 0===t?void 0:t.uvi]}),Object(j.jsxs)("div",{className:D.a.block,children:[Object(j.jsx)("span",{className:D.a.bold,children:"Pressure"})," ",null===r||void 0===r||null===(a=r.current)||void 0===a?void 0:a.pressure,"mb"]}),Object(j.jsxs)("div",{className:D.a.block,children:[Object(j.jsx)("span",{className:D.a.bold,children:"Wind"})," ",null===r||void 0===r||null===(c=r.current)||void 0===c?void 0:c.wind_speed,"m/s"]})]})},A=function(e,t){return("co"===e||"no2"===e)&&t<=100||("o3"===e||"so2"===e)&&t<=200||("pm2_5"===e||"no"===e||"nh3"===e)&&t<=20||"pm10"===e&&t<=40?"safe":""},B=function(e){return e.split(/(\d*_?\d+)/).map((function(e,t){return t%2?Object(j.jsx)("sub",{children:e.replace("_",".")},t):e}))},C=a(8),M=a.n(C),P=function(e){var t=e.isVisible,a=Object(n.useState)({}),c=Object(i.a)(a,2),r=c[0],s=c[1],o=Object(n.useContext)(f).currentPlace;return Object(n.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/air_pollution?lat=".concat(null===o||void 0===o?void 0:o.lat,"&lon=").concat(null===o||void 0===o?void 0:o.lon,"&appid=c33f7e6f45a0a786c34f2e1d3407f292&&units=metric")).then((function(e){return e.json()})).then((function(e){s(e.list[0].components)}))}),[o]),Object(j.jsx)("div",{className:M.a.root,children:Object(j.jsx)("div",{className:m()([M.a.wrapper],Object(p.a)({},M.a.visible,t)),children:Object.entries(r).map((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(j.jsxs)("div",{className:M.a.block,"data-element":a,children:[Object(j.jsxs)("span",{className:m()([M.a.name],Object(p.a)({},M.a.safe,"safe"===A(a,n))),children:[B(a),":"]})," ",Math.round(n)]},a)}))})})},E=a(5),F=a.n(E),I=function(){var e=Object(n.useContext)(f),t=e.weatherData,a=e.currentPlace,c=Object(n.useState)(!1),r=Object(i.a)(c,2),s=r[0],o=r[1],l=Object(n.useState)("Learn more about pollution"),u=Object(i.a)(l,2),d=u[0],b=u[1];if(!(null===t||void 0===t?void 0:t.current))return null;var h=t.current.weather[0].icon;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:m()([F.a.root],Object(p.a)({},F.a.grow,s)),children:[Object(j.jsxs)("div",{className:F.a.container,children:[Object(j.jsxs)("div",{children:["\u0420\u043e\u0441\u0441\u0438\u044f,"," ",null===a||void 0===a?void 0:a.name]}),Object(j.jsx)("div",{children:x()}),Object(j.jsxs)("div",{className:F.a.tempBlock,children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:F.a.temp,children:["Now:"," ",Math.round(t.current.temp)]}),Object(j.jsxs)("div",{className:F.a.feelsLike,children:[Object(j.jsx)("span",{className:F.a.bold,children:"Feels like: "}),Math.round(t.current.feels_like)]})]}),Object(j.jsx)("div",{className:F.a.description,children:Object(j.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(h,"@2x.png"),alt:"icon"})})]}),Object(j.jsx)(W,{}),Object(j.jsx)(y,{}),Object(j.jsxs)("button",{className:F.a.button,type:"button",onClick:function(){o(!s),b(s?"Show pollution data":"Hide pollution data")},children:[d,"\xa0",Object(j.jsx)("i",{className:"bi bi-arrow-right"})]})]}),Object(j.jsx)(P,{isVisible:s})]})})},L=a(17),U=a.n(L),V=function(){return Object(j.jsx)("div",{className:U.a.error,children:"Oops! There's no such city!"})},R=a(10),T=a.n(R),X=function(){var e=Object(n.useContext)(f).weatherData,t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],r=a[1];Object(n.useEffect)((function(){var t=[];if("undefined"!==typeof(null===e||void 0===e?void 0:e.alerts)){e.alerts.forEach((function(e){/^[a-zA-Z]+$/.test("".concat(e.event))&&t.push(e.event)}));var a=t.filter((function(e,a){return t.indexOf(e)===a}));r(a)}}),[e]);return(null===e||void 0===e?void 0:e.alerts)?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:T.a.root,children:c.map((function(e,t){return e&&Object(j.jsxs)("div",{className:T.a.block,children:[Object(j.jsxs)("p",{children:[e,". Be careful!"]}),Object(j.jsx)("button",{className:T.a.button,onClick:function(){return t=e,void r(c.filter((function(e){return e!==t})));var t},type:"button",children:"x"})]},t)}))})}):null},z=a(6),H=a.n(z),K=function(){var e=Object(n.useState)({value:"",setByUser:!1}),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(i.a)(r,2),o=s[0],l=s[1],u=Object(n.useState)(0),d=Object(i.a)(u,2),b=d[0],h=d[1],v=Object(n.useRef)(null),O=Object(n.useContext)(f),_=O.handleSearch,x=O.coordinatesData;return Object(n.useEffect)((function(){if("undefined"!==typeof x&&a.setByUser){var e=x.filter((function(e){return e.name.toLowerCase().startsWith(a.value.toLowerCase())}));e.map((function(e){return e.isActive=!1,e})),l(e.slice(0,5))}}),[a,x]),Object(n.useEffect)((function(){o.length>0&&c({value:o[b].name,setByUser:!1})}),[b]),Object(j.jsxs)("div",{className:H.a.root,children:[Object(j.jsxs)("div",{className:m()([H.a.wrapper],Object(p.a)({},H.a.border,o.length>0)),children:[Object(j.jsx)("div",{className:H.a.icon}),Object(j.jsx)("input",{className:H.a.search,placeholder:"Enter a city",onKeyDown:function(e){"Enter"===e.key?(_(a.value),l([]),c({value:"",setByUser:!1})):"ArrowUp"===e.key?h(null===b||0===b?o.length-1:b-1):"ArrowDown"===e.key&&(null===b||b===o.length-1?h(0):h(b+1))},onChange:function(e){return function(e){c({value:e.target.value,setByUser:!0})}(e)},type:"text",value:a.value,ref:v}),Object(j.jsx)("button",{onClick:function(){_(a.value),l([]),c({value:"",setByUser:!1})},type:"button",className:H.a.searchButton,children:Object(j.jsx)("i",{className:"bi bi-search"})})]}),Object(j.jsx)("div",{className:H.a.suggestRoot,children:o.map((function(e,t){return a.value&&Object(j.jsx)("div",{"aria-hidden":"true",onClick:function(){return function(e){var t;c({value:e,setByUser:!1}),l([]),null===v||void 0===v||null===(t=v.current)||void 0===t||t.focus()}(e.name)},className:m()([H.a.block],Object(p.a)({},H.a.active,t===b)),children:e.name},e.population)}))})]})};var J=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)({lat:"55.75583",lon:"37.61778",name:"\u041c\u043e\u0441\u043a\u0432\u0430"}),s=Object(i.a)(r,2),l=s[0],u=s[1],d=Object(n.useState)(),b=Object(i.a)(d,2),h=b[0],v=b[1],p=Object(n.useState)(!1),_=Object(i.a)(p,2),m=_[0],x=_[1],g=Object(n.useState)(!0),w=Object(i.a)(g,2),N=w[0],k=w[1];return Object(n.useEffect)((function(){fetch("https://raw.githubusercontent.com/pensnarik/russian-cities/master/russian-cities.json").then((function(e){return e.json()})).then((function(e){c(e)}))}),[]),Object(n.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(null===l||void 0===l?void 0:l.lat,"&lon=").concat(null===l||void 0===l?void 0:l.lon,"&appid=c33f7e6f45a0a786c34f2e1d3407f292&units=metric")).then((function(e){return e.json()})).then((function(e){v(e)}))}),[l]),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(f.Provider,{value:{weatherData:h,handleSearch:function(e){var t=null===a||void 0===a?void 0:a.find((function(t){return t.name===e}));t?(u(Object(o.a)(Object(o.a)({},t.coords),{},{name:t.name})),x(!1)):x(!0)},toggleAlert:function(){k(!N)},currentPlace:l,coordinatesData:a},children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("header",{children:Object(j.jsx)(K,{})}),N&&Object(j.jsx)(X,{}),Object(j.jsx)(O,{}),m?Object(j.jsx)(V,{}):Object(j.jsx)(I,{})]})})})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(J,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.742e9a6b.chunk.js.map