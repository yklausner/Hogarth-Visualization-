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
            }/*,
            data: {
              id: '23',
              source: '2',
              target: '3'
            },
            data: {
              id: '24',
              source: '2',
              target: '4'
            },
            data: {
              id: '25',
              source: '2',
              target: '5'
            }*/
          }] 
         /* [
          { data: { id: 'a' } },
          { data: { id: 'b' } },
          {
            data: {
              id: 'ab',
              source: 'a',
              target: 'b'
            }
          }] */ 
      });

/* 
var graph = { "vertices" : [0,1,2,3,4,5,6,7],
              "edges" : [[0,1], [1,2], [2,3], [2,4], [2,5], [4,7], [6,7], [7,6]]}; */ 
              

        