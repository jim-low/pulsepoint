import{e as W,r as c,j as n,b as ge,f as K,u as fe,P as G,h as y,R as I,i as me,B as he,y as Y,k as ve,O as be,Q as xe,T as Ce,U as w,W as Ie,X as Se,p as E,a as N,L as X,J as we}from"./index-JuPwkeUw.js";import{a as ye,b as Te}from"./index-BUffW07a.js";import{c as je,a as R,u as Ne}from"./index-w-yKWExe.js";var L="rovingFocusGroup.onEntryFocus",Ee={bubbles:!1,cancelable:!0},z="RovingFocusGroup",[B,J,Pe]=je(z),[$e,Q]=W(z,[Pe]),[Ge,Re]=$e(z),q=c.forwardRef((e,t)=>n.jsx(B.Provider,{scope:e.__scopeRovingFocusGroup,children:n.jsx(B.Slot,{scope:e.__scopeRovingFocusGroup,children:n.jsx(Fe,{...e,ref:t})})}));q.displayName=z;var Fe=c.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:a,orientation:o,loop:r=!1,dir:l,currentTabStopId:i,defaultCurrentTabStopId:s,onCurrentTabStopIdChange:u,onEntryFocus:d,preventScrollOnEntryFocus:g=!1,...h}=e,x=c.useRef(null),T=ge(t,x),p=K(l),[C=null,f]=R({prop:i,defaultProp:s,onChange:u}),[v,b]=c.useState(!1),$=fe(d),F=J(a),j=c.useRef(!1),[_,M]=c.useState(0);return c.useEffect(()=>{const m=x.current;if(m)return m.addEventListener(L,$),()=>m.removeEventListener(L,$)},[$]),n.jsx(Ge,{scope:a,orientation:o,dir:p,loop:r,currentTabStopId:C,onItemFocus:c.useCallback(m=>f(m),[f]),onItemShiftTab:c.useCallback(()=>b(!0),[]),onFocusableItemAdd:c.useCallback(()=>M(m=>m+1),[]),onFocusableItemRemove:c.useCallback(()=>M(m=>m-1),[]),children:n.jsx(G.div,{tabIndex:v||_===0?-1:0,"data-orientation":o,...h,ref:T,style:{outline:"none",...e.style},onMouseDown:y(e.onMouseDown,()=>{j.current=!0}),onFocus:y(e.onFocus,m=>{const k=!j.current;if(m.target===m.currentTarget&&k&&!v){const H=new CustomEvent(L,Ee);if(m.currentTarget.dispatchEvent(H),!H.defaultPrevented){const D=F().filter(S=>S.focusable),de=D.find(S=>S.active),ue=D.find(S=>S.id===C),pe=[de,ue,...D].filter(Boolean).map(S=>S.ref.current);te(pe,g)}}j.current=!1}),onBlur:y(e.onBlur,()=>b(!1))})})}),Z="RovingFocusGroupItem",ee=c.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:a,focusable:o=!0,active:r=!1,tabStopId:l,...i}=e,s=Ne(),u=l||s,d=Re(Z,a),g=d.currentTabStopId===u,h=J(a),{onFocusableItemAdd:x,onFocusableItemRemove:T}=d;return c.useEffect(()=>{if(o)return x(),()=>T()},[o,x,T]),n.jsx(B.ItemSlot,{scope:a,id:u,focusable:o,active:r,children:n.jsx(G.span,{tabIndex:g?0:-1,"data-orientation":d.orientation,...i,ref:t,onMouseDown:y(e.onMouseDown,p=>{o?d.onItemFocus(u):p.preventDefault()}),onFocus:y(e.onFocus,()=>d.onItemFocus(u)),onKeyDown:y(e.onKeyDown,p=>{if(p.key==="Tab"&&p.shiftKey){d.onItemShiftTab();return}if(p.target!==p.currentTarget)return;const C=Ae(p,d.orientation,d.dir);if(C!==void 0){if(p.metaKey||p.ctrlKey||p.altKey||p.shiftKey)return;p.preventDefault();let v=h().filter(b=>b.focusable).map(b=>b.ref.current);if(C==="last")v.reverse();else if(C==="prev"||C==="next"){C==="prev"&&v.reverse();const b=v.indexOf(p.currentTarget);v=d.loop?Oe(v,b+1):v.slice(b+1)}setTimeout(()=>te(v))}})})})});ee.displayName=Z;var _e={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Me(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function Ae(e,t,a){const o=Me(e.key,a);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return _e[o]}function te(e,t=!1){const a=document.activeElement;for(const o of e)if(o===a||(o.focus({preventScroll:t}),document.activeElement!==a))return}function Oe(e,t){return e.map((a,o)=>e[(t+o)%e.length])}var ze=q,ke=ee,De="Toggle",oe=c.forwardRef((e,t)=>{const{pressed:a,defaultPressed:o=!1,onPressedChange:r,...l}=e,[i=!1,s]=R({prop:a,onChange:r,defaultProp:o});return n.jsx(G.button,{type:"button","aria-pressed":i,"data-state":i?"on":"off","data-disabled":e.disabled?"":void 0,...l,ref:t,onClick:y(e.onClick,()=>{e.disabled||s(!i)})})});oe.displayName=De;var P="ToggleGroup",[re,st]=W(P,[Q]),ne=Q(),V=I.forwardRef((e,t)=>{const{type:a,...o}=e;if(a==="single"){const r=o;return n.jsx(Le,{...r,ref:t})}if(a==="multiple"){const r=o;return n.jsx(Be,{...r,ref:t})}throw new Error(`Missing prop \`type\` expected on \`${P}\``)});V.displayName=P;var[ae,se]=re(P),Le=I.forwardRef((e,t)=>{const{value:a,defaultValue:o,onValueChange:r=()=>{},...l}=e,[i,s]=R({prop:a,defaultProp:o,onChange:r});return n.jsx(ae,{scope:e.__scopeToggleGroup,type:"single",value:i?[i]:[],onItemActivate:s,onItemDeactivate:I.useCallback(()=>s(""),[s]),children:n.jsx(ie,{...l,ref:t})})}),Be=I.forwardRef((e,t)=>{const{value:a,defaultValue:o,onValueChange:r=()=>{},...l}=e,[i=[],s]=R({prop:a,defaultProp:o,onChange:r}),u=I.useCallback(g=>s((h=[])=>[...h,g]),[s]),d=I.useCallback(g=>s((h=[])=>h.filter(x=>x!==g)),[s]);return n.jsx(ae,{scope:e.__scopeToggleGroup,type:"multiple",value:i,onItemActivate:u,onItemDeactivate:d,children:n.jsx(ie,{...l,ref:t})})});V.displayName=P;var[Ve,He]=re(P),ie=I.forwardRef((e,t)=>{const{__scopeToggleGroup:a,disabled:o=!1,rovingFocus:r=!0,orientation:l,dir:i,loop:s=!0,...u}=e,d=ne(a),g=K(i),h={role:"group",dir:g,...u};return n.jsx(Ve,{scope:a,rovingFocus:r,disabled:o,children:r?n.jsx(ze,{asChild:!0,...d,orientation:l,dir:g,loop:s,children:n.jsx(G.div,{...h,ref:t})}):n.jsx(G.div,{...h,ref:t})})}),O="ToggleGroupItem",le=I.forwardRef((e,t)=>{const a=se(O,e.__scopeToggleGroup),o=He(O,e.__scopeToggleGroup),r=ne(e.__scopeToggleGroup),l=a.value.includes(e.value),i=o.disabled||e.disabled,s={...e,pressed:l,disabled:i},u=I.useRef(null);return o.rovingFocus?n.jsx(ke,{asChild:!0,...r,focusable:!i,active:l,ref:u,children:n.jsx(U,{...s,ref:t})}):n.jsx(U,{...s,ref:t})});le.displayName=O;var U=I.forwardRef((e,t)=>{const{__scopeToggleGroup:a,value:o,...r}=e,l=se(O,a),i={role:"radio","aria-checked":e.pressed,"aria-pressed":void 0},s=l.type==="single"?i:void 0;return n.jsx(oe,{...s,...r,ref:t,onPressedChange:u=>{u?l.onItemActivate(o):l.onItemDeactivate(o)}})}),Ue=V,We=le;const Ke=["1","2","3"],Ye=["surface","classic"],Xe={size:{type:"enum",className:"rt-r-size",values:Ke,default:"2",responsive:!0},variant:{type:"enum",className:"rt-variant",values:Ye,default:"surface"},...me},ce=c.forwardRef((e,t)=>{const{className:a,children:o,radius:r,value:l,defaultValue:i,onValueChange:s,...u}=he(e,Xe,ve),[d,g]=R({prop:l,onChange:s,defaultProp:i});return c.createElement(Ue,{"data-radius":r,ref:t,className:Y("rt-SegmentedControlRoot",a),onValueChange:h=>{h&&g(h)},...u,type:"single",value:d,asChild:!1,disabled:!1},o,c.createElement("div",{className:"rt-SegmentedControlIndicator"}))});ce.displayName="SegmentedControl.Root";const A=c.forwardRef(({children:e,className:t,...a},o)=>c.createElement(We,{ref:o,className:Y("rt-reset","rt-SegmentedControlItem",t),...a,disabled:!1,asChild:!1},c.createElement("span",{className:"rt-SegmentedControlItemSeparator"}),c.createElement("span",{className:"rt-SegmentedControlItemLabel"},c.createElement("span",{className:"rt-SegmentedControlItemLabelActive"},e),c.createElement("span",{className:"rt-SegmentedControlItemLabelInactive"},e))));A.displayName="SegmentedControl.Item";const Je=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:a,colorSplit:o,lineWidth:r,textPaddingInline:l,orientationMargin:i,verticalMarginInline:s}=e;return{[t]:Object.assign(Object.assign({},Ce(e)),{borderBlockStart:`${w(r)} solid ${o}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:s,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${w(r)} solid ${o}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${w(e.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${w(e.dividerHorizontalWithTextGutterMargin)} 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${o}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${w(r)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:`calc(${i} * 100%)`},"&::after":{width:`calc(100% - ${i} * 100%)`}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:`calc(100% - ${i} * 100%)`},"&::after":{width:`calc(${i} * 100%)`}},[`${t}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:l},"&-dashed":{background:"none",borderColor:o,borderStyle:"dashed",borderWidth:`${w(r)} 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStartWidth:r,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-dotted":{background:"none",borderColor:o,borderStyle:"dotted",borderWidth:`${w(r)} 0 0`},[`&-horizontal${t}-with-text${t}-dotted`]:{"&::before, &::after":{borderStyle:"dotted none none"}},[`&-vertical${t}-dotted`]:{borderInlineStartWidth:r,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:a}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:a}}})}},Qe=e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS}),qe=be("Divider",e=>{const t=xe(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[Je(t)]},Qe,{unitless:{orientationMargin:!0}});var Ze=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a};const et=e=>{const{getPrefixCls:t,direction:a,divider:o}=c.useContext(Ie),{prefixCls:r,type:l="horizontal",orientation:i="center",orientationMargin:s,className:u,rootClassName:d,children:g,dashed:h,variant:x="solid",plain:T,style:p}=e,C=Ze(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","variant","plain","style"]),f=t("divider",r),[v,b,$]=qe(f),F=!!g,j=i==="left"&&s!=null,_=i==="right"&&s!=null,M=Se(f,o==null?void 0:o.className,b,$,`${f}-${l}`,{[`${f}-with-text`]:F,[`${f}-with-text-${i}`]:F,[`${f}-dashed`]:!!h,[`${f}-${x}`]:x!=="solid",[`${f}-plain`]:!!T,[`${f}-rtl`]:a==="rtl",[`${f}-no-default-orientation-margin-left`]:j,[`${f}-no-default-orientation-margin-right`]:_},u,d),m=c.useMemo(()=>typeof s=="number"?s:/^\d+$/.test(s)?Number(s):s,[s]),k=Object.assign(Object.assign({},j&&{marginLeft:m}),_&&{marginRight:m});return v(c.createElement("div",Object.assign({className:M,style:Object.assign(Object.assign({},o==null?void 0:o.style),p)},C,{role:"separator"}),g&&l!=="vertical"&&c.createElement("span",{className:`${f}-inner-text`,style:k},g)))},tt=({appointment:e})=>n.jsxs(E,{className:"w-[320px] h-fit bg-[rgba(141,141,143,0.5)] p-4 rounded-lg",align:"center",gap:"3",children:[n.jsxs(E,{direction:"column",align:"center",children:[n.jsx(N,{as:"p",className:"text-3xl font-bold",children:e.dateTime.get("date")}),n.jsx(N,{as:"p",className:"text-lg font-bold",children:e.dateTime.format("MMM YYYY")})]}),n.jsx(et,{type:"vertical",className:"bg-black h-[100px]"}),n.jsx(E,{direction:"column",justify:"between",children:n.jsxs(X,{children:[n.jsx(N,{as:"p",className:"text-nowrap text-lg font-semibold",children:e.doctor.Name}),n.jsx(N,{as:"p",className:"text-nowrap italic mb-2",children:e.doctor.Speciality}),n.jsxs(N,{as:"p",className:"text-nowrap",children:["Location: ",n.jsx("span",{className:"font-bold",children:e.doctor.Location})]}),n.jsxs(N,{as:"p",className:"text-nowrap",children:["Time: ",n.jsx("span",{className:"font-bold",children:e.dateTime.format("HH:MM A")})]})]})})]}),it=()=>{const[e,t]=c.useState("all"),[a]=we(ye);function o(r){const l=Te(),i=r.dateTime;return e==="upcoming"?l.isBefore(i):e==="finished"?l.isAfter(i):r}return n.jsx(E,{id:"appointment-page",justify:"center",align:"center",className:"p-4",children:n.jsxs(E,{direction:"column",className:"appointments-dashboard w-full h-[80vh]",gap:"3",children:[n.jsx(X,{children:n.jsxs(ce,{value:e,onValueChange:r=>t(r),size:"3",children:[n.jsx(A,{value:"all",children:"All"}),n.jsx(A,{value:"upcoming",children:"Upcoming"}),n.jsx(A,{value:"finished",children:"Finished"})]})}),n.jsx(E,{wrap:"wrap",gap:"3",className:"w-full h-full bg-[rgba(255,255,255,0.8)] rounded-xl border-8 border-black border-double p-2",children:a.filter(o).map(r=>n.jsx(tt,{appointment:r},r.dateTime.toISOString()))})]})})};export{it as default};
