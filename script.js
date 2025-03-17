//window.localStorage.setItem('form-complete', 1);

//var form_complete;

function sendForm()
{
    window.localStorage.setItem('form_complete', 1);
}

function visitedNews()
{
    window.sessionStorage.setItem('visN', 1);
    document.getElementById("last_section").remove();

}

function visitedRank()
{
    window.sessionStorage.setItem('visR', 1);
}

function visitedGallery()
{
    window.sessionStorage.setItem('visG', 1);
}

function visitedForm()
{
    window.sessionStorage.setItem('visF', 1);
}

function formContent()
{

    if(window.localStorage.getItem('form_complete')==1)
    {
        document.getElementById("form_link").innerHTML='<a href="sent_form.html" >Ankieta</a>';
    }
    else
    {
        document.getElementById("form_link").innerHTML='<a href="form.html" >Ankieta</a>';
    }
}

function formContent2()
{

    if(window.localStorage.getItem('form_complete')==1)
    {
        if(window.sessionStorage.getItem('visF')==1)
        {
            document.getElementById("m_element_form").innerHTML='<figure><a href="sent_form.html"><img class="m_img" src="img/gallery/darkest_hour.jpg" alt="Form" style="border: 5px solid #bf0a0a;"><div class="m_link">Ankieta</div></a></figure>';
        }
        else
        {
            document.getElementById("m_element_form").innerHTML='<figure><a href="sent_form.html"><img class="m_img" src="img/gallery/darkest_hour.jpg" alt="Form"><div class="m_link">Ankieta</div></a></figure>';

        }
        
    }
    else
    {
        if(window.sessionStorage.getItem('visF')==1)
        {
            document.getElementById("m_element_form").innerHTML='<figure><a href="form.html"><img class="m_img" src="img/gallery/darkest_hour.jpg" alt="Form" style="border: 5px solid #bf0a0a;"><div class="m_link">Ankieta</div></a></figure>';
        }
        else
        {
            document.getElementById("m_element_form").innerHTML='<figure><a href="form.html"><img class="m_img" src="img/gallery/darkest_hour.jpg" alt="Form"><div class="m_link">Ankieta</div></a></figure>';

        }
    }
}

function changeBorderColor()
{
    if(window.sessionStorage.getItem('visN')==1)
    {
        document.getElementById("m_element_news").innerHTML='<figure><a href="news.html"><img class="m_img" src="img/gallery/avatar2.jpg" alt="News" style="border: 5px solid #bf0a0a;"><div class="m_link">Aktualności</div></a></figure>';
    }
    else
    {
        document.getElementById("m_element_news").innerHTML='<figure><a href="news.html"><img class="m_img" src="img/gallery/avatar2.jpg" alt="News"><div class="m_link">Aktualności</div></a></figure>';
    }

    if(window.sessionStorage.getItem('visR')==1)
    {
        document.getElementById("m_element_rank").innerHTML='<figure><a href="rank.html"><img class="m_img" src="img/gallery/whiplash.jpg" alt="Rank" style="border: 5px solid #bf0a0a;"><div class="m_link">Ranking</div></a></figure>';
    }
    else
    {
        document.getElementById("m_element_rank").innerHTML='<figure><a href="rank.html"><img class="m_img" src="img/gallery/whiplash.jpg" alt="Rank"><div class="m_link">Ranking</div></a></figure>';
    }

    if(window.sessionStorage.getItem('visG')==1)
    {
        document.getElementById("m_element_gallery").innerHTML='<figure><a href="gallery_films.html"><img class="m_img" src="img/gallery/joker.jpg" alt="Gallery" style="border: 5px solid #bf0a0a;"><div class="m_link">Galeria</div></a></figure>';
    }
    else
    {
        document.getElementById("m_element_gallery").innerHTML='<figure><a href="gallery_films.html"><img class="m_img" src="img/gallery/joker.jpg" alt="Gallery"><div class="m_link">Galeria</div></a></figure>';
    }

}

//strzałka

function arrow_click()
{

    document.getElementById("dis_arrow").remove();


    const newSection = document.createElement("section");

    const newImage = document.createElement("img");
    newImage.setAttribute("class", "n_img");
    newImage.setAttribute("src", "img/news/witcher.jpg");
    newImage.setAttribute("alt", "witcher");

    newSection.appendChild(newImage);

    const newText = document.createElement("div");
    newText.setAttribute("class", "n_text");
    newText.innerHTML= '<h2>Wiedźmin - Henry Cavil odchodzi z serialu</h2><p>Aktor Henry Cavil wcielający się w postać Geralta z Rivii - głownego bohatera serialu "Wiedźmin", ogłosił na Instagramie, że po 3 sezonie serialu odchodzi z serialu.<br>Jego rolę przejmie australijski aktor Liam Hemsworth.</p>';

    newSection.appendChild(newText);

    const newClear = document.createElement("div");
    newClear.setAttribute("style", "clear:both");

    newSection.appendChild(newClear);

    //const newDiv = document.createElement("div");

    

    const parent = document.getElementById("news");

    parent.appendChild(newSection);
   
}


function error()
{
    const article = document.getElementById('article');

    const error = document.createElement("div");
    error.setAttribute("id", "dialog");
    error.setAttribute("title", "Błąd");

    if(!isNaN(fname.value) || !isNaN(last_movie.value) || !isNaN(fav_movies.value))
    {
        error.innerHTML='<p>Nie uzupełniono wymaganych pól lub podano wartości liczbowe zamiast tekstu!</p>';
    }

    article.appendChild(error);
    $('#dialog').dialog();
}


function validateForm()
{
    const fname = document.getElementById('fname');
    const movie_show = document.getElementById('fmovie_show');
    const cinema_per_year = document.getElementById('cinema_per_year');
    const last_movie = document.getElementById('last_movie');
    const univ = document.getElementById('univ');
    const fav_movies = document.getElementById('fav_movies');

    if(!isNaN(fname.value) || !isNaN(last_movie.value) || !isNaN(fav_movies.value))
    {
        return false;
    }

}
