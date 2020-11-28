webpackJsonp([1],{"/7b/":function(t,e){},"1dtj":function(t,e){},"5zwH":function(t,e){},Bvml:function(t,e){},CKP9:function(t,e){},Dbef:function(t,e){},EJZx:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("7+uW"),n=r("sUu7"),o=r("Xxa5"),s=r.n(o),u=r("exGp"),c=r.n(u),i=r("JGtf"),l=r.n(i),d={name:"App",mounted:function(){this.checkLogin()},methods:{checkLogin:function(){var t=this;return c()(s.a.mark(function e(){var r,a,n,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=localStorage.getItem("token"))){e.next=8;break}return a="",n=new l.a({userPoolId:a}),e.next=6,n.checkLoginStatus(JSON.parse(r));case 6:e.sent.status?(o=localStorage.getItem("userInfo"))&&t.$store.commit("SET_USER",JSON.parse(o)):(localStorage.removeItem("token"),localStorage.removeItem("userInfo"));case 8:case"end":return e.stop()}},e,t)}))()}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var f=r("VU/8")(d,m,!1,function(t){r("UCmQ")},null,null).exports,p=r("/ocq"),h={props:["id"],computed:{product:function(){var t=this,e=this.$store.getters.allProducts.find(function(e){return e._id===t.id});return e},isAdding:function(){var t=this,e=!0;return this.cart.map(function(r){r._id===t.product._id&&(e=!1)}),e},cart:function(){return this.$store.state.cart}},methods:{addToCart:function(){var t=this,e=this;localStorage.getItem("token")?this.$store.commit("ADD_TO_CART",{product:this.product}):this.$confirm("你还未登录，点击去登录跳转登录页面，点击取消回到主界面","提示",{confirmButtonText:"去登录",cancelButtonText:"取消",type:"warning"}).then(function(){e.$router.push("/user/login")}).catch(function(){t.$message({type:"info",message:"你已取消"})})},removeFromCart:function(t){var e=this,r=this;localStorage.getItem("token")?this.$store.commit("REMOVE_FROM_CART",{productId:t}):this.$alert("点击去登录跳转登录页面，点击取消回到主界面","你还未登录",{confirmButtonText:"去登录",cancelButtonText:"取消"}).then(function(){r.$router.push("/user/login")}).catch(function(){e.$message({type:"info",message:"你已取消"})})}}},v={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isAdding?r("el-button",{attrs:{type:"text",size:"small"},on:{click:t.addToCart}},[t._v("加入购物车")]):r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.removeFromCart(t.id)}}},[t._v("从购物车移除")])],1)},staticRenderFns:[]},_=r("VU/8")(h,v,!1,null,null,null).exports,g={name:"product-item",mounted:function(){console.log(this.products)},props:["products"],components:{"product-button":_}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"products"},[e("el-table",{staticClass:"table",attrs:{data:this.products}},[e("el-table-column",{attrs:{prop:"name",label:"产品名称",width:"180"}}),this._v(" "),e("el-table-column",{attrs:{prop:"description",label:"介绍",width:"180"}}),this._v(" "),e("el-table-column",{attrs:{prop:"price",label:"价格",width:"180"}}),this._v(" "),e("el-table-column",{attrs:{prop:"manufacturer.name",label:"生产厂商",width:"180"}}),this._v(" "),e("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:this._u([{key:"default",fn:function(t){return[e("product-button",{attrs:{id:t.row._id}})]}}])})],1)],1)},staticRenderFns:[]};var U=r("VU/8")(g,C,!1,function(t){r("/7b/")},null,null).exports,E={name:"product-list",created:function(){0===this.products.length&&this.$store.dispatch("allProducts")},computed:{products:function(){return this.$store.getters.allProducts}},components:{"product-item":U}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"products"},[e("div",{staticClass:"container"},[this._v("\n      This is ProductList\n    ")]),this._v(" "),e("product-item",{attrs:{products:this.products}})],1)])},staticRenderFns:[]},R=r("VU/8")(E,b,!1,null,null,null).exports,S={props:["activeIndex"],data:function(){return{model:{manufacturer:{name:"",_id:""}}}},computed:{isLogged:function(){return!!this.$store.state.user.token},avatar:function(){return this.$store.state.user.photo}},methods:{handleLogout:function(){var t=this;return c()(s.a.mark(function e(){var r,a,n,o,u;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="",a=JSON.parse(localStorage.getItem("token")),n=JSON.parse(localStorage.getItem("userInfo"))._id,o=new l.a({userPoolId:r}),e.prev=4,e.next=7,o.checkLoginStatus(a);case 7:return u=e.sent,console.log("res",u),e.next=11,o.logout(n);case 11:t.$message({message:"成功登出",type:"success"}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log("err",e.t0);case 17:localStorage.removeItem("token"),localStorage.removeItem("userInfo"),t.$store.commit("LOGOUT");case 20:case"end":return e.stop()}},e,t,[[4,14]])}))()}}},D={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("el-menu",{staticClass:"menu",attrs:{"default-active":t.activeIndex,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[r("el-menu-item",{attrs:{index:"1"}},[r("router-link",{attrs:{to:"/",tag:"div"}},[t._v("主页")])],1),t._v(" "),r("el-submenu",{attrs:{index:"2"}},[r("template",{slot:"title"},[t._v("后台管理")]),t._v(" "),r("el-menu-item",{attrs:{index:"2-1"}},[r("router-link",{attrs:{to:"/admin",tag:"div"}},[t._v("查看商品")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"2-2"}},[r("router-link",{attrs:{to:"/admin/new",tag:"div"}},[t._v("添加商品")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"2-3"}},[r("router-link",{attrs:{to:"/admin/manufacturers",tag:"div"}},[t._v("查看生产商")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"2-4"}},[r("router-link",{attrs:{to:"/admin/manufacturers/new",tag:"div"}},[t._v("添加生产商")])],1)],2),t._v(" "),r("el-menu-item",{attrs:{index:"3"}},[r("router-link",{attrs:{to:"/cart",tag:"div"}},[t._v("购物车")])],1)],1),t._v(" "),r("div",{staticClass:"header-right"},[t.isLogged?r("el-dropdown",[r("el-avatar",{staticClass:"el-dropdown-link",attrs:{src:t.avatar}}),t._v(" "),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",[r("router-link",{attrs:{to:"/user/settings",tag:"div"}},[t._v("账户设置")])],1),t._v(" "),r("el-dropdown-item",[r("div",{on:{click:t.handleLogout}},[t._v("退出登录")])])],1)],1):r("div",{staticClass:"not-logged"},[r("router-link",{attrs:{to:"/user/login",tag:"div"}},[r("el-button",[t._v("登录")])],1),t._v(" "),r("router-link",{attrs:{to:"/user/login",tag:"div"}},[r("el-button",{attrs:{type:"primary"}},[t._v("注册")])],1)],1)],1)],1)},staticRenderFns:[]};var w=r("VU/8")(S,D,!1,function(t){r("Bvml")},null,null).exports,x={name:"home",data:function(){return{msg:"Welcome to Your Vue.js App",activeIndex:"1"}},components:{"product-list":R,"app-header":w}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("app-header",{attrs:{activeIndex:this.activeIndex}}),this._v(" "),this._m(0),this._v(" "),e("product-list")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h1",[this._v("In Stock")])])}]},A=r("VU/8")(x,$,!1,null,null,null).exports,I={name:"home",data:function(){return{msg:"Welcome to the Cart Page",activeIndex:"3"}},computed:{cart:function(){return this.$store.state.cart}},components:{"product-item":U,"app-header":w},beforeRouteEnter:function(t,e,r){localStorage.getItem("token")?r():r("/user/login")}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("app-header",{attrs:{activeIndex:this.activeIndex}}),this._v(" "),e("div",{staticClass:"container"},[e("h1",[this._v(this._s(this.msg))])]),this._v(" "),e("product-item",{attrs:{products:this.cart}})],1)},staticRenderFns:[]},k=r("VU/8")(I,M,!1,null,null,null).exports,T={props:["product"],components:{"product-button":_}},P={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-details"},[r("div",{staticClass:"product-details__image"},[r("img",{staticClass:"image",attrs:{src:t.product.image,alt:""}})]),t._v(" "),r("div",{staticClass:"product-details__info"},[r("div",{staticClass:"product-details__description"},[r("small",[t._v(t._s(t.product.manufacturer.name))]),t._v(" "),r("h3",[t._v(t._s(t.product.name))]),t._v(" "),r("p",[t._v("\n        "+t._s(t.product.description)+"\n      ")])]),t._v(" "),r("div",{staticClass:"product-details__price-cart"},[r("p",[t._v(t._s(t.product.price))]),t._v(" "),r("product-button",{attrs:{product:t.product}})],1)])])},staticRenderFns:[]};var O={created:function(){this.product.name||this.$store.dispatch("productById",{productId:this.$route.params.id})},computed:{product:function(){return this.$store.getters.productById(this.$route.params.id)}},components:{"product-detail":r("VU/8")(T,P,!1,function(t){r("u1uu")},null,null).exports}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("product-detail",{attrs:{product:this.product}})],1)},staticRenderFns:[]},F=r("VU/8")(O,L,!1,null,null,null).exports,y={name:"home",data:function(){return{msg:"Welcome to Your Vue.js App",activeIndex:"2"}},components:{"product-list":R,"app-header":w},beforeRouteEnter:function(t,e,r){localStorage.getItem("token")?r():r("/user/login")}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("app-header",{attrs:{activeIndex:this.activeIndex}}),this._v(" "),e("div",{staticClass:"admin-new"},[e("div",{staticClass:"container"},[e("h1",[this._v("后台管理")]),this._v(" "),e("router-view")],1)])],1)},staticRenderFns:[]},V=r("VU/8")(y,N,!1,null,null,null).exports,B=r("Dd8w"),j=r.n(B),Y={data:function(){return{modelData:{manufacturer:{name:""}}}},props:["model","manufacturers","isEditing"],created:function(){var t=this.model;this.modelData=j()({},t,{manufacturer:j()({},t.manufacturer)})},watch:{model:function(t,e){this.modelData=t}},computed:{loading:function(){return this.$store.state.showLoader}},methods:{onSubmit:function(){var t=this,e=this.manufacturers.find(function(e){return e.name===t.modelData.manufacturer.name});this.modelData.manufacturer=e,this.$emit("save-product",this.modelData)}}},z={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"productInfo"},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"form",staticClass:"form",attrs:{"label-width":"180px","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[r("el-form-item",{attrs:{label:"Name"}},[r("el-input",{model:{value:t.modelData.name,callback:function(e){t.$set(t.modelData,"name",e)},expression:"modelData.name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"Price"}},[r("el-input",{model:{value:t.modelData.price,callback:function(e){t.$set(t.modelData,"price",e)},expression:"modelData.price"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"Manufacturer "}},[r("el-select",{attrs:{clearable:"",placeholder:"请选择制造商"},model:{value:t.modelData.manufacturer.name,callback:function(e){t.$set(t.modelData.manufacturer,"name",e)},expression:"modelData.manufacturer.name"}},t._l(t.manufacturers,function(t){return r("el-option",{key:t._id,attrs:{label:t.name,value:t.name}})}),1)],1),t._v(" "),r("el-form-item",{attrs:{label:"Image "}},[r("el-input",{model:{value:t.modelData.image,callback:function(e){t.$set(t.modelData,"image",e)},expression:"modelData.image"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"Description "}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.modelData.description,callback:function(e){t.$set(t.modelData,"description",e)},expression:"modelData.description"}})],1),t._v(" "),r("el-form-item",[t.isEditing?r("el-button",{attrs:{type:"primary","native-type":"submit"},on:{click:t.onSubmit}},[t._v("Update Product")]):r("el-button",{on:{click:t.onSubmit}},[t._v("Add Product")])],1)],1)],1)},staticRenderFns:[]};var J=r("VU/8")(Y,z,!1,function(t){r("Dbef")},null,null).exports,H={data:function(){return{model:{manufacturer:{name:"",_id:""}}}},created:function(){0===this.manufacturers.length&&this.$store.dispatch("allManufacturers")},computed:{manufacturers:function(){return this.$store.getters.allManufacturers}},methods:{addProduct:function(t){this.$store.dispatch("addProduct",{product:t})}},components:{"product-form":J}},G={render:function(){var t=this.$createElement;return(this._self._c||t)("product-form",{attrs:{model:this.model,manufacturers:this.manufacturers},on:{"save-product":this.addProduct}})},staticRenderFns:[]},W=r("VU/8")(H,G,!1,null,null,null).exports,X={created:function(){this.$store.dispatch("allProducts")},mounted:function(){console.log(this.products)},computed:{products:function(){return this.$store.getters.allProducts}},methods:{removeProduct:function(t){confirm("是否删除此商品？")&&this.$store.dispatch("removeProduct",{productId:t})}}},q={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"products"},[r("el-table",{staticClass:"table",attrs:{data:t.products}},[r("el-table-column",{attrs:{prop:"name",label:"名称",width:"180"}}),t._v(" "),r("el-table-column",{attrs:{prop:"price",label:"价格",width:"180"}}),t._v(" "),r("el-table-column",{attrs:{prop:"manufacturer.name",label:"制造商",width:"180"}}),t._v(" "),r("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{staticClass:"modify",attrs:{type:"text",size:"small"}},[r("router-link",{attrs:{to:"/admin/edit/"+e.row._id,tag:"div"}},[t._v("修改")])],1),t._v(" "),r("el-button",{staticClass:"remove",attrs:{type:"text",size:"small"},on:{click:function(r){t.removeProduct(e.row._id),t.deleteRow(e.$index,t.products)}}},[t._v("删除")])]}}])})],1)],1)},staticRenderFns:[]};var Q=r("VU/8")(X,q,!1,function(t){r("CKP9")},null,null).exports,Z={created:function(){var t=(this.modelData||{}).name;(void 0===t?"":t)||this.$store.dispatch("productById",{productId:this.$route.params.id}),0===this.manufacturers.length&&this.$store.dispatch("allManufacturers")},computed:{manufacturers:function(){return this.$store.getters.allManufacturers},model:function(){var t=this.$store.getters.productById(this.$route.params.id);return j()({},t,{manufacturer:j()({},t.manufacturer)})}},methods:{updateProduct:function(t){this.$store.dispatch("updateProduct",{product:t})}},components:{"product-form":J}},K={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),this._v(" "),e("product-form",{attrs:{model:this.model,manufacturers:this.manufacturers,isEditing:!0},on:{"save-product":this.updateProduct}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("h1",[this._v("This is Admin/Edit")])])}]},tt=r("VU/8")(Z,K,!1,null,null,null).exports,et={created:function(){this.$store.dispatch("allManufacturers")},computed:{manufacturers:function(){return this.$store.getters.allManufacturers}},methods:{removeManufacturer:function(t){confirm("是否删除此制造商？")&&this.$store.dispatch("removeManufacturer",{manufacturerId:t})}}},rt={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"manufacturers"},[r("el-table",{staticClass:"table",attrs:{data:t.manufacturers}},[r("el-table-column",{attrs:{prop:"name",label:"制造商",width:"180"}}),t._v(" "),r("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{staticClass:"modify",attrs:{type:"text",size:"small"}},[r("router-link",{attrs:{to:"/admin/manufacturers/edit/"+e.row._id,tag:"div"}},[t._v("修改")])],1),t._v(" "),r("el-button",{staticClass:"remove",attrs:{type:"text",size:"small"},on:{click:function(r){t.removeManufacturer(e.row._id),t.deleteRow(e.$index,t.manufacturers)}}},[t._v("删除")])]}}])})],1)],1)},staticRenderFns:[]};var at=r("VU/8")(et,rt,!1,function(t){r("g0X1")},null,null).exports,nt={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"manufacturerInfo"},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"form",staticClass:"form",attrs:{"label-width":"180px","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[r("el-form-item",{attrs:{label:"Name"}},[r("el-input",{model:{value:t.manufacturerData.name,callback:function(e){t.$set(t.manufacturerData,"name",e)},expression:"manufacturerData.name"}})],1),t._v(" "),r("el-form-item",[t.isEditing?r("el-button",{attrs:{type:"primary","native-type":"submit"},on:{click:t.onSubmit}},[t._v("Update Manufacturer")]):r("el-button",{on:{click:t.onSubmit}},[t._v("Add Manufacturer")])],1)],1)],1)},staticRenderFns:[]};var ot=r("VU/8")({props:["model","isEditing"],data:function(){return{manufacturerData:{name:""}}},created:function(){this.manufacturerData=this.model},watch:{model:function(t,e){this.manufacturerData=t}},computed:{loading:function(){return this.$store.state.showLoader}},methods:{onSubmit:function(){this.$emit("save-manufacturer",this.manufacturerData)}}},nt,!1,function(t){r("5zwH")},null,null).exports,st={data:function(){return{model:{}}},methods:{addManufacturer:function(t){this.$store.dispatch("addManufacturer",{manufacturer:t})}},components:{"manufacturer-form":ot}},ut={render:function(){var t=this.$createElement;return(this._self._c||t)("manufacturer-form",{attrs:{model:this.model},on:{"save-manufacturer":this.addManufacturer}})},staticRenderFns:[]},ct=r("VU/8")(st,ut,!1,null,null,null).exports,it={created:function(){this.$store.dispatch("manufacturerById",{manufacturerId:this.$route.params.id})},computed:{model:function(){var t=this.$store.getters.manufacturerById(this.$route.params.id);return j()({},t)}},methods:{addManufacturer:function(t){this.$store.dispatch("updateManufacturer",{manufacturer:t})}},components:{"manufacturer-form":ot}},lt={render:function(){var t=this.$createElement;return(this._self._c||t)("manufacturer-form",{attrs:{model:this.model,isEditing:!0},on:{"save-manufacturer":this.addManufacturer}})},staticRenderFns:[]},dt=r("VU/8")(it,lt,!1,null,null,null).exports,mt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"container"},[e("router-view")],1)])},staticRenderFns:[]};var ft=r("VU/8")(null,mt,!1,function(t){r("EJZx")},null,null).exports,pt=r("mvHQ"),ht=r.n(pt),vt={data:function(){return{model:{manufacturer:{name:"",_id:""}}}},mounted:function(){var t=this;new Guard("5fbf8aaa7cedf0d1a0c760be",{title:"Yevii的Vue迷你电商",mountId:"login-form",hideClose:!0}).on("authenticated",function(e){t.$store.commit("SET_USER",e),localStorage.setItem("token",ht()(e.token)),localStorage.setItem("userInfo",ht()(e)),t.$router.push("/")})}},_t={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",{staticClass:"user-title"},[e("router-link",{attrs:{to:"/",tag:"div"}},[this._v("用户界面")])],1),this._v(" "),e("div",{attrs:{id:"login-form"}})])},staticRenderFns:[]};var gt=r("VU/8")(vt,_t,!1,function(t){r("1dtj")},null,null).exports,Ct=r("fZjL"),Ut=r.n(Ct),Et={data:function(){return{user:{},imageUrl:"",rules:{nickname:[{required:!0,message:"请输入你的昵称",trigger:"blur"},{min:3,max:25,message:"长度在 3 到 25 个字符",trigger:"blur"}]}}},created:function(){var t=this.$store.state.user,e=localStorage.getItem("userInfo");t&&0===Ut()(t).length&&e?(this.user=JSON.parse(e),this.imageUrl=this.user.photo):(this.user=j()({},t),this.imageUrl=t.photo)},components:{"app-header":w},methods:{handleAvatarSuccess:function(t,e){var r=this;return c()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:200===t.code?r.imageUrl=t.data:r.$message.error("图片上传失败");case 1:case"end":return e.stop()}},e,r)}))()},submitForm:function(t){var e=this;return c()(s.a.mark(function r(){var a,n,o,u;return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:a=e.user.nickname,n=e.imageUrl,e.user._id,o=e.user,u=e,e.$refs[t].validate(function(){var t=c()(s.a.mark(function t(r){var c,i,d,m;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=23;break}return localStorage.getItem("token"),c="",i=new l.a({userPoolId:c}),t.next=6,i.login({email:"",password:""});case 6:return d=t.sent,console.log("nickName",a),t.prev=8,t.next=11,i.update({_id:d._id,photo:n,nickname:a});case 11:m=j()({},o,{nickname:a,photo:n}),localStorage.setItem("userInfo",ht()(m)),u.$store.commit("SET_USER",m),e.$message({message:"修改信息成功",type:"success"}),t.next=21;break;case 17:t.prev=17,t.t0=t.catch(8),console.log("err",t.t0),e.$message.error("修改信息失败");case 21:t.next=25;break;case 23:return console.log("error submit!!"),t.abrupt("return",!1);case 25:case"end":return t.stop()}},t,e,[[8,17]])}));return function(e){return t.apply(this,arguments)}}());case 6:case"end":return r.stop()}},r,e)}))()}}},bt={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("app-header"),t._v(" "),r("div",{staticClass:"user-container"},[r("div",{staticClass:"user-form"},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://imgkr.com/api/files/upload","show-file-list":!1,"on-success":t.handleAvatarSuccess}},[t.imageUrl?r("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),t._v(" "),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.user,rules:t.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"昵称",prop:"nickName"}},[r("el-input",{model:{value:t.user.nickname,callback:function(e){t.$set(t.user,"nickname",e)},expression:"user.nickname"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("更新")])],1)],1)],1)])],1)},staticRenderFns:[]};var Rt=r("VU/8")(Et,bt,!1,function(t){r("XPOs")},null,null).exports;a.default.use(p.a);var St,Dt,wt,xt,$t=new p.a({routes:[{path:"/",name:"Home",component:A},{path:"/admin",name:"Admin",component:V,children:[{path:"new",name:"New",component:W},{path:"",name:"Products",component:Q},{path:"edit/:id",name:"Edit",component:tt},{path:"manufacturers",name:"Manufacturers",component:at},{path:"manufacturers/new",name:"NewManufacturers",component:ct},{path:"manufacturers/edit/:id",name:"EditManufacturers",component:dt}]},{path:"/cart",name:"Cart",component:k},{path:"/detail/:id",name:"Detail",component:F},{path:"/user",name:"User",component:ft,children:[{path:"login",name:"Login",component:gt},{path:"settings",name:"Settings",component:Rt}]}]}),At=r("NYxO"),It=r("bOdI"),Mt=r.n(It),kt=r("zL8q"),Tt=r.n(kt),Pt=(St={},Mt()(St,"SET_USER",function(t,e){t.user=e}),Mt()(St,"LOGOUT",function(t){t.user={}}),St),Ot=(Dt={},Mt()(Dt,"ALL_PRODUCTS",function(t){t.showLoader=!0}),Mt()(Dt,"ALL_PRODUCTS_SUCCESS",function(t,e){var r=e.products;t.showLoader=!1,t.products=r}),Mt()(Dt,"PRODUCT_BY_ID",function(t){t.showLoader=!0}),Mt()(Dt,"PRODUCT_BY_ID_SUCCESS",function(t,e){t.showLoader=!1;var r=e.product;t.product=r}),Mt()(Dt,"REMOVE_PRODUCT",function(t){t.showLoader=!0}),Mt()(Dt,"REMOVE_PRODUCT_SUCCESS",function(t,e){t.showLoader=!1;var r=e.productId;t.products=t.products.filter(function(t){return t._id!==r})}),Mt()(Dt,"UPDATE_PRODUCT",function(t){t.showLoader=!0}),Mt()(Dt,"UPDATE_PRODUCT_SUCCESS",function(t,e){t.showLoader=!1;var r=e.product;t.product=r,t.products=t.products.map(function(t){return t._id===r._id?r:t}),t.product=r}),Mt()(Dt,"ADD_PRODUCT",function(t){t.showLoader=!0}),Mt()(Dt,"ADD_PRODUCT_SUCCESS",function(t,e){t.showLoader=!1;var r=e.product;t.products=t.products.concat(r)}),Dt),Lt=(wt={},Mt()(wt,"ADD_TO_CART",function(t,e){var r=e.product;t.cart.push(r),Object(kt.Message)({message:"恭喜你，成功加入购物车！",type:"success"})}),Mt()(wt,"REMOVE_FROM_CART",function(t,e){var r=e.productId;t.cart=t.cart.filter(function(t){return t._id!==r}),Object(kt.Message)({message:"恭喜你，成功移除购物车！",type:"success"})}),wt),Ft=(xt={},Mt()(xt,"ALL_MANUFACTURER",function(t){t.showLoader=!0}),Mt()(xt,"ALL_MANUFACTURER_S",function(t,e){var r=e.manufacturers;t.showLoader=!1,t.manufacturers=r}),Mt()(xt,"MANUFACTURER_BY_ID",function(t){t.showLoader=!0}),Mt()(xt,"MANUFACTURER_BY_ID_SUCCESS",function(t,e){t.showLoader=!1;var r=e.manufacturer;t.manufacturer=r}),Mt()(xt,"REMOVE_MANUFACTURER",function(t){t.showLoader=!0}),Mt()(xt,"REMOVE_MANUFACTURER_SUCCESS",function(t,e){t.showLoader=!1;var r=e.manufacturerId;t.manufacturers=t.manufacturers.filter(function(t){return t._id!==r})}),Mt()(xt,"UPDATE_MANUFACTURER",function(t){t.showLoader=!0}),Mt()(xt,"UPDATE_MANUFACTURER_SUCCESS",function(t,e){t.showLoader=!1;var r=e.manufacturer;t.manufacturers=t.manufacturers.map(function(t){return t._id===r._id?r:t}),t.manufacturer=r}),Mt()(xt,"ADD_MANUFACTURER",function(t){t.showLoader=!0}),Mt()(xt,"ADD_MANUFACTURER_SUCCESS",function(t,e){t.showLoader=!1;var r=e.manufacturer;t.manufacturers=t.manufacturers.concat(r)}),xt),yt=r("mtWM"),Nt=r.n(yt),Vt="http://localhost:3000/api/v1",Bt={allProducts:function(t){var e=t.commit;e("ALL_PRODUCTS"),Nt.a.get(Vt+"/products").then(function(t){e("ALL_PRODUCTS_SUCCESS",{products:t.data})})},productById:function(t,e){var r=t.commit;r("PRODUCT_BY_ID");var a=e.productId;Nt.a.get(Vt+"/products/"+a).then(function(t){r("PRODUCT_BY_ID_SUCCESS",{product:t.data})})},removeProduct:function(t,e){var r=t.commit;r("REMOVE_PRODUCT");var a=e.productId;Nt.a.delete(Vt+"/products/"+a).then(function(){r("REMOVE_PRODUCT_SUCCESS",{productId:a}),Object(kt.Message)({message:"恭喜你，商品删除成功！",type:"success"})}).catch(function(){kt.Message.error("不好意思，商品删除失败！")})},updateProduct:function(t,e){var r=t.commit;r("UPDATE_PRODUCT");var a=e.product;Nt.a.put(Vt+"/products/"+a._id,a).then(function(t){r("UPDATE_PRODUCT_SUCCESS",{product:a}),Object(kt.Message)({message:"恭喜你，商品更新成功！",type:"success"})}).catch(function(){kt.Message.error("不好意思，商品更新失败！")})},addProduct:function(t,e){var r=t.commit,a=t.state;r("ADD_PRODUCT");var n=e.product,o=a.user._id;Nt.a.post(Vt+"/products",j()({},n,{user:o,manufacturer:n.manufacturer._id})).then(function(t){r("ADD_PRODUCT_SUCCESS",{product:t.data}),Object(kt.Message)({message:"恭喜你，商品添加成功！",type:"success"})}).catch(function(){kt.Message.error("不好意思，商品添加失败！")})}},jt={allManufacturers:function(t){var e=t.commit;e("ALL_MANUFACTURER"),Nt.a.get(Vt+"/manufacturers").then(function(t){e("ALL_MANUFACTURER_S",{manufacturers:t.data})})},manufacturerById:function(t,e){var r=t.commit;r("MANUFACTURER_BY_ID");var a=e.manufacturerId;Nt.a.get(Vt+"/manufacturers/"+a).then(function(t){r("MANUFACTURER_BY_ID_SUCCESS",{manufacturer:t.data})})},removeManufacturer:function(t,e){var r=t.commit;r("REMOVE_MANUFACTURER");var a=e.manufacturerId;Nt.a.delete(Vt+"/manufacturers/"+a).then(function(){r("REMOVE_MANUFACTURER_SUCCESS",{manufacturerId:a}),Object(kt.Message)({message:"恭喜你，制造商删除成功！",type:"success"})}).catch(function(){kt.Message.error("不好意思，制造商删除失败！")})},updateManufacturer:function(t,e){var r=t.commit;r("UPDATE_MANUFACTURER");var a=e.manufacturer;Nt.a.put(Vt+"/manufacturers/"+a._id,a).then(function(t){r("UPDATE_MANUFACTURER_SUCCESS",{manufacturer:a}),Object(kt.Message)({message:"恭喜你，制造商更新成功！",type:"success"})}).catch(function(){kt.Message.error("不好意思，制造商更新失败！")})},addManufacturer:function(t,e){var r=t.commit,a=t.state;r("ADD_MANUFACTURER");var n=e.manufacturer,o=a.user._id;Nt.a.post(Vt+"/manufacturers",j()({},n,{user:o})).then(function(t){r("ADD_MANUFACTURER_SUCCESS",{manufacturer:t.data}),Object(kt.Message)({message:"恭喜你，制造商添加成功！",type:"success"})}).catch(function(){kt.Message.error("不好意思，制造商添加失败！")})}};a.default.use(At.a);var Yt=new At.a.Store({strict:!0,state:{cart:[],showLoader:!1,product:{},products:[],manufacturers:[],manufacturer:{},user:{}},mutations:j()({},Ot,Lt,Ft,Pt),getters:j()({},{allProducts:function(t){return t.products},productById:function(t,e){return function(r){return e.allProducts.length>0?e.allProducts.filter(function(t){return t._id===r})[0]:t.product}}},{allManufacturers:function(t){return t.manufacturers},manufacturerById:function(t,e){return function(r){return e.allManufacturers.length>0?e.allManufacturers.filter(function(t){return t._id===r})[0]:t.manufacturer}}}),actions:j()({},Bt,jt)});r("tvR6");a.default.config.productionTip=!1,a.default.component("ValidationProvider",n.a),a.default.use(Tt.a),new a.default({el:"#app",router:$t,store:Yt,components:{App:f},template:"<App/>"})},UCmQ:function(t,e){},XPOs:function(t,e){},g0X1:function(t,e){},tvR6:function(t,e){},u1uu:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9e2fae72d2ba00a83bcf.js.map