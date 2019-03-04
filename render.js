let find = document.querySelector('.wrapper');
function render() {

  find.innerHTML = `<!--modal wind-->
    <div class="container-fluide ">
      <div class="row justify-content-center ">
        <div class="col-10" id="back">
          <h1>My curriculum vitae</h1>
          <div class="row">
            <div class="col">
              <!--photo & continfo-->
              <h4>Photo & contacts</h4>
              <div class="row">
                <div class="col-6">
                  <div class="section__content">
                    <a href="#0" class="cpm cpm_type3 cpm_type3-a1 tile">
                      <img src="image/avatar.jpg" class="cpm__img tile__img" alt="my_photo">
                    </a>
                  </div>
                </div>
                <div class="col">
                  <ul>
                    <li><i class="fas fa-mail-bulk"></i> <a href="#">Gishtall@gmail.com</a></li>
                    <li><i class="fab fa-viber"></i> <a href="#">+375(29)388 05 07</a></li>
                    <li><i class="fas fa-phone-volume"></i> <a href="#">+375(33)602 36 74</a></li>
                    <li><i class="fab fa-instagram"></i> <a href="https://www.instagram.com/gishtall/">Instagram</a></li>
                    <li><i class="fab fa-telegram"></i> <a href="http://t.me/gishtall/">Telegram</a></li>
                    <li><i class="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/gishtall/">Linkedin</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col">
              <h4>Skills</h4>
              <div class="row">
              <div class="col">
              <li><i class="fas fa-star"> Windows</i></li>
              <li><i class="fas fa-star"> Photoshop</i></li>
              <li><i class="fas fa-star"> Git</i></li>
              <li><i class="fas fa-star"> Aws</i></li>
              <li><i class="fas fa-star"> Html</i></li>
              <li><i class="fas fa-star"> CSS</i></li>
              <li><i class="fas fa-star"> JavaScript</i></li>
              <li><i class="fas fa-star"> Bootstrap</i></li>
              <li><i class="fas fa-star"> Babel</i></li>
              </div>
              <div class="col">
              <li><i class="fas fa-star"> Webpack</i></li>
              <li><i class="fas fa-star"> jquery</i></li>
              <li><i class="fas fa-star"> Npm</i></li>
              <li><i class="fas fa-star"> nodeJs</i></li>
              <li><i class="fas fa-star"> React</i></li>
              <li><i class="fas fa-check"> Able to self-studying</i></li>
              <li><i class="fas fa-check"> Highly motivated</i></li>
              <li><i class="fas fa-check"> Fast-learning</i></li>
              <li><i class="fas fa-check"> Good communication skills</i></li>
              </div>
              </div>
              </div>
            </div>
          <div class="row">
           <div class="col">
           <h4>About me</h4>
           <div>
  
           My knowledge in Web development started with Adobe Photoshop. I helped to create my friend panels of the user,
           icons and banners for this website. But all these elements were static. 
           I wondered how I could change that. 
           Search engines gave me three main directions for this purpose - html, css and javascript.
           I found many relevant articles, books, communities, video. In my free time I studied these materials and tried to apply their knowledge...
            
  
                <button type="button" class="btn btn-block" data-toggle="modal" data-target="#myModal">
                  <h5>more</h5>
                </button>
  
                <!-- txtModWind -->
                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">About me</h4>
                      </div>
                      <div class="modal-body">
                      My knowledge in Web development started with Adobe Photoshop. I helped to create my friend panels of the user, icons and banners for this website. But all these elements were static. I wondered how I could change that. Search engines gave me three main directions for this purpose - html, css and javascript.</br>
                      I found many relevant articles, books, communities, video. In my free time I studied these materials and tried to apply their knowledge in practice. </br>
                      Later, my friends-programmers explained me that the thing I was doing was called front-end. - so i got acquainted with front-end development. That’s how I realized what exactly I want to do in my future. As I plunged into front-end more and more, my curiosity was growing. I subscribed to stack overflow, github, qaru, habr, etc.I learned to work with libraries and frameworksI applied some of them while creating this CV. </br>
                      I like this profession, as it is closely related to sustainable development.  Every day I learn something new and improve myself. For this reason, I quit my previous job and decided to devote myself to programming. </br>
                      I am learning React at the moment. </br>
                      I attend conferences, meetings. </br>
                      I am looking for a place where I will be able to improve my knowledge and reach new heights.</br>
                      
  
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           </div>
          <!--parallax-->
          <div class="row text-center">
            <div class="col" id="plx" data-parallax="scroll" data-image-src="./image/parallax.jpg">
                
               <h4>My app on React</h4>
                 <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">See more</a> 
            </div>
          </div>


          <!--Calc-->
           <div class="row">
           <div class="col">
             <h4>Calculator</h4>
             <div class="calc">
               <form name=calcform>
                 <input type=text placeholder="0" name=txt1 style="text-align:right"><br>
                 <input type=button class="btn btn-outline-dark" name=btn9 value=9 onclick="displynum(btn9.value)">
                 <input type=button class="btn btn-outline-dark" name=btn8 value=8 onclick="displynum(btn8.value)">
                 <input type=button class="btn btn-outline-dark" name=btn7 value=7 onclick="displynum(btn7.value)">
                 <input type=button class="btn btn-outline-dark" name=addbtn value=+ onclick="displynum(addbtn.value)"><br>
                 <input type=button class="btn btn-outline-dark" name=btn6 value=6 onclick="displynum(btn6.value)">
                 <input type=button class="btn btn-outline-dark" name=btn5 value=5 onclick="displynum(btn5.value)">
                 <input type=button class="btn btn-outline-dark" name=btn4 value=4 onclick="displynum(btn4.value)">
                 <input type=button class="btn btn-outline-dark" name=subbtn value=- onclick="displynum(subbtn.value)"><br>
                 <input type=button class="btn btn-outline-dark" name=btn3 value=3 onclick="displynum(btn3.value)">
                 <input type=button class="btn btn-outline-dark" name=btn2 value=2 onclick="displynum(btn2.value)">
                 <input type=button class="btn btn-outline-dark" name=btn1 value=1 onclick="displynum(btn1.value)">
                 <input type=button class="btn btn-outline-dark" name=btnmul value=* onclick="displynum(btnmul.value)"><br>
                 <input type=button class="btn btn-outline-dark" name=btn0 value=0 onclick="displynum(btn0.value)">
                 <input type=button class="btn btn-outline-dark" name=potbtn value=. onclick="displynum(potbtn.value)">
                 <input type=button class="btn btn-outline-dark" name=eqlbtn value="=" onclick="txt1.value=eval(txt1.value)">
                 <input type=button class="btn btn-outline-dark" name=divbtn value=/ onclick="displynum(divbtn.value)">
               </form>
             </div>
             <!--Calc-->
           </div>
           <div class="col">
             <h4> To Do List</h4>
             <!--tdlist-->
             <div class="app">
               <div class="app__header">
                 <div class="app__title"><span class="app__title-text">My Tasks</span></div>
                 <div class="app__info">
                   <div class="app__info-item">
                     <span class="app__info-text">All tasks</span>
                     <span class="app__info-number" id="js-all-tasks"></span>
                   </div>
                   <div class="app__info-item">
                     <span class="app__info-text">Tasks done</span>
                     <span class="app__info-number" id="js-done-tasks"></span>
                   </div>
                 </div>
               </div>
               <div class="app__body">
                 <ul class="app__list" id="app__list"></ul>
               </div>
               <div class="app__footer">
                 <input class="app__task-new" id="app__task-new" placeholder="Add new task">
               </div>
             </div>
           </div>
           <!--tdlist-->
           </div>
    
          <div class="row">
            <!--player-->
            <div class="col">
              <ul class="player">
                <h4>Simple mp3 player</h4>
                <li class='firstSong' data-src="./audio/01.ZZ_Top_-_Bad_to_the_Bone.mp3">ZZ Top - Bad to the Bone</li>
                <li data-src="./audio/02.the_red_jumpsuit_apparatus-face_down.mp3">The Red jumpsuit Apparatus - Face down</li>
                <li data-src="./audio/03.The_Diary_Of_Jane.mp3">Breking Benjamin - The Diary Of Jane</li>
                <li data-src="./audio/04.Sum41_-_ Slipping_away.mp3">Sum41 - Slipping away</li>
                <li data-src="./audio/05.linkin_park_-_in_the_end.mp3">linkin Park - in the end (cover)</li>
              </ul>
            </div>
            <!--player-->
            <div class="col">
              <h4>Gallery</h4>
              <!--gallery-->
              <div class="gallery">
                <a data-fancybox="gallery" class="photo" href="gallery_img/big/01.jpg" title="Cosmos"><img src="gallery_img/small/01.jpg"
                    width="160" height="100" alt="" /></a>
                <a data-fancybox="gallery" class="photo" href="gallery_img/big/02.jpg" title="Meadow"><img src="gallery_img/small/02.jpg"
                    width="160" height="100" alt="" /></a>
                <a data-fancybox="gallery" class="photo" href="gallery_img/big/03.jpg" title="Pier"><img src="gallery_img/small/03.jpg"
                    width="160" height="100" alt="" /></a>
                <a data-fancybox="gallery" class="photo" href="gallery_img/big/04.jpg" title="Fire"><img src="gallery_img/small/04.jpg"
                    width="160" height="100" alt="" /></a>
                <a data-fancybox="gallery" class="photo" href="gallery_img/big/05.jpg" title="Nature"><img src="gallery_img/small/05.jpg"
                    width="160" height="100" alt="" /></a>
                <a data-fancybox="gallery" class="photo" href="gallery_img/big/06.jpg" title="Sea"><img src="gallery_img/small/06.jpg"
                    width="160" height="100" alt="" /></a>
                <a data-fancybox="gallery" class="photo" href="gallery_img/big/07.jpg" title="Mountains"><img src="gallery_img/small/07.jpg"
                    width="160" height="100" alt="" /></a>
                <a data-fancybox="gallery" class="photo" href="gallery_img/big/08.jpg" title="fairy_tale"><img src="gallery_img/small/08.jpg"
                    width="160" height="100" alt="" /></a>
                <a data-fancybox="gallery" class="photo" href="gallery_img/big/09.jpg" title="Car"><img src="gallery_img/small/09.jpg"
                    width="160" height="100" alt="" /></a>
              </div>
              <!--gallery-->
            </div>
          </div>          
          </div>
        </div>
      </div>
    </div>
    
    `;
}
render();