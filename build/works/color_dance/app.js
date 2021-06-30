let colors = [
    // // Yellow
    // '#FFFF00',
    // '#FFFF33',
    // '#F2EA02',
    // '#E6FB04',
    // Red
    // '#FF0000',
    // '#FD1C03',
    // '#FF3300',
    // '#FF6600',
    // // Green
    // '#00FF00',
    // '#00FF33',
    // '#00FF66',
    // '#33FF00',
    // // Blue
    //'#00FFFF',
    //'#099FFF',
    //'#0062FF',
    //'#0033FF',
     //Pink
    '#FF00FF',
    '#FF00CC',
    '#FF0099',
    '#CC00FF',
     //Purple
    '#9D00FF',
    '#CC00FF',
    '#6E0DD0',
    '#9900FF',
  ]
  let draw = false
$(function () {
    
  $('body').on('mousedown', function () {
    console.log('enter')
    draw = true
  })
  $('body').on('mouseup', function () {
    console.log('exit')
    draw = false
  })
 
    let size = 30 // размер
    let rows = $('<div></div>') 
    
    for (let i = 0; i < size; i++) { //цикл строк
      let row = $('<div class="row"></div>')
      
      for (let i = 0; i < size; i++) { //цикл квадратиков
        let box = $('<div class="box"></div>')
  
        box.css('width', `${100 / size}%`) //стили квадратика
        box.css('opacity', '0.05')
        
        
    


         box.on('mouseenter', function() { //наведение на квадратик
           if (draw) {
             let $box = $(this)
       
             let color = colors[Math.floor(Math.random() * colors.length)]
     
             $box.css('transition', 'none')
             $box.css('opacity', '1')
             $box.css('background', color)
           } 
        })
  
        //  box.on('mouseleave', function() { //покидаем квадратик
        //  let $box = $(this)
      
        //  $box.css('transition', 'all 3s')
        //  $box.css('opacity', '0.05')
        //  $box.css('background', '#fff')
        //  })
  
        row.append(box) //добавляем квадратики
      }
  
      rows.append(row) //добавляем строку
    }
  
  $('.game').append(rows)
  
  })