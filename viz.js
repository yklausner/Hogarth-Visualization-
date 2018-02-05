/* has manually inputted graph as oppposed to viz2.js which has a function to read the graph */

var cy = cytoscape({
        container: document.getElementById('cy'),
        elements: 
        [
          { data: { id: '0' } },
          { data: { id: '1' } },
          { data: { id: '2' } },
          { data: { id: '3' } },
          { data: { id: '4' } },
          { data: { id: '5' } },
          { data: { id: '6' } },
          { data: { id: '7' } },
          {
            data: {
              id: '01',
              source: '0',
              target: '1'
            },
            data: {
              id: '12',
              source: '1',
              target: '2'
            }
          }] 

      });

