$( document ).ready(function() {
    console.log( "ready!" );



    $('#lang-btn').on('click', function(){
        $('.lang-nav').toggleClass('lang-nav_active');
        $('.arrow-lang').toggleClass('arrow-lang_active');
    });


    const btn = document.getElementById("menu-toggle");
    const lines = btn.querySelectorAll(".line");
    const cls = { open: "open", close: "close" };
    let btnClass = cls.open;
    
    btn.addEventListener("click", () => {
      if (btn.classList.contains(cls.open)) {
        btn.classList.remove(btnClass);
        btnClass = cls.close;
      } else if (btn.classList.contains(cls.close)) {
        btn.classList.remove(btnClass);
        btnClass = cls.open;
      }
    
      void btn.offsetWidth;
      btn.classList.add(btnClass);

      $('.main__link').toggleClass('main__link_active');
    });

















    
    $('.btn-add').on('click', function () {
        $('.input-new-wrap').append('<div class="input-wrap-add"><input type="text" name="input-test-2" class="input-add" placeholder="Місто, вул"><div class="btn-abs"><img src="static/img/index/del.svg" alt=""><div class="new-fix-line"></div></div></div>');
        
        $('.btn-abs').on('click', function () {
            console.log( $(".btn-abs").parent());
            
            $(this).parent().remove()
            // $(".input-new-wrap").remove()
        });
    
    
    });

    $('.btn-add-2').on('click', function () {
        $('.input-new-wrap-2').append('<div class="input-wrap-add add-2"><input type="text" name="input-test-3" class="input-add" placeholder="Місто, вулиця, номер буд."><div class="btn-abs"><img src="static/img/index/del.svg" alt=""><div class="new-fix-line"></div></div></div>');
        
        $('.btn-abs').on('click', function () {
            console.log( $(".btn-abs").parent());
            
            $(this).parent().remove()
            // $(".input-new-wrap").remove()
        });
    
    
    });


    $('.btn-abs').on('click', function () {
        console.log( $(".btn-abs").parent());
        
        $(this).parent().remove()
        // $(".input-new-wrap").remove()
    });
    var sumProf;
    $('.left-prof').on("click", function() {
        var prof =  $('.left-prof');
       
        if ($(this)[0] == prof[0]) {
            sumProf = 100;
        } else if ($(this)[0] == prof[1]) {
            sumProf = 200;
        }
        else if ($(this)[0] == prof[2]) {
            sumProf = 300;
        }
        else if ($(this)[0] == prof[3]) {
            sumProf = 400;
        }
        else if ($(this)[0] == prof[4]) {
            sumProf = 500;
        }
        prof.removeClass('left-prof_active');
        $(this).addClass('left-prof_active');

      
        // console.log(sumProf);
        // console.log(prof[0]);
    });

    var res = 100;
        $('.btn-result').on('click', function () {
            var km = $("#input-test-3").val();
            var tn = $("#input-test-4").val();
            console.log(km);
            console.log(tn);
            res = (+sumProf) + (+km) + (+tn);
            console.log(res);
            document.getElementById("main-result").textContent = res + " грн";
        });
       
        // $('.main-result')[0].innerHTML = +res + " грн";
        // console.log($('.main-result'));



});