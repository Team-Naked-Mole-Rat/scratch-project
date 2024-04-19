const parsePlantRawdata = (data) =>{
    plantName = data.type;
    let plant={name: plantName, attentionNeeded: '', condition: {
      leaves : {condition: 'None', improvement:'None'},
      roots : {condition: 'None', improvement:'None'},
      flowers : {condition: 'None', improvement:'None'},
      stems : {condition: 'None', improvement:'None'},
      soil : {condition: 'None', improvement:'None'},
      pot : {condition: 'None', improvement:'None'},
      fruits : {condition: 'None', improvement:'None'},
    }}
    if(data.attention_needed)
      {plant.attentionNeeded=data.attention_needed}
    else if (data['attention needed']){
      plant.attentionNeeded=data['attention needed'];
    }
    else{
      plant.attentionNeeded=data.attention;
    }
    if(data.leaves){
      plant.condition.leaves.condition=data.leaves.condition;
      plant.condition.leaves.improvement=data.leaves.improvement;
    }
    if(data.roots){
      plant.condition.roots.condition=data.roots.condition;
      plant.condition.roots.improvement=data.roots.improvement;
    }
    if(data.flowers){
      plant.condition.flowers.condition=data.flowers.condition;
      plant.condition.flowers.improvement=data.flowers.improvement;
    }
    if(data.stems){
      plant.condition.stems.condition=data.stems.condition;
      plant.condition.stems.improvement=data.stems.improvement;
    }
    if(data.soil){
      plant.condition.soil.condition=data.soil.condition;
      plant.condition.soil.improvement=data.soil.improvement;
    }
    if(data.pot){
      plant.condition.pot.condition=data.pot.condition;
      plant.condition.pot.improvement=data.pot.improvement;
    }
    if(data.fruits){
      plant.condition.fruits.condition=data.fruits.condition;
      plant.condition.fruits.improvement=data.fruits.improvement;
    }
    if(data.condition){
      if(data.condition.leaves){
        if(data.condition.leaves.condition) {
            plant.condition.leaves.condition=data.condition.leaves.condition;
        }
        else{
            plant.condition.leaves.condition = data.condition.leaves;
        }
        if(data.condition.leaves.improvement) plant.condition.leaves.improvement=data.condition.leaves.improvement;
      }   

      if(data.condition.flowers){
        if(data.condition.flowers.condition) {
            plant.condition.flowers.condition=data.condition.flowers.condition;
        }
        else{
            plant.condition.flowers.condition = data.condition.flowers;
        }
        if(data.condition.flowers.improvement) plant.condition.flowers.improvement=data.condition.flowers.improvement;
      }   

      if(data.condition.stems){
        if(data.condition.stems.condition) {
            plant.condition.stems.condition=data.condition.stems.condition;
        }
        else{
            plant.condition.stems.condition = data.condition.stems;
        }
        if(data.condition.stems.improvement) plant.condition.stems.improvement=data.condition.stems.improvement;
      }   
      
      if(data.condition.roots){
        if(data.condition.roots.condition) {
            plant.condition.roots.condition=data.condition.roots.condition;
        }
        else{
            plant.condition.roots.condition = data.condition.roots;
        }
        if(data.condition.roots.improvement) plant.condition.roots.improvement=data.condition.roots.improvement;
      } 

      if(data.condition.pot){
        if(data.condition.pot.condition) {
            plant.condition.pot.condition=data.condition.pot.condition;
        }
        else{
            plant.condition.pot.condition = data.condition.pot;
        }
        if(data.condition.pot.improvement) plant.condition.pot.improvement=data.condition.pot.improvement;
      }       

      if(data.condition.fruits){
        if(data.condition.fruits.condition) {
            plant.condition.fruits.condition=data.condition.fruits.condition;
        }
        else{
            plant.condition.fruits.condition = data.condition.fruits;
        }
        if(data.condition.fruits.improvement) plant.condition.fruits.improvement=data.condition.fruits.improvement;
      }       

      if(data.condition.soil){
        if(data.condition.soil.condition) {
            plant.condition.soil.condition=data.condition.soil.condition;
        }
        else{
            plant.condition.soil.condition = data.condition.soil;
        }
        if(data.condition.soil.improvement) plant.condition.soil.improvement=data.condition.soil.improvement;
      }         
    }
    return plant;
  }



module.exports = parsePlantRawdata;