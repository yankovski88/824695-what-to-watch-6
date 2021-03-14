// Определяем действия
export const ActionType = {
  ALL : `all`,
  COMEDIES : `comedies`,
  CRIME : `crime`,
  DOCUMENTARY : `documentary`,
  DRAMAS : `dramas`,
  HORROR : `horror`,
  KIDS : `kids`,
  ROMANCE : `romance`,
  SCI : `sci`,
  THRILLERS : `thrillers`,
}

// создаем объект функций которые возвращают тип экшина
export const ActionCreator = {
  all: ()=>({
    type: ActionType.ALL
  }),
  comedies: ()=>({
    type: ActionType.COMEDIES
  }),
  documentary: ()=>({
    type: ActionType.DOCUMENTARY
  }),
  dramas: ()=>({
    type: ActionType.DRAMAS
  }),
  horror: ()=>({
    type: ActionType.HORROR
  }),
  kids: ()=>({
    type: ActionType.KIDS
  }),
  romance: ()=>({
    type: ActionType.ROMANCE
  }),
  sci: ()=>({
    type: ActionType.SCI
  }),
  thrillers: ()=>({
    type: ActionType.THRILLERS
  }),
}


