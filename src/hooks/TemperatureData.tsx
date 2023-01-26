import cityTemperature, { CityTemperature } from '@visx/mock-data/lib/mocks/cityTemperature'
import { useEffect, useState } from 'react'


export function useTemperatures(days: number) {
    const [temperatures, setTemperatures] = useState<CityTemperature[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')



function fetchTemperatureData() {
    try {
        setError('')
        setLoading(true)
        const response = cityTemperature.slice(0, days);
        setTemperatures(response)
        setLoading(false)
        } catch (e: any) {
        
        setLoading(false)
        setError(e.message)
        }
      }
    
      useEffect(()=> {
        fetchTemperatureData()
      }, [])
    
      return {temperatures, error, loading}
}
