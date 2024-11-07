import React from 'react'

function Todo() {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
       1
    </th>
    <td className="px-6 py-4">
        LeetcodeLeetcode
    </td>
    <td className="px-6 py-4">
        Coding probleem of day
    </td>
    <td className="px-6 py-4">
        Pending
    </td>
    <td className="px-6 py-4">
        <button className="bg-green-500 text-white py-2 px-4 mx-10   rounded-md">Done</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md">Delete</button>
    </td>
</tr>
  )
}

export default Todo