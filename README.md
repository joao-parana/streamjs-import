# streamjs-import

Este WebComponent integra https://github.com/winterbe/streamjs como
elemento ao Polymer. 

__Instalando:__

    bower install --save joao-parana/streamjs-import


__Exemplo de uso:__ 

    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        ...
        <script src="../streamjs-import/streamjs-util.js"></script>
        <script src="../webcomponentsjs/webcomponents-lite.js"></script>
        <link rel="import" href="../streamjs-import/streamjs-import.html">
        ...
      </head>
      <body>
        <!-- Algum código útil -->
        <script>
          var myArray = Stream
            .range(0, 100)
            .map(function (num) {
              return {
                  parentId: num,
                  type: 'parent',
                  children: []
              };
            })
            .peek(function (parent) {
              parent.children = Stream
                .range(0, 10)
                .map(function (num) {
                  return {
                    childId: num,
                    type: 'child',
                    parent: parent
                  };
                })
                .toArray();
            })
            .toArray();
          console.log(myArray);
        </script>
      </body>
    </html>
    
