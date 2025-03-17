<!DOCTYPE html>
<html lang="pl">
    <head>
        <title>KINO. Moje Hobby</title>
        <link rel="stylesheet" href="style.css" type="text/css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="icon" type="image/x-icon" href="img/logo.ico">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;600&display=swap" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="UTF-8">
    </head>

    <body>
        <nav>
            <div id="menu">
                <img id="site_logo" src="img/logo2.png" alt="logo">
                <ul>
                    <li><a href="form.html" >Ankieta</a></li>
                    <li>Galeria
                        <div class="dropdown">
                        <ul>
                        <li><a href="gallery_films.html">Filmy</a></li>
                        <li><a href="gallery_series.html">Seriale</a></li>
                        </ul>
                    </div>
                    </li>
                    <li><a href="rank.html">Ranking</a></li>
                    <li><a href="news.html">Aktualności</a></li>
                    <li><a href="index.html">Strona główna</a></li>
                </ul>
                <div style="clear: both;"></div>
            </div>
        </nav>
        <main>    
            <article>
                <h1 class="page_header">Dziękujemy za wypełnienie ankiety!</h1>
<?php
    $fname = $_POST['fname'];
    if (isset($_POST['movie_show'])) $movie_show = $_POST['movie_show'];
    else $movie_show = " ";
    if (isset($_POST['cinema_per_year'])) $cinema_per_year = $_POST['cinema_per_year'];
    else $cinema_per_year = " ";
    $last_movie = $_POST['last_movie'];

    $genre = array();
    $ind;

    for($i = 1; $i < 10;$i++)
    {
        if (isset($_POST['genre'.$i]))
        {
            $genre[]=$_POST['genre'.$i];
        }
    }

    $univ = $_POST['univ'];
    $fav_movies = $_POST['fav_movies'];
    

echo<<<END
    <br>
    Imię: $fname
    <br>
    Częściej ogląda: $movie_show
    <br>
    Rocznie do kina chodzi $cinema_per_year razy
    <br>
    Ostatni widziany film: $last_movie
    <br>
    Ulubione gatunki: 
END;
echo implode(", ", $genre);

echo<<<END
    <br>
    Ulubione uniwersum: $univ
    <br>
    Polecone filmy: $fav_movies
    <br>
    <br>
END;
?>

<a href="index.html">Powrót na stronę główną!</a>
<br><br>
            </article>
        </main>
        <footer>
                Kino. Moje Hobby &copy; Wszelkie prawa zastrzeżone.
                <a href="https://www.vecteezy.com/free-vector/cinema-logo">Cinema Logo Vectors by Vecteezy</a>
        </footer>
    </body>
</html>

