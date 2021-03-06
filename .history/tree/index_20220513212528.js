<style>
  div.tooltip {
    position: absolute;
    padding: 10px;
    font: 24px Tableau;
    background: rgba(204, 204, 71, 0.95);
    box-shadow: 1px 1px 10px rgba(119, 73, 73, 0.6);
    border: 0;
    border-radius: 2px;
    pointer-events: none;
  }


  svg {
    font: 10px sans-serif;
    text-align: center;
    display: block;
    margin: auto;
  }

  .cell:hover {
    fill: #0300ff;
    margin: 0.5em;
  }

  .rigthh {
    position: absolute;
    left: 300px;
  }

  .statesLines {
    fill: none;
    stroke: rgb(236, 10, 10);
    stroke-linejoin: round;
  }
</style>

<head>



  <script src="/d3-7.3.0/package/dist/d3.min.js"></script>
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.0.4/d3.min.js"></script> -->
  
  <title id="title">tree map</title>

</head>

<body id="bodyDiv" >

<!-- <div id="bodyDiv"></div> -->
  <script src="/FCCbundle.js"></script>
  <script src="/topojson.min.js"></script>
  <!--  <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script> -->
  <p id="title1" style="color:rgb(40, 151, 109);text-align:center;font-weight: bold;">United States Education </p>
  <p id="description" style="color:rgb(70, 100, 89);text-align:center;"> Adults age 25 and older with a bachelor's
    degree or higher (2010-2014) </p>
  <button onClick="movies()">Movies Data Set</button> |
  <button onClick="games()">Video Games Data Set</button> |
  <button onClick="kick()">Kickstarter Data Set</button> |
  <script>
    kick();
    function kick(){
  clear();
      fetch(
      "tree_kickstarter-funding-data.json")
      .then((res) => res.json())
      .then((res) => {

        kickstarterData = res;

        dataObject = {
          jsonn: kickstarterData, title: 'Kickstarter Pledges', description: 'Top 100 Most Pledged Kickstarter Campaigns Grouped By Category'
          , categories: ["Product Design", "Tabletop Games", "Video Games", "Technology", "Hardware", "Sound", "Gaming Hardware", "Narrative Film", "3D Printing", "Television", "Web", "Wearables", "Food", "Games", "Sculpture", "Apparel", "Art", "Gadgets", "Drinks"]

          , colorss: ['#dbdb8d', '#00FF00', '#f7b6d2', '#7f7f7f', '#ff9896', '#c49c94', '#c5b0d5', '#1f77b4', '#98df8a', '#17becf', '#e377c2', '#9467bd', '#ff7f0e', '#9edae5', '#FF0000', '#4B0082', '#d62728', '#0400ff', '#FFFF00']
        };
        document.getElementById("title1").innerText= dataObject["title"]
    document.getElementById("description").innerText= dataObject["description"]   
        let box = d3
          .select("body")
          .append("div");

        let tooltip = box
          .append("div")
          .attr('class', 'tooltip')
          .attr("id", "tooltip")
          .style('opacity', 0);


        const w = 800;
        const h = 800;
        const padding = 60;

        var datapoint = dataObject["jsonn"]
        var categories = dataObject["categories"]
        var colorss = dataObject["colorss"]



        // var got = console.log("printyyyy")
        // var colouring = d3.scaleBand().domain(categories).range(colorss);
        function colouring11(cat, colorStore, look) { return colorStore[cat.indexOf(look)] }

        //variable

          var root = d3.hierarchy(datapoint)
            .sum((d) => d.value)
            .sort((a, b) => d3.descending(a.value, b.value));

          var treemap = d3.treemap().size([w, h]).paddingInner(1);
          treemap(root);

          const treeLeaves = root.leaves()

          // console.log("treeLeaves:",treeLeaves);

          var svg1 = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .attr("id", "mainThing");



          okay = svg1.selectAll('g')
            .data(treeLeaves)
            .enter()
            .append('g')
            .attr('transform', (d) => 'translate(' + d.x0 + ',' + d.y0 + ')');

          // .attr('class', 'county')

          okay.append('rect')
            // .attr('id',(d) => console.log(d) )
            .attr('width', (d) => d.x1 - d.x0)
            .attr('height', (d) => d.y1 - d.y0)
            
          .attr('class','tile')
          .attr('data-name', (d) => d.data.name)
          .attr('data-category', (d) => d.data.category)
          .attr('data-value', (d) => d.data.value)

            .attr('fill', (d) => {
              // console.log(colouring11(categories, colorss, d.data.category));
              // console.log(d.data.category)
              return colouring11(categories, colorss, d.data.category)
            })
            .on("mousemove", (d, i) => {
              tooltip.style('opacity', 0.9);

              tooltip.html("Name : " + i.data.name + " || " + " Category: " + i.data.category + " || " + " Value: " + i.data.value)
            .attr('data-value', i.data.value)
                
              .style('left', d.pageX + 10 + 'px')
                .style('top', d.pageY - 28 + 'px');
            })
            .on("mouseout", () => tooltip.style('opacity', 0));



          okay.append('text')
            .selectAll('tspan')
            .data((d) => d.data.name.split(/(?=[A-Z][^A-Z])/))
            .enter()
            .append('tspan')
            .attr('x', 3)
            .attr('y', (d, i) => 15 + i * 10)
            .text((d) => d);



          const svg2 = d3.select("body")
            .append("svg")
            .attr('id', 'legend')
            .attr('width', 800)
            .attr('height', 300);

          var ycount = 0
          var xcount = 0

          svg2.selectAll("rect")
            .data(dataObject["categories"])
            .enter()
            .append('rect')
            .attr('width', 20)
            .attr('height', 20)

            .attr("class","legend-item")

            .attr('x', (d, i) => {
              if (i == 5) { xcount = 200 };
              if (i == 10) { xcount = 400 };
              if (i == 15) { xcount = 600 };
              return (xcount)
            })
            .attr('y', (d, i) => {
              ycount += 1;
              if (i == 5) { ycount = 1 };
              if (i == 10) { ycount = 1 };
              if (i == 15) { ycount = 1 };
              return (((30 * ycount) + 10) - 10)
            })
            .attr('fill', (d) => colouring11(categories, colorss, d));



            
          var ycount2 = 0
          var xcount2 = 0
          
         




            svg2.selectAll("text")
            .data(dataObject["categories"])
            .enter()
            .append('text')
            .attr('x', (d, i) => {
              if (i == 5) { xcount2 = 200 };
              if (i == 10) { xcount2 = 400 };
              if (i == 15) { xcount2 = 600 };
              return (xcount2 + 25)
            })
            .attr('y', (d, i) => {
              ycount2 += 1;
              if (i == 5) { ycount2 = 1 };
              if (i == 10) { ycount2 = 1 };
              if (i == 15) { ycount2 = 1 };
              return ((30 * ycount2) + 15)
            })
            .text((d) => d);
           
        

      
      });
}

function movies(){
  clear();
fetch(
              '/tree_movie-data.json'
            )
              .then((res) => res.json())
              .then((res) => {

                moviesrData = res;

        dataObject = {
      jsonn: moviesrData, title: 'Movie Sales', description: 'Top 100 Highest Grossing Movies Grouped By Genre'
      , categories: ["Action", "Adventure", "Comedy", "Drama", "Animation", "Family", "Biography"]
      , colorss: ['#d62728', '#ff9896', '#dbdb8d', '#9edae5', '#8c564b', '#4B0082', '#c49c94']
};
    document.getElementById("title1").innerText= dataObject["title"]
    document.getElementById("description").innerText= dataObject["description"]   
      let box = d3
          .select("body")
          .append("div");

        let tooltip = box
          .append("div")
          .attr('class', 'tooltip')
          .attr("id", "tooltip")
          .style('opacity', 0); 
          const w = 800;
        const h = 850;
        const padding = 60;

        var datapoint = dataObject["jsonn"]
        var categories = dataObject["categories"]
        var colorss = dataObject["colorss"]
        // var got = console.log("printyyyy")
        // var colouring = d3.scaleBand().domain(categories).range(colorss);
        function colouring11(cat, colorStore, look) { return colorStore[cat.indexOf(look)] }

        //variable


        var root = d3.hierarchy(datapoint)
          .sum((d) => d.value)
          .sort((a, b) => d3.descending(a.value, b.value));

        var treemap = d3.treemap().size([w, h]).paddingInner(1);
        treemap(root);

        const treeLeaves = root.leaves()

        // console.log("treeLeaves:",treeLeaves);

        var svg1 = d3.select("body")
          .append("svg")
          .attr("width", w)
          .attr("height", h)
          .attr("id", "mainThing");
        okay = svg1.selectAll('g')
          .data(treeLeaves)
          .enter()
          .append('g')
          .attr('transform', (d) => 'translate(' + d.x0 + ',' + d.y0 + ')');

        // .attr('class', 'county')

        okay.append('rect')
          // .attr('id',(d) => console.log(d) )
          .attr('width', (d) => d.x1 - d.x0)
          .attr('height', (d) => d.y1 - d.y0)

          .attr('class','tile')
          .attr('data-name', (d) => d.data.name)
          .attr('data-category', (d) => d.data.category)
          .attr('data-value', (d) => d.data.value)

          .attr('fill', (d) => {
            // console.log(colouring11(categories, colorss, d.data.category));
            // console.log(d.data.category)
            return colouring11(categories, colorss, d.data.category)
          })
          .on("mousemove", (d, i) => {
            tooltip.style('opacity', 0.9);

            tooltip.html("Name : " + i.data.name + " || " + " Category: " + i.data.category + " || " + " Value: " + i.data.value)


            .attr('data-value', i.data.value)

              .style('left', d.pageX + 10 + 'px')
              .style('top', d.pageY - 28 + 'px');
          })
          .on("mouseout", () => tooltip.style('opacity', 0));
        okay.append('text')
          .selectAll('tspan')
          .data((d) => d.data.name.split(/(?=[A-Z][^A-Z])/))
          .enter()
          .append('tspan')
          .attr('x', 3)
          .attr('y', (d, i) => 15 + i * 10)
          .text((d) => d);
        const svg2 = d3.select("body")
          .append("svg")
          .attr('id', 'legend')
          .attr('width', 800)
          .attr('height', 300);

        var ycount = 0
        var xcount = 0

        svg2.selectAll("rect")
          .data(dataObject["categories"])
          .enter()
          .append('rect')
          .attr('width', 20)
          .attr('height', 20)
          .attr("class","legend-item")

          .attr('x', (d, i) => {
            if (i == 5) { xcount = 200 };
            if (i == 10) { xcount = 400 };
            if (i == 15) { xcount = 600 };
            return (xcount)
          })
          .attr('y', (d, i) => {
            ycount += 1;
            if (i == 5) { ycount = 1 };
            if (i == 10) { ycount = 1 };
            if (i == 15) { ycount = 1 };
            return (((30 * ycount) + 10) - 10)
          })
          .attr('fill', (d) => colouring11(categories, colorss, d));

        var ycount2 = 0
        var xcount2 = 0



        svg2.selectAll("text")
          .data(dataObject["categories"])
          .enter()
          .append('text')
          .attr('x', (d, i) => {
            if (i == 5) { xcount2 = 200 };
            if (i == 10) { xcount2 = 400 };
            if (i == 15) { xcount2 = 600 };
            return (xcount2 + 25)
          })
          .attr('y', (d, i) => {
            ycount2 += 1;
            if (i == 5) { ycount2 = 1 };
            if (i == 10) { ycount2 = 1 };
            if (i == 15) { ycount2 = 1 };
            return ((30 * ycount2) + 15)
          })
          .text((d) => d);


      });
  
}
function games(){
  clear()
fetch(
      "/tree_video-game-sales-data.json"
    )
      .then((res) => res.json())
      .then((res) => {

        videoGameSalesData = res;

        dataObject = {
      jsonn: videoGameSalesData, title: 'Video Game Sales', description: 'Top 100 Most Sold Video Games Grouped by Platform',
      categories: ["Wii", "DS", "X360", "GB", "PS3", "NES", "PS2", "3DS", "PS4", "SNES", "PS", "N64", "GBA", "XB", "PC", "2600", "PSP", "XOne"],
      colorss: ['#c7c7c7', '#98df8a', '#bcbd22', '#dbdb8d', '#FF7F00', '#9467bd', '#ffbb78', '#4B0082', '#c49c94', '#8c564b', '#FF0000', '#9edae5', '#aec7e8', '#2ca02c', '#00FF00', '#f7b6d2', '#1f77b4', '#ff9896']
    };
    document.getElementById("title1").innerText= dataObject["title"]
    document.getElementById("description").innerText= dataObject["description"]   
    let box = d3
          .select("body")
          .append("div");

        let tooltip = box
          .append("div")
          .attr('class', 'tooltip')
          
          .attr("id", "tooltip")
          .style('opacity', 0); 
          const w = 800;
        const h = 650;
        const padding = 60;

        var datapoint = dataObject["jsonn"]
        var categories = dataObject["categories"]
        var colorss = dataObject["colorss"]
        // var got = console.log("printyyyy")
        // var colouring = d3.scaleBand().domain(categories).range(colorss);
        function colouring11(cat, colorStore, look) { return colorStore[cat.indexOf(look)] }

        //variable


        var root = d3.hierarchy(datapoint)
          .sum((d) => d.value)
          .sort((a, b) => d3.descending(a.value, b.value));

        var treemap = d3.treemap().size([w, h]).paddingInner(1);
        treemap(root);

        const treeLeaves = root.leaves()

        // console.log("treeLeaves:",treeLeaves);

        var svg1 = d3.select("body")
          .append("svg")
          .attr("width", w)
          .attr("height", h)
          .attr("id", "mainThing");
        okay = svg1.selectAll('g')
          .data(treeLeaves)
          .enter()
          .append('g')
          .attr('transform', (d) => 'translate(' + d.x0 + ',' + d.y0 + ')');

        // .attr('class', 'county')

        okay.append('rect')
          // .attr('id',(d) => console.log(d) )
          .attr('width', (d) => d.x1 - d.x0)
          .attr('height', (d) => d.y1 - d.y0)

          .attr('class','tile')
          .attr('data-name', (d) => d.data.name)
          .attr('data-category', (d) => d.data.category)
          .attr('data-value', (d) => d.data.value)

          .attr('fill', (d) => {
            // console.log(colouring11(categories, colorss, d.data.category));
            // console.log(d.data.category)
            return colouring11(categories, colorss, d.data.category)
          })
          .on("mousemove", (d, i) => {
            tooltip.style('opacity', 0.9);

            tooltip.html("Name : " + i.data.name + " || " + " Category: " + i.data.category + " || " + " Value: " + i.data.value)
            
            .attr('data-value', i.data.value)
            .style('left', d.pageX + 10 + 'px')
              .style('top', d.pageY - 28 + 'px');
          })
          .on("mouseout", () => tooltip.style('opacity', 0));
        okay.append('text')
          .selectAll('tspan')
          .data((d) => d.data.name.split(/(?=[A-Z][^A-Z])/))
          .enter()
          .append('tspan')
          .attr('x', 3)
          .attr('y', (d, i) => 15 + i * 10)
          .text((d) => d);

        const svg2 = d3.select("body")
          .append("svg")
          .attr('id', 'legend')
          .attr('width', 800)
          .attr('height', 300);

        var ycount = 0
        var xcount = 0

        svg2.selectAll("rect")
          .data(dataObject["categories"])
          .enter()
          .append('rect')
          .attr('width', 20)
          .attr('height', 20)

          .attr("class","legend-item")
          
          .attr('x', (d, i) => {
            if (i == 5) { xcount = 200 };
            if (i == 10) { xcount = 400 };
            if (i == 15) { xcount = 600 };
            return (xcount)
          })
          .attr('y', (d, i) => {
            ycount += 1;
            if (i == 5) { ycount = 1 };
            if (i == 10) { ycount = 1 };
            if (i == 15) { ycount = 1 };
            return (((30 * ycount) + 10) - 10)
          })
          .attr('fill', (d) => colouring11(categories, colorss, d));

        var ycount2 = 0
        var xcount2 = 0



        svg2.selectAll("text")
          .data(dataObject["categories"])
          .enter()
          .append('text')
          .attr('x', (d, i) => {
            if (i == 5) { xcount2 = 200 };
            if (i == 10) { xcount2 = 400 };
            if (i == 15) { xcount2 = 600 };
            return (xcount2 + 25)
          })
          .attr('y', (d, i) => {
            ycount2 += 1;
            if (i == 5) { ycount2 = 1 };
            if (i == 10) { ycount2 = 1 };
            if (i == 15) { ycount2 = 1 };
            return ((30 * ycount2) + 15)
          })
          .text((d) => d);


      });
 
}
function clear(){
//   document.getElementById("mainThing").innerHTML = ""
// document.getElementById("mainThing").getAttribute("height") = ""
// document.getElementById("legend").innerHTML = ""
// document.getElementById("legend").id = ""
duse=document.getElementById("bodyDiv")
console.log(duse.childNodes.length,"lengthoutside")

if(duse.childNodes.length>22){
  console.log(duse.childNodes.length,"length")
// duse.removeChild(duse.childNodes[24]);
// duse.removeChild(duse.childNodes[24]);
for(var i=duse.childNodes.length-1;i>21;i--){duse.removeChild(duse.childNodes[i]);}
}
// console.log(duse.childNodes)


}
  </script>
  <button onclick="print()" style="display:none;">click Me</button>
</body>