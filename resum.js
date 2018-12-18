// player
document.querySelector('#exampleModal').addEventListener('click',()=>{
document.querySelector('.firstSong').click();
// подвешиваем первый трек на модальное окно
})
document.querySelector('ul.player').addEventListener('click', function(object){
    //Получаем песню
    var Song = object.target.getAttribute('data-src');
    var Player = document.querySelector('#player');

    if(Player){
        //Смотрим песню
        if(Song===Player.getAttribute('src')){
            if(Player.paused){
                //play() — проигрывает файл с начала или места последней остановки
                Player.play();
                object.target.id = 'playing';
            }else{
                //pause() — останавливает проигрывание файла, место остановки запоминается
                Player.pause();
                object.target.id = 'paused';
            }
        }else{
            Player.src = Song;
            Player.play();
            if(document.querySelector('#playing')){
                document.querySelector('#playing').id='';
            }else{
                document.querySelector('#paused').id='';
            }
            object.target.id = 'playing';
        }
    }else{
        //встраивание стороннего Flash плеера и использование HTML5-тега audio
        var Player = document.createElement('audio');
        Player.id = 'player';
        object.target.id = 'playing';
        Player.src = Song;
        document.body.appendChild(Player);
        Player.play();

        Player.addEventListener('ended', function() {
            Player.parentNode.removeChild(Player);
            object.target.id='';
        }, false);
    }
}, false); 
// player

// modal window
$(document).ready(function(){    
        // гарантирует загрузку после рендеринга DOM
    $('#exampleModal').modal('show');
});

// modal window

// calculator
function displynum(n1) {
    calcform.txt1.value=calcform.txt1.value+n1;
    }
// calculator
// tdlist
(function () {
    let tasks = {
        // текущие задачи 
            current: [{
                taskId: doId(),
                taskContent: " my resume was noticed ",
                taskState: "done"
            }, {
                taskId: doId(),
                taskContent: "to get a job in a perspective company and  continue training",
                taskState: "current"
            }],
            // выполненные задачи
            done: [{
                taskId: doId(),
                taskContent: "find a mentor",
                taskState: "current"
            }],
            // возвращают длину массивов тасок
            get allTasks() {
                return this.current.length + this.done.length;
            },
            get doneTasks() {
                return this.done.length;
            }
        },
        // переменные для цифер
        tasksList = document.getElementById("app__list"),
        allTasks = document.getElementById("js-all-tasks"),
        doneTasks = document.getElementById("js-done-tasks"),
        // переменная для поля
        addNewTaskField = document.getElementById("app__task-new");

    function INIT() {
        for (const item of tasks.current) {
            createItem(item);
        }
        for (const item of tasks.done) {
            createItem(item);
        }
        // сразу ставим числа в общие таски по умолчанию
        allTasks.innerHTML = tasks.allTasks;
        doneTasks.innerHTML = tasks.doneTasks;
    }
    
    function createItem(el) {
        let item = document.createElement('li'),
            remove = document.createElement('div'),
            text = document.createElement('span');
            // добавляем для списка, крестика и текста
        remove.classList.add('app__list-remove');
        remove.addEventListener('click', function () {
            removeTask(this);
        });
        // добавляем класс и событие для текста
        text.classList.add('app__list-text');
        text.addEventListener('click', function () {
            doneTask(this);
        });
        // проверка done/current
        switch (el.taskState) {
            case 'done':
                item.classList.add('app__list-item', 'app__list-item--done');
                break;
            default:
                item.classList.add('app__list-item');
        }
        // add каждой таске,id,контент, ремув и сам итем
        item.id = el.taskId;
        text.innerHTML = el.taskContent;
        item.appendChild(text);
        item.appendChild(remove);
        tasksList.appendChild(item);
    }

    function doneTask(el) {
        let elem = el.parentNode,
            elemId = elem.id,
            elemState = elem.classList.contains('app__list-item--done');

        const [itemsRemove, itemsAdd] = elemState ? [tasks.done, tasks.current] : [tasks.current, tasks.done];
        elem.classList.toggle('app__list-item--done');
        for (const [index, item] of itemsRemove.entries()) {
            if (item.taskId !== elemId) continue;
            itemsAdd.push(item);
            itemsRemove.splice(index, 1);
        }
        doneTasks.innerHTML = tasks.doneTasks;
    }

    function removeTask(el) {
        let removeEl = el.parentNode,
            removeElId = removeEl.id,
            removeElState = removeEl.classList.contains('app__list-item--done');

        removeEl.remove();
        const items = removeElState ? tasks.done : tasks.current;
        for (const [index, item] of items.entries()) {
            if (item.taskId !== removeElId) continue;
            items.splice(index, 1);
        }
        allTasks.innerHTML = tasks.allTasks;
        doneTasks.innerHTML = tasks.doneTasks;
    }

    function addTasks(str) {
        let elem = {
            taskId: doId(),
            taskContent: str,
            taskState: "current"
        };
        tasks.current.push(elem);
        createItem(elem);
        allTasks.innerHTML = tasks.allTasks;
    }

    function doId() {
        return Math.random().toString(36).substr(2, 16);
        // задаёт id новому элементу
    }

    INIT();
    // добавляет на клавишу ентер
    addNewTaskField.addEventListener('keyup',function (e) {
        if(e.keyCode === 13) {
            addTasks(this.value);
            this.value = "";
        }
    })

})();
// tdlist