$(function () {
//     var queries = {};
//   $.each(document.location.search.substr(1).split('&'),function(c,q){
//     var i = q.split('=');
//     queries[i[0].toString()] = i[1].toString();
//   });
//   console.log(queries);
//   qrCode()




  $("#example").qrcode({
    text: `http://127.0.0.1:5500/index.html?pk=111`,
    background: "#ffffff",
  });
});



const qrCode = () => {
  
};
