var quotes = ['success is a luosey teacher.It seduces smaart people into thinking they cant loose by Bill Gates','The true sighn of intelligence is not knowledge but its imagination By Albert Einstein','Believe you can and your halfway there by Theadore Roosevelt','The two most important days in your life are the day you are born and the day you find ou why by Mark Twain',"As long as you are going to be thinking anyway, think big By Donald Trump","As long as you are going to be thinking anyway, think big By Donald Trump","Sometimes by losing a battle you find a new way to win the war."];

$('button').click(function(){
    
    console.log(quotes.length);
    
    var random=Math.floor(Math.random() * quotes.length);
    
    $('.mydiv').text( quotes[random]);
    
});





