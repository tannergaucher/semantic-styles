const exampleDialogBtn = document.querySelector('#show-dialog-example-btn')
const exampleDialog = document.querySelector('#dialog-example')
const typeScaleSelect = document.querySelector('#type-scale-select')
const textBaseSelect = document.querySelector('#text-base-select')
const spaceBaseSelect = document.querySelector('#space-base-select')
const responsiveUnitSelect = document.querySelector('#responsive-unit-select')

const accent1LightInput = document.querySelector('#accent-1-light-input')
const accent1DarkInput = document.querySelector('#accent-1-dark-input')
const accent2LightInput = document.querySelector('#accent-2-light-input')
const accent2DarkInput = document.querySelector('#accent-2-dark-input')
const toggleModeBtn = document.querySelector('.toggle-mode-btn')

window.addEventListener('load', setInitAccent1Light)
window.addEventListener('load', setInitAccent1Dark)
window.addEventListener('load', setInitAccent2Light)
window.addEventListener('load', setInitAccent2Dark)

exampleDialogBtn.addEventListener('click', handleDialogBtnClick)
typeScaleSelect.addEventListener('change', handleTypeScaleChange)
textBaseSelect.addEventListener('change', handleTextBaseSelect)
spaceBaseSelect.addEventListener('change', handleSpaceBaseSelect)
responsiveUnitSelect.addEventListener('change', handleResponsiveUnitSelect)
accent1LightInput.addEventListener('change', handleAccent1LightChange)
accent1DarkInput.addEventListener('change', handleAccent1DarkChange)
accent2LightInput.addEventListener('change', handleAccent2LightChange)
accent2DarkInput.addEventListener('change', handleAccent2DarkChange)

if (typeof exampleDialog.showModal !== 'function') {
  exampleDialog.style.display = 'none'
}

function handleDialogBtnClick() {
  if (typeof exampleDialog.showModal === 'function') {
    exampleDialog.showModal()
  } else {
    alert('The <dialog> API is not supported by this browser')
  }
}

function handleTypeScaleChange(e) {
  document.documentElement.style.setProperty(
    '--text-scale-ratio',
    e.target.value
  )
}

function handleTextBaseSelect(e) {
  const responsiveUnit = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--responsive-unit')

  document.documentElement.style.setProperty(
    '--text-baseline',
    `calc(${responsiveUnit} + ${e.target.value}rem)`
  )
}

function handleSpaceBaseSelect(e) {
  const responsiveUnit = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--responsive-unit')

  document.documentElement.style.setProperty(
    '--space-baseline',
    `calc(${e.target.value}rem + ${responsiveUnit})`
  )
}

function handleResponsiveUnitSelect(e) {
  document.documentElement.style.setProperty(
    '--responsive-unit',
    `${e.target.value}vw`
  )
}

function setInitAccent1Light() {
  const val = getComputedStyle(document.documentElement).getPropertyValue(
    '--accent-1-light'
  )

  accent1LightInput.value = handleBrowserFunk(val)
}

function setInitAccent1Dark() {
  const val = getComputedStyle(document.documentElement).getPropertyValue(
    '--accent-1-dark'
  )

  accent1DarkInput.value = handleBrowserFunk(val)
}

function setInitAccent2Light() {
  const val = getComputedStyle(document.documentElement).getPropertyValue(
    '--accent-2-light'
  )

  accent2LightInput.value = handleBrowserFunk(val)
}

function setInitAccent2Dark() {
  const val = getComputedStyle(document.documentElement).getPropertyValue(
    '--accent-2-dark'
  )

  accent2DarkInput.value = handleBrowserFunk(val)
}

function handleAccent1LightChange(e) {
  document.documentElement.style.setProperty('--accent-1-light', e.target.value)

  if (toggleModeBtn.innerHTML === 'DARK') {
    document.documentElement.style.setProperty('--accent-1', e.target.value)
  }
}

function handleAccent1DarkChange(e) {
  document.documentElement.style.setProperty('--accent-1-dark', e.target.value)

  if (toggleModeBtn.innerHTML === 'LIGHT') {
    document.documentElement.style.setProperty('--accent-1', e.target.value)
  }
}

function handleAccent2LightChange(e) {
  document.documentElement.style.setProperty('--accent-2-light', e.target.value)

  if (toggleModeBtn.innerHTML === 'DARK') {
    document.documentElement.style.setProperty('--accent-2', e.target.value)
  }
}

function handleAccent2DarkChange(e) {
  document.documentElement.style.setProperty('--accent-2-dark', e.target.value)

  if (toggleModeBtn.innerHTML === 'LIGHT') {
    document.documentElement.style.setProperty('--accent-2', e.target.value)
  }
}

// Because browser returns #000 for #000000, #fff for #ffffff (only in build env)
function handleBrowserFunk(str) {
  // Because browser returns 'tomato' for hex of that color
  if (str[0] !== '#') {
    return colorNameToHex(str)
  }
  // Full hex
  if (str.split('').length !== 4) {
    return str
  }

  // Will be shortened, so return same val, length 6
  if (str[0] === '#' && str[1] === str[2] && str[2] === str[3]) {
    return `#${str[1]}${str[1]}${str[1]}${str[1]}${str[1]}${str[1]}`
  }
}

function colorNameToHex(str) {
  // Map of css color names
  const map = {
    AliceBlue: '#F0F8FF',
    AntiqueWhite: '#FAEBD7',
    Aqua: '#00FFFF',
    Aquamarine: '#7FFFD4',
    Azure: '#F0FFFF',
    Beige: '#F5F5DC',
    Bisque: '#FFE4C4',
    Black: '#000000',
    BlanchedAlmond: '#FFEBCD',
    Blue: '#0000FF',
    BlueViolet: '#8A2BE2',
    Brown: '#A52A2A',
    BurlyWood: '#DEB887',
    CadetBlue: '#5F9EA0',
    Chartreuse: '#7FFF00',
    Chocolate: '#D2691E',
    Coral: '#FF7F50',
    CornflowerBlue: '#6495ED',
    Cornsilk: '#FFF8DC',
    Crimson: '#DC143C',
    Cyan: '#00FFFF',
    DarkBlue: '#00008B',
    DarkCyan: '#008B8B',
    DarkGoldenRod: '#B8860B',
    DarkGray: '#A9A9A9',
    DarkGrey: '#A9A9A9',
    DarkGreen: '#006400',
    DarkKhaki: '#BDB76B',
    DarkMagenta: '#8B008B',
    DarkOliveGreen: '#556B2F',
    Darkorange: '#FF8C00',
    DarkOrchid: '#9932CC',
    DarkRed: '#8B0000',
    DarkSalmon: '#E9967A',
    DarkSeaGreen: '#8FBC8F',
    DarkSlateBlue: '#483D8B',
    DarkSlateGray: '#2F4F4F',
    DarkSlateGrey: '#2F4F4F',
    DarkTurquoise: '#00CED1',
    DarkViolet: '#9400D3',
    DeepPink: '#FF1493',
    DeepSkyBlue: '#00BFFF',
    DimGray: '#696969',
    DimGrey: '#696969',
    DodgerBlue: '#1E90FF',
    FireBrick: '#B22222',
    FloralWhite: '#FFFAF0',
    ForestGreen: '#228B22',
    Fuchsia: '#FF00FF',
    Gainsboro: '#DCDCDC',
    GhostWhite: '#F8F8FF',
    Gold: '#FFD700',
    GoldenRod: '#DAA520',
    Gray: '#808080',
    Grey: '#808080',
    Green: '#008000',
    GreenYellow: '#ADFF2F',
    HoneyDew: '#F0FFF0',
    HotPink: '#FF69B4',
    IndianRed: '#CD5C5C',
    Indigo: '#4B0082',
    Ivory: '#FFFFF0',
    Khaki: '#F0E68C',
    Lavender: '#E6E6FA',
    LavenderBlush: '#FFF0F5',
    LawnGreen: '#7CFC00',
    LemonChiffon: '#FFFACD',
    LightBlue: '#ADD8E6',
    LightCoral: '#F08080',
    LightCyan: '#E0FFFF',
    LightGoldenRodYellow: '#FAFAD2',
    LightGray: '#D3D3D3',
    LightGrey: '#D3D3D3',
    LightGreen: '#90EE90',
    LightPink: '#FFB6C1',
    LightSalmon: '#FFA07A',
    LightSeaGreen: '#20B2AA',
    LightSkyBlue: '#87CEFA',
    LightSlateGray: '#778899',
    LightSlateGrey: '#778899',
    LightSteelBlue: '#B0C4DE',
    LightYellow: '#FFFFE0',
    Lime: '#00FF00',
    LimeGreen: '#32CD32',
    Linen: '#FAF0E6',
    Magenta: '#FF00FF',
    Maroon: '#800000',
    MediumAquaMarine: '#66CDAA',
    MediumBlue: '#0000CD',
    MediumOrchid: '#BA55D3',
    MediumPurple: '#9370D8',
    MediumSeaGreen: '#3CB371',
    MediumSlateBlue: '#7B68EE',
    MediumSpringGreen: '#00FA9A',
    MediumTurquoise: '#48D1CC',
    MediumVioletRed: '#C71585',
    MidnightBlue: '#191970',
    MintCream: '#F5FFFA',
    MistyRose: '#FFE4E1',
    Moccasin: '#FFE4B5',
    NavajoWhite: '#FFDEAD',
    Navy: '#000080',
    OldLace: '#FDF5E6',
    Olive: '#808000',
    OliveDrab: '#6B8E23',
    Orange: '#FFA500',
    OrangeRed: '#FF4500',
    Orchid: '#DA70D6',
    PaleGoldenRod: '#EEE8AA',
    PaleGreen: '#98FB98',
    PaleTurquoise: '#AFEEEE',
    PaleVioletRed: '#D87093',
    PapayaWhip: '#FFEFD5',
    PeachPuff: '#FFDAB9',
    Peru: '#CD853F',
    Pink: '#FFC0CB',
    Plum: '#DDA0DD',
    PowderBlue: '#B0E0E6',
    Purple: '#800080',
    Red: '#FF0000',
    RosyBrown: '#BC8F8F',
    RoyalBlue: '#4169E1',
    SaddleBrown: '#8B4513',
    Salmon: '#FA8072',
    SandyBrown: '#F4A460',
    SeaGreen: '#2E8B57',
    SeaShell: '#FFF5EE',
    Sienna: '#A0522D',
    Silver: '#C0C0C0',
    SkyBlue: '#87CEEB',
    SlateBlue: '#6A5ACD',
    SlateGray: '#708090',
    SlateGrey: '#708090',
    Snow: '#FFFAFA',
    SpringGreen: '#00FF7F',
    SteelBlue: '#4682B4',
    Tan: '#D2B48C',
    Teal: '#008080',
    Thistle: '#D8BFD8',
    Tomato: '#FF6347',
    Turquoise: '#40E0D0',
    Violet: '#EE82EE',
    Wheat: '#F5DEB3',
    White: '#FFFFFF',
    WhiteSmoke: '#F5F5F5',
    Yellow: '#FFFF00',
  }

  // Uppercase str[0] to match map format
  const formattedStr = str[0].toUpperCase() + str.slice(1)

  if (map[formattedStr]) {
    return map[formattedStr]
  } else {
    return str
  }
}
