Template.registerHelper('formatDateTable', function(timestamp) {
  return moment(timestamp).format('DD/MM/YYYY');
});

Template.registerHelper('formatDateComments', function(timestamp){
  return moment(timestamp).format('hh:mm DD/MM/YY')
})

Template.registerHelper('formatCurrency', function(money){
  return numeral(money).format('($0,0)');
});

Template.registerHelper('formatNegativeCurrency', function(money){
  return numeral(-money).format('($0,0)');
});

Template.registerHelper('formatRUT', function(rut){
  return numeral(rut).format('0,0[.]');
});

Template.registerHelper("isNotEmpty", function (string) {
  return (string.length > 0 && string == "" && string == " ")?true:false;
});

Template.registerHelper("firstLetter", function (string) {
  return string[0];
});

Template.registerHelper("toLowerCase", function(string){
  return string.toLowerCase();
});

Template.registerHelper('equals', function (a, b) {
  return (a === b)?true:false;
});

Template.registerHelper('monthToString', function (month) {
  var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  return monthNames[month-1];
});
