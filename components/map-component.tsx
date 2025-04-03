"use client"

import { useEffect, useRef } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

export function MapComponent() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    if (!mapContainer.current) return

    // In a real implementation, you would use an environment variable for the token
    mapboxgl.accessToken =
      "pk.eyJ1IjoiY3N0ZXZlbnMxMDAiLCJhIjoiY203ZXd2anYyMGgyNjJqcXdrb3Q4dXE0cyJ9.WembQMn_3obFAlYFpUXbPQ"

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-0.8469, 51.2802], // Fleet, Hampshire coordinates
      zoom: 12,
    })

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right")

    // Add a marker for FixBuild Limited
    new mapboxgl.Marker({ color: "#0ea5e9" })
      .setLngLat([-0.8469, 51.2802])
      .setPopup(new mapboxgl.Popup().setHTML("<h3>FixBuild Limited</h3><p>Fleet, Hampshire</p>"))
      .addTo(map.current)

    // Clean up on unmount
    return () => {
      if (map.current) {
        map.current.remove()
      }
    }
  }, [])

  return <div ref={mapContainer} className="w-full h-full" />
}

