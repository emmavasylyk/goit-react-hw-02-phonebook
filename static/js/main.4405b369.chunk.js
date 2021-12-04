(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={LableFilter:"Filter_LableFilter__2aXAq",InputFilter:"Filter_InputFilter__25Wq6"}},12:function(t,e,n){t.exports={Container:"Container_Container__37Lh-"}},20:function(t,e,n){},22:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n.n(a),c=n(11),i=n.n(c),o=(n(20),n(14)),s=n(4),u=n(5),l=n(7),m=n(6),b=n(15),d=(n(21),n(22),n(1)),h=n.n(d),p=n(12),j=n.n(p),C=n(0),f=function(t){var e=t.children;return Object(C.jsx)("div",{className:j.a.Container,children:e})};f.protoTypes={children:h.a.string};var v=f,O=n(13),g=n(3),x=n.n(g),L=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.hundleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(O.a)({},a,r))},t.hundleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(C.jsxs)("form",{onSubmit:this.hundleSubmit,children:[Object(C.jsxs)("label",{className:x.a.LableName,children:["Name",Object(C.jsx)("input",{className:x.a.InputForm,placeholder:"Ivan Petrov",type:"text",name:"name",value:e,onChange:this.hundleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(C.jsxs)("label",{className:x.a.LableName,children:["Number",Object(C.jsx)("input",{className:x.a.InputForm,placeholder:"111-11-11",type:"tel",name:"number",value:n,onChange:this.hundleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(C.jsx)("button",{className:x.a.ButtonContactForm,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),_=L,F=n(8),N=n.n(F),y=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(C.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(C.jsxs)("li",{className:N.a.ContactListItem,children:[Object(C.jsxs)("p",{className:N.a.ContactList,children:[a,": ",r]}),Object(C.jsx)("button",{className:N.a.ContactListButton,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})};y.protoTypes={contacts:h.a.arrayOf(h.a.shape({id:h.a.string.isRequired,name:h.a.string.isRequired,number:h.a.number.isRequired})),onDeleteContact:h.a.arrayOf(h.a.shape({id:h.a.string.isRequired}))};var S=y,I=n(10),A=n.n(I),q=function(t){var e=t.value,n=t.onChange;return Object(C.jsxs)("label",{className:A.a.LableFilter,children:["Find contacts by name",Object(C.jsx)("input",{className:A.a.InputFilter,placeholder:"Ivan Petrov",type:"text",value:e,onChange:n})]})};q.protoTypes={value:h.a.string.isRequired,onChange:h.a.string.isRequired};var w=q,B=["Title"],k=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){var n=t.state.contacts,a={id:Object(b.a)(),name:e.name,number:e.number};n.find((function(t){return t.name===a.name}))?alert("".concat(a.name," \u0443\u0436\u0435 \u0435\u0441\u0442\u044c")):t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(o.a)(e))}}))},t.getVisibleContactList=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t.deleteContactList=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(C.jsxs)(v,{children:[Object(C.jsx)("h1",{className:B,children:"Phonebook"}),Object(C.jsx)(_,{onSubmit:this.formSubmitHandler}),Object(C.jsx)("h2",{className:B,children:"Contacts"}),Object(C.jsx)(w,{value:t,onChange:this.changeFilter}),Object(C.jsx)(S,{contacts:this.getVisibleContactList(),onDeleteContact:this.deleteContactList})]})}}]),n}(a.Component),T=k,R=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};i.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(T,{})}),document.getElementById("root")),R()},3:function(t,e,n){t.exports={LableName:"ContactForm_LableName__22Kxz",InputForm:"ContactForm_InputForm__2xwSZ",ButtonContactForm:"ContactForm_ButtonContactForm__1Q8lv"}},8:function(t,e,n){t.exports={ContactListItem:"ContactList_ContactListItem__3crlC",ContactListButton:"ContactList_ContactListButton__1fHNA",ContactList:"ContactList_ContactList__3imVL"}}},[[26,1,2]]]);
//# sourceMappingURL=main.4405b369.chunk.js.map