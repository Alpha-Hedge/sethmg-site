$('td:contains("Yes")').addClass('yes');
$('td:contains("No")').addClass('no');

$('td:contains("Yes*")').toggleClass('yes asterisk');
$('td:contains("No*")').toggleClass('no asterisk');

//  1 = dark
// -1 = light
var theme = 1;

$('.themetoggle').click(function(){
	theme*=-1;
	if (theme == 1) {$(this).html('LIGHT THEME'); $('div#page').removeClass('light');}
	if (theme == -1) {$(this).html('DARK THEME'); $('div#page').addClass('light');}
})

// Sorting function: https://stackoverflow.com/a/49041392/8108924

const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

// do the work...
document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr) );
})));