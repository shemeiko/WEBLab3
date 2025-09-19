let $li10 = $('li:eq(9)').css('color', 'red')
let $parent = $li10.parent()
let $parentSibling = $parent.prev()
$parentSibling.wrap('<div class="wwww"></div>')

// 2
let $test = $('#test').css('color', 'green')
let $elWithWWW = $test.next('.wwww')
$test.insertAfter($elWithWWW)