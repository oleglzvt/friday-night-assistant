(this["webpackJsonpfriday-night-assistant"]=this["webpackJsonpfriday-night-assistant"]||[]).push([[0],{18:function(e,t,n){e.exports=n(41)},23:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(17),i=n.n(s),o=(n(23),n(2)),l=n(3),c=n(5),u=n(4),h=(n(6),n(7)),d=n.n(h),m=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleToggle=function(){e.setState({plusButtonShown:!1,checkButtonShown:!0})},e.state={plusButtonShown:!0,checkButtonShown:!1},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"drink animateBottom",key:this.props.key},r.a.createElement("div",{className:"drinkImage"},r.a.createElement("img",{src:this.props.image,alt:this.props.title})),r.a.createElement("div",{className:"drinkDescription"},r.a.createElement("h2",null,this.props.title),r.a.createElement("p",null,"You will need:"),r.a.createElement("ul",{className:"ingredients"},this.props.ingredients.map((function(e){return r.a.createElement("li",null,e.ingredient?e.ingredient:null,e.quantity?": ".concat(e.quantity):null)}))),r.a.createElement("p",null,this.props.recipe)),r.a.createElement("div",{className:"saveButtons"},this.state.plusButtonShown&&r.a.createElement("button",{className:"saveBtn plusBtn",onClick:this.handleToggle},r.a.createElement("i",{className:"fas fa-plus"})),this.state.checkButtonShown&&r.a.createElement("button",{className:"saveBtn checkBtn",onClick:this.handleToggle},r.a.createElement("i",{className:"fas fa-check"}))))}}]),n}(a.Component),p=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"loadingAnimation"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}}]),n}(a.Component),g=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return null!==this.props.drinks?r.a.createElement("div",{className:"animateTop"},r.a.createElement("form",null,r.a.createElement("input",{value:this.props.userInput,type:"text",placeholder:"Enter cocktail name",onChange:this.props.handleChange}),r.a.createElement("button",{className:"menuBtn",onClick:this.props.handleSubmit},"Give me that drink")),this.props.loading?r.a.createElement(p,null):this.props.drinks.map((function(t){return r.a.createElement(m,{image:t.strDrinkThumb,title:t.strDrink,recipe:t.strInstructions,key:t.idDrink,plusButtonShown:e.props.plusButtonShown,checkButtonShown:e.props.checkButtonShown,handleToggle:e.props.handleToggle,ingredients:[{ingredient:t.strIngredient1,quantity:t.strMeasure1},{ingredient:t.strIngredient2,quantity:t.strMeasure2},{ingredient:t.strIngredient3,quantity:t.strMeasure3},{ingredient:t.strIngredient4,quantity:t.strMeasure4},{ingredient:t.strIngredient5,quantity:t.strMeasure5},{ingredient:t.strIngredient6,quantity:t.strMeasure6}]})}))):r.a.createElement("div",{className:"errorDescription"},r.a.createElement("h2",null,"Unfortunately, I don't recognize this drink :("),r.a.createElement("button",{className:"menuBtn",onClick:this.props.refreshPage},"Try another one"))}}]),n}(a.Component),k=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"animateBottom"},this.props.loading?r.a.createElement(p,null):this.props.drinks.map((function(t){return r.a.createElement(m,{image:t.strDrinkThumb,title:t.strDrink,recipe:t.strInstructions,key:t.idDrink,plusButtonShown:e.props.plusButtonShown,checkButtonShown:e.props.checkButtonShown,handleToggle:e.props.handleToggle,ingredients:[{ingredient:t.strIngredient1,quantity:t.strMeasure1},{ingredient:t.strIngredient2,quantity:t.strMeasure2},{ingredient:t.strIngredient3,quantity:t.strMeasure3},{ingredient:t.strIngredient4,quantity:t.strMeasure4},{ingredient:t.strIngredient5,quantity:t.strMeasure5},{ingredient:t.strIngredient6,quantity:t.strMeasure6}]})})))}}]),n}(a.Component),f=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleNameSearch=function(){e.setState({drinks:[],ingredients:[],random:!1,searchByName:!0,userInput:"",plusButtonShown:!0,checkButtonShown:!1})},e.handleRandomSearch=function(){e.setState({drinks:[],searchByName:!1,random:!0,plusButtonShown:!0,checkButtonShown:!1,loading:!0}),d()({url:"https://www.thecocktaildb.com/api/json/v1/1/random.php",dataType:"json",method:"GET"}).then((function(t){setTimeout((function(){e.setState({drinks:t.data.drinks,userInput:"",loading:!1})}),1e3)}))},e.handleChange=function(t){e.setState({userInput:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.setState({drinks:[],loading:!0});var n="";e.state.searchByName?n="search.php?s=":e.state.random&&(n="random.php"),d()({url:"https://www.thecocktaildb.com/api/json/v1/1/".concat(n).concat(e.state.userInput),dataType:"json",method:"GET"}).then((function(t){setTimeout((function(){e.setState({drinks:t.data.drinks,userInput:"",loading:!1})}),1e3)}))},e.refreshPage=function(){window.location.reload()},e.state={searchByName:!1,random:!1,userInput:"",drinks:[],ingredients:[],loading:!1},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"app wrapper"},r.a.createElement("h1",null,"Let me get you a drink"),r.a.createElement("div",{className:"menuButtons"},r.a.createElement("button",{className:"menuBtn",onClick:this.handleNameSearch},"I know what I want"),r.a.createElement("button",{className:"menuBtn",onClick:this.handleRandomSearch},"I am in the mood for anything")),this.state.searchByName?r.a.createElement(g,{userInput:this.state.userInput,handleChange:this.handleChange,handleSubmit:this.handleSubmit,drinks:this.state.drinks,refreshPage:this.refreshPage,handleToggle:this.handleToggle,plusButtonShown:this.state.plusButtonShown,checkButtonShown:this.state.checkButtonShown,loading:this.state.loading}):null,this.state.random?r.a.createElement(k,{drinks:this.state.drinks,refreshPage:this.refreshPage,plusButtonShown:this.state.plusButtonShown,checkButtonShown:this.state.checkButtonShown,handleToggle:this.handleToggle,loading:this.state.loading}):null)}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.89f2e1a4.chunk.js.map