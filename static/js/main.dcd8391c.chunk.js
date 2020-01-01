(this["webpackJsonpyoutube-app"]=this["webpackJsonpyoutube-app"]||[]).push([[0],{50:function(e,t,a){},74:function(e,t,a){e.exports=a(89)},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),l=a(13),c=a(10),s=a(18),m=a(19),u=a(21),d=a(121),h=a(115),v=(a(50),a(129)),p=a(119),f=a(120),E=a(128),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).changeHandler=function(e){var t=e.nativeEvent.target.name,n=e.nativeEvent.target.value;a.setState((function(e){e.inputs[t]=n}))},a.validateForm=function(){var e=a.state.inputs,t=!0,n={};return e.name||(n.name="Name is required",t=!1),e.email?!1===a.validateEmail(e.email)&&(n.email="Please provide a valid email address",t=!1):(n.email="Email address is required",t=!1),e.contact||(n.contact="Contact no. is required",t=!1),a.setState({validation:{name:n.name?n.name:"",email:n.email?n.email:"",contact:n.contact?n.contact:""}}),t},a.handleSubmit=function(){var e=a.state.inputs;if(a.validateForm()){var t={};t.name=e.name,t.email=e.email,t.contact=e.contact,t.favorites=[],localStorage.setItem("user",JSON.stringify(t)),window.location.replace("/home")}},a.state={inputs:{},validation:{name:"",email:"",contact:"",preferredLanguages:""}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"validateEmail",value:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}},{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(v.a,{mt:6,mb:4},r.a.createElement(p.a,{variant:"h1",align:"center",color:"secondary"},"Welcome"),r.a.createElement(p.a,{variant:"h3",align:"center",color:"secondary"},"Let's get you started")),r.a.createElement(f.a,{container:!0,direction:"column",alignItems:"center",xs:12},r.a.createElement(v.a,{my:2,className:"login-form-item"},r.a.createElement(E.a,{name:"name",required:!0,label:"Name",fullWidth:!0,onChange:this.changeHandler,helperText:this.state.validation.name,error:this.state.validation.name})),r.a.createElement(v.a,{my:2,className:"login-form-item"},r.a.createElement(E.a,{name:"email",required:!0,label:"Email Address",fullWidth:!0,onChange:this.changeHandler,error:this.state.validation.email,helperText:this.state.validation.email})),r.a.createElement(v.a,{my:2,className:"login-form-item"},r.a.createElement(E.a,{name:"contact",required:!0,label:"Contact No.",fullWidth:!0,onChange:this.changeHandler,error:this.state.validation.contact,helperText:this.state.validation.contact})),r.a.createElement(v.a,{my:2,className:"login-form-item"},r.a.createElement(E.a,{name:"preferredLanguages",label:"Preferred Languages",fullWidth:!0,onChange:this.changeHandler})),r.a.createElement(v.a,{my:2},r.a.createElement(d.a,{type:"submit",variant:"contained",color:"primary",size:"large",onClick:this.handleSubmit},"Submit"))))}}]),t}(r.a.Component),y="AIzaSyCw1jTakxF14j9ppmQ5eblwNcrWiEnzASA",b=function(){function e(t,a,n,r,i){Object(l.a)(this,e),this.id=t,this.title=a,this.description=n,this.channelName=r,this.thumbnailUrl=i}return Object(c.a)(e,[{key:"truncatedDescription",value:function(){return this.description.length<=50?this.description.length:this.description.slice(0,49)+"..."}}]),e}();function w(){var e=localStorage.getItem("user");return e?JSON.parse(e):e}function N(e,t,a){var n="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=".concat(e,"&type=video&key=").concat(y),r=new XMLHttpRequest;r.onerror=function(e){a(e)},r.onreadystatechange=function(){if(4===r.readyState&&200===r.status){var e={};try{e=JSON.parse(r.responseText)}catch(i){a(i)}var n=[];e.items.forEach((function(e){n.push(new b(e.id.videoId,e.snippet.title,e.snippet.description,e.snippet.channelTitle,e.snippet.thumbnails.high.url))})),t(n)}},r.open("GET",n,!0),r.send(null)}var O=function(){return w()?window.location.replace("/home"):window.location.replace("/login"),r.a.createElement("div",{className:"App"},r.a.createElement(g,null))},k=a(125),S=a(122),x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).addToFavorites=function(){var e=localStorage.getItem("user");(e=JSON.parse(e)).favorites.push(a.props.video),e=JSON.stringify(e),localStorage.setItem("user",e),a.setState({isFavorite:!0})},a.removeFromFavorites=function(){var e=localStorage.getItem("user");e=JSON.parse(e);var t=[];e.favorites.forEach((function(e){a.props.video.id!==e.id&&t.push(e)})),e.favorites=t,e=JSON.stringify(e),localStorage.setItem("user",e),a.setState({isFavorite:!1})},a.state={isFavorite:a.isItemInFavorites()},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){N("hello",(function(e){console.log(e)}))}},{key:"isItemInFavorites",value:function(){var e=!1,t=this.props.video.id,a=localStorage.getItem("user");return a&&(a=JSON.parse(a)).favorites&&a.favorites.forEach((function(a){a.id===t&&(e=!0)})),e}},{key:"renderFavorite",value:function(){return this.state.isFavorite?r.a.createElement("i",{className:"flex-end material-icons is-favorite icon-button",onClick:this.removeFromFavorites},"favorite"):r.a.createElement("i",{className:"flex-end material-icons icon-button",onClick:this.addToFavorites},"favorite_border")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(S.a,{variant:"outlined",className:"card-container"},r.a.createElement("div",{className:"card-video-thumbnail",onClick:function(){return e.props.onVideoClicked(e.props.video)}},r.a.createElement("img",{width:200,alt:"test",src:this.props.video.thumbnailUrl})),r.a.createElement("div",{className:"card-video-details"},r.a.createElement(p.a,{variant:"h6",onClick:function(){return e.props.onVideoClicked(e.props.video)}},this.props.video.title),r.a.createElement(p.a,{variant:"subtitle1",onClick:function(){return e.props.onVideoClicked(e.props.video)}},this.props.video.truncatedDescription())),r.a.createElement("div",{className:"flex-end"},this.renderFavorite())))}}]),t}(n.Component),C=a(60),j=a.n(C),F=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log(this.props.video),r.a.createElement("div",null,r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"player-wrapper"},r.a.createElement(j.a,{controls:!0,playing:!0,width:"100%",height:"100%",className:"react-player",url:"https://youtu.be/"+this.props.video.id})),r.a.createElement(p.a,{variant:"h4",style:{marginTop:"48px"}},this.props.video.title),r.a.createElement(p.a,{variant:"subtitle1",style:{marginTop:"24px"}},this.props.video.description)))}}]),t}(n.Component),P=a(123),T=a(124),I=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"error-alert"},r.a.createElement(P.a,{style:{marginRight:"14px"}},r.a.createElement(T.a,null)),r.a.createElement(p.a,{className:"grow"},"Oops, something went wrong."),r.a.createElement(d.a,{variant:"outlined",onClick:this.props.onRetry},"Retry")))}}]),t}(n.Component),V=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).showPlayer=function(e){a.setState({currentVideo:e,showPlayer:!0})},a.hidePlayer=function(){a.setState({currentVideo:{},showPlayer:!1})},a.handleFavorites=function(){window.location.replace("/favorites")},a.handleLogOut=function(){localStorage.clear(),window.location.replace("/")},a.handleSearchClick=function(){a.setState({loading:!0,showPlayer:!1,showErrorBanner:!1}),N(a.state.searchQuery,(function(e){a.setState({videos:e,loading:!1,searchedText:a.state.searchQuery})}),(function(e){a.setState({showErrorBanner:!0,loading:!1,videos:[],searchedText:""})}))},w()||window.location.replace("/login"),a.state={videos:[],searchQuery:"",loading:!1,showPlayer:!1,showErrorBanner:!1,searchedText:"",currentVideo:{}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"grow"},r.a.createElement("div",{className:"app-bar"},r.a.createElement(h.a,null,r.a.createElement("div",{className:"flex align-center"},r.a.createElement(p.a,{variant:"h6"},"YouTube Player"),r.a.createElement("div",{className:"grow"}),r.a.createElement("input",{type:"text",placeholder:"Search for videos",onChange:function(t){return e.setState({searchQuery:t.target.value})},onKeyUp:function(t){"Enter"===t.key&&e.handleSearchClick()}}),r.a.createElement(d.a,{variant:"contained",onClick:this.handleSearchClick},r.a.createElement("i",{class:"material-icons"},"search")),r.a.createElement("div",{className:"grow"}),r.a.createElement(d.a,{onClick:this.handleFavorites,variant:"text",color:"primary",style:{"margin-right":"24px"}},"Your Favorites"),r.a.createElement(d.a,{variant:"outlined",onClick:this.handleLogOut},"Log Out")))),r.a.createElement("main",null,r.a.createElement(h.a,{maxWidth:"1800px"},this.state.showErrorBanner?r.a.createElement(I,{onRetry:this.handleSearchClick}):""," ",r.a.createElement("div",{className:"flex"},this.state.showPlayer?r.a.createElement("div",{className:"large-flex"},r.a.createElement(F,{video:this.state.currentVideo})):"",r.a.createElement("div",{className:"small-flex"},r.a.createElement(k.a,{style:{margin:"0 auto",display:this.state.loading?"block":"none"}}),r.a.createElement(p.a,{variant:"h6",style:this.state.searchQuery&&0!==this.state.videos.length?{}:{display:"none"}},"Search results for '",this.state.searchedText,"'"),r.a.createElement("div",{className:"video-list-holder"},this.state.videos.map((function(t){return r.a.createElement(x,{key:t.id,video:t,onVideoClicked:e.showPlayer})}))))))))}}]),t}(n.Component),J=a(61),L=a(29),q=a(127),W=a(126),A=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).showPlayer=function(e){a.setState({currentVideo:e,showPlayer:!0})},a.hidePlayer=function(){a.setState({currentVideo:{},showPlayer:!1})},a.handleBack=function(){window.location.replace("/home")},w()||window.location.replace("/login");var n=[];return w().favorites.forEach((function(e){n.push(new b(e.id,e.title,e.description,e.channelName,e.thumbnailUrl))})),a.state={favorites:n,currentVideo:{},showPlayer:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"app-bar"},r.a.createElement(h.a,null,r.a.createElement("div",{className:"flex align-center"},r.a.createElement(W.a,{color:"primary",component:"button",onClick:this.handleBack},r.a.createElement(q.a,null)),r.a.createElement(v.a,{marginLeft:"10px"}," ",r.a.createElement(p.a,{variant:"h6"},"Your Favorites"))))),r.a.createElement("main",null,r.a.createElement(h.a,{maxWidth:"1800px"},r.a.createElement("div",{className:"flex"},this.state.showPlayer?r.a.createElement("div",{className:"large-flex"},r.a.createElement(F,{video:this.state.currentVideo})):"",r.a.createElement("div",{className:"small-flex"},r.a.createElement("div",{className:"video-list-holder"},this.state.favorites.map((function(t){return r.a.createElement(x,{key:t.id,video:t,onVideoClicked:e.showPlayer})}))))))))}}]),t}(n.Component),B=r.a.createElement(J.a,null,r.a.createElement("div",null,r.a.createElement(L.a,{exact:!0,path:"/",component:O}),r.a.createElement(L.a,{path:"/login",component:g}),r.a.createElement(L.a,{path:"/home",component:V}),r.a.createElement(L.a,{path:"/favorites",component:A})));o.a.render(B,document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.dcd8391c.chunk.js.map