/**
 * Created by Truong on 03-Jan-16.
 */
app.directive('formDirective', function(){
    var html = '<table>';
    html += '<tr>';
    html += '<td>Username:</td>';
    html += '<td><input type="text"/></td>';
    html += '</tr>';
    html += '<tr>';
    html += '<td>Password:</td>';
    html += '<td><input type="password"/></td>';
    html += '</tr>';
    html += '<tr>';
    html += '<td></td>';
    html += '<td><input type="Button" value="Login"/></td>';
    html += '</tr>';
    html += '</table>';
   return {
       template : html
   };
});