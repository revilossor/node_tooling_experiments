const E_BUTTON_TYPES = {
  zero:'0',
  one:'1',
  two:'2',
  three:'3',
  four:'4',
  five:'5',
  six:'6',
  seven:'7',
  eight:'8',
  nine:'9',
  space:' ',
  add:'+',
  subtract:'-',
  multiply:'*',
  divide:'/',
  equals:'=',
  point:'.'
};
module.exports = {
  all:[
    [E_BUTTON_TYPES.seven,   E_BUTTON_TYPES.eight,   E_BUTTON_TYPES.nine,    E_BUTTON_TYPES.divide],
    [E_BUTTON_TYPES.four,    E_BUTTON_TYPES.five,    E_BUTTON_TYPES.six,     E_BUTTON_TYPES.multiply],
    [E_BUTTON_TYPES.one,     E_BUTTON_TYPES.two,     E_BUTTON_TYPES.three,   E_BUTTON_TYPES.subtract],
    [E_BUTTON_TYPES.zero,    E_BUTTON_TYPES.point,   E_BUTTON_TYPES.space,   E_BUTTON_TYPES.add],
    [E_BUTTON_TYPES.equals]
  ],
  operands:[
    E_BUTTON_TYPES.seven,   E_BUTTON_TYPES.eight,   E_BUTTON_TYPES.nine,
    E_BUTTON_TYPES.four,    E_BUTTON_TYPES.five,    E_BUTTON_TYPES.six,
    E_BUTTON_TYPES.one,     E_BUTTON_TYPES.two,     E_BUTTON_TYPES.three,
    E_BUTTON_TYPES.zero,    E_BUTTON_TYPES.point,   E_BUTTON_TYPES.space
  ],
  operators:[
    E_BUTTON_TYPES.divide,  E_BUTTON_TYPES.multiply,E_BUTTON_TYPES.subtract,E_BUTTON_TYPES.add
  ],
  equality:[
    E_BUTTON_TYPES.equals
  ],
  delimeters:[
    E_BUTTON_TYPES.space
  ]
}
