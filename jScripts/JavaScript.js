var index = 1;

//פונקציה להגדרת הצבע של מספור התמונות
function setColors() {
    //מערך שמכיל את ערכי הצבע של כל אחד ממספרי התמונות
    var colors = ['#E00300', '#DAD500', '#9782C9', '#E17300', '#E7A7D6', '#7ABD00', '#00BFC4'];

    //יצירת מערך שמכיל את כל האלמנטים של מספור התמונות
    var nums = document.getElementsByClassName("nums");

    //לולאה שרצה לאורך מערך המספרים ומגדירה צבע לכל אחד לפי מערך הצבעים 
    for (var i = 0; i < nums.length; i++) {
        nums[i].style.color = colors[i];
    }

}

//פונקציה שתופעל בלחיצה על אחד מהחצים
function swipeImg(num) {
    showImg(index += num);
}

//פונקציה שתופעל בלחיצה על אחת מהתמונות הקטנות בתפריט 
function currentImg(num) {
    showImg(index = num);
}

function showImg(imgNum) {

    //יצירת מערך שמכיל את כל האלמנטים של התמונות הגדולות
    var bigImgs = document.getElementsByClassName("bigImg");

    // יצירת מערך שמכיל את כל האלמנטים של התמונות הקטנות
    var circles = document.getElementsByClassName("circles");

    //תנאי שבודק האם האינדקס שקיבלה הפונקציה גדול ממספר התמונות בגלרייה
    if (imgNum > bigImgs.length) {
        index = 1;
    }

    //תנאי שבודק האם האינדקס שקיבלה הפונקציה גדול ממספר התמונות בגלרייה
    if (imgNum < 1) {
        index = bigImgs.length;
    }

    //לולאה שמוסיפה לכל התמונות הגדולות display:none
    for (var i = 0; i < bigImgs.length; i++) {
        bigImgs[i].style.display = "none";
    }

    // הגדרת נראות לתמונה הנוכחיות display:block
    bigImgs[index - 1].style.display = "flex";

    //לולאה שמאפסת את כל הכפתורים בתפריט למצב ההתחלתי
    for (var i = 0; i < bigImgs.length; i++) {
        circles[i].className = circles[i].className.replace(" active","");
    }

    //הגדרת עיצוב שונה לעיגול של התמונה הנוכחית בתפריט
    circles[index - 1].className += " active";

    document.getElementById("caption").innerHTML = circles[index - 1].alt;
}


