let $li10 = $('li:eq(9)').css('color', 'red')
let $parent = $li10.parent()
let $parentSibling = $parent.siblings().not('div').not('span')
$parentSibling.wrapAll('<div class="www">')

// 1
let $test = $('#test').css('color', 'green')
let $elWithWWW = $test.next('.www')
$test.insertAfter($elWithWWW)

// 2
$('p').each(function() {
    let $p = $(this)

    if (!$p.parent().is('div.www')) {
        $p.unwrap()
        $p.wrap('<div class=".zzz">')
    }
})

// 3
var classesArray = $('#test').parents()
    .map(function() {
        return $(this).attr('class') || '';
    }).get();

    console.log(classesArray);

// 4
$('p').each(function() {
    let $className = $(this).attr('class')
    if ($className) {
        $(this).wrap(`<div class=${$className}>`)
        $(this).removeAttr('class')
    }
});

// 5
$('li').slice(-4, -1)
    .each(function() {
        $(this).html('!') 
    })

// 6
var ol = $('#test');
var reversedItems = ol.children('li').get().reverse();
ol.empty().append(reversedItems);

// 7

// 8
$('li').each(function() {
    if($(this).hasClass('.www')) {
        $(this).css('color', 'red')
        if ($(this).hasClass('.bbb')) {
            $(this).remove()
        }
    }
})

// 9
let $li = $('li')
$li.even().html('')
$li.odd().remove()

// 10
$('div').each(function() {
    $(this).css('height', `${$(this).height() * 2}px`)
})

// 11
let sum = 0;
$('div').each(function() {
    sum += $(this).height()
})
console.log(sum)