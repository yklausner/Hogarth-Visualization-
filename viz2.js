var cy = cytoscape({
        container: document.getElementById('cy'),
        elements: graph_to_elements(graph),
        //style: 'node { background-color: blue; }',
        style: [ // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            'background-color': 'grey',
            'label': 'data(id)'
          }
        },

        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': 'blue',
            'mid-target-arrow-color': 'black',
            'mid-target-arrow-shape': 'triangle',
            'arrow-scale': 2,
            'curve-style' : 'bezier'
          }
        }],
        
        layout: {
          name: 'grid',
          rows: 3
        }

      });




function graph_to_elements(gr) {
    // turn given graph (gr) into something suitable as an elements array (viz.js)
    var elem = [];

    // iterates through the keys in the given graph 
    for (var key in gr) {
      if (key == "vertices") {
        for (i = 0; i < gr[key].length; i++) {
          // adds vertices to the graph 
          elem.push({ data : { id : gr[key][i]}});
        }
      } else if (key == "edges") {
        for (i = 0; i < gr[key].length; i++) {
          // adds edges to the graph 
          elem.push({ data : { id : "" + gr[key][i][0] + gr[key][i][1] + "", 
            source: gr[key][i][0], target: gr[key][i][1]}});
        }        
      }     
    } 
    return elem;      
  }



    

