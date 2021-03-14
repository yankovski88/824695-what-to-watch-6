import mainFilms from "../index.js"


// export const  filmComedys = [];
// for (const item of mainFilms){
//   if(item.genre === `Comedy`){
//     filmComedys.push(item)
//   }
// }
//
// export const  filmBoevics = [];
// for (const item of mainFilms){
//   if(item.genre === `Boevic`){
//     filmBoevics.push(item)
//   }
// }


export const ActionType = {
// Определяем действия
  COMEDY : `main/comedy`,
  BOEVIC : `main/boevic`,
  ALL : `main/all`,
}

export const ActionCreator = {
  Comedy: ()=>({
    type: ActionType.COMEDY
  }),
  Boevic: ()=>({
    type: ActionType.BOEVIC
  }),
  All: ()=>({
    type: ActionType.ALL
  })
}


