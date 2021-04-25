function openNav() {
    document.querySelector("#open").style.display = "none";
    document.querySelector("#nav").style.width = "100%";
}

function closeNav() {
    document.querySelector("#nav").style.width = "0";
    document.querySelector("#open").style.display = "block";
}



const apiURL = "chapterStats.json";
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    console.log(myList);

    var select = document.getElementById('chapterlist');
    // for (i = 0; i < myList.length; i++) {
    //         var option = document.createElement("option");
    //         option.value = chapterJson[i]['chapter_number'];
    //         option.text = chapterJson[i]['display'];
    //         select.appendChild(option);
    //     }      
        
    var chapter = document.getElementById('chapTitle');
    select.onchange = function()
    {
        for (var i = 0; i < myList.length; i++) {
            if(myList[i]['chapter_number'] == this.value)
            {
                document.querySelector("#chapTitle").textContent = myList[i]['display'];
                document.querySelector("#strength").textContent = myList[i]['strength'];
                document.querySelector("#dexterity").textContent = myList[i]['dexterity'];
                document.querySelector("#constitution").textContent = myList[i]['constitution'];
                document.querySelector("#intelligence").textContent = myList[i]['intelligence'];
                document.querySelector("#magic").textContent = myList[i]['magic'];
                document.querySelector("#charisma").textContent = myList[i]['charisma'];
                document.querySelector("#luck").textContent = myList[i]['luck'];

                document.querySelector('#ability1').textContent = myList[i]["ability 1"].ability;
                document.querySelector('#ability1L').textContent = myList[i]["ability 1"].level;
                document.querySelector('#ability1P').textContent = myList[i]["ability 1"].percentage;

                document.querySelector('#ability2').textContent = myList[i]['ability 2'].ability;
                document.querySelector('#ability2L').textContent = myList[i]["ability 2"].level;
                document.querySelector('#ability2P').textContent = myList[i]['ability 2'].percentage;

                document.querySelector('#ability3').textContent = myList[i]['ability 3'].ability;
                document.querySelector('#ability3L').textContent = myList[i]['ability 3'].level;
                document.querySelector('#ability3P').textContent = myList[i]['ability 3'].percentage;

                document.querySelector('#ability4').textContent = myList[i]['ability 4'].ability;
                document.querySelector('#ability4L').textContent = myList[i]['ability 4'].level;
                document.querySelector('#ability4P').textContent = myList[i]['ability 4'].percentage;

                document.querySelector('#ability5').textContent = myList[i]['ability 5'].ability;
                document.querySelector('#ability5L').textContent = myList[i]['ability 5'].level;
                document.querySelector('#ability5P').textContent = myList[i]['ability 5'].percentage;

                document.querySelector('#ability6').textContent = myList[i]['ability 6'].ability;
                document.querySelector('#ability6L').textContent = myList[i]['ability 6'].level;
                document.querySelector('#ability6P').textContent = myList[i]['ability 6'].percentage;

                document.querySelector('#ability7').textContent = myList[i]['ability 7'].ability;
                document.querySelector('#ability7L').textContent = myList[i]['ability 7'].level;
                document.querySelector('#ability7P').textContent = myList[i]['ability 7'].percentage;

                document.querySelector('#ability8').textContent = myList[i]['ability 8'].ability;
                document.querySelector('#ability8L').textContent = myList[i]['ability 8'].level;
                document.querySelector('#ability8P').textContent = myList[i]['ability 8'].percentage;

                document.querySelector('#ability9').textContent = myList[i]['ability 9'].ability;
                document.querySelector('#ability9L').textContent = myList[i]['ability 9'].level;
                document.querySelector('#ability9P').textContent = myList[i]['ability 9'].percentage;

                document.querySelector('#ability10').textContent = myList[i]['ability 10'].ability;
                document.querySelector('#ability10L').textContent = myList[i]['ability 10'].level;
                document.querySelector('#ability10P').textContent = myList[i]['ability 10'].percentage;
 
                document.querySelector('#ability11').textContent = myList[i]['ability 11'].ability;
                document.querySelector('#ability11L').textContent = myList[i]['ability 11'].level;
                document.querySelector('#ability11P').textContent = myList[i]['ability 11'].percentage;

                document.querySelector('#ability12').textContent = myList[i]['ability 12'].ability;
                document.querySelector('#ability12L').textContent = myList[i]['ability 12'].level;
                document.querySelector('#ability12P').textContent = myList[i]['ability 12'].percentage;                    
            }

            if(this.value == '')
            {chapter.value = this.value;}
        }
    }

});