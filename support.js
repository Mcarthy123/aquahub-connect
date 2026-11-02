// Fill these in once. Empty ones are hidden everywhere (app, Terms, Privacy).
window.AQ_SUPPORT={
  email:'jabiruawakwa@gmail.com',              // e.g. support@yourdomain.com
  whatsapp:'233504008059',           // digits with country code, e.g. 233241234567
  facebook:'https://www.facebook.com/share/1F919Nx8sq/',           // full link, e.g. https://facebook.com/yourpage
  instagram:'https://www.instagram.com/eddie_tag',          // full link, e.g. https://instagram.com/yourpage
  twitter:'https://x.com/edwardawakwa'             // full link, e.g. https://x.com/yourpage
};
window.aqLinks=function(){const s=window.AQ_SUPPORT,o=[];
  if(s.whatsapp)o.push({icon:'fa-brands fa-whatsapp',label:'WhatsApp',text:'+'+s.whatsapp,href:'https://wa.me/'+s.whatsapp});
  if(s.email)o.push({icon:'fa-solid fa-envelope',label:'Email',text:s.email,href:'mailto:'+s.email});
  if(s.facebook)o.push({icon:'fa-brands fa-facebook',label:'Facebook',text:'Message us on Facebook',href:s.facebook});
  if(s.instagram)o.push({icon:'fa-brands fa-instagram',label:'Instagram',text:'Message us on Instagram',href:s.instagram});
  if(s.twitter)o.push({icon:'fa-brands fa-x-twitter',label:'X (Twitter)',text:'Message us on X',href:s.twitter});
  return o;};
