function openNav() {
    document.querySelector("#open").style.display = "none";
    document.querySelector("#nav").style.width = "100%";
}

function closeNav() {
    document.querySelector("#nav").style.width = "0";
    document.querySelector("#open").style.display = "block";
}










var select = document.getElementById('chapterlist');

// for (var i = 0; i < chapterJson.length; i++) {
//     var option = document.createElement("option");
//     option.value = chapterJson[i]['chapter_number'];
//     option.text = chapterJson[i]['display'];
//     select.appendChild(option);
// }      

var chapter = document.getElementById('chapTitle');
select.onchange = function()
{
    for (var i = 0; i < chapterJson.length; i++) {
        if(chapterJson[i]['chapter_number'] == this.value)
        {

            // input.value = chapterJson[i]['display'];
            // strength.value = chapterJson[i]['strength'];
            // dexterity.value = chapterJson[i]['dexterity'];
            // constitution.value = chapterJson[i]['constitution'];
            // intelligence.value = chapterJson[i]['intelligence'];
            // magic.value = chapterJson[i]['magic'];
            // charisma.value = chapterJson[i]['charisma'];
            // luck.value = chapterJson[i]['luck'];

            // document.querySelector('#appraisalL').textContent = chapterJson[i]['appraisal.level'];
            // document.querySelector('#appraisalP').textContent = chapterJson[i]['appraisalP'];
            // console.log(chapterJson[i].appraisal.level);

            document.querySelector("#chapTitle").textContent = chapterJson[i]['display'];
            document.querySelector("#strength").textContent = chapterJson[i]['strength'];
            document.querySelector("#dexterity").textContent = chapterJson[i]['dexterity'];
            document.querySelector("#constitution").textContent = chapterJson[i]['constitution'];
            document.querySelector("#intelligence").textContent = chapterJson[i]['intelligence'];
            document.querySelector("#magic").textContent = chapterJson[i]['magic'];
            document.querySelector("#charisma").textContent = chapterJson[i]['charisma'];
            document.querySelector("#luck").textContent = chapterJson[i]['luck'];

            document.querySelector('#ability1').textContent = chapterJson[i]["ability 1"].ability;
            document.querySelector('#ability1L').textContent = chapterJson[i]["ability 1"].level;
            document.querySelector('#ability1P').textContent = chapterJson[i]["ability 1"].percentage;

            document.querySelector('#ability2').textContent = chapterJson[i]['ability 2'].ability;
            document.querySelector('#ability2L').textContent = chapterJson[i]["ability 2"].level;
            document.querySelector('#ability2P').textContent = chapterJson[i]['ability 2'].percentage;

            document.querySelector('#ability3').textContent = chapterJson[i]['ability 3'].ability;
            document.querySelector('#ability3L').textContent = chapterJson[i]['ability 3'].level;
            document.querySelector('#ability3P').textContent = chapterJson[i]['ability 3'].percentage;

            document.querySelector('#ability4').textContent = chapterJson[i]['ability 4'].ability;
            document.querySelector('#ability4L').textContent = chapterJson[i]['ability 4'].level;
            document.querySelector('#ability4P').textContent = chapterJson[i]['ability 4'].percentage;

            document.querySelector('#ability5').textContent = chapterJson[i]['ability 5'].ability;
            document.querySelector('#ability5L').textContent = chapterJson[i]['ability 5'].level;
            document.querySelector('#ability5P').textContent = chapterJson[i]['ability 5'].percentage;

            document.querySelector('#ability6').textContent = chapterJson[i]['ability 6'].ability;
            document.querySelector('#ability6L').textContent = chapterJson[i]['ability 6'].level;
            document.querySelector('#ability6P').textContent = chapterJson[i]['ability 6'].percentage;

            document.querySelector('#ability7').textContent = chapterJson[i]['ability 7'].ability;
            document.querySelector('#ability7L').textContent = chapterJson[i]['ability 7'].level;
            document.querySelector('#ability7P').textContent = chapterJson[i]['ability 7'].percentage;

            document.querySelector('#ability8').textContent = chapterJson[i]['ability 8'].ability;
            document.querySelector('#ability8L').textContent = chapterJson[i]['ability 8'].level;
            document.querySelector('#ability8P').textContent = chapterJson[i]['ability 8'].percentage;

            document.querySelector('#ability9').textContent = chapterJson[i]['ability 9'].ability;
            document.querySelector('#ability9L').textContent = chapterJson[i]['ability 9'].level;
            document.querySelector('#ability9P').textContent = chapterJson[i]['ability 9'].percentage;

            document.querySelector('#ability10').textContent = chapterJson[i]['ability 10'].ability;
            document.querySelector('#ability10L').textContent = chapterJson[i]['ability 10'].level;
            document.querySelector('#ability10P').textContent = chapterJson[i]['ability 10'].percentage;

            document.querySelector('#ability11').textContent = chapterJson[i]['ability 11'].ability;
            document.querySelector('#ability11L').textContent = chapterJson[i]['ability 11'].level;
            document.querySelector('#ability11P').textContent = chapterJson[i]['ability 11'].percentage;

            document.querySelector('#ability12').textContent = chapterJson[i]['ability 12'].ability;
            document.querySelector('#ability12L').textContent = chapterJson[i]['ability 12'].level;
            document.querySelector('#ability12P').textContent = chapterJson[i]['ability 12'].percentage;
        }
        if(this.value == '')
        {
          chapter.value = this.value;
        }
    }
    
};