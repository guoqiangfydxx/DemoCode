import React, { useEffect, useState } from 'react'

const sleep = (ms) => new Promise((resolv) => setTimeout(resolv, ms))
const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const PrintPage = (props) => {
  const [auditList, setAuditList] = useState([])

  useEffect(() => {
    let arr = []

    const getAll = async (ids) => {
      for (let item of ids) {
        let result = await Promise.all([getAudit(item), getAuditDetail(item)])
        // arr.push(result)
        // console.log(arr)
        setAuditList(arr => [...arr, result])
      }


    }

    getAll(ids)
  }, [])

  // audit
  const getAudit = async (id) => {
    await sleep(1000)

    return new Promise((resolv, reject) => {
      resolv('01-' + id)
    })
  }

  // audit detail
  const getAuditDetail = async (id) => {
    await sleep(1000)

    return new Promise((resolv, reject) => {
      resolv('02-' + id)
    })
  }

  return (
    <ul>
      {auditList.map((item, i) => (
        <li key={i}>{item[0]}</li>
      ))}
    </ul>
  )
}

export default PrintPage
