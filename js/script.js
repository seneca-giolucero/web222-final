/* Add any JavaScript you need to this file. */
var data = [
    {
      name: 'Elvish Mystic',
      id: 1,
      description: '(T): Add [G] to your mana pool.',
      type: 'Green',
      cost: 0.50
    },
    {
      name: 'Krenko, Mob Boss',
      id: 2,
      description: '(T): Put X 1/1 red Goblin creatures onto the battlefield, where X is the number of Goblins you control.',
      type: 'Red',
      cost: 5.99
    },
    {
      name: 'Stoneforge Mystic',
      id: 3,
      description: 'When Stoneforge Mystic enters the battlefield, you may search your library for an Equipment card, reveal it, put it into your hand, then shuffle your library. [1][W](T): You may put an Equipment card from your hand onto the battlefield.',
      type: 'White',
      cost: 42.30
    },
    {
      name: 'Heliod, Sun-Crowned',
      id: 4,
      description: 'Whenever you gain life, put a +1/+1 counter on target creature or enchantment you control. [1][W]: Another target creature gains lifelink until end of turn.',
      type: 'White',
      cost: 18.00
    },
    {
      name: 'Thassa, God of the Sea',
      id: 5,
      description: 'Indestructible. At the beginning of your upkeep, scry 1. [1][B]: Target creature you control cant be blocked this turn.',
      type: 'Blue',
      cost: 20.00
    },
    {
      name: 'Nylea, Keen-Eyed',
      id: 6,
      description: 'Indestructible. Creature spell you cast cost 1 less to cast. [2][G]: Reveal the top card of your library. If its a creature card, put it into your hand. Otherwise, you may put it into your graveyard.',
      type: 'Green',
      cost: 5.00
    },
    {
      name: 'Erebos, God of the Dead',
      id: 7,
      description: 'Indestructible. Your opponents cant gain life. Pay 2 life: Draw a card',
      type: 'Black',
      cost: 12.50
    },
    {
      name: 'Thoughtseize',
      id: 8,
      description: 'Target player reveals their hand. You choose a nonland card from it. That player discards that card. You lose 2 life.',
      type: 'Black',
      cost: 30.00
    },
    {
      name: 'Purphoros, God of the Forge',
      id: 9,
      description: ' Indestructible. Whenever another creature enters the battlefield under your control, Purphoros deals 2 damage to each opponent. [2][R]: Creatures you control get +1/+0 until end of turn.',
      type: 'Red',
      cost: 20.00
    },
    {
      name: 'Snapcaster Mage',
      id: 10,
      description: 'Flash. When Snapcaster Mage enters the battlefield, target instant or sorcery card in your graveyard gains flashback until end of turn. The flashback cost is equal to its mana cost.',
      type: 'Blue',
      cost: 57.00
    },
  ];
  
  window.onload = function() {
    // Create variables for buttons on homepage
    var allcards = document.getElementById('all');
    var blue = document.getElementById('blue');
    var green = document.getElementById('green');
    var black = document.getElementById('black');
    var white = document.getElementById('white');
    var red = document.getElementById('red');
  
    // loads all cards into main wrapper
    function loadAllCards(card = data) {
      for (let i = 0; i < data.length; i++) {
        var wrapper = document.querySelector('#wrapper');
        let createDiv = document.createElement('div');
        let imageNode = document.createElement('img');
        let createTitle = document.createElement('h2');
        let createColor = document.createElement('p');
        let createCost = document.createElement('p');
        let createDesc = document.createElement('p');
        let cardColor = document.createTextNode('Type: ' + card[i].type);
        let cardTitle = document.createTextNode(card[i].name);
        let cardDesc = document.createTextNode(card[i].description);
        let cardCost = document.createTextNode('$' + card[i].cost);
        createDiv.classList.add('product');
        createDiv.id = card[i].id.toString();
        imageNode.src = 'images/cards/' + card[i].id.toString() + '.png';
        imageNode.alt = card[i].name + ' box art';
        // Add Card data
        createTitle.appendChild(cardTitle);
        createColor.appendChild(cardColor);
        createCost.appendChild(cardCost);
        createDesc.appendChild(cardDesc);
        // Creates divs in main 
        createDiv.appendChild(imageNode);
        createDiv.appendChild(createTitle);
        createDiv.appendChild(createColor);
        createDiv.appendChild(createDesc);
        createDiv.appendChild(createCost);
        wrapper.insertBefore(createDiv, wrapper.childNodes[0]);
      }
    }
    // All cards display
    allcards.onclick = function() {
      for (let i = 0; i < data.length; i++) {
        document.getElementById(data[i].id).classList.remove('hidden');
      }
      // Filtering sections to appear upon click (i.e adding all games when 'All Games' is clicked)
      allcards.classList.add('currentselection');
      blue.classList.remove('currentselection');
      green.classList.remove('currentselection');
      black.classList.remove('currentselection');
      white.classList.remove('currentselection');
      red.classList.remove('currentselection');
    };
    // All blue cards display
    blue.onclick = function() {
      for (let i = 0; i < data.length; i++) {
        document.getElementById(data[i].id).classList.remove('hidden');
        if (!data[i].type.includes('Blue')) {
          document.getElementById(data[i].id).classList.add('hidden');
        }
      }
      allcards.classList.remove('currentselection');
      blue.classList.add('currentselection');
      green.classList.remove('currentselection');
      black.classList.remove('currentselection');
      white.classList.remove('currentselection');
      red.classList.remove('currentselection');
    };
    // All green cards display
    green.onclick = function() {
      for (let i = 0; i < data.length; i++) {
        document.getElementById(data[i].id).classList.remove('hidden');
        if (!data[i].type.includes('Green')) {
          document.getElementById(data[i].id).classList.add('hidden');
        }
      }
      allcards.classList.remove('currentselection');
      blue.classList.remove('currentselection');
      green.classList.add('currentselection');
      black.classList.remove('currentselection');
      white.classList.remove('currentselection');
      red.classList.remove('currentselection');
    };
    // All black cards display
    black.onclick = function() {
      for (let i = 0; i < data.length; i++) {
        document.getElementById(data[i].id).classList.remove('hidden');
        if (!data[i].type.includes('Black')) {
          document.getElementById(data[i].id).classList.add('hidden');
        }
      }
      allcards.classList.remove('currentselection');
      blue.classList.remove('currentselection');
      green.classList.remove('currentselection');
      black.classList.add('currentselection');
      white.classList.remove('currentselection');
      red.classList.remove('currentselection');
    };
    // All white cards display
    white.onclick = function() {
      for (let i = 0; i < data.length; i++) {
        document.getElementById(data[i].id).classList.remove('hidden');
        if (!data[i].type.includes('White')) {
          document.getElementById(data[i].id).classList.add('hidden');
        }
      }
      allcards.classList.remove('currentselection');
      blue.classList.remove('currentselection');
      green.classList.remove('currentselection');
      black.classList.remove('currentselection');
      white.classList.add('currentselection');
      red.classList.remove('currentselection');
    };
    // All red cards display
    red.onclick = function() {
        for (let i = 0; i < data.length; i++) {
          document.getElementById(data[i].id).classList.remove('hidden');
          if (!data[i].type.includes('Red')) {
            document.getElementById(data[i].id).classList.add('hidden');
          }
        }
        allcards.classList.remove('currentselection');
        blue.classList.remove('currentselection');
        green.classList.remove('currentselection');
        black.classList.remove('currentselection');
        white.classList.remove('currentselection');
        red.classList.add('currentselection');
      };
    // Call function to load cards
    loadAllCards();
  };
  