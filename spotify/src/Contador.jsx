import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

function Contador({ fechaLimite }) {
  const [dias, setDias] = useState(0)
  const [horas, setHoras] = useState(0)
  const [minutos, setMinutos] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const fechaActual = new Date()
      const fechaLimiteDate = new Date(fechaLimite)
      const diffMs = fechaLimiteDate - fechaActual
      if (diffMs < 0) {
        clearInterval(intervalId)
        setDias(0)
        setHoras(0)
        setMinutos(0)
      } else {
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
        const diffHours = Math.floor((diffMs / (1000 * 60 * 60)) % 24)
        const diffMinutes = Math.floor((diffMs / (1000 * 60)) % 60)
        setDias(diffDays)
        setHoras(diffHours)
        setMinutos(diffMinutes)
      }
    }, 1000)
    return () => clearInterval(intervalId)
  }, [fechaLimite])

  return (
    <p className="Contador">
      La oferta termina en:
      {" "}
      {dias}
      {" "}
      d:
      {" "}
      {horas}
      {" "}
      h:
      {" "}
      {minutos}
      {" "}
      min
    </p>
  )
}

Contador.propTypes = {
  fechaLimite: PropTypes.string.isRequired,
}

export default Contador
