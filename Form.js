   class Form{
       constructor(){}

        display(){
            var title = createElement('h2');
            title.html('Car Racing Game');
            title.position(200,10);

            var input = createInput('Name');
            input.position(200,100);

            var button = createButton('Play');
            button.position(250,200);

            var greeting = createElement('h3');
        }
            
   }
  