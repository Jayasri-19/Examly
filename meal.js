$.getJSON("https://www.themealdb.com/api/json/v1/1/random.php",function(data)
{
    console.log(data);

    var i=data.meals[0].idMeal;
    var na=data.meals[0].strMeal;
    var ar=data.meals[0].strArea;
    var ins=data.meals[0].strInstructions;
    var cat=data.meals[0].strCategory;
    var yt=data.meals[0].strYoutube;
    var image=data.meals[0].strMealThumb;
    $(".id").append(i);
    $(".name").append(na);
    $(".inst").append(ins);
    $(".area").append(ar);
    $(".cata").append(cat);
    $(".you").append(yt);
    $(".icon").attr('src',image);
});