(this.webpackJsonphooseating=this.webpackJsonphooseating||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(22),l=a.n(s),i=(a(72),a(10)),o=a(11),c=a(13),u=a(12),p=a(66),m=a(23),h=a(14),d=a(62),g=(a(94),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).componentDidMount=function(){var e=621371e-9*d.getDistance({latitude:r.props.restaurant.geometry.location.lat,longitude:r.props.restaurant.geometry.location.lng},{latitude:r.props.lat,longitude:r.props.lng});e=Math.round(100*(e+Number.EPSILON))/100,r.setState({distance:e});var t={name:r.props.restaurant.name,geometry:r.props.restaurant.geometry,opening_hours:r.props.restaurant.opening_hours,photos:r.props.restaurant.photos,price_level:r.props.restaurant.price_level,rating:r.props.restaurant.rating,types:r.props.restaurant.types,user_ratings_total:r.props.restaurant.user_ratings_total,vicinity:r.props.restaurant.vicinity,distance:e};r.props.setDistance(t)},r.showAddress=function(){r.state.showAddress?r.setState({address:"",showAddress:!1}):r.setState({address:r.props.restaurant.vicinity,showAddress:!0})},r.state={distance:null,showAddress:!1,address:""},r}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"Entry"},n.a.createElement(m.a,{className:"Card"},n.a.createElement(m.a.Body,null,n.a.createElement(m.a.Text,null,n.a.createElement("em",null,"Name: ",this.props.restaurant.name," ")," ",n.a.createElement("br",null),n.a.createElement("em",null,"Rating: ",this.props.restaurant.rating)," ",n.a.createElement("br",null),n.a.createElement("em",null,"Number of ratings: ",this.props.restaurant.user_ratings_total)," ",n.a.createElement("br",null),1===this.props.restaurant.price_level?n.a.createElement("em",null,"Price: $"):2===this.props.restaurant.price_level?n.a.createElement("em",null,"Price: $$"):3===this.props.restaurant.price_level?n.a.createElement("em",null,"Price: $$$"):n.a.createElement("em",null,"Price: N/A")," ",n.a.createElement("br",null),n.a.createElement("em",null,"Distance: ",this.state.distance," miles away")," ",n.a.createElement("br",null),n.a.createElement(h.a,{onClick:this.showAddress},"Show/Hide Address")," ",n.a.createElement("br",null),n.a.createElement("em",null,this.state.address))))))}}]),a}(r.Component)),v=(a(52),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={},r}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"Filter"},n.a.createElement("label",{className:"sortLabel"},"Sort by "),n.a.createElement("select",{id:"filterBy",onChange:function(t){return e.props.handleFilterChange(t.target.value)}},n.a.createElement("option",{value:"default"},"Sort By... "),n.a.createElement("option",{value:"price"},"Price"),n.a.createElement("option",{value:"rating"},"Rating")))}}]),a}(r.Component)),E=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleFilterChange=function(e){"default"!==e?r.setState({isFiltering:!0}):r.setState({isFiltering:!1}),console.log(e),console.log("default"!==e),console.log(r.state.isFiltering),r.setState({filterBy:e})},r.sortBy=function(){var e=Object(p.a)(r.props.restaurants);return r.state.isFiltering?"price"===r.state.filterBy?e.sort((function(e,t){var a=e.price_level,r=t.price_level;return void 0===e.price_level&&(a=0),void 0===t.price_level&&(r=0),r-a})):e.sort((function(e,t){return t.rating-e.rating})):e.sort((function(e,t){return t.distance-e.distance}))},r.state={isFiltering:!1,filterBy:"default"},r}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.sortBy().map((function(t){return n.a.createElement(g,{className:"Entry",restaurant:t,lat:e.props.lat,lng:e.props.lng,setDistance:e.props.setDistance})}));return n.a.createElement("div",{className:"Restaurants"},n.a.createElement("h4",null,"Nearby, open restaurants: "),n.a.createElement("div",{className:"cardsList"},t),n.a.createElement("div",null,n.a.createElement(v,{handleFilterChange:this.handleFilterChange,restaurants:this.props.restaurants})))}}]),a}(r.Component),f=a(41),b=a(64),y=a.n(b),O=a(40),C=a.n(O),j=a(42),k=(a(112),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleRestaurantChange=function(e){console.log(e.target.value),r.setState({RestaurantBar:e.target.value}),r.props.changeFilter(e.target.value,r.state.Price)},r.handlePriceChange=function(e){r.setState({Price:e.target.value}),r.props.changeFilter(r.state.RestaurantBar,e.target.value)},r.state={RestaurantBar:"restaurant",Price:""},r}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"radio"},n.a.createElement(j.a,{name:"restaurantBar",onClick:this.handleRestaurantChange,className:"restbarChange"},n.a.createElement(h.a,{size:"sm",type:"radio",value:"restaurant",checked:"restaurant"===this.state.RestaurantBar},"Only Restaurants"),n.a.createElement(h.a,{size:"sm",type:"radio",value:"bar",checked:"bar"===this.state.RestaurantBar},"Only Bars")),n.a.createElement(j.a,{name:"priceChange",onClick:this.handlePriceChange},n.a.createElement(h.a,{size:"sm",type:"radio",value:"1",checked:"1"===this.state.Price},"Price: $"),n.a.createElement(h.a,{size:"sm",type:"radio",value:"2",checked:"2"===this.state.Price},"Price: $$"),n.a.createElement(h.a,{size:"sm",type:"radio",value:"3",checked:"3"===this.state.Price},"Price: $$$"),n.a.createElement(h.a,{size:"sm",type:"radio",value:"4",checked:"4"===this.state.Price},"Price Range: All")))}}]),a}(r.Component)),S=(a(113),function(e){Object(c.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this,e)).onClick=function(){a(39).config();C.a.setApiKey("AIzaSyBQRbOl8Z5HnrY12zURP84C6Tdwsoy-HUI"),C.a.fromAddress(n.state.address).then((function(e){var t=e.results[0].geometry.location,a=t.lat,r=t.lng;n.setState({lat:a,long:r},(function(){n.getStores(),n.props.setLatLng(n.state.lat,n.state.long)}))}),(function(e){console.log(e),alert("Please input a valid place or address")}))},n.getStores=function(){a(39).config();y.a.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+n.state.lat+","+n.state.long+"&radius="+n.state.radius/62137e-8+"&type="+n.state.RestaurantBar+n.state.price+"&opennow&key=AIzaSyBQRbOl8Z5HnrY12zURP84C6Tdwsoy-HUI").then((function(e){console.log(e.data),n.props.setRestaurants(e.data.results)}))},n.changeFilter=function(e,t){"4"===t?n.setState({RestaurantBar:e,price:""}):n.setState({RestaurantBar:e,price:"&minprice="+t+"&maxprice="+t})},n.state={address:"",radius:1,lat:0,long:0,RestaurantBar:"restaurant",price:""},n}return Object(o.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement(f.a,{bg:"dark",variant:"dark",className:"navBar"},n.a.createElement(f.a.Brand,{className:"logo"},"HoosEating?"),n.a.createElement("label",{className:"navbarLabel"},"Address: "),n.a.createElement("input",{type:"text",onChange:function(t){return e.setState({address:t.target.value})}}),n.a.createElement("label",{className:"navbarLabel"},"Enter radius: "),n.a.createElement("input",{className:"radiusInput",type:"number",min:"0",max:"30",onChange:function(t){return e.setState({radius:t.target.value})}}),n.a.createElement(k,{changeFilter:this.changeFilter}),n.a.createElement(h.a,{size:"lg",className:"getPlaces",variant:"success",onClick:this.onClick},"Get Places!"))}}]),r}(r.Component)),w=a(125),P=a(126),R=a(127),B=a(128),N=function(e){Object(c.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this,e)).state={viewport:{center:[n.props.lat,n.props.lng],zoom:15}},a(39).config(),n.API="AIzaSyBQRbOl8Z5HnrY12zURP84C6Tdwsoy-HUI",n}return Object(o.a)(r,[{key:"componentDidUpdate",value:function(e){e.lat===this.props.lat&&e.lng===this.props.lng||(console.log("Component did update"),console.log(this.props.lat,this.props),this.setState({viewport:{center:[this.props.lat,this.props.lng],zoom:15}}))}},{key:"render",value:function(){var e=this,t=this.props.restaurants.map((function(t){return n.a.createElement(w.a,{position:[t.geometry.location.lat,t.geometry.location.lng]},n.a.createElement(P.a,null,n.a.createElement(m.a,{border:"light",bg:"light"},n.a.createElement(m.a.Header,null,n.a.createElement("h6",null,t.name),n.a.createElement("br",null),t.vicinity),void 0!==t.photos?n.a.createElement(m.a.Img,{variant:"bottom",src:"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+t.photos[0].photo_reference+"&key="+e.API}):n.a.createElement("h3",null,"No photo available"))))}));return n.a.createElement(R.a,{viewport:this.state.viewport,style:{width:"73vw",height:"82vh"}},n.a.createElement(B.a,{attribution:'copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t)}}]),r}(r.Component),_=(a(121),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).setRestaurants=function(e){r.setState({restaurants:e})},r.setLatLng=function(e,t){r.setState({lat:e,lng:t})},r.setDistance=function(e){var t=r.state.restaurants.filter((function(t){return t.name!==e.name}));t[t.length]=e,r.setState({restaurants:t})},r.state={restaurants:[],lat:0,lng:0},r}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"Input"},n.a.createElement(S,{setRestaurants:this.setRestaurants,setLatLng:this.setLatLng})),n.a.createElement("div",{className:"data"},n.a.createElement("div",{className:"Restaurants"},n.a.createElement(E,{restaurants:this.state.restaurants,lat:this.state.lat,lng:this.state.lng,setDistance:this.setDistance})),n.a.createElement("div",{className:"Map"},n.a.createElement(N,{lat:this.state.lat,lng:this.state.lng,restaurants:this.state.restaurants}))))}}]),a}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,t,a){e.exports=a(122)},72:function(e,t,a){},94:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.3336ea02.chunk.js.map