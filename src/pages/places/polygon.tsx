import { Option } from 'ts-results'
import { useMemo, useState, useEffect } from 'react'
import { Hex, HexKey } from './map.model'
import { getTerrainForHex } from './terrain-data'

// --- 1. DICCIONARIO DE IMÁGENES ESPECIALES ---
const specialIcons: Partial<Record<string, string>> = {
  'Ah21': 'Pico de Ámbar.png',
  'O28': 'Las Minas de Tejepiedra.png',
  'Al11': 'Pelagia.png',
  'Ab27': 'Pueblo Hueco.png',
  'Y8': 'El Torreón Argénteo de Las Maravillas.png',
  'E38': 'Vond.png',
  'G32': 'El Valle de los Muertos.png',
  'Aa36': 'El Bosque de las Brujas.png',
  'G20': 'El Ojo de la Rosa.png',
  'S48': 'El Pico del Hambriento.png',
  'E8': 'Jardín de Piedra.png',
  'I32': 'La Casa del Sajador.png',
  'N11': 'Muelehueso.png',
  'Ae44': 'Paso de la Arboleda.png',
  'F15': 'Pozo del Cuervo.png',
  'P47': 'Roca de los Vientos.png'
}

type PolygonProps = {
  hex: Hex
  selectedHex: Option<HexKey>
  onMouseOver: (e: React.MouseEvent<SVGPolygonElement | SVGGElement, MouseEvent>) => void
  onClick: (e: React.MouseEvent<SVGPolygonElement | SVGGElement, MouseEvent>) => void
}

const getHexCenter = (points: string) => {
  const coords = points.replace(/,/g, ' ').trim().split(/\s+/).map(Number)
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity
  
  for (let i = 0; i < coords.length; i += 2) {
    const x = coords[i]
    const y = coords[i + 1]
    if (!isNaN(x) && !isNaN(y)) {
      if (x < minX) minX = x
      if (x > maxX) maxX = x
      if (y < minY) minY = y
      if (y > maxY) maxY = y
    }
  }
  
  if (minX === Infinity) return { x: 50, y: 50 } 
  
  return { 
    x: minX + (maxX - minX) / 2, 
    y: minY + (maxY - minY) / 2 
  }
}

// Función para obtener imagen aleatoria según el tipo (Arreglado a 4 imágenes)
const getRandomGenericIcon = (terrain: string) => {
  if (terrain === 'castle') {
    const num = Math.floor(Math.random() * 4) + 1; // Genera 1, 2, 3 o 4
    return `Castillo ${num}.png`;
  }
  if (terrain === 'dungeon') {
    const num = Math.floor(Math.random() * 4) + 1; // Genera 1, 2, 3 o 4
    return `Mazmorra ${num}.png`;
  }
  if (terrain === 'village') {
    const num = Math.floor(Math.random() * 4) + 1; // Genera 1, 2, 3 o 4
    return `Pueblo ${num}.png`;
  }
  return null;
}

export const Polygon = ({
  hex,
  selectedHex,
  onMouseOver,
  onClick,
}: PolygonProps) => {
  const selectedClass = selectedHex
    .map((s) => (s === hex.hexKey ? 'hex-selected' : ''))
    .unwrapOr('')

  const terrain = getTerrainForHex(hex.hexKey)
  const isSpecial = terrain === 'special'
  const isGeneric = terrain === 'castle' || terrain === 'dungeon' || terrain === 'village'

  const center = useMemo(() => (isSpecial || isGeneric) ? getHexCenter(hex.points) : null, [hex.points, isSpecial, isGeneric])
  
  // Guardamos el icono aleatorio en un estado para que no cambie cada vez que pasas el ratón por encima
  const [genericIcon, setGenericIcon] = useState<string | null>(null)
  
  useEffect(() => {
    if (isGeneric && !genericIcon) {
      setGenericIcon(getRandomGenericIcon(terrain))
    }
  }, [isGeneric, terrain, genericIcon])

  const iconFileName = isSpecial ? specialIcons[hex.hexKey] : genericIcon
  const iconSize = isSpecial ? 45 : 35 // Los genéricos los hacemos un pelín más pequeños para que el mapa respire

// Determinar el estilo de resaltado según el tipo
  let hexStyle = {}
  if (isSpecial) {
    hexStyle = { fill: 'rgba(255, 215, 0, 0.25)', stroke: '#b8860b', strokeWidth: 2 } // Dorado
  } else if (isGeneric) {
    hexStyle = { fill: 'rgba(128, 0, 128, 0.2)', stroke: '#800080', strokeWidth: 1.5 } // Rosado / Púrpura para todos los genéricos
  }

  return (
    <g 
      onClick={onClick as any} 
      onMouseOver={onMouseOver as any} 
      style={{ cursor: 'pointer' }}
    >
      <polygon
        className={`cls-2 hex ${
          hex.explored ? 'hex-explored' : ''
        } ${selectedClass} ${isSpecial || isGeneric ? 'hex-special' : ''}`}
        x="0"
        y="0"
        width="100%"
        height="100%"
        points={hex.points}
        style={hexStyle}
      />
      
      {/* IMAGEN SEGURA CON URL CODIFICADA */}
      {(isSpecial || isGeneric) && center && iconFileName && (
        <image
          href={`/${encodeURI(iconFileName)}`}
          x={center.x - iconSize / 2}
          y={center.y - iconSize / 2}
          width={iconSize}
          height={iconSize}
          style={{ pointerEvents: 'none' }} 
        />
      )}
    </g>
  )
}
