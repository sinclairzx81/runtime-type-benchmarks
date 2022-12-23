export namespace Formats {
  export function Millisecond(value: number | undefined) {
    if (value === undefined) {
      return ''
    }
    return `${value} ms`
  }
  export function Rank(value: number) {
    switch (value) {
      case 0:
        return '1st'
      case 1:
        return '2nd'
      case 2:
        return '3rd'
      case 3:
        return '4th'
      case 4:
        return '5th'
      case 5:
        return '6th'
      case 6:
        return '7th'
      case 7:
        return '8th'
      case 8:
        return '9th'
    }
  }
  export function LargeNumber(value: number) {
    if (value > 1000000000) {
      return Math.floor(value / 1000000000).toString() + 'B'
    } else if (value > 1000000) {
      return Math.floor(value / 1000000).toString() + 'M'
    } else if (value > 1000) {
      return Math.floor(value / 1000).toString() + 'K'
    } else {
      return Math.floor(value).toString()
    }
  }
}
